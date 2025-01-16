import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./components/login/Login";
import AuthGuard from "./config/login/AuthGuard";
import HomeLayout from "./sections/home/HomeLayout";
import { UserProvider } from "./context/UserContext";
import DashboardLayout from "./components/dashboard/DashboardLayout";

const App = () => {
  return (
    <>
      <UserProvider>
        <Router>
          <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={<HomeLayout />} />
            <Route path="/login" element={<Login />} />

            {/* Rutas protegidas */}
            <Route
              path="*"
              element={
                <AuthGuard>
                  <DashboardLayout />
                </AuthGuard>
              }
            />
          </Routes>
        </Router>
      </UserProvider>
      <Toaster />
    </>
  );
};

export default App;
