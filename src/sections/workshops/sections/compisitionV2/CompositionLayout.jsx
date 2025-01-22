import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeComposition = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasWatchedVideo, setHasWatchedVideo] = useState(false);
  const navigate = useNavigate(); 

  const columns = {
    Relacional: [
      "Hij@",
      "Herman@",
      "Pareja",
      "Padre/madre",
      "Abuelos",
      "Familiar (nieto, primo, sobrino)",
      "Padrino/madrina",
      "Amigo",
      "Guardian",
      "Tutor",
    ],
    Recreacional: [
      "Futbolista",
      "Alpinista",
      "Senderista",
      "Paracaidista",
      "Surfista",
      "Piloto",
      "Jinete",
      "Jardinero",
      "Jugador de mesa",
      "Lector",
      "Somelier",
      "Parrillero",
      "Filántropo",
      "Activista",
      "Organizador",
      "Explorador",
      "Viajero",
      "Ciclista",
      "Bailarina",
      "Gimnasta",
      "Pescador",
      "Golfista",
      "Paddle-ista",
      "Tenista",
    ],
    Profesional: [
      "Licenciado",
      "Ingeniero",
      "Abogado",
      "Doctor",
      "Músico",
      "Consultor",
      "Maestro",
      "Programador",
      "Diseñador",
      "Productor",
      "Educador",
      "Emprendedor",
      "Innovador",
      "Empresario",
      "Comerciante",
      "Empleado",
      "Colaborador",
      "Conferencista",
      "Escritor",
      "Chef",
      "Inversionista",
      "Networker",
    ],
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setHasWatchedVideo(true);
  };

  const renderColumn = (title, items) => {
    if (title === "Recreacional" || title === "Profesional") {
      const half = Math.ceil(items.length / 2);
      const firstHalf = items.slice(0, half);
      const secondHalf = items.slice(half);

      return (
        <div
          key={title}
          className="bg-white rounded-lg shadow-md p-6 w-full"
          style={{ minHeight: "350px" }}
        >
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">{title}</h2>
          <div className="grid grid-cols-2 gap-4">
            <ul className="space-y-2">
              {firstHalf.map((item, index) => (
                <li key={index} className="text-gray-600">
                  {item}
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {secondHalf.map((item, index) => (
                <li key={index} className="text-gray-600">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    return (
      <div
        key={title}
        className="bg-white rounded-lg shadow-md p-6 w-full"
        style={{ minHeight: "350px" }}
      >
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">{title}</h2>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-gray-600">
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div
      className="p-6 min-h-screen bg-cover bg-center flex flex-col items-center"
      style={{
        backgroundImage: `url('/bg/bg-price.jpg')`,
      }}
    >
      <h1 className="text-3xl font-bold text-center text-white m-16">
        El auto-compromiso : Tu Composición
      </h1>
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          {Object.keys(columns).map((key) => renderColumn(key, columns[key]))}
        </div>
      </div>
      <div className="text-center mt-8 flex justify-center gap-4">
        <button
          onClick={openModal}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          Ver Video
        </button>
        {hasWatchedVideo && (
          <button
          onClick={() => navigate("/talleres/composicion/dimensiones")} // Redirigir al usuario
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition duration-300"
          >
            Siguiente Paso
          </button>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div
            className="relative bg-gray-900 w-full max-w-4xl rounded-lg overflow-hidden"
            style={{ height: "60%" }} 
          >
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video"
              className="w-full h-full"
              allow="autoplay; fullscreen"
            ></iframe>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeComposition;
