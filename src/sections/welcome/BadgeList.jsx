import React from "react";

const BadgeList = () => {
  // Constante de puntos del usuario
  const USER_POINTS = 750; // Puedes cambiar este valor para simular diferentes progresos

  // Lista de insignias con prioridad numérica y puntos requeridos para cada una
  const badges = [
    {
      id: 1,
      name: "Medalla de Oro",
      image: "/assets/badges/gold-medal.png",
      pointsRequired: 250,
    },
    {
      id: 2,
      name: "Medalla de Plata",
      image: "/assets/badges/silver-medal.png",
      pointsRequired: 500,
    },
    {
      id: 3,
      name: "Medalla de Bronce",
      image: "/assets/badges/bronze-medal.png",
      pointsRequired: 750,
    },
    {
      id: 4,
      name: "Estrella de Contribución",
      image: "/assets/badges/award-5.png",
      pointsRequired: 1000,
    },
    {
      id: 5,
      name: "Logro de Velocidad",
      image: "/assets/badges/award-4.png",
      pointsRequired: 1250,
    },
    {
      id: 6,
      name: "Insignia de Liderazgo",
      image: "/assets/badges/award-2.png",
      pointsRequired: 1500,
    },
    {
      id: 7,
      name: "Insignia de Innovación",
      image: "/assets/badges/award.png",
      pointsRequired: 1750,
    },
    {
      id: 8,
      name: "Experto en Colaboración",
      image: "/assets/badges/medal-blue.png",
      pointsRequired: 2000,
    },
    {
      id: 9,
      name: "Insignia de Compromiso",
      image: "/assets/badges/tropy-star.png",
      pointsRequired: 2250,
    },
    {
      id: 10,
      name: "Superación Personal",
      image: "/assets/badges/trophy-cup.png",
      pointsRequired: 2500,
    },
  ];

  // Calcular la cantidad de insignias desbloqueadas
  const unlockedBadges = badges.filter(
    (badge) => USER_POINTS >= badge.pointsRequired
  ).length;
  const progressPercentage = Math.round((unlockedBadges / badges.length) * 100);

  return (
    <div className="absolute top-8 left-[56rem]  flex justify-center items-center min-h-screen">
      <div className="w-full max-w-sm bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-3 text-center">Insignias</h2>{" "}
        {/* <span className="text-bl-100 m-b">{USER_POINTS} puntos</span> */}
        {/* Barra de Progreso */}
        <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
          <div
            className="bg-blue-500 h-3 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="text-sm text-center mb-4">
          {progressPercentage}% de Insignias Conseguido
        </p>
        {/* Lista de Insignias */}
        <ol className="space-y-1">
          {badges.map((badge, index) => (
            <li
              key={badge.id}
              className={`flex items-center p-2 rounded-md shadow-sm text-sm ${
                USER_POINTS >= badge.pointsRequired
                  ? "bg-gray-50"
                  : "bg-gray-200 opacity-50"
              }`}
            >
              <span className="font-bold text-gray-600 mr-2">{index + 1}.</span>
              <img
                src={badge.image}
                alt={badge.name}
                className="w-6 h-6 object-contain mr-2"
                style={{
                  filter:
                    USER_POINTS >= badge.pointsRequired
                      ? "none"
                      : "grayscale(100%)",
                }}
              />
              <span className="text-gray-700">
                {badge.name}{" "}
                {USER_POINTS >= badge.pointsRequired
                  ? ""
                  : `(Necesitas ${badge.pointsRequired} puntos)`}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BadgeList;
