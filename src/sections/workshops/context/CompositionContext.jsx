import React, { createContext, useState, useEffect } from "react";
import { useUser } from "../../../context/UserContext";
import { getUserProgress } from "../sections/composition/api/api";
import { SummaryValues } from "../sections/composition/components/summary/SummaryValues";
import DominantValue from "../sections/composition/components/dominantValue/DominantValue";
import MyStoryComponent from "../sections/composition/components/myStory/MyStoryComponent";
import SelectValuesGrid from "../sections/composition/components/ToggleValueSelection";
import SecondaryValues from "../sections/composition/secondaryValues/SecondaryValues";

export const CompositionContext = createContext({
  steps: [],
  activeStep: null,
  completeStep: () => {},
  setActiveStep: () => {},
  progressData: null,
  records: null,
  setRecords: () => {},
});

export const CompositionProvider = ({ children }) => {
  const { user } = useUser();
  const [steps, setSteps] = useState([]);
  const [records, setRecords] = useState(null);
  const [activeStep, setActiveStep] = useState(null);
  const [progressData, setProgressData] = useState(null);

  const stepsDataTemplate = [
    {
      id: 1,
      label: "Explora y Analiza los Valores",
      icon: "StarIcon",
      completed: false,
      status: "Pendiente",
      component: () => <SummaryValues />,
    },
    {
      id: 2,
      label: "Selecciona 10 valores principales",
      icon: "LinkIcon",
      completed: false,
      status: "Pendiente",
      component: () => <SelectValuesGrid />,
    },
    {
      id: 3,
      label: "Tabla de captura de valores",
      icon: "DocumentTextIcon",
      completed: false,
      status: "Pendiente",
      component: () => <SecondaryValues />,
    },
    {
      id: 4,
      label: "Selecciona el valor dominante",
      icon: "DocumentTextIcon",
      completed: false,
      status: "Pendiente",
      component: () => <DominantValue />,
    },
    {
      id: 5,
      label: "Escribe tu historia",
      icon: "DocumentTextIcon",
      completed: false,
      status: "Pendiente",
      component: () => <MyStoryComponent />,
    },
  ];

  const defaultProgress = {
    levels: [
      {
        level: 1,
        title: "Explore and Analyze Values",
        completed: false,
        percentage: 0,
      },
      {
        level: 2,
        title: "Select 10 Main Values",
        completed: false,
        percentage: 0,
      },
      {
        level: 3,
        title: "Value Capture Table",
        completed: false,
        percentage: 0,
      },
      {
        level: 4,
        title: "Select the Dominant Value",
        completed: false,
        percentage: 0,
      },
      { level: 5, title: "Write Your Story", completed: false, percentage: 0 },
    ],
    overall_percentage: 20,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = user.id;
        const data = await getUserProgress(userId);
        setProgressData(data.data.progress);

        const updatedSteps = stepsDataTemplate.map((step) => {
          const levelData = data.data.progress.levels.find(
            (level) => level.level === step.id
          );

          return levelData
            ? {
                ...step,
                completed: levelData.completed,
                status: levelData.completed
                  ? "Completado"
                  : step.status === "En progreso"
                  ? "En progreso"
                  : "Pendiente",
              }
            : step;
        });

        setSteps(updatedSteps);

        const active =
          updatedSteps.find((step) => step.status === "En progreso") ||
          updatedSteps[0];
        setActiveStep(active);
      } catch (error) {
        console.error("Error fetching progress data:", error);

        if (error.response && error.response.status === 404) {
          setProgressData(defaultProgress);

          const updatedSteps = stepsDataTemplate.map((step) => {
            const levelData = defaultProgress.levels.find(
              (level) => level.level === step.id
            );

            return levelData
              ? {
                  ...step,
                  completed: levelData.completed,
                  status: levelData.completed
                    ? "Completado"
                    : step.status === "En progreso"
                    ? "En progreso"
                    : "Pendiente",
                }
              : step;
          });

          setSteps(updatedSteps);
          setActiveStep(updatedSteps[0]);
        }
      }
    };

    fetchData();
  }, []);

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

  return (
    <CompositionContext.Provider
      value={{
        steps,
        activeStep,
        completeStep,
        setActiveStep,
        progressData,
        records,
        setRecords,
      }}
    >
      {children}
    </CompositionContext.Provider>
  );
};
