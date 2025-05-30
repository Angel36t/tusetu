import { useContext } from "react";

import CourseProgress from "./CourseProgress";
import CourseContentSidebar from "./CourseContentSidebar";
import { useUser } from "../../../../../../context/UserContext";
import { VibrationContext } from "../../../../context/VibrationContext";
import TopBarVibration from "../../../../../../components/sidebar/TopBarVibration";

export default function VibrationCourseLayout() {
  const { sections, activeLesson, setActiveLesson } =
    useContext(VibrationContext);

  const { themeMode } = useUser();
  const isCreative = themeMode === "creative";

  return (
    <>
      <TopBarVibration />
      <div
        className={`flex flex-col lg:flex-row gap-6 min-h-screen p-6 ${
          isCreative ? "" : "bg-[#d9d7bf]"
        }`}
        style={
          isCreative
            ? {
                backgroundImage: "url('/plataforma/background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : {}
        }
      >
        {/* IZQUIERDA: Contenido Principal */}
        <div className="w-full lg:flex-[7] flex flex-col gap-4">
          {/* Render dinámico del componente asignado */}
          <div
            className={`rounded-lg overflow-hidden shadow-md bg-[#F8F2E2] p-4 ${
              isCreative ? "bg-opacity-70" : ""
            }`}
          >
            {activeLesson && activeLesson.component && (
              <activeLesson.component {...(activeLesson.props || {})} />
            )}
          </div>
        </div>

        {/* DERECHA: Progreso y Contenido del Curso */}
        <div className="w-full lg:flex-[3] flex flex-col gap-4">
          {/* Progreso General */}
          <CourseProgress />

          {/* Contenido del Curso */}
          <CourseContentSidebar
            sections={sections}
            activeLesson={activeLesson}
            setActiveLesson={setActiveLesson}
          />
        </div>
      </div>
    </>
  );
}
