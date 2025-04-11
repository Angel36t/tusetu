import React, { useContext } from "react";
import { VibrationContext } from "../../../../context/VibrationContext";

export default function CourseProgress() {
  const {
    activeLesson,
    sections,
    setActiveLesson,
    completeLesson,
  } = useContext(VibrationContext);

  // Se obtiene el arreglo plano de lecciones a partir de las secciones
  const flatLessons = sections.flatMap((section) => section.lessons);
  
  // Se encuentra el índice de la lección activa en el arreglo plano
  const currentIndex = flatLessons.findIndex(
    (lesson) => lesson.id === activeLesson?.id
  );

  // Calculamos el progreso según la posición de la lección activa
  const currentProgress = (currentIndex + 1) / flatLessons.length;

  // Función para avanzar a la siguiente lección
  const handleContinue = () => {
    completeLesson(activeLesson?.id);

    if (currentIndex !== -1 && currentIndex < flatLessons.length - 1) {
      setActiveLesson(flatLessons[currentIndex + 1]);
    } else {
      console.log("¡Curso completado!");
      // Aquí podrías mostrar un modal o redirigir
    }
  };

  // Función para retroceder a la lección anterior
  const handleGoBack = () => {
    if (currentIndex > 0) {
      setActiveLesson(flatLessons[currentIndex - 1]);
    }
  };

  return (
    <div className="bg-[#F8F6E7] rounded-xl py-4 px-8 shadow-sm flex flex-col gap-4">
      {/* Título con ícono */}
      <div className="flex items-center gap-2 justify-center text-sm font-semibold text-gray-700">
        <img
          className="w-6 h-6"
          src="/icon/circle-star.svg"
          alt="Progreso"
        />
        <span>Tu progreso</span>
      </div>

      {/* Barra de progreso con el contador centrado */}
      <div className="relative w-full h-8 bg-[#E6E1C5] rounded-full overflow-hidden shadow-inner">
        <div
          className="absolute left-0 top-0 h-full bg-[#45603F] transition-all rounded-full"
          style={{ width: `${currentProgress * 100}%` }}
        ></div>

        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-extrabold text-white drop-shadow-[2px_2px_2px_rgba(0,0,0,0.8)]">
          {currentIndex + 1}/{flatLessons.length}
        </div>
      </div>

      {/* Botones de navegación */}
      <div className="flex justify-between mt-2">
        <button
          onClick={handleGoBack}
          disabled={currentIndex <= 0}
          className={`w-b rounded-md text-sm py-[12px] px-[52px] ${
            currentIndex <= 0
              ? "bg-[#E6E1C5] text-gray-400 cursor-not-allowed"
              : "bg-[#DAE462] text-[#2F2F2F] border-r-[4px] border-b-[4px] border-[#C5CD59] shadow-[2px_2px_4px_rgba(0,0,0,0.1)] hover:bg-[#cbdc50] transition duration-200"
          }`}
        >
          Regresar
        </button>

        <button
          onClick={handleContinue}
          className="bg-[#DAE462] w-b text-[#2F2F2F] rounded-md text-sm border-r-[4px] border-b-[4px] border-[#C5CD59] shadow-[2px_2px_4px_rgba(0,0,0,0.1)] hover:bg-[#cbdc50] transition duration-200 py-[12px] px-[52px]"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
