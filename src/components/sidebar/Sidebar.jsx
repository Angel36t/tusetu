import { Link, useLocation } from "react-router-dom";
import { FiGrid, FiUsers, FiLogOut, FiTool } from "react-icons/fi";

function Sidebar() {
  const location = useLocation();

  // Opciones del menú definidas en un array de objetos JSON
  const menuOptions = [
    { path: "/inicio", label: "Dashboard", icon: <FiGrid /> },
    { path: "/talleres", label: "Talleres", icon: <FiTool /> },
    { path: "/usuarios", label: "Usuarios", icon: <FiUsers /> },
  ];

  return (
    <div className="w-[200px] min-w-[200px] min-h-[95vh] max-h-[95vh] sm:max-h-[600px] m-4 rounded-[14px] bg-white p-4 flex flex-col justify-start items-center shadow-lg">
      {/* Encabezado */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-6">
          <img src="/assets/login/logo.png" alt="Logo" className="w-16 h-14" />
        </div>
        <h2 className="text-[#05C7F2] m-b text-lg text-fs-13 ">ALEXANDER ASSAD</h2>
      </div>

      {/* Opciones del menú */}
      <ul className="space-y-4 w-full">
        {menuOptions.map((option, index) => (
          <li key={index} className="flex items-center justify-center text-fs-14 m-m">
            <Link
              to={option.path}
              className={`flex items-center p-2 w-full rounded ${
                location.pathname === option.path
                  ? "text-blue-500 bg-blue-100"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {option.icon}
              <span className="ml-2">{option.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Cierre de sesión */}
      <div className="mt-auto w-full flex items-center justify-center">
        <button className="flex items-center p-2 text-gray-500 hover:text-gray-700">
          <FiLogOut className="mr-2" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
