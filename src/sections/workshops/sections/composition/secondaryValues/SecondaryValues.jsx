import React, { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

import CongratulationsSecondary from "./CongratulationsSecondary";
import { DialogSecondaryValues } from "./DialogSecondaryValues";

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
  const [isSaved, setIsSaved] = useState(false);

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
    (main) => assignments[main].length > 0
  );

  const handleSaveAllAssignments = () => {
    setIsSaved(true);
  };

  return (
    <div className="overflow-x-auto max-w-5xl mx-auto mt-8 px-4">
      {isSaved ? (
        <CongratulationsSecondary />
      ) : (
        <>
          <h2 className="text-2xl font-bold text-center mb-4 text-bl-100">
            Selecciona tus valores secundarios
          </h2>
          <p className="text-gray-500 text-center mb-6">
            Puedes seleccionar hasta máximo 7 valores secundarios por cada valor
            principal.
          </p>
          <table className="w-full bg-white border border-gray-200 rounded-lg shadow-sm text-sm">
            <thead>
              <tr className="bg-bl-100 text-white uppercase">
                <th
                  className="px-6 py-3 border-b font-semibold text-sm text-center"
                  style={{ width: "20%" }}
                >
                  Valor Principal
                </th>
                <th
                  className="px-6 py-3 border-b font-semibold text-sm text-center"
                  style={{ width: "70%" }}
                >
                  Valores Secundarios
                </th>
                <th
                  className="px-6 py-3 border-b font-semibold text-sm text-center"
                  style={{ width: "10%" }}
                >
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
                  <td
                    className="px-6 py-4 border-b text-bl-100 font-bold text-sm text-center"
                    style={{ width: "15%" }}
                  >
                    {main}
                  </td>
                  <td
                    className="px-6 py-4 border-b text-gray-600 text-center"
                    style={{ width: "70%" }}
                  >
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
                  <td
                    className="px-6 py-4 border-b text-sm"
                    style={{ width: "15%" }}
                  >
                    <div className="flex space-x-2 justify-center">
                      <button
                        onClick={() => openDialog(main)}
                        className="flex items-center justify-center w-8 h-8 bg-bl-100 text-white rounded-full hover:bg-blue-600 transition-colors duration-200"
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

          <DialogSecondaryValues
            isOpen={isOpen}
            closeDialog={closeDialog}
            mainValue={selectedMainValue}
            values={selectedValues}
            setValues={setSelectedValues}
            allSelectedValues={allSelectedValues}
            onSave={handleSaveSelection}
          />
        </>
      )}
    </div>
  );
}

export default ValuesComponent;
