import { useState, useEffect } from "react";

import { PieChart, Pie, Cell, Tooltip } from "recharts";

// Componente para cada taller
export function WorkshopCard() {
  const workshops = [
    {
      title: "Vibracion",
      progress: 70,
      color: "#2196F3",
      badges: [
        { src: "/assets/badges/gold-medal.png", alt: "Insignia de 10 valores" },
        {
          src: "/assets/badges/bronze-medal.png",
          alt: "Insignia de 20 valores",
        },
        {
          src: "/assets/badges/silver-medal.png",
          alt: "Insignia de 10 valores",
        },
      ],
    },
    {
      title: "Composicion",
      progress: 40,
      color: "#4CAF50",
      badges: [
        {
          src: "/assets/badges/award.png",
          alt: "Insignia de 15 valores",
        },
        {
          src: "/assets/badges/award-2.png",
          alt: "Insignia de 30 valores",
        },
      ],
    },
    {
      title: "Creacion",
      progress: 25,
      color: "#FF5722",
      badges: [
        {
          src: "/assets/badges/award-5.png",
          alt: "Insignia de 20 valores",
        },
      ],
    },
  ];

  return (
    <div className="absolute top-[10rem] left-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
      
      {workshops.map((workshop, index) => (
        <WorkshopProgressCard key={index} workshop={workshop} />
      ))}
    </div>
  );
}

function WorkshopProgressCard({ workshop }) {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    if (animatedProgress < workshop.progress) {
      const interval = setInterval(() => {
        setAnimatedProgress((prev) =>
          prev + 1 >= workshop.progress ? workshop.progress : prev + 1
        );
      }, 20);

      return () => clearInterval(interval);
    }
  }, [animatedProgress, workshop.progress]);

  return (
    <div className="bg-white w-64 rounded-lg shadow-lg p-6 flex flex-col items-center">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        {workshop.title}
      </h2>

      <PieChart width={150} height={150}>
        <Pie
          data={[
            { name: "Progreso", value: animatedProgress },
            { name: "Restante", value: 100 - animatedProgress },
          ]}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={55}
          outerRadius={70}
          startAngle={90}
          endAngle={-270}
          paddingAngle={5}
        >
          <Cell key="Progreso" fill={workshop.color} />
          <Cell key="Restante" fill="#e0e0e0" />
        </Pie>
        <Tooltip />
      </PieChart>

      <span className="text-2xl font-bold text-gray-800 mt-4">
        {animatedProgress}%
      </span>

      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {workshop.badges.slice(0, 6).map((badge, index) => (
          <img
            key={index}
            src={badge.src}
            alt={badge.alt}
            className="w-6 h-6 object-contain"
          />
        ))}
      </div>

      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-200">
        Ver detalles
      </button>
    </div>
  );
}
