import { Link, useLocation } from "react-router-dom";
import { FiGrid, FiUsers, FiLogOut, FiTool } from "react-icons/fi";
import { useUser } from "../../context/UserContext";

function Sidebar() {
  const location = useLocation();
  const { user, logout } = useUser();

  const menuOptions = [
    { path: "/inicio", label: "Dashboard", icon: <FiGrid /> },
    { path: "/usuarios", label: "Usuarios", icon: <FiUsers /> },
    { path: "/talleres", label: "Talleres", icon: <FiTool /> },
  ];

  return (
    <div className="w-[250px] min-w-[250px] min-h-[100vh] bg-white shadow-lg flex flex-col">
      <div className="p-6 text-center border-b">
        <div className="flex justify-center mb-4">
          <img
            src="/assets/login/logo.png"
            alt="Logo"
            className="w-16 h-16 object-contain"
          />
        </div>
        <h2 className="text-[#05C7F2] text-lg font-semibold">
          ALEXANDER ASSAD
        </h2>
      </div>

      <ul className="flex-1 space-y-2 p-4">
        {menuOptions.map((option, index) => (
          <li key={index}>
            <Link
              to={option.path}
              className={`flex items-center p-3 rounded-lg transition-all ${
                location.pathname.startsWith(option.path)
                  ? "bg-blue-100 text-blue-500"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="text-xl">{option.icon}</span>
              <span className="ml-3 text-sm font-medium">{option.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="p-4 border-t mb-12">
        <div className="flex items-center space-x-3">
          <img
            src={user?.avatar || "https://via.placeholder.com/150"}
            alt="Avatar"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              {user?.name || "Usuario"}
            </h3>
            <p className="text-xs text-gray-500">
              {user?.email || "email@example.com"}
            </p>
          </div>
        </div>
        <button
          onClick={logout}
          className="mt-4 w-full flex items-center justify-center p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all"
        >
          <FiLogOut className="mr-2 text-lg" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
