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

  const userId = user.id;

  useEffect(() => {
    const fetchMainValuesAndAssignments = async () => {
      try {
        // 1. Obtener los valores principales
        const mainValuesData = await getUserMainValues(userId);
        const mainValuesNames = mainValuesData.map((item) => item.name);
        setMainValues(mainValuesNames);

        try {
          // 2. Intentar obtener las asignaciones principales-secundarias
          const secondaryValuesData = await getPrimarySecondaryValues(userId);
          if (
            secondaryValuesData &&
            secondaryValuesData.data &&
            secondaryValuesData.data.values
          ) {
            setAssignments(secondaryValuesData.data.values);
          } else {
            throw new Error("No secondary values found");
          }
        } catch (error) {
          // Si no hay datos secundarios, inicializar con estructura vacía
          console.warn(
            "No se encontraron valores secundarios, inicializando vacíos:",
            error.message
          );
          const initialAssignments = mainValuesNames.reduce((acc, value) => {
            acc[value] = { dominant: null, secondaryValues: [] };
            return acc;
          }, {});
          setAssignments(initialAssignments);
        }
      } catch (error) {
        console.error(
          "Error al obtener los valores principales o secundarios:",
          error
        );
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

      console.log("Valores registrados correctamente.");
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
      console.log("Todos los valores guardados correctamente.");
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
      }}
    >
      {children}
    </SecondaryValuesContext.Provider>
  );
};
