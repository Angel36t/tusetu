import { Link, useLocation } from "react-router-dom";
import { FiGrid, FiUsers, FiLogOut, FiTool } from "react-icons/fi";

import { useAuth } from "../../context/AuthContext";

function Sidebar() {
  const location = useLocation();
  const { logout } = useAuth();

  return (
    <div className="w-[15%]  min-h-[95vh] m-4 rounded-[14px] bg-[#f7f9fa] p-4 flex flex-col justify-between items-center shadow-lg ">
      {/* Encabezado */}
      <div className="text-center mb-8">
      <div className="flex justify-center mb-6">
          <img src="assets/login/logo.png" alt="Logo" className="w-16 h-14" />
        </div>
        <h2 className="text-[#05C7F2] font-bold text-lg">ALEXANDER ASSAD</h2>
      </div>

      {/* Opciones del menú */}
      <ul className="space-y-4 w-full pb-[28rem]">
        <li className="flex items-center justify-center">
          <Link
            to="/inicio"
            className={`flex items-center p-2 w-full rounded ${
              location.pathname === "/inicio"
                ? "text-blue-500 bg-blue-100"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            <FiGrid className="mr-2" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="flex items-center justify-center">
          <Link
            to="/talleres"
            className={`flex items-center p-2 w-full rounded ${
              location.pathname === "/talleres"
                ? "text-blue-500 bg-blue-100"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            <FiTool className="mr-2" />
            <span>Talleres</span>
          </Link>
        </li>
        <li className="flex items-center justify-center">
          <Link
            to="/usuarios"
            className={`flex items-center p-2 w-full rounded ${
              location.pathname === "/usuarios"
                ? "text-blue-500 bg-blue-100"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            <FiUsers className="mr-2" />
            <span>Usuarios</span>
          </Link>
        </li>
      </ul>

      {/* Cierre de sesión */}
      <div className="mt-8 w-full flex items-center justify-center">
        <button
          className="flex items-center p-2 text-gray-500 hover:text-gray-700"
          onClick={logout}
        >
          <FiLogOut className="mr-2" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
