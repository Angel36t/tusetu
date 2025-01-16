import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const AuthGuard = ({ children }) => {
  const { user, loading } = useUser();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }
  
  if (!user) {
    console.log("Usuario no autenticado. Redirigiendo a login...");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return children;
  
};

export default AuthGuard;