import { useState } from "react";
import {
  CheckIcon,
  StarIcon,
  LinkIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import ToggleValueSelection from "./components/ToggleValueSelection";
import SecondaryValues from "./secondaryValues/SecondaryValues";
import { CompositionContext } from "../../context/CompositionContext";
import MyStoryComponent from "./components/myStory/MyStoryComponent";
import DominantValue from "./components/dominantValue/DominantValue";
import { SummaryValues } from "./components/summary/SummaryValues";

// Definimos los componentes específicos para cada paso

const SummaryValuesStep = () => <SummaryValues />;
const ToggleValue = () => <ToggleValueSelection />;
const SecondaryValuesStep = () => <SecondaryValues />;
const DominantValueStep = () => <DominantValue />;
const MyStory = () => <MyStoryComponent />;

const stepsData = [
  {
    id: 1,
    label: "Explora y Analiza los Valores",
    icon: StarIcon,
    completed: false,
    status: "En progreso",
    component: SummaryValuesStep,
  },
  {
    id: 2,
    label: "Selecciona 10 valores principales",
    icon: LinkIcon,
    completed: false,
    status: "Pendiente",
    component: ToggleValue,
  },
  {
    id: 3,
    label: "Tabla de captura de valores",
    icon: DocumentTextIcon,
    completed: false,
    status: "Pendiente",
    component: SecondaryValuesStep,
  },
  {
    id: 4,
    label: "Selecciona el valor dominante",
    icon: DocumentTextIcon,
    completed: false,
    status: "Pendiente",
    component: DominantValueStep,
  },
  {
    id: 5,
    label: "Escribe tu historia",
    icon: DocumentTextIcon,
    completed: false,
    status: "Pendiente",
    component: MyStory,
  },
];

export default function StepsImagesValidation() {
  const [steps, setSteps] = useState(stepsData);
  const [activeStep, setActiveStep] = useState(steps[0]);

  const completeStep = (stepId) => {
    setSteps((prevSteps) =>
      prevSteps.map((step) =>
        step.id === stepId
          ? { ...step, completed: true, status: "Completado" }
          : step.id === stepId + 1
          ? { ...step, status: "En progreso" }
          : step
      )
    );

    const nextStep = steps.find((step) => step.id === stepId + 1);
    if (nextStep) {
      setActiveStep(nextStep);
    }
  };

  const goToStep = (stepId) => {
    const selectedStep = steps.find((step) => step.id === stepId);
    if (selectedStep) {
      setActiveStep(selectedStep);
    }
  };

  return (
    <CompositionContext.Provider value={{ steps, completeStep }}>
      <div className="flex flex-col lg:flex-row gap-6 h-screen bg-white rounded-lg shadow-lg border border-gray-200 pl-4">
        {/* Stepper Vertical */}
        <div className="flex flex-col items-start w-full lg:w-[20%] justify-center">
          {steps.map((step, index) => (
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
          {activeStep && <activeStep.component />}
        </div>
      </div>
    </CompositionContext.Provider>
  );
}

const SuccessStep = ({ step, line = true }) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold ${
          step.completed
            ? "bg-grn-70 text-white"
            : step.status === "En progreso"
            ? "bg-bl-100 text-white"
            : "bg-gray-200 text-gray-500"
        }`}
      >
        {step.completed ? <CheckIcon className="w-4 h-4" /> : step.id}
      </div>

      {line && (
        <div
          className={`w-px h-8 bg-gray-300 mt-2 ${
            step.status === "Pendiente" ? "opacity-50" : ""
          }`}
        />
      )}
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
      <p className="text-sm font-semibold text-black flex items-center m-s-b text-fs-12">
        {label}
      </p>
      <p
        className={`text-xs font-semibold ${
          status === "Completado"
            ? "text-grn-100"
            : status === "En progreso"
            ? "text-bl-100"
            : "text-gray-400"
        }`}
      >
        {status}
      </p>
    </div>
  );
};
