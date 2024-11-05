import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import WelcomeLayout from './sections/welcome/WelcomeLayout';
import { AuthProvider, useAuth } from './context/AuthContext';
import WorkshopsLayout from './sections/workshops/WorkshopsLayout';
import NotFound from './components/404/NotFound';
import UsersLayout from './sections/user/UsersLayout';
import CompositionLayout from './sections/workshops/sections/composition/CompositionLayout';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Ruta de Login */}
          <Route path="/" element={<Login />} />

          {/* Rutas protegidas */}
          <Route path="/inicio" element={<PrivateRoute component={<Dashboard section={<WelcomeLayout />} />} />} />
          <Route path="/talleres" element={<PrivateRoute component={<Dashboard section={<WorkshopsLayout />} />} />} />

          <Route path="/usuarios" element={<PrivateRoute component={<Dashboard section={<UsersLayout />} />} />} />
          <Route path="/taller/composicion" element={<PrivateRoute component={<Dashboard section={<CompositionLayout />} />} />} />

          {/* Página 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

function PrivateRoute({ component }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? component : <Navigate to="/" />;
}

export default App;
