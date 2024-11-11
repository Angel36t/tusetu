import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const AuthGuard = ({ children }) => {
  const { user, loading } = useUser();
  const location = useLocation();
  console.log(user);
  

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="animate-pulse">
          {/* Placeholder for loading state */}
        </div>
      </div>
    );
  }

  if (!user) {
    // Redirige a login y guarda la última ubicación
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default AuthGuard;