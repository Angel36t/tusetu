import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export const FullscreenSelectionModal = ({ isOpen, onClose, values, selectedValues, toggleValueSelection }) => {
  const numberOfColumns = 10;

  // Ordenamos A-Z
  const sortedValues = [...values].sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));

  // Calculamos la distribución por columnas
  const numberOfRows = Math.ceil(sortedValues.length / numberOfColumns);
  const gridValues = [];

  for (let row = 0; row < numberOfRows; row++) {
    for (let col = 0; col < numberOfColumns; col++) {
      const index = col * numberOfRows + row;
      if (sortedValues[index]) {
        gridValues.push(sortedValues[index]);
      }
    }
  }

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Fondo oscuro */}
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      {/* Contenido FULLSCREEN */}
      <div className="fixed inset-0 flex items-start justify-center">
        <Dialog.Panel className="w-full h-full bg-white overflow-y-auto relative">
          {/* Botón cerrar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-black transition"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          {/* Título */}
          <Dialog.Title className="text-2xl font-bold text-center mt-6 mb-6">
            Selecciona hasta 10 valores
          </Dialog.Title>

          {/* Grid de opciones */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-10 gap-3 px-4 pb-10">
            {gridValues.map((value, index) => (
              <button
                key={index}
                onClick={() => toggleValueSelection(value)}
                className={`border text-xs font-medium rounded-md py-2 px-1 text-center shadow transition ${
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
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
