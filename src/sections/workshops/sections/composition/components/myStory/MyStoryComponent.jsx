import { useEffect, useState } from "react";

import { getLifeHistory, getUserMainValues, saveLifeHistory } from "../../api/api";
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
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Escribe tu historia
      </h1>

      {/* Congratulations Message */}
      {showCongratulations && (
        <div className="mb-6">
          <CongratulationsMyStory />
        </div>
      )}

      {/* Display Used Values */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {mainValues.map((value, index) => (
          <div
            key={index}
            className={`flex items-center px-4 py-2 rounded-lg shadow-sm font-medium text-sm ${
              usedValues.includes(value)
                ? "bg-blue-100 text-blue-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            <span className="mr-2">
              {usedValues.includes(value) ? "🌟" : "✨"}
            </span>
            {value}
          </div>
        ))}
      </div>

      {/* Text Area for Story Input */}
      <textarea
        value={story}
        onChange={handleStoryChange}
        placeholder="Escribe tu historia aquí (máximo 3000 palabras)"
        rows="10"
        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700 text-lg mb-4"
      />
      <p className="text-right text-gray-600 mt-2 mb-4">
        Palabras:{" "}
        <span
          className={wordCount > 3000 ? "text-red-600" : ""}
        >{`${wordCount}/3000`}</span>
      </p>
      {wordCount > 3000 && (
        <p className="text-red-600 text-sm text-center mt-1 mb-4">
          Ha alcanzado el límite de 3000 palabras.
        </p>
      )}

      {/* Save Story Button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={handleSaveStory}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-200"
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