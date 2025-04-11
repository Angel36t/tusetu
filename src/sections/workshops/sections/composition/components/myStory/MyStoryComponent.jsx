import { useEffect, useState } from "react";

import {
  getLifeHistory,
  getUserMainValues,
  saveLifeHistory,
} from "../../api/api";
import CongratulationsMyStory from "./CongratulationsMyStory";
import { useUser } from "../../../../../../context/UserContext";

const MyStoryComponent = () => {
  const [story, setStory] = useState("");
  const [usedValues, setUsedValues] = useState([]);
  const [mainValues, setMainValues] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showCongratulations, setShowCongratulations] = useState(false);

  const { user } = useUser();
  const userId = user.id;

  // Normaliza una cadena eliminando acentos y convirtiendo a minúsculas
  const normalizeText = (text) =>
    text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const detectUsedValues = (text, values) => {
    const normalizedText = normalizeText(text);
    const detectedValues = values.filter((value) =>
      new RegExp(`\\b${normalizeText(value)}\\b`, "i").test(normalizedText)
    );
    setUsedValues(detectedValues);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch user's main values
        const mainValuesData = await getUserMainValues(userId);
        const normalizedValues = mainValuesData.map((value) => value.name);
        setMainValues(normalizedValues);

        // Fetch user's life story
        const lifeHistoryData = await getLifeHistory(userId);
        if (lifeHistoryData.success) {
          const savedStory = lifeHistoryData.data.text || "";
          setStory(savedStory);

          // Detect used values after fetching both main values and story
          detectUsedValues(savedStory, normalizedValues);
        }
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  const handleStoryChange = (e) => {
    const text = e.target.value;
    setStory(text);
    detectUsedValues(text, mainValues); // Detect values as the user types
  };

  const handleSaveStory = async () => {
    try {
      const payload = {
        id_user: userId,
        text: story,
      };

      await saveLifeHistory(payload);

      const allValuesUsed = mainValues.every((value) =>
        usedValues.includes(value)
      );

      setIsComplete(allValuesUsed);

      if (allValuesUsed) {
        setShowCongratulations(true);
      } else {
        alert("Avance guardado, pero faltan valores por incluir.");
      }
    } catch (error) {
      console.error("Error saving story:", error);
    }
  };

  const wordCount = story.trim().split(/\s+/).length;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600 text-lg">Cargando datos...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto p-6  rounded-lg bg-[#F8F2E2] ">
      <div className="bg-[#F7E9BA] p-4 rounded-md my-6">
        <h2 className="text-fs-18 text-center mb-4 o-b">Escribe tu historia</h2>
        <p className="text-center text-fs-14">
          Lorem ipsum dolor sit amet consectetur. Maecenas vestibulum congue
          pellentesque porta sed scelerisque. Bibendum nisl varius ligula lacus.
        </p>
      </div>


      {/* Congratulations Message */}
      {showCongratulations && (
        <div className="mb-6">
          <CongratulationsMyStory />
        </div>
      )}

      {/* Display Used Values */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {mainValues.map((value, index) => {
          const isUsed = usedValues.includes(value);

          return (
            <div
              key={index}
              className={`w-36 flex items-center justify-center gap-2 px-4 py-2 rounded-xl o-b text-sm border text-center
          ${
            isUsed
              ? "bg-teal-600 text-white border-transparent"
              : "bg-transparent text-[#7C6D4C] border-[#7C6D4C]"
          }
        `}
            >
              <span className="text-base">{isUsed ? "✨" : "★"}</span>
              <span>{value}</span>
            </div>
          );
        })}
      </div>

      {/* Text Area for Story Input */}
      <div className="relative bg-white border border-gray-300 rounded-lg p-4 shadow-sm overflow-hidden w-full">
        {/* Cuadrícula más grande */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {Array.from({ length: 30 }).map((_, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className="absolute left-0 w-full border-b border-gray-200"
              style={{ top: `${rowIndex * 36}px` }} // Altura: 36px
            />
          ))}
          {Array.from({ length: 40 }).map((_, colIndex) => (
            <div
              key={`col-${colIndex}`}
              className="absolute top-0 h-full border-l border-gray-200"
              style={{ left: `${colIndex * 36}px` }} // Ancho: 36px
            />
          ))}
        </div>

        {/* Círculos ajustados */}
        <div className="absolute top-6 bottom-6 left-2 flex flex-col justify-between z-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-gray-300 opacity-70"
              style={{ marginTop: i === 0 ? 0 : "48px" }} // Más espacio entre ellos
            />
          ))}
        </div>

        {/* Contenido ajustado */}
        <div className="relative z-20 pl-16">
          <div className="relative left-[-33px] bottom-[-30px]">
            <img src="/icon/pencil.svg" />
          </div>

          <textarea
            value={story}
            onChange={handleStoryChange}
            placeholder="Escribe tu historia aquí..."
            rows="10"
            className="o-m w-full bg-transparent resize-none focus:outline-none text-gray-800 text-base leading-[36px] tracking-wide"
          />
        </div>

        <p className="relative z-20 text-right text-sm text-gray-600 mt-2">
          Palabras:{" "}
          <span className={wordCount > 3000 ? "text-red-600" : ""}>
            {wordCount}/3000
          </span>
        </p>
      </div>

      {wordCount > 3000 && (
        <p className="text-red-600 text-sm text-center mt-1 mb-4">
          Ha alcanzado el límite de 3000 palabras.
        </p>
      )}

      {/* Save Story Button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={handleSaveStory}
          className="mt-10 bg-[#DAE462] w-b text-[#2F2F2F] rounded-md text-sm border-r-[4px] border-b-[4px] border-[#C5CD59] shadow-[2px_2px_4px_rgba(0,0,0,0.1)] hover:bg-[#cbdc50] transition duration-200 py-[12px] px-[52px]"
        >
          Guardar historia
        </button>
      </div>

      {/* Show "Advance saved" message */}
      {!isComplete && showCongratulations && (
        <div className="text-center text-yellow-600 font-medium mt-4">
          Avance guardado, pero faltan valores por incluir.
        </div>
      )}
    </div>
  );
};

export default MyStoryComponent;
