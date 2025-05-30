import {
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

import { useSecondaryValues } from "./SecondaryValuesContext";
import { DialogSecondaryValues } from "./DialogSecondaryValues";
import SecondaryValuesSkeleton from "../components/skeleton/SecondaryValuesSkeleton";
import ErrorAlertSection from "../components/alerts/ErrorAlertSection";

const SecondaryValuesTable = () => {
  const {
    mainValues,
    assignments,
    handleRemoveValue,
    handleClearAllValues,
    openDialog,
    allMainValuesHaveSelections,
    handleSaveAllAssignments,
    needsMainValues,
  } = useSecondaryValues();

  console.log(mainValues);
  

  if (needsMainValues) {
    return <ErrorAlertSection />;
  }

  if (mainValues.length === 0 || Object.keys(assignments).length === 0) {
    return <SecondaryValuesSkeleton />;
  }

  return (
    <>
      <div className="bg-[#F7E9BA] p-4 rounded-md">
        <h2 className="text-fs-18 text-center mb-4 o-b">
          Elige tus valores secundarios
        </h2>
        <p className="text-center text-fs-14">
          Puedes seleccionar hasta <span className="o-b">máximo 8 valores</span>{" "}
          secundarios por cada valor principal.
        </p>
      </div>

      <div className="border-t-2 border-[#BEB79B] shadow-sm w-full my-6" />

      <table className="w-full bg-white text-sm text-left text-gray-800 rounded-xl overflow-hidden">
        <thead>
          <tr className="bg-[#70A2D3] text-white text-sm">
            <th className="px-4 py-3 text-center font-semibold">
              Valor principal
            </th>
            <th className="px-4 py-3 font-semibold">Valores ligados</th>
            <th className="px-4 py-3 text-center font-semibold">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mainValues.map((main, index) => (
            <tr key={`${main}-${index}`} className="border-t border-gray-200">
              <td className="px-4 py-3 text-center align-middle">
                <span className="inline-block w-[120px] text-center bg-[#D9E5EC] text-[#2D2D2D] font-semibold px-3 py-1 rounded-md">
                  {main}
                </span>
              </td>

              <td className="px-4 py-3">
                {assignments[main]?.secondaryValues?.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {assignments[main].secondaryValues.map((value) => (
                      <div
                        key={value}
                        className="relative inline-flex items-center bg-gray-100 text-gray-700 rounded-md px-4 py-1 text-sm font-medium group"
                      >
                        {value}
                        <button
                          onClick={() => handleRemoveValue(main, value)}
                          className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white border-2 border-white flex items-center justify-center text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 leading-none"
                        >
                          &minus;
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <span className="text-gray-500">
                    No hay valor secundario asignado
                  </span>
                )}
              </td>

              <td className="px-4 py-3 text-center">
                <div className="flex justify-center space-x-2">
                  <button
                    onClick={() => openDialog(main)}
                    className="w-8 h-8 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md flex items-center justify-center transition"
                  >
                    <PencilIcon className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleClearAllValues(main)}
                    className="w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-md flex items-center justify-center transition"
                  >
                    <TrashIcon className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* {allMainValuesHaveSelections && ( */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={handleSaveAllAssignments}
          className="px-6 py-2 bg-green-600 text-white rounded-md text-sm font-semibold hover:bg-green-700 transition"
        >
          Guardar Valores Secundarios
        </button>
      </div>
      {/* )} */}

      <DialogSecondaryValues />
    </>
  );
};

export default SecondaryValuesTable;
