import { useState } from "react";
import {
  ChevronLeftIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

import { useUser } from "../../context/UserContext";

export default function TopBarVibration() {
  const navigate = useNavigate();
  const { user } = useUser();

  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="w-full flex justify-between items-center bg-[#fdf9ed] px-4 py-3 shadow-sm relative">
      {/* Botón atrás + Título */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => navigate("/talleres")}
          className="text-[#7C6D4C] bg-[#F1E4C4] p-1 rounded hover:bg-[#EFE8DC]"
        >
          <ChevronLeftIcon className="h-5 w-5 text-[#3a3a3a]" />
        </button>
        <h1 className="text-lg font-semibold text-[#3a3a3a] w-b">
          Tu vibración
        </h1>
      </div>

      {/* Iconos y perfil */}
      <div className="flex items-center gap-3">
        {/* Icono personalizado (emoji dado) */}
        <button className="bg-[#ece5cf] hover:bg-[#e0d9c4] rounded-2xl px-4 py-1 flex items-center">
          <span role="img" aria-label="dice" className="text-lg pr-2">
            <img src="/icon/bag.svg" />
          </span>
          <span className="text-base m-b">2</span>
        </button>

        {/* Icono de ayuda */}
        <div className="relative">
          <button
            className="bg-[#ece5cf] hover:bg-[#e0d9c4] rounded-full p-2"
          >
            <img src="/icon/in.svg" alt="Ayuda" />
          </button>

          
        </div>

        {/* Notificaciones */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="bg-[#ece5cf] hover:bg-[#e0d9c4] rounded-full p-2"
          >
            <img src="/icon/bell.svg" alt="Notificaciones" />
          </button>

          {/* Menú de notificaciones */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg z-50 p-4">
              <p className="text-sm text-[#3a3a3a] font-semibold mb-2">Notificaciones</p>
              <div className="text-center text-sm text-[#7C6D4C]">
                Aún no tienes notificaciones 📭
              </div>
            </div>
          )}
        </div>

        {/* Perfil */}
        <div className="relative flex items-center">
          <div className="absolute left-[0px] top-[10px] w-[3rem] h-8 bg-[#d9d7bf] rounded-full flex justify-center items-center text-white font-semibold mr-2">
            <img src="/icon/photo.svg" />
          </div>
          <div className="flex items-center bg-[#f1ebd5] pl-16 pr-8 py-2 rounded-2xl mr-6">
            <div>
              <p className="text-sm w-m text-[#837656]">{user.name}</p>
              <p className="text-xs text-[#837656]">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
