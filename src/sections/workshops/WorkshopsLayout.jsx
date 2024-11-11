import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import workshopsData from "./config/workshops.json";

export default function WorkshopsLayout() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-start gap-8 p-8">
      {workshopsData.map((workshop) => (
        <WorkshopCard
          key={workshop.id}
          workshop={workshop}
          navigate={navigate}
        />
      ))}
    </div>
  );
}

function WorkshopCard({ workshop, navigate }) {
  const [progress, setProgress] = useState(0);
  const [current, total] = workshop.progress.split("/").map(Number);
  const progressPercentage = (current / total) * 100;

  useEffect(() => {
    // Animación para que el progreso vaya de 0 al porcentaje deseado
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= progressPercentage) {
          clearInterval(interval);
          return progressPercentage;
        }
        return prev + 1;
      });
    }, 15); // Aumenta el valor de progreso cada 15ms
  }, [progressPercentage]);

  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className="w-64 bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center"
  
    >
      <div className="relative w-24 h-24 flex items-center justify-center">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 80 80"
          className="absolute top-0 left-0"
        >
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="4"
          />
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            stroke="#66CC9B"
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{
              transition: "stroke-dashoffset 0.3s ease-in-out",
            }}
          />
        </svg>

        <div className="absolute w-20 h-20 rounded-full overflow-hidden bg-white">
          <img
            src={workshop.image}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      <h2
        className="mt-4 text-lg font-semibold text-center"
        style={{
          color: "#1DA1F2",
        }}
      >
        {workshop.title}
      </h2>
      <p className="text-gray-600 text-center">{workshop.instructor}</p>
      <p className="mt-2 text-gray-700 text-center font-medium">
        {workshop.progress}
      </p>
      <button
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
        style={{
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          backgroundColor: "#1DA1F2",
        }}
        onClick={() => navigate(workshop.link)}
      >
        Iniciar
      </button>
    </div>
  );
}
