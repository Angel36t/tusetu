import { Dialog } from "@headlessui/react";

export const FullScreenDialog = ({ values, onClose }) => {
  const sortedValues = [...values].sort((a, b) => a.localeCompare(b));

  const numberOfColumns = 10;

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
    <Dialog open={true} onClose={onClose} className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-white" aria-hidden="true" />
      <div className="fixed inset-0 flex flex-col p-6 overflow-y-auto">
        <Dialog.Panel className="flex flex-col flex-1">
          <div className="flex justify-between items-center mb-6">
            <Dialog.Title className="text-2xl font-bold">
              ¡Hey! Esta parte está hecha para que explores y analices esas 200
              opciones de valores.
            </Dialog.Title>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 text-xl font-bold"
            >
              ✖
            </button>
          </div>

          {/* Grid */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-4 flex-1`}
          >
            {gridValues.map((value, index) => (
              <div
                key={index}
                className="bg-[#F2EFE4] border border-gray-200 text-gray-700 text-xs font-medium rounded-md py-2 text-center shadow hover:bg-[#f0efea] transition"
              >
                {value}
              </div>
            ))}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
