import { useState } from "react";
import { valuesData } from "../../config/valuesData";
import { useValuesContext } from "../../../../context/ValuesContext";

const ITEMS_PER_PAGE = 48;
const values = valuesData;

export const SelectionView = ({ goToConfirmation }) => {
  const { selectedValues, toggleValueSelection } = useValuesContext();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(values.length / ITEMS_PER_PAGE);

  const getPageValues = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return values.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4 bg-white rounded-lg ">
      <p className="text-lg font-semibold text-bl-100 text-center mb-4">
        Seleccionados: {selectedValues.length} / 10
      </p>

      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-bl-100 text-white rounded-lg disabled:opacity-50 hover:bg-gray-400 transition-colors"
        >
          Anterior
        </button>
        <span className="px-3 py-1 text-sm font-semibold text-gray-600">{`Página ${currentPage} de ${totalPages}`}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-bl-100 text-white rounded-lg disabled:opacity-50 hover:bg-bl- transition-colors"
        >
          Siguiente
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
        {getPageValues().map((value, index) => (
          <button
            key={index}
            onClick={() => toggleValueSelection(value)}
            className={`w-full py-2 rounded-lg text-sm font-semibold transition-colors truncate ${
              selectedValues.includes(value)
                ? "bg-bl-100 text-white hover:bg-blue-700"
                : "bg-white shadow-2xl border hover:bg-blue-100"
            }`}
            disabled={
              selectedValues.length === 10 && !selectedValues.includes(value)
            }
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};
