import React, { useState } from "react";
import { ConfirmationView } from "./values/ConfirmationView";
import { SelectionView } from "./values/SelectionView";
import CongratulationsMsg from "./values/CongratulationsMsg";

const SelectValuesGrid = () => {
  const [selectedValues, setSelectedValues] = useState([]);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const goToConfirmation = () => setShowConfirmation(true);
  const resetSelection = () => {
    setSelectedValues([]);
    setShowConfirmation(false);
  };
  const confirmSelection = () => setIsConfirmed(true);

  return (
    <div className="max-w-5xl mx-auto p-4 rounded-lg">
      {isConfirmed ? (
        <CongratulationsMsg />
      ) : showConfirmation ? (
        <ConfirmationView
          selectedValues={selectedValues}
          resetSelection={resetSelection}
          confirmSelection={confirmSelection}
        />
      ) : (
        <>
          <h2 className="text-2xl font-bold text-center mb-4">
            Selecciona tus valores
          </h2>
          <p className="text-gray-500 text-center mb-6">
            Puedes seleccionar hasta 10 valores.
          </p>
          <SelectionView
            selectedValues={selectedValues}
            setSelectedValues={setSelectedValues}
            goToConfirmation={goToConfirmation}
          />
        </>
      )}
    </div>
  );
};

export default SelectValuesGrid;