import { useState } from "react";
import {
  CheckIcon,
  StarIcon,
  LinkIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import ToggleValueSelection from "./components/ToggleValueSelection";
import SecondaryValues from "./secondaryValues/SecondaryValues";

// Definimos los componentes específicos para cada paso
const StepOneComponent = () => <ToggleValueSelection />;
const StepTwoComponent = () => (<SecondaryValues/>
);
const StepThreeComponent = () => (
  <p>Contenido del paso 3: Tabla de captura de valores.</p>
);
const StepFourComponent = () => (
  <p>Contenido del paso 4: Selecciona el valor dominante.</p>
);
const StepFiveComponent = () => (
  <p>Contenido del paso 5: Escribe tu historia.</p>
);

const stepsData = [
  {
    id: 1,
    label: "Selecciona 10 valores principales",
    icon: StarIcon,
    completed: false,
    status: "En progreso",
    component: StepOneComponent,
  },
  {
    id: 2,
    label: "Liga valores secundarios",
    icon: LinkIcon,
    completed: false,
    status: "Pendiente",
    component: StepTwoComponent,
  },
  {
    id: 3,
    label: "Tabla de captura de valores",
    icon: DocumentTextIcon,
    completed: false,
    status: "Pendiente",
    component: StepThreeComponent,
  },
  {
    id: 4,
    label: "Selecciona el valor dominante",
    icon: DocumentTextIcon,
    completed: false,
    status: "Pendiente",
    component: StepFourComponent,
  },
  {
    id: 5,
    label: "Escribe tu historia",
    icon: DocumentTextIcon,
    completed: false,
    status: "Pendiente",
    component: StepFiveComponent,
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

    // Actualizamos el paso activo al siguiente
    const nextStep = steps.find((step) => step.id === stepId + 1);
    if (nextStep) {
      setActiveStep(nextStep);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-screen">
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
            />
          </div>
        ))}
      </div>

      {/* Panel de Contenido */}
      <div className="w-full lg:w-[80%] p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        {activeStep && <activeStep.component />}
      </div>
    </div>
  );
}

const SuccessStep = ({ step, line = true }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Circle Indicator */}
      <div
        className={`rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold ${
          step.completed
            ? "bg-grn-100 text-white"
            : step.status === "En progreso"
            ? "bg-bl-100 text-white"
            : "bg-gray-200 text-gray-500"
        }`}
      >
        {step.completed ? <CheckIcon className="w-4 h-4" /> : step.id}
      </div>

      {/* Connecting Line */}
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

const ViewProcess = ({ label, status, icon: Icon, onComplete, isActive }) => {
  return (
    <div>
      <p className="text-sm font-semibold text-black flex items-center m-s-b text-fs-12">
        {" "}
        {label}
      </p>
      <p
        className={`text-xs font-semibold ${
          status === "Completado"
            ? "text-green-500"
            : status === "En progreso"
            ? "text-l-b-100"
            : "text-gray-400"
        }`}
      >
        {status}
      </p>
      {isActive && (
        <button
          onClick={onComplete}
          className="mt-2 text-xs text-blue-500 underline"
        >
          Marcar como completado
        </button>
      )}
    </div>
  );
};
