import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import workshopsData from "./config/workshops.json";

export default function WorkshopsLayout() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-4xl font-bold text-white ml-6 mt-4">
        Curso: Tu Se Tu
      </h1>

      <div className="flex justify-start gap-8 p-8">
        {workshopsData.map((workshop) => (
          <WorkshopCard
            key={workshop.id}
            workshop={workshop}
            navigate={navigate}
          />
        ))}
      </div>
    </>
  );
}

function WorkshopCard({ workshop, navigate }) {
  const [progress, setProgress] = useState(0);
  const [current, total] = workshop.progress.split("/").map(Number);
  const progressPercentage = (current / total) * 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= progressPercentage) {
          clearInterval(interval);
          return progressPercentage;
        }
        return prev + 1;
      });
    }, 15);
  }, [progressPercentage]);

  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const isAvailable = workshop.available !== false; // si no está, asumimos true por defecto

  return (
    <div className="relative">
      {/* Blur effect container */}
      <div
        className={`w-64 bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center transition ${
          !isAvailable ? "blur-sm opacity-80 pointer-events-none" : ""
        }`}
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
          className="mt-4 text-lg w-b text-center"
          style={{
            color: "#1DA1F2",
          }}
        >
          {workshop.title}
        </h2>
        <p className="text-gray-600 text-center w-b">{workshop.instructor}</p>
        {/* <p className="mt-2 text-gray-700 text-center font-medium">
          {workshop.progress}
        </p> */}

        <button
          className={`mt-4 px-6 py-2 m-b rounded-full shadow-lg transition ${
            isAvailable
              ? "bg-[#DAE462] hover:bg-blue-600"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          style={{
            boxShadow: isAvailable ? "0px 4px 8px rgba(0, 0, 0, 0.2)" : "none",
            backgroundColor: isAvailable ? "#DAE462" : "#A0AEC0",
          }}
          disabled={!isAvailable}
          onClick={() => isAvailable && navigate(workshop.link)}
        >
          {isAvailable ? "Iniciar" : "Próximamente"}
        </button>
      </div>

      {/* Optional overlay "Próximamente" */}
      {!isAvailable && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-[#DAE462] m-b text-xl px-4 py-2 rounded-2xl">
            Próximamente
          </div>
        </div>
      )}
    </div>
  );
}
