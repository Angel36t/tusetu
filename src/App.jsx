import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Login from "./components/login/Login";
import AuthGuard from "./config/login/AuthGuard";
import HomeLayout from "./sections/home/HomeLayout";
import { UserProvider } from "./context/UserContext";
import DashboardLayout from "./components/dashboard/DashboardLayout";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          {/* ROUTES OUT */}
          <Route path="/" element={<HomeLayout />} />
          <Route path="/login" element={<Login />} />

          {/* ROUTEN IN LOGIN  */}
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
  );
};

export default App;
