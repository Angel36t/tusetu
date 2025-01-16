import { Dialog } from "@headlessui/react";
import { useContext, useEffect, useState } from "react";

import { CompositionContext } from "../../../context/CompositionContext";

export const DialogSecondaryValues = ({
  isOpen,
  closeDialog,
  mainValue,
  values,
  setValues,
  allSelectedValues,
  onSave,
}) => {
  const [maxLimitReached, setMaxLimitReached] = useState(false);
  const { records } = useContext(CompositionContext);

  const valuesData = records;

  const handleCheckboxChange = (value) => {
    setValues((prevSelectedValues) => {
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
    if (values.length >= 7) {
      setMaxLimitReached(true);
    } else {
      setMaxLimitReached(false);
    }
  }, [values]);
  

  return (
    <Dialog
      open={isOpen}
      onClose={closeDialog}
      className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-white rounded-lg shadow-lg max-w-7xl w-full mx-auto p-6">
        <Dialog.Title className="text-lg font-bold mb-4 text-center">
          Selecciona hasta{" "}
          <span className="text-red-500">7 Valores Secundarios</span> para{" "}
          <span className="text-blue-500">{mainValue}</span>
        </Dialog.Title>

        {maxLimitReached && (
          <div className="mb-4 p-2 text-xs text-white bg-red-100 rounded text-center">
            Ya has seleccionado el máximo de 7 valores. Deselecciona alguno para
            elegir otro.
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-2">
          {valuesData?.map((value) => (
            <label
              key={value}
              className={`flex items-center justify-start text-xs space-x-1 p-1 border rounded ${
                values.includes(value)
                  ? "border-blue-500 bg-blue-100"
                  : "border-gray-200"
              }`}
              style={{ width: "100px", height: "30px" }}
            >
              <input
                type="checkbox"
                checked={values.includes(value)}
                onChange={() => handleCheckboxChange(value)}
                disabled={
                  allSelectedValues.includes(value) && !values.includes(value)
                }
                className="form-checkbox h-3 w-3 text-blue-600"
              />
              <span
                className={`truncate ${
                  allSelectedValues.includes(value) && !values.includes(value)
                    ? "text-gray-400"
                    : ""
                }`}
              >
                {value}
              </span>
            </label>
          ))}
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={closeDialog}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded text-xs"
          >
            Cancelar
          </button>
          <button
            onClick={onSave}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded text-xs"
          >
            Guardar
          </button>
        </div>
      </div>
    </Dialog>
  );
};
