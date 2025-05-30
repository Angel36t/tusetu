import { LockClosedIcon  } from "@heroicons/react/24/solid";


export default function ErrorAlertSection() {
  return (
    <div className="relative w-full h-[760px]">
    <div className="absolute inset-0 bg-white bg-opacity-80 backdrop-blur-md flex flex-col items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-6 px-4">
        <LockClosedIcon className="h-20 w-20 text-gray-500 animate-pulse" />
        <h2 className="text-xl font-bold text-gray-700 text-center">
          No puedes continuar todavía
        </h2>
        <p className="text-md text-gray-600 text-center max-w-sm">
          Debes regresar al ejercicio de{" "}
          <span className="font-semibold text-gray-800">
            "Selecciona 10 valores principales"
          </span>{" "}
          para poder desbloquear esta actividad.
        </p>
      </div>
    </div>
  </div>
  )
}
