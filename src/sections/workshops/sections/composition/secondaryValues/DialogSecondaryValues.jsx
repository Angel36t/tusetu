import { Dialog } from "@headlessui/react";
import { useContext, useEffect, useState } from "react";

import { VibrationContext } from "../../../context/VibrationContext";
import { useSecondaryValues } from "./SecondaryValuesContext";

export const DialogSecondaryValues = () => {
  const {
    isOpen,
    closeDialog,
    selectedMainValue: mainValue,
    selectedValues: secondaryValues,
    setSelectedValues,
    allSelectedValues,
    handleSaveSelection,
  } = useSecondaryValues();

  const [maxLimitReached, setMaxLimitReached] = useState(false);
  const { records } = useContext(VibrationContext);

  console.log(records);
  

  const valuesData = records || [];

  console.log(valuesData);
  

  const handleCheckboxChange = (value) => {
    setSelectedValues((prevSelectedValues) => {
      if (prevSelectedValues.includes(value)) {
        setMaxLimitReached(false);
        return prevSelectedValues.filter((item) => item !== value);
      } else if (prevSelectedValues.length < 7) {
        return [...prevSelectedValues, value];
      } else {
        setMaxLimitReached(true);
        return prevSelectedValues;
      }
    });
  };

  useEffect(() => {
    setMaxLimitReached(secondaryValues.length >= 7);
  }, [secondaryValues]);

  return (
    <Dialog
      open={isOpen}
      onClose={closeDialog}
      className="fixed inset-0 z-10 flex items-center justify-center"
    >
      {/* Fondo oscuro */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        aria-hidden="true"
      />

      {/* Contenido */}
      <div className="fixed inset-0 flex flex-col bg-white">
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-center">
          <Dialog.Title className="text-lg font-bold text-center">
            Selecciona hasta <span className="text-red-500">8 valores</span>{" "}
            para <span className="text-[#41A89C]">{mainValue}</span> 
          </Dialog.Title>
        </div>

        {/* Mensaje de máximo alcanzado */}
        {maxLimitReached && (
          <div className="p-2 text-xs text-white bg-red-500 text-center">
            Ya has seleccionado el máximo de 8 valores. Deselecciona alguno para
            elegir otro.
          </div>
        )}

        {/* Lista de valores */}
        <div className="flex-1 overflow-auto p-6">
          <div
            className="grid gap-2"
            style={{
              gridTemplateColumns: "repeat(10, minmax(0, 1fr))",
            }}
          >
            {valuesData.map((value, index) => {
              const isSelected = secondaryValues.includes(value);
              const isDisabled =
                allSelectedValues.includes(value) && !isSelected;
              const isMainValue = value === mainValue;

              return (
                <label
                  key={`${value}-${index}`}
                  className={`flex items-center justify-center px-2 py-2 rounded-xl text-xs font-medium transition text-center ${
                    isMainValue
                      ? "border border-gray-300 text-gray-400 bg-white cursor-default"
                      : isSelected
                      ? "bg-[#e0e95b] text-black"
                      : isDisabled
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-[#F2EFE4] text-black hover:bg-lime-100 cursor-pointer"
                  }`}
                  style={{
                    minHeight: "44px",
                    whiteSpace: "normal",
                    textAlign: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={isSelected}
                    onChange={() => handleCheckboxChange(value)}
                    disabled={isDisabled || isMainValue}
                  />
                  <span className="w-full">{value}</span>
                  {isSelected && (
                    <span className="ml-1 w-4 h-4 rounded-full bg-black text-white text-[10px] flex items-center justify-center">
                      ✓
                    </span>
                  )}
                </label>
              );
            })}
          </div>
        </div>

        {/* Footer - Botones */}
        <div className="p-4 border-t flex justify-center space-x-4">
          <button
            onClick={closeDialog}
            className="bg-[#E6E1C5] text-gray-400 rounded-md text-sm cursor-pointer py-2 px-8"
          >
            Cancelar
          </button>
          <button
            onClick={handleSaveSelection}
            className="bg-[#DAE462] text-[#2F2F2F] rounded-md text-sm border-r-4 border-b-4 border-[#C5CD59] shadow-md hover:bg-[#cbdc50] transition py-2 px-8"
          >
            Guardar
          </button>
        </div>
      </div>
    </Dialog>
  );
};
