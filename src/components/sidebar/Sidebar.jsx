import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ArrowLeftEndOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { useUser } from "../../context/UserContext";

function Sidebar() {
  const location = useLocation();
  const { themeMode, setThemeMode } = useUser();
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapse = () => setCollapsed(!collapsed);

  const menuOptions = [
    {
      path: "/inicio",
      label: "Dashboard",
      icon: <HomeIcon className="w-6 h-6" />,
    },
    {
      path: "/usuarios",
      label: "Usuarios",
      icon: <UsersIcon className="w-6 h-6" />,
    },
    {
      path: "/talleres",
      label: "Talleres",
      icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
    },
  ];

  return (
    <div
  className={`sticky top-0 flex flex-col justify-between transition-all duration-300
    bg-[#FAF6EE] shadow-md
    ${collapsed ? "w-[80px]" : "w-[250px]"} 
    h-screen`}
>
      {/* TOP: Logo y Toggle */}
      <div
        className={`border-b border-[#E8E2D9] px-4 py-[22px]
    ${
      collapsed
        ? "flex flex-col items-center justify-center"
        : "flex items-center justify-between"
    }
  `}
      >
        {/* Logo / Isotipo */}
        {collapsed ? (
          <img
            src="/icon/isotipo-pioneers.svg" // Ruta del isotipo
            alt="Isotipo"
            className="h-10 object-contain mb-4"
          />
        ) : (
          <img
            src="/icon/logo-pioneers.svg" // Ruta del logo completo
            alt="Logo"
            className="h-8 object-contain"
          />
        )}

        {/* Botón de colapsar/expandir */}
        <button
          onClick={toggleCollapse}
          className="text-[#7C6D4C] bg-[#F1E4C4] p-1 rounded hover:bg-[#EFE8DC]"
        >
          {collapsed ? (
            <ChevronDoubleRightIcon className="w-5 h-5" />
          ) : (
            <ChevronDoubleLeftIcon className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* MIDDLE: Menú Opciones */}
      <nav className="flex-1 flex flex-col justify-start space-y-2 px-4 py-6">
        {menuOptions.map((option, index) => {
          const isActive = location.pathname.startsWith(option.path);
          return (
            <Link
              key={index}
              to={option.path}
              className={`flex items-center p-3 rounded-lg transition-all
                ${
                  isActive
                    ? "bg-[#EFE0C9] shadow-sm text-[#7C6D4C]"
                    : "text-[#7C6D4C] hover:bg-[#EFE8DC]"
                }`}
            >
              <span className="w-6 h-6 flex justify-center items-center">
                {option.icon}
              </span>
              {!collapsed && (
                <span className="ml-3 text-sm font-medium">{option.label}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* BOTTOM: Tarjeta descuento + Tema + Logout */}
      <div className="p-4 border-t border-[#E8E2D9] space-y-3">
        {/* DESCUENTO */}
        {!collapsed && (
          <div className="bg-[#EFE8DC] p-4 rounded-lg shadow-sm text-center">
            <img
              src="/icon/promo/map-promo.svg"
              alt="Descuento"
              className="mx-auto mb-3 w-32 h-16 object-contain"
            />
            <h3 className="text-sm font-semibold text-[#7C6D4C]">
              Obtén tu descuento
            </h3>
            <p className="text-xs text-[#A0937B] mt-1 mb-3">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <button className="bg-[#F6D293] text-[#7C6D4C] text-xs font-semibold py-1 px-3 rounded hover:bg-[#ecc78b] transition-all">
              ¡Reclamar!
            </button>
          </div>
        )}

        {/* Botones de Tema */}
        <div
          className={`flex ${
            collapsed ? "flex-col space-y-2" : "justify-between"
          } items-center bg-[#EFE8DC] p-2 rounded-lg text-xs font-medium`}
        >
          <button
            onClick={() => setThemeMode("solid")}
            className={`flex-1 text-[#7C6D4C] rounded-md py-1 px-2 transition-all
              ${themeMode === "solid" && "bg-[#D6CBB8]"}
            `}
          >
            {collapsed ? "🖥️" : "🖥️ Solido"}
          </button>
          <button
            onClick={() => setThemeMode("creative")}
            className={`flex-1 text-[#7C6D4C] rounded-md py-1 px-2 transition-all
              ${themeMode === "creative" && "bg-[#D6CBB8]"}
              ${collapsed ? "" : "ml-2"}
            `}
          >
            {collapsed ? "🎨" : "🎨 Creativo"}
          </button>
        </div>

        {/* Logout */}
        <button
          onClick={() => console.log("logout")}
          className="flex items-center justify-center w-full p-2 bg-[#EFE8DC] text-[#7C6D4C] rounded-lg text-sm hover:bg-[#E0D6C7] transition-all"
        >
          <ArrowLeftEndOnRectangleIcon className="w-5 h-5 mr-2" />
          {!collapsed && "Cerrar sesión"}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
