import { createContext, useContext, useState, useEffect } from "react";

import {
  getPrimarySecondaryValues,
  getUserMainValues,
  registerPrimarySecondaryValues,
} from "../api/api";
import { useUser } from "../../../../../context/UserContext";

const SecondaryValuesContext = createContext();

export const useSecondaryValues = () => useContext(SecondaryValuesContext);

export const SecondaryValuesProvider = ({ children }) => {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [mainValues, setMainValues] = useState([]);
  const [assignments, setAssignments] = useState({});
  const [selectedMainValue, setSelectedMainValue] = useState(null);
  const [selectedValues, setSelectedValues] = useState([]);
  const [dominantValue, setDominantValue] = useState(null);
  const [needsMainValues, setNeedsMainValues] = useState(false);

  const userId = user.id;

  useEffect(() => {
    const fetchMainValuesAndAssignments = async () => {
      try {
        // 1. Obtener los valores principales
        const mainValuesData = await getUserMainValues(userId);
        const mainValuesNames = mainValuesData.map((item) => item.name);

        if (mainValuesNames.length !== 10) {
          setNeedsMainValues(true);
          return; // Nos salimos temprano
        }

        setMainValues(mainValuesNames);

        // 2. Obtener las asignaciones principales-secundarias
        const secondaryValuesData = await getPrimarySecondaryValues(userId);

        if (
          secondaryValuesData &&
          secondaryValuesData.data &&
          secondaryValuesData.data.values
        ) {
          // 3. Filtrar SOLO si tenemos mainValues cargados
          const filteredAssignments = mainValuesNames.reduce((acc, value) => {
            if (secondaryValuesData.data.values[value]) {
              acc[value] = secondaryValuesData.data.values[value];
            } else {
              // si no existe, inicializamos vacío
              acc[value] = { dominant: null, secondaryValues: [] };
            }
            return acc;
          }, {});

          setAssignments(filteredAssignments);
        } else {
          // Si no hay datos secundarios, inicializar vacíos
          const initialAssignments = mainValuesNames.reduce((acc, value) => {
            acc[value] = { dominant: null, secondaryValues: [] };
            return acc;
          }, {});
          setAssignments(initialAssignments);
        }
      } catch (error) {
        if (
          error?.response?.data?.message ===
          "The user does not have exactly 10 main values."
        ) {
          setNeedsMainValues(true);
        }
      }
    };

    fetchMainValuesAndAssignments();
  }, [userId]);

  const openDialog = (main) => {
    setSelectedMainValue(main);
    setDominantValue(assignments[main]?.dominant || null);
    setSelectedValues(assignments[main]?.secondaryValues || []);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setSelectedMainValue(null);
    setSelectedValues([]);
    setDominantValue(null);
  };

  const handleSaveSelection = async () => {
    try {
      setAssignments((prevState) => ({
        ...prevState,
        [selectedMainValue]: {
          dominant: dominantValue,
          secondaryValues: selectedValues,
        },
      }));

      const updatedAssignments = {
        ...assignments,
        [selectedMainValue]: {
          dominant: dominantValue,
          secondaryValues: selectedValues,
        },
      };

      await registerPrimarySecondaryValues(userId, updatedAssignments);
    } catch (error) {
      console.error("Error al registrar los valores:", error);
    } finally {
      closeDialog();
    }
  };

  const handleRemoveValue = (main, value) => {
    setAssignments((prevState) => {
      const { dominant, secondaryValues } = prevState[main];
      return {
        ...prevState,
        [main]: {
          dominant,
          secondaryValues: secondaryValues.filter((item) => item !== value),
        },
      };
    });
  };

  const handleClearAllValues = (main) => {
    setAssignments((prevState) => ({
      ...prevState,
      [main]: { dominant: null, secondaryValues: [] },
    }));
  };

  const handleSaveAllAssignments = async () => {
    try {
      await registerPrimarySecondaryValues(userId, assignments);
      setIsSaved(true);
    } catch (error) {
      console.error("Error al guardar todos los valores:", error);
    }
  };

  const allMainValuesHaveSelections = mainValues.every(
    (main) =>
      assignments[main]?.dominant != null &&
      assignments[main]?.secondaryValues.length > 0
  );

  const allSelectedValues = Object.values(assignments)
    .map((item) => [item.dominant, ...item.secondaryValues])
    .flat();

  return (
    <SecondaryValuesContext.Provider
      value={{
        mainValues,
        assignments,
        isOpen,
        selectedMainValue,
        selectedValues,
        dominantValue,
        isSaved,
        openDialog,
        closeDialog,
        handleSaveSelection,
        handleRemoveValue,
        handleClearAllValues,
        handleSaveAllAssignments,
        allMainValuesHaveSelections,
        allSelectedValues,
        setSelectedValues,
        setDominantValue,
        needsMainValues,
        setNeedsMainValues,
      }}
    >
      {children}
    </SecondaryValuesContext.Provider>
  );
};
