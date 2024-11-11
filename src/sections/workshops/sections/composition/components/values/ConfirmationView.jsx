export const ConfirmationView = ({
  selectedValues,
  resetSelection,
  confirmSelection,
}) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-center mb-4">
        ¿Estás seguro de tus 10 valores principales?
      </h3>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {selectedValues.map((value, index) => (
          <div
            key={index}
            className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium text-sm"
          >
            {value}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4">
        <button
          onClick={confirmSelection}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Sí, de acuerdo
        </button>
        <button
          onClick={resetSelection}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Quiero cambiar un valor
        </button>
      </div>
    </div>
  );
};
