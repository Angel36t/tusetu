import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function CongratulationsDominant() {
  const [isOpen, setIsOpen] = useState(true);
  const { width, height } = useWindowSize();

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      {isOpen && <Confetti width={width} height={height} />}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}} static>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-green-600"
                  >
                    ¡Bien hecho! 🎉
                  </Dialog.Title>
                  <div className="mt-4 flex flex-col items-center">
                    <img
                      src="/assets/badges/bronze-medal.png"
                      alt="Insignia de 10 valores"
                      className="h-24 mb-4"
                    />
                    <h3 className="text-xl font-semibold text-yellow-600">
                      Insignia de valores dominantes
                    </h3>
                    <p className="text-gray-600 mt-2 text-center">
                      ¡Felicidades! Has identificado tus valores dominantes.
                    </p>
                  </div>

                  <div className="mt-6">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      onClick={() => {
                        // completeStep(4);
                        closeModal();
                      }}
                    >
                      Cerrar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
