import React, { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import VibrationDialog from "./dialog/VibrationDialog";
// import VibrationDialog from "../components/VibrationDialog"; // ajusta ruta si es necesario

export default function UserDashboardRight() {
  const { user } = useUser();
  const [isVibrationModalOpen, setIsVibrationModalOpen] = useState(false);

  const phrases = [
    "Cree en ti mismo y todo será posible.",
    "El éxito es la suma de pequeños esfuerzos repetidos cada día.",
    "Cada día es una nueva oportunidad para mejorar.",
    "La constancia vence al talento cuando el talento no es constante.",
    "No esperes por las oportunidades, créalas.",
    "El único límite eres tú.",
    "Levántate con determinación, acuéstate con satisfacción.",
    "La disciplina es el puente entre metas y logros.",
    "Hazlo con pasión o no lo hagas.",
    "El futuro depende de lo que hagas hoy.",
    "Persiste. Lo que hoy es difícil, mañana será tu orgullo.",
    "No tienes que ser el mejor, solo mejor que ayer.",
    "No se trata de tener tiempo, sino de hacer tiempo.",
    "Las metas no se logran por suerte, se logran con esfuerzo.",
    "Cada paso que das te acerca más a tu meta.",
  ];

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Buenos días";
    if (hour < 18) return "Buenas tardes";
    return "Buenas noches";
  };

  const getRandomIndex = (excludeIndex) => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * phrases.length);
    } while (newIndex === excludeIndex);
    return newIndex;
  };

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(() =>
    Math.floor(Math.random() * phrases.length)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => getRandomIndex(prevIndex));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const imageClass =
    "transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-lg shadow-sm cursor-pointer";

  return (
    <div className="py-12 px-28 w-full h-full space-y-6 overflow-y-auto">
      <div className="bg-[#865c44] text-white rounded-xl px-6 py-6 text-center shadow-md border-2 border-white">
        <h2 className="text-xl">
          {getGreeting()}, {user.name} ☀️
        </h2>
        <p className="text-sm mt-1 italic">"{phrases[currentPhraseIndex]}"</p>
      </div>

      {/* 🟨 Tres cuadros */}
      <div className="grid grid-cols-3 gap-4">
        <img
          src="/dashboard/action-container-vibration.png"
          alt="Vibracion dashboard"
          className={imageClass}
          onClick={() => setIsVibrationModalOpen(true)}
        />
        <img
          src="/dashboard/action-container-composicion.png"
          alt="Composición"
          className={imageClass}
        />
        <img
          src="/dashboard/action-container-creacion.png"
          alt="Creación"
          className={imageClass}
        />
      </div>

      {/* 🟩 Dos cuadros */}
      <div className="grid grid-cols-3 gap-4">
        <img
          src="/dashboard/action-container-excursion.png"
          alt="Excursión"
          className={`col-span-2 ${imageClass}`}
          height={240}
        />
        <img
          src="/dashboard/excursiones.png"
          alt="Excursiones"
          className={imageClass}
        />
      </div>

      {/* Modal */}
      <VibrationDialog
        isOpen={isVibrationModalOpen}
        onClose={() => setIsVibrationModalOpen(false)}
      />
    </div>
  );
}
