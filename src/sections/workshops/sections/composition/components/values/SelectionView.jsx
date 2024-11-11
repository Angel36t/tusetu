import { useState } from "react";
import { valuesData } from "../../config/valuesData";

const ITEMS_PER_PAGE = 50;
const values = valuesData;


export const SelectionView = ({
    selectedValues,
    setSelectedValues,
    goToConfirmation,
  }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(values.length / ITEMS_PER_PAGE);
  
    const toggleValueSelection = (value) => {
      if (selectedValues.includes(value)) {
        setSelectedValues(selectedValues.filter((item) => item !== value));
      } else if (selectedValues.length < 10) {
        setSelectedValues([...selectedValues, value]);
      }
    };
  
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
      <div>
        <p className="text-lg font-semibold text-blue-600 text-center mb-4">
          Seleccionados: {selectedValues.length} / 10
        </p>
  
        <div className="flex justify-center mb-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-3 py-1 mx-1 bg-gray-300 rounded disabled:opacity-50"
          >
            Anterior
          </button>
          <span className="px-3 py-1">{`Página ${currentPage} de ${totalPages}`}</span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-3 py-1 mx-1 bg-gray-300 rounded disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
  
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
          {getPageValues().map((value, index) => (
            <button
              key={index}
              onClick={() => toggleValueSelection(value)}
              className={`min-w-[80px] max-w-[150px] h-10 flex items-center justify-center px-4 rounded text-sm font-semibold transition-colors truncate ${
                selectedValues.includes(value)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-100"
              }`}
              disabled={
                selectedValues.length === 10 && !selectedValues.includes(value)
              }
            >
              {value}
            </button>
          ))}
        </div>
  
        {selectedValues.length === 10 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={goToConfirmation}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Confirmar Valores
            </button>
          </div>
        )}
      </div>
    );
  };