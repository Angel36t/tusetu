import { useValuesContext } from "../../../../context/ValuesContext";

export const ConfirmationView = ({ confirmSelection }) => {
  const { selectedValues, setSelectedValues } = useValuesContext();

  const resetSelection = () => setSelectedValues([]); // función para resetear selección

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg ">
      <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">
        Confirma tus valores principales
      </h3>
      <p className="text-center text-gray-600 mb-6">
        Estos son los 10 valores que has seleccionado como más importantes para ti.
      </p>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {selectedValues.map((value, index) => (
          <div
            key={index}
            className="flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-lg shadow-sm font-medium text-sm"
          >
            <span className="mr-2">🌟</span> {value}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-6">
        <button
          onClick={confirmSelection}
          className="px-5 py-2 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all duration-150 ease-in-out"
        >
          Sí, confirmar
        </button>
        <button
          onClick={resetSelection}
          className="px-5 py-2 bg-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-400 transition-all duration-150 ease-in-out"
        >
          Modificar valores
        </button>
      </div>
    </div>
  );
};
