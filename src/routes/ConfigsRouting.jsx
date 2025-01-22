import UsersLayout from "../sections/user/UsersLayout";
import WelcomeLayout from "../sections/welcome/WelcomeLayout";
import WorkshopsLayout from "../sections/workshops/WorkshopsLayout";
import VibrationLayout from '../sections/workshops/sections/composition/Vibration';
import CompositionLayout from "../sections/workshops/sections/compisitionV2/CompositionLayout";
import Dimensions from "../sections/workshops/sections/compisitionV2/components/dimensions/Dimensions";
import DimensionsEspecific from "../sections/workshops/sections/compisitionV2/components/dimensions/DimensionsEspecific";

export const PhatRoutings = () => {
  const establishedRoutes = [
    { path: "*", component: WelcomeLayout, allowedRoles: ["admin"] },
    { path: "/inicio", component: WelcomeLayout, allowedRoles: ["admin"] },
    { path: "/talleres", component: WorkshopsLayout, allowedRoles: ["admin"] },
    { path: "/usuarios", component: UsersLayout, allowedRoles: ["admin"] },
    { path: "/talleres/vibracion", component: VibrationLayout, allowedRoles: ["admin"] },
    { path: "/talleres/composicion", component: CompositionLayout, allowedRoles: ["admin"] },
    { path: "/talleres/composicion/dimensiones", component: Dimensions, allowedRoles: ["admin"] },
    { path: "/talleres/composicion/dimensiones/:data", component: DimensionsEspecific, allowedRoles: ["admin"] }
  ];

  return establishedRoutes;
};

