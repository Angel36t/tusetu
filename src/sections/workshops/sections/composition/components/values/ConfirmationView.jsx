import axios from "axios";
import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { postMainValues, updateProgress } from "../../api/api";
import { useUser } from "../../../../../../context/UserContext";
import { useValuesContext } from "../../../../context/ValuesContext";
import { VibrationContext } from "../../../../context/VibrationContext";

export const ConfirmationView = ({ confirmSelection }) => {
  const { user } = useUser();
  const { progressData } = useContext(VibrationContext);
  const { selectedValues, setSelectedValues } = useValuesContext();
  
  const isButtonDisabled = selectedValues.length !== 10;
  
  const submitValues = async () => {
    const payload = {
      user_id: user.id,
      main_values: selectedValues.map((value) => ({ name: value })),
    };

    try {
      await postMainValues(payload);

      const updatedProgress = {
        ...progressData,
        levels: progressData.levels.map((level) =>
          level.level === 2
            ? { ...level, completed: true, percentage: 20 }
            : level
        ),
      };

      await updateProgress(9, updatedProgress);

      confirmSelection();
    } catch (error) {
      console.error(
        "Error al enviar los valores o actualizar el progreso:",
        error
      );
    }
  };

  const handleRemoveValue = (indexToRemove) => {
    const updatedValues = selectedValues.filter(
      (_, index) => index !== indexToRemove
    );
    setSelectedValues(updatedValues);
  };

  return (
    <div className="w-full mx-auto bg-white p-6 rounded-lg">
      <p className="text-bl-100 font-bold text-center mb-6">
        Resumen de valores
      </p>
      <div className="flex flex-wrap justify-center gap-1 mb-8">
        {selectedValues.length === 0 ? (
          <p className="text-gray-500 italic">No hay valores seleccionados</p>
        ) : (
          selectedValues.map((value, index) => (
            <div
              key={index}
              className="flex items-center bg-blue-100 text-blue-700 px-2 py-1 rounded-md shadow-sm font-medium text-xs relative m-2"
              style={{ maxWidth: "120px" }}
            >
              <span className="mr-1 text-sm">🌟</span>
              {value}
              <button
                onClick={() => handleRemoveValue(index)}
                className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white p-0.5 rounded-full hover:bg-red-600 transition-all"
                style={{ width: "16px", height: "16px" }}
              >
                <XMarkIcon className="h-3 w-3" />
              </button>
            </div>
          ))
        )}
      </div>
      <div className="flex justify-center gap-6">
        <button
          onClick={() => {
            submitValues();
          }}
          disabled={isButtonDisabled}
          className={`px-5 py-2 font-semibold rounded-full transition-all duration-150 ease-in-out ${
            isButtonDisabled
              ? "bg-gray-400 text-gray-200 cursor-not-allowed"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
        >
          Confirmar valores
        </button>
      </div>
    </div>
  );
};
