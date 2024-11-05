// PrivateRoute.js
import { Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

function PrivateRoute({ component }) {
  const { isAuthenticated, saveLastPath } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      // Guarda la última ruta antes de redirigir al login
      saveLastPath(location.pathname);
    }
  }, [isAuthenticated, location, saveLastPath]);

  return isAuthenticated ? component : <Navigate to="/" />;
}

export default PrivateRoute;
