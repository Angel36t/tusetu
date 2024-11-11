import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { valuesData } from "../config/valuesData";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

function ValuesComponent() {
  const mainValues = [
    "Abundancia",
    "Audacia",
    "Aventura",
    "Balance",
    "Bondad",
    "Calidad",
    "Calma",
    "Conciencia",
    "Contribución",
    "Dedicación",
  ];

  const [assignments, setAssignments] = useState(
    mainValues.reduce((acc, value) => {
      acc[value] = [];
      return acc;
    }, {})
  );

  const [isOpen, setIsOpen] = useState(false);
  const [selectedMainValue, setSelectedMainValue] = useState(null);
  const [selectedValues, setSelectedValues] = useState([]);
  const [isSaved, setIsSaved] = useState(false); // Nuevo estado para el mensaje de confirmación

  const allSelectedValues = Object.values(assignments).flat();

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

  const handleCheckboxChange = (value) => {
    setSelectedValues((prevSelectedValues) => {
      if (prevSelectedValues.includes(value)) {
        return prevSelectedValues.filter((item) => item !== value);
      } else if (prevSelectedValues.length < 7) {
        return [...prevSelectedValues, value];
      }
      return prevSelectedValues;
    });
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

  // Verificar si todos los valores principales tienen al menos un valor secundario
  const allMainValuesHaveSelections = mainValues.every(
    (main) => assignments[main].length > 0
  );

  const handleSaveAllAssignments = () => {
    // Lógica de guardado adicional aquí si es necesario
    setIsSaved(true); // Actualizamos el estado a true para mostrar el mensaje de confirmación
  };

  return (
    <div className="overflow-x-auto max-w-5xl mx-auto mt-8 px-4">
      {isSaved ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg font-semibold text-green-600">
            Los valores secundarios se han agregado correctamente.
          </p>
        </div>
      ) : (
        <>
          <table className="w-full bg-white border border-gray-200 rounded-lg shadow-sm text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700 uppercase">
                <th className="px-6 py-3 border-b text-left font-semibold text-sm">
                  Valor Principal
                </th>
                <th className="px-6 py-3 border-b text-left font-semibold text-sm">
                  Valores Secundarios
                </th>
                <th className="px-6 py-3 border-b text-left font-semibold text-sm">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {mainValues.map((main) => (
                <tr
                  key={main}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 border-b text-gray-800 font-medium text-sm">
                    {main}
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    {assignments[main].length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {assignments[main].map((value) => (
                          <div
                            key={value}
                            className="inline-flex items-center px-3 py-1 bg-blue-100 rounded-full text-xs text-blue-700"
                          >
                            {value}
                            <button
                              onClick={() => handleRemoveValue(main, value)}
                              className="ml-1 text-red-500 hover:text-red-700"
                            >
                              ✕
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <span className="text-gray-400">
                        No hay valor secundario asignado
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 border-b text-sm">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => openDialog(main)}
                        className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200"
                      >
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleClearAllValues(main)}
                        className="flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mostrar el botón de Guardar Valores Secundarios solo si todos tienen al menos un valor */}
          {allMainValuesHaveSelections && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={handleSaveAllAssignments}
                className="px-6 py-2 bg-green-500 text-white rounded-md text-sm font-semibold hover:bg-green-600 transition-colors duration-200"
              >
                Guardar Valores Secundarios
              </button>
            </div>
          )}

          {/* Dialog */}
          <Dialog
            open={isOpen}
            onClose={closeDialog}
            className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50"
          >
            <div className="bg-white rounded-lg max-w-7xl w-full mx-auto p-6">
              <Dialog.Title className="text-lg font-bold mb-4">
                Selecciona hasta 7 Valores Secundarios
              </Dialog.Title>

              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-1">
                {valuesData.map((value) => (
                  <label
                    key={value}
                    className="flex items-center justify-start text-xs space-x-1 p-1"
                    style={{ width: "100px", height: "30px" }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedValues.includes(value)}
                      onChange={() => handleCheckboxChange(value)}
                      disabled={
                        allSelectedValues.includes(value) &&
                        !selectedValues.includes(value)
                      }
                      className="form-checkbox h-3 w-3 text-blue-600"
                    />
                    <span
                      className={`truncate ${
                        allSelectedValues.includes(value) &&
                        !selectedValues.includes(value)
                          ? "text-gray-400"
                          : ""
                      }`}
                    >
                      {value}
                    </span>
                  </label>
                ))}
              </div>

              <div className="mt-4 flex justify-end space-x-3">
                <button
                  onClick={closeDialog}
                  className="px-4 py-2 bg-gray-300 rounded text-xs"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSaveSelection}
                  className="px-4 py-2 bg-blue-500 text-white rounded text-xs"
                >
                  Guardar
                </button>
              </div>
            </div>
          </Dialog>
        </>
      )}
    </div>
  );
}

export default ValuesComponent;

