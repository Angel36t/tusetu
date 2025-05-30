import { useEffect, useState } from "react";

import { useUser } from "../../context/UserContext";
import UserDashboardRight from "./UserDashboardRight";
import TopBarHome from "../../components/sidebar/TopBarHome";
import UserAvatarAchievements from "./UserAvatarAchievements";
import { motivationalQuotes } from "../../utils/motivationalQuotes";

export default function WelcomeLayout() {
  const { user } = useUser();

  const [randomQuote, setRandomQuote] = useState({});

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    setRandomQuote(motivationalQuotes[randomIndex]);
  }, []);

  return (
    <>
      <TopBarHome />
      <div className="flex w-full h-screen">
        {/* Columna izquierda - 30% */}
        <div className="w-[30%]  p-4">
          <UserAvatarAchievements />
        </div>

        {/* Columna derecha - 70% */}
        <div className="w-[70%] p-4"><UserDashboardRight/></div>
      </div>
    </>
  );
}
