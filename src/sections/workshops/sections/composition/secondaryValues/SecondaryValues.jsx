import { useEffect, useState } from "react";

import { getUserMainValues } from "../api/api";
import SecondaryValuesTable from "./SecondaryValuesTable";
import { useUser } from "../../../../../context/UserContext";
import CongratulationsSecondary from "./CongratulationsSecondary";

function SecondaryValues() {
  const { user } = useUser();
  const [mainValues, setMainValues] = useState([]);
  const [assignments, setAssignments] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMainValue, setSelectedMainValue] = useState(null);
  const [selectedValues, setSelectedValues] = useState([]);
  const [isSaved, setIsSaved] = useState(false);

  const allSelectedValues = Object.values(assignments).flat();

  const userId = user.id;

  useEffect(() => {
    const fetchMainValues = async () => {
      try {
        const data = await getUserMainValues(userId);
        const mainValueNames = data.map((item) => item.name);
        setMainValues(mainValueNames);

        const initialAssignments = mainValueNames.reduce((acc, value) => {
          acc[value] = [];
          return acc;
        }, {});
        setAssignments(initialAssignments);
      } catch (error) {
        console.error("Error fetching main values:", error);
      }
    };

    fetchMainValues();
  }, [userId]);

  const openDialog = (main) => {
    setSelectedMainValue(main);
    setSelectedValues(assignments[main]);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setSelectedMainValue(null);
    setSelectedValues([]);
  };

  const handleSaveSelection = () => {
    setAssignments((prevState) => ({
      ...prevState,
      [selectedMainValue]: selectedValues,
    }));
    closeDialog();
  };

  const handleRemoveValue = (main, value) => {
    setAssignments((prevState) => ({
      ...prevState,
      [main]: prevState[main].filter((item) => item !== value),
    }));
  };

  const handleClearAllValues = (main) => {
    setAssignments((prevState) => ({
      ...prevState,
      [main]: [],
    }));
  };

  const allMainValuesHaveSelections = mainValues.every(
    (main) => assignments[main]?.length > 0
  );

  const handleSaveAllAssignments = () => {
    setIsSaved(true);
  };

  return (
    <div className="overflow-x-auto max-w-5xl mx-auto mt-8 px-4">
      {isSaved ? (
        <CongratulationsSecondary />
      ) : (
        <SecondaryValuesTable
          mainValues={mainValues}
          assignments={assignments}
          handleRemoveValue={handleRemoveValue}
          handleClearAllValues={handleClearAllValues}
          openDialog={openDialog}
          isOpen={isOpen}
          closeDialog={closeDialog}
          selectedMainValue={selectedMainValue}
          selectedValues={selectedValues}
          setSelectedValues={setSelectedValues}
          allSelectedValues={allSelectedValues}
          handleSaveSelection={handleSaveSelection}
          allMainValuesHaveSelections={allMainValuesHaveSelections}
          handleSaveAllAssignments={handleSaveAllAssignments}
        />
      )}
    </div>
  );
}

export default SecondaryValues;
