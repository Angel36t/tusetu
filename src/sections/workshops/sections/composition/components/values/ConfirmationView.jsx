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
    <div className="w-full mx-auto  p-6 rounded">
    
      <div className="border border-dashed border-[#BDB76B] bg-[#FAF6E8] p-4 rounded-md">
        <p className="text-center text-[#6D6A41] font-semibold mb-4">
          Valores seleccionados ({selectedValues.length}/10)
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {selectedValues.length === 0 ? (
            <p className="text-gray-500 italic">No hay valores seleccionados</p>
          ) : (
            selectedValues.map((value, index) => (
              <div
                key={index}
                className="relative flex items-center bg-white text-[#6D6A41] px-3 py-1 rounded-full shadow-md font-semibold text-sm"
                style={{ boxShadow: "2px 2px 0 #DDD4A6" }}
              >
                {value}
                <button
                  onClick={() => handleRemoveValue(index)}
                  className="absolute -top-1 -right-1 bg-[#BDB76B] text-white rounded-full flex items-center justify-center"
                  style={{
                    width: "16px",
                    height: "16px",
                    fontSize: "10px",
                    lineHeight: "10px",
                  }}
                >
                  &minus;
                </button>
              </div>
            ))
          )}
        </div>
        <div className="flex justify-center mt-6">
        <button
          onClick={submitValues}
          disabled={isButtonDisabled}
          className={`px-5 py-2 font-semibold rounded-md transition-all duration-150 ease-in-out ${
            isButtonDisabled
              ? "bg-gray-400 text-gray-200 cursor-not-allowed"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
        >
          Confirmar valores
        </button>
      </div>
      </div>

      
    </div>
  );
};
