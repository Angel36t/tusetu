import { Route, Routes } from "react-router-dom";
import React from "react";

import NotFound from "../404/NotFound";
import Sidebar from "../sidebar/Sidebar";
import { PhatRoutings } from "../../routes/ConfigsRouting";

const DashboardLayout = () => {
  const routes = PhatRoutings();

  // Simulación del rol del usuario actual
  const userRole = "admin";

  return (
    <div className="flex justify-between">
      {/* Sidebar */}
      <Sidebar />

      <div className="w-full p-2.5 flex-grow">
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
