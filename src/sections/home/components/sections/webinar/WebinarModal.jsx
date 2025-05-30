import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import WebinarForm from "./WebinarForm";
import WebinarCodeValidation from "./WebinarCodeValidation";

export default function WebinarModal({
  isOpen,
  closeModal,
  formData,
  setFormData,
  accessCode,
  setAccessCode,
  setUserRegistered,
  userRegistered,
  hasAccess,
  setHasAccess,
}) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          leave="ease-in duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              leave="ease-in duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-[500px] h-[450px] overflow-y-auto transform rounded-xl bg-[#FDF9ED] p-6 text-left align-middle shadow-xl transition-all">
                {!userRegistered ? (
                  <WebinarForm
                    formData={formData}
                    setFormData={setFormData}
                    setAccessCode={setAccessCode}
                    setUserRegistered={setUserRegistered}
                  />
                ) : !hasAccess ? (
                  <WebinarCodeValidation
                    formData={formData}
                    setFormData={setFormData}
                    accessCode={accessCode}
                    setHasAccess={setHasAccess}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center min-h-[400px] space-y-6 py-10 px-6">
                    <h2 className="text-2xl m-s-b text-green-600">
                      ¡Verificación completada!
                    </h2>

                    <p className="text-md text-gray-700 max-w-xl">
                      Ahora tienes acceso completo a nuestros webinars
                      exclusivos. Prepárate para aprender, inspirarte y
                      descubrir información valiosa hecha especialmente para ti.
                    </p>

                    <button
                      className="mt-4 px-6 py-3 bg-[#EEFD64] hover:bg-yellow-300 rounded font-bold text-black text-lg transition"
                      onClick={closeModal}
                    >
                      🚀 Ver Webinar Ahora
                    </button>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
