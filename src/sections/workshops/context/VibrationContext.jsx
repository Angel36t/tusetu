import React, { createContext, useState, useEffect } from "react";
import vibrationCourseTemplate from "../sections/composition/config/vibrationCourseTemplate";

export const VibrationContext = createContext({});

export const VibrationProvider = ({ children }) => {
  const [sections, setSections] = useState(vibrationCourseTemplate);
  const flatLessons = sections.flatMap((section) => section.lessons);

  // Función para encontrar la lección inicial basada en la URL
  const getInitialLesson = () => {
    const params = new URLSearchParams(window.location.search);
    const lessonId = params.get("lessonId");
    if (lessonId) {
      const lessonFound = flatLessons.find(lesson => lesson.id === Number(lessonId));
      if (lessonFound) {
        return lessonFound;
      }
    }
    return flatLessons[0]; // Si no hay lessonId o no se encuentra
  };

  const [activeLesson, setActiveLessonState] = useState(getInitialLesson);
  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem("completedLessons");
    return saved ? JSON.parse(saved) : [];
  });
  
  const [isCreative, setIsCreative] = useState(false);

  const completeLesson = (lessonId) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons((prev) => [...prev, lessonId]);
    }
  };

  const totalLessons = flatLessons.length;
  const courseProgress = completedLessons.length / totalLessons;

  // Actualizar URL cuando cambie la lección activa
  const setActiveLesson = (lesson) => {
    setActiveLessonState(lesson);
    const params = new URLSearchParams(window.location.search);
    params.set("lessonId", lesson.id);
    window.history.replaceState({}, "", `${window.location.pathname}?${params}`);
  };

  useEffect(() => {
    // Opcional: Si quieres guardar en localStorage el último visto
    localStorage.setItem("lastLessonId", activeLesson.id);
  }, [activeLesson]);

  useEffect(() => {
    localStorage.setItem("completedLessons", JSON.stringify(completedLessons));
  }, [completedLessons]);

  return (
    <VibrationContext.Provider
      value={{
        sections,
        activeLesson,
        setActiveLesson,
        completeLesson,
        completedLessons,
        totalLessons,
        courseProgress,
        isCreative,
      }}
    >
      {children}
    </VibrationContext.Provider>
  );
};
