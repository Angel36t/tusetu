export const ValuesGrid = ({
    values,
    currentPage,
    totalPages,
    onPageChange,
  }) => {
    const columns = 5; // Aquí defines cuántas columnas quieres (cambia si quieres más o menos)
    
    const sortedValues = [...values].sort((a, b) => a.localeCompare(b));
    
    const rows = Math.ceil(sortedValues.length / columns);
    
    // Ahora reordenamos para que sea por columnas
    const reorderedValues = Array.from({ length: rows }, (_, rowIndex) => {
      return Array.from({ length: columns }, (_, colIndex) => {
        const index = colIndex * rows + rowIndex;
        return sortedValues[index];
      }).filter(Boolean); // Eliminamos undefined si hay
    }).flat();
  
    return (
      <div className="p-8 relative bg-white rounded-lg shadow-sm">
        {/* Grid de valores */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {reorderedValues.map((value, index) => (
            <div
              key={index}
              className="bg-[#F2EFE4] border border-gray-200 text-gray-700 text-sm font-medium rounded-md py-3 text-center shadow hover:bg-[#f0efea] transition"
            >
              {value}
            </div>
          ))}
        </div>
  
        {/* Paginación */}
        <div className="flex justify-center items-center mt-6 gap-2 w-b">
          <button
            onClick={() => onPageChange((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="w-10 h-10 flex justify-center items-center rounded-md bg-[#F4ECD9] text-[#7B6848] hover:bg-[#E8E0C9]"
          >
            &#x276E;
          </button>
  
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-10 h-10 flex justify-center items-center rounded-md text-sm font-semibold transition ${
                page === currentPage
                  ? "bg-[#DAE462] text-black"
                  : "bg-[#F5F5F5] text-[#444] hover:bg-[#E8E0C9]"
              }`}
            >
              {page}
            </button>
          ))}
  
          <button
            onClick={() => onPageChange((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="w-10 h-10 flex justify-center items-center rounded-md bg-[#F4ECD9] text-[#7B6848] hover:bg-[#E8E0C9]"
          >
            &#x276F;
          </button>
        </div>
      </div>
    );
  };
  