import {
    BellIcon,
    QuestionMarkCircleIcon,
    ChevronLeftIcon,
  } from "@heroicons/react/24/solid";
  import { useNavigate } from "react-router-dom";
  
  export default function TopBarHome() {
    const navigate = useNavigate();
  
    return (
      <div className="w-full flex justify-between items-center bg-[#fdf9ed] px-4 py-2 shadow-sm">
        {/* Botón atrás + Título */}
        <div className="flex items-center gap-2">
          {/* <button
            onClick={() => navigate("/talleres")}
            className="text-[#7C6D4C] bg-[#F1E4C4] p-1 rounded hover:bg-[#EFE8DC]"
          >
            <ChevronLeftIcon className="h-5 w-5 text-[#3a3a3a]" />
          </button>
          <h1 className="text-lg font-semibold text-[#3a3a3a] w-b">
            Tu vibración
          </h1> */}
        </div>
  
        {/* Iconos y perfil */}
        <div className="flex items-center gap-3">
          {/* Icono personalizado (emoji dado) */}
          <button className="bg-[#ece5cf] hover:bg-[#e0d9c4] rounded-full p-2">
            <span role="img" aria-label="dice" className="text-lg">
              🎲
            </span>
          </button>
  
          {/* Icono de ayuda */}
          <button className="bg-[#ece5cf] hover:bg-[#e0d9c4] rounded-full p-2">
            <QuestionMarkCircleIcon className="h-5 w-5 text-[#3a3a3a]" />
          </button>
  
          {/* Notificaciones */}
          <button className="bg-[#ece5cf] hover:bg-[#e0d9c4] rounded-full p-2">
            <BellIcon className="h-5 w-5 text-[#3a3a3a]" />
          </button>
  
          {/* Perfil */}
          <div className="flex items-center bg-[#f1ebd5] px-3 py-2 rounded">
            <div className="w-8 h-8 bg-[#d9d7bf] rounded-full flex justify-center items-center text-white font-semibold mr-2">
              K
            </div>
            <div>
              <p className="text-sm font-medium text-[#3a3a3a]">Katherine</p>
              <p className="text-xs text-gray-500">kathigonzales@hotmail.com</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  