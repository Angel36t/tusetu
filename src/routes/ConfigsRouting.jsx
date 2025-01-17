import UsersLayout from "../sections/user/UsersLayout";
import WelcomeLayout from "../sections/welcome/WelcomeLayout";
import WorkshopsLayout from "../sections/workshops/WorkshopsLayout";
import CompositionLayout from '../sections/workshops/sections/composition/CompositionLayout';

export const PhatRoutings = () => {
  const establishedRoutes = [
    { path: "*", component: WelcomeLayout, allowedRoles: ["admin"] },
    { path: "/inicio", component: WelcomeLayout, allowedRoles: ["admin"] },
    { path: "/talleres", component: WorkshopsLayout, allowedRoles: ["admin"] },
    { path: "/usuarios", component: UsersLayout, allowedRoles: ["admin"] },
    { path: "/talleres/vibracion", component: CompositionLayout, allowedRoles: ["admin"] },
  ];

  return establishedRoutes;
};

