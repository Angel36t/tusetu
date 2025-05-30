import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { useUser } from "../../../../../../context/UserContext";
import { useContext } from "react";
import { VibrationContext } from "../../../../context/VibrationContext";
// import { VibrationContext } from "../../../../context/VibrationContext";

export default function CourseContentSidebar() {
  const { sections, activeLesson, setActiveLesson } =
    useContext(VibrationContext);
  const { themeMode } = useUser();
  const isCreative = themeMode === "creative";

  const getIconByType = (type) => {
    switch (type) {
      case "introducción":
        return "/icon/intro.svg";
      case "lector":
        return "/icon/book.svg";
      case "ejercicio":
        return "/icon/check.svg";
      case "video":
        return "/icon/camera.svg";
      default:
        return "/icon/default.svg";
    }
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md p-4 w-full ${
        isCreative ? "bg-opacity-70" : ""
      }`}
    >
      <h2 className="text-lg text-center mb-4 w-b">Contenido del curso</h2>

      {/* Resumen del curso */}
      <div className="flex w-m justify-around border-t border-gray-200 pt-4 mb-4 text-sm text-gray-700">
        <div className="flex items-center space-x-1">
          <img className="w-4 h-4" src="/icon/camera.svg" alt="Lecciones" />
          <span>3 lecciones</span>
        </div>
        <div className="flex items-center space-x-1">
          <img className="w-4 h-4" src="/icon/book.svg" alt="Ejercicios" />
          <span>3 ejercicios</span>
        </div>
        <div className="flex items-center space-x-1">
          <img className="w-4 h-4" src="/icon/clock.svg" alt="Duración" />
          <span>160 min</span>
        </div>
      </div>

      {/* Secciones y lecciones */}
      <div className="space-y-2">
        {sections.map((section) => (
          <Disclosure key={section.id} defaultOpen>
            {({ open }) => (
              <div className="rounded-md">
                <Disclosure.Button className="w-full w-s-b flex justify-between items-center px-3 py-2 font-medium text-gray-700 bg-gray-100 rounded-t-md">
                  <span>{section.title}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-600">
                      {section.totalTime}
                    </span>
                    <ChevronUpIcon
                      className={`w-5 h-5 transform ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </Disclosure.Button>

                <Disclosure.Panel className="bg-gray-50 px-3 pb-2 space-y-1 rounded-b-md o-m">
                  {section.lessons.map((lesson) => {
                    const isActiveLesson = activeLesson?.id === lesson.id;

                    return (
                      <div
                        key={lesson.id}
                        onClick={() => setActiveLesson(lesson)}
                        className={`flex justify-between items-center px-3 py-2 rounded-md cursor-pointer text-sm
                          ${
                            lesson.completed
                              ? "bg-green-100 text-green-700"
                              : isActiveLesson
                              ? "bg-[#F8F6E7]"
                              : "hover:bg-gray-200 text-gray-700"
                          }`}
                      >
                        <div className="flex items-center space-x-2">
                          <img
                            className="w-4 h-4"
                            src={getIconByType(lesson.type)}
                            alt="Lección"
                          />
                          <span>{lesson.title}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-500">
                            {lesson.time}
                          </span>
                          {lesson.completed && (
                            <span className="text-green-500 font-bold">✔</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
