import { createContext, useState, useEffect, useMemo } from "react";

import { getRecords } from "../sections/composition/api/api";
import vibrationCourseTemplate from "../sections/composition/config/vibrationCourseTemplate";

export const VibrationContext = createContext({});

export const VibrationProvider = ({ children }) => {
  const [sections, setSections] = useState([]);
  const [records, setRecords] = useState(null);
  const [activeLesson, setActiveLessonState] = useState(null); // 👈 empieza en null
  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem("completedLessons");
    return saved ? JSON.parse(saved) : [];
  });

  const flatLessons = useMemo(() => {
    return Array.isArray(sections)
      ? sections.flatMap((section) => section.lessons)
      : [];
  }, [sections]);

  useEffect(() => {
    if (sections.length === 0) {
      setSections(vibrationCourseTemplate || []);
    }
  }, [sections]);

  // Inicializar la lección activa cuando flatLessons esté disponible
  useEffect(() => {
    if (flatLessons.length > 0 && !activeLesson) {
      const params = new URLSearchParams(window.location.search);
      const lessonId = params.get("lessonId");
      if (lessonId) {
        const foundLesson = flatLessons.find(
          (lesson) => lesson.id === Number(lessonId)
        );
        if (foundLesson) {
          setActiveLessonState(foundLesson);
          return;
        }
      }
      setActiveLessonState(flatLessons[0]); // Si no hay lessonId en URL, tomar la primera lección
    }
  }, [flatLessons, activeLesson]);

  const completeLesson = (lessonId) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons((prev) => [...prev, lessonId]);
    }
  };

  const totalLessons = flatLessons.length;
  const courseProgress = completedLessons.length / (totalLessons || 1); // para evitar dividir por 0

  const setActiveLesson = (lesson) => {
    setActiveLessonState(lesson);
    const params = new URLSearchParams(window.location.search);
    params.set("lessonId", lesson.id);
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params}`
    );
  };

  useEffect(() => {
    if (activeLesson) {
      localStorage.setItem("lastLessonId", activeLesson.id);
    }
  }, [activeLesson]);

  useEffect(() => {
    localStorage.setItem("completedLessons", JSON.stringify(completedLessons));
  }, [completedLessons]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const storedRecords = localStorage.getItem("vibration_records");
        if (storedRecords) {
          setRecords(JSON.parse(storedRecords));
        } else {
          const response = await getRecords();
          const fetchedRecords = response.records.map((record) => record.value);
          setRecords(fetchedRecords);
          localStorage.setItem(
            "vibration_records",
            JSON.stringify(fetchedRecords)
          );
        }
      } catch (error) {
        console.error("Error fetching records:", error);
      }
    };

    fetchRecords();
  }, []);

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
        records,
        setRecords,
      }}
    >
      {children}
    </VibrationContext.Provider>
  );
};
