import React, { useContext } from "react";
import { CompositionContext } from "../../../../context/CompositionContext";

export default function StepsImagesValidation() {
  const { steps, activeStep, completeStep, setActiveStep } = useContext(CompositionContext);

  const goToStep = (stepId) => {
    const selectedStep = steps?.find((step) => step.id === stepId);
    if (selectedStep) {
      setActiveStep(selectedStep);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-screen bg-white rounded-lg shadow-lg border border-gray-200 pl-4">
      {/* Stepper Vertical */}
      <div className="flex flex-col items-start w-full lg:w-[20%] justify-center">
        {steps?.map((step, index) => (
          <div key={step.id} className="flex gap-x-3 mb-6">
            <SuccessStep step={step} line={index < steps.length - 1} />
            <ViewProcess
              label={step.label}
              status={step.status}
              icon={step.icon}
              onComplete={() => completeStep(step.id)}
              isActive={step.status === "En progreso"}
              onClick={() => goToStep(step.id)}
            />
          </div>
        ))}
      </div>

      {/* Panel de Contenido */}
      <div className="w-full lg:w-[80%] p-6 ">
        {activeStep && activeStep.component && <activeStep.component />}
      </div>
    </div>
  );
}

const SuccessStep = ({ step, line = true }) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold ${
          step.completed
            ? "bg-green-500 text-white"
            : step.status === "En progreso"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-500"
        }`}
      >
        {step.completed ? "✔" : step.id}
      </div>
      {line && <div className="w-px h-8 bg-gray-300 mt-2" />}
    </div>
  );
};

const ViewProcess = ({
  label,
  status,
  icon: Icon,
  onComplete,
  isActive,
  onClick,
}) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <p className="text-sm font-semibold text-black flex items-center">
        {label}
      </p>
      <p
        className={`text-xs font-semibold ${
          status === "Completado"
            ? "text-green-500"
            : status === "En progreso"
            ? "text-blue-500"
            : "text-gray-400"
        }`}
      >
        {status}
      </p>
    </div>
  );
};
