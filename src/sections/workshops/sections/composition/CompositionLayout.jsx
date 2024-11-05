import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';

// Define los datos de los pasos
const stepsData = [
  { id: 1, label: 'Selecciona 10 valores principales', completed: false },
  { id: 2, label: 'Liga valores secundarios', completed: false },
  { id: 3, label: 'Tabla de captura de valores', completed: false },
  { id: 4, label: 'Selecciona el valor dominante', completed: false },
  { id: 5, label: 'Escribe tu historia', completed: false },
];

function CompositionLayout() {
  const [progress, setProgress] = useState(stepsData);
  const [currentStep, setCurrentStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (stepId) => {
    setCurrentStep(stepId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const completeStep = (stepId) => {
    setProgress((prevProgress) =>
      prevProgress.map((step) =>
        step.id === stepId ? { ...step, completed: true } : step
      )
    );
    handleCloseModal();
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-500 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-white mb-8">Camino de Aventuras de Valores</h1>

      {/* Camino de progreso interactivo */}
      <div className="relative w-full max-w-2xl bg-white rounded-lg p-8 mb-6 shadow-lg">
        <div className="flex justify-between items-center">
          {progress.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-center">
              <motion.div
                onClick={() => handleOpenModal(step.id)}
                whileHover={{ scale: 1.1 }}
                className={`w-12 h-12 rounded-full cursor-pointer flex items-center justify-center font-bold text-white mb-2 ${
                  step.completed ? 'bg-green-500' : 'bg-gray-400'
                }`}
              >
                {step.id}
              </motion.div>
              <span className="text-xs text-center text-gray-700">{step.label}</span>
              {index < progress.length - 1 && (
                <div className="w-16 h-1 bg-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal de contenido de cada paso */}
      <Dialog open={isModalOpen} onClose={handleCloseModal} className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="relative bg-white rounded-lg max-w-md mx-auto p-6 shadow-lg transform transition-all">
            <Dialog.Title className="text-xl font-semibold mb-4">
              Paso {currentStep}: {progress.find(step => step.id === currentStep)?.label}
            </Dialog.Title>

            <Dialog.Description>
              {/* Renderiza el contenido del paso actual */}
              {currentStep === 1 && <Step1 onComplete={() => completeStep(1)} />}
              {currentStep === 2 && <Step2 onComplete={() => completeStep(2)} />}
              {currentStep === 3 && <Step3 onComplete={() => completeStep(3)} />}
              {currentStep === 4 && <Step4 onComplete={() => completeStep(4)} />}
              {currentStep === 5 && <Step5 onComplete={() => completeStep(5)} />}
            </Dialog.Description>

            <button
              onClick={handleCloseModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

// Componentes de pasos
function Step1({ onComplete }) {
  return <div><button onClick={onComplete}>Completar Paso 1</button></div>;
}

function Step2({ onComplete }) {
  return <div><button onClick={onComplete}>Completar Paso 2</button></div>;
}

function Step3({ onComplete }) {
  return <div><button onClick={onComplete}>Completar Paso 3</button></div>;
}

function Step4({ onComplete }) {
  return <div><button onClick={onComplete}>Completar Paso 4</button></div>;
}

function Step5({ onComplete }) {
  return <div><button onClick={onComplete}>Completar Paso 5</button></div>;
}

// Exporta el componente principal
export default CompositionLayout;
