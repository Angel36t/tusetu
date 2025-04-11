import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const AuthGuard = ({ children }) => {
  const { user, loading } = useUser();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        <div className="relative h-64 w-64 mb-4">
          <img
            src="/icon/logo-pioneers.svg"
            alt="Loading..."
            className="h-full w-full animate-pulse opacity-90"
          />
          <div className="absolute inset-0 bg-white opacity-40 animate-shine rounded-full"></div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default AuthGuard;