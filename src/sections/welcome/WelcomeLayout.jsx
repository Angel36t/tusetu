
import { WorkshopCard } from "./Workshops";

export default function WelcomeLayout() {
  const userName = "Angel Bastian";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f9fa] relative">
      <div className="absolute top-8 left-8 flex items-center gap-4">
        <h1 className="text-4xl font-bold text-gray-800">
          Hola, <span className="text-blue-500">{userName}!</span>
        </h1>
        <img src="assets/dashboard/golden.png" alt="Logo" className="w-10 h-10" />
      </div>

      <WorkshopCard/>
    </div>
  );
}
