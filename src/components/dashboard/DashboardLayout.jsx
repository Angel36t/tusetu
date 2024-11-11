import { Route, Routes, useLocation } from "react-router-dom";

import NotFound from "../404/NotFound";
import Sidebar from "../sidebar/Sidebar";
import { PhatRoutings } from "../../routes/ConfigsRouting";

const DashboardLayout = () => {
  const routes = PhatRoutings();
  
  const userRole = "admin";
  
  return (
    <div className="flex justify-between">
      <Sidebar />
      <div className={`${"w-full"} p-2.5 flex-grow`}>
        <Routes>
          {routes.map((route, index) => {
            if (route.allowedRoles.includes(userRole)) {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component />}
                />
              );
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