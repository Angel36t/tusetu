export const ValuesSelectionGrid = ({ values, selectedValues, toggleValueSelection }) => {
    console.log(values);
  
    const columns = 5; // Define aquí las columnas que quieras
    const sortedValues = [...values].sort((a, b) => a.localeCompare(b));
    const rows = Math.ceil(sortedValues.length / columns);
  
    const reorderedValues = Array.from({ length: rows }, (_, rowIndex) => {
      return Array.from({ length: columns }, (_, colIndex) => {
        const index = colIndex * rows + rowIndex;
        return sortedValues[index];
      }).filter(Boolean); // Eliminamos undefined si hay
    }).flat();
  
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 mt-12">
        {reorderedValues.map((value, index) => (
          <button
            key={index}
            onClick={() => toggleValueSelection(value)}
            className={`border text-sm font-medium rounded-md py-3 text-center shadow transition ${
              selectedValues.includes(value)
                ? "bg-[#d4e157] border-[#c0ca33] text-gray-800 hover:bg-[#c0ca33]"
                : "bg-[#F2EFE4] border-gray-200 text-gray-700 hover:bg-[#f0efea]"
            }`}
            disabled={selectedValues.length === 10 && !selectedValues.includes(value)}
          >
            {value}
          </button>
        ))}
      </div>
    );
  };
  