import { Route, Routes } from "react-router-dom";
import React from "react";

import NotFound from "../404/NotFound";
import Sidebar from "../sidebar/Sidebar";
import { PhatRoutings } from "../../routes/ConfigsRouting";
import { useUser } from "../../context/UserContext";

const DashboardLayout = () => {
  const routes = PhatRoutings();
  const { themeMode } = useUser();
  const isCreative = themeMode === "creative";

  // Simulación del rol del usuario actual
  const userRole = "admin";

  return (
    <div className="flex justify-between">
      {/* Sidebar */}
      <Sidebar />

      <div
        className={`w-full flex-grow bg-[#d9d7bf] ${
          isCreative ? "" : "bg-[#d9d7bf]"
        }`}
        style={
          isCreative
            ? {
                backgroundImage: "url('/plataforma/background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : {}
        }
      >
        <Routes>
          {routes.map((route, index) => {
            if (route.allowedRoles.includes(userRole)) {
              if (route.path.includes(":")) {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={React.createElement(route.component)}
                  />
                );
              } else {
                // Rutas normales
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={React.createElement(route.component)}
                  />
                );
              }
            } else {
              return (
                <Route key={index} path={route.path} element={<NotFound />} />
              );
            }
          })}
        </Routes>
      </div>
    </div>
  );
};

export default DashboardLayout;
