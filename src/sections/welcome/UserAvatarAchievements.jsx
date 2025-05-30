import React from "react";
import { FaTrophy } from "react-icons/fa";

export default function UserAvatarAchievements() {
  return (
    <div className="flex flex-col items-center p-4 h-full">
      {/* Imagen del avatar */}
      <img
        src="/avatar/avatar.png"
        alt="Avatar"
        className="h-[32rem] w-auto mb-4"
      />

      {/* Caja de logros estilo imagen */}
      <div className="bg-[#F8F2E2] rounded-xl shadow-md p-2 text-center w-60 border border-[#C3A553]">
        <h3 className="text-base o-b text-[#534133] mb-4 bg-[#F7E9BA] p-1 rounded-t-lg">
          Tus logros
        </h3>

        <div className="bg-[#cb874a] rounded-lg px-2 py-2 flex divide-x divide-[#d89a67] border-4 border-[#cf7e4a]">
          {/* Trofeo 1 */}
          <div className="flex-1 flex items-center justify-center space-x-1 text-[#fde49b] bg-[#c16f3b] rounded p-1 mr-1">
            <FaTrophy />
            <span className="font-medium">4</span>
          </div>
          {/* Trofeo 2 */}
          <div className="flex-1 flex items-center justify-center space-x-1 text-[#fde49b] bg-[#c16f3b] rounded p-1 ml-1">
            <FaTrophy />
            <span className="font-medium">4</span>
          </div>
        </div>
      </div>
    </div>
  );
}
