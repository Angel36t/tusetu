import { useEffect, useState } from "react";

import {
  getLifeHistory,
  getUserMainValues,
  saveLifeHistory,
} from "../../api/api";
import CongratulationsMyStory from "./CongratulationsMyStory";
import { useUser } from "../../../../../../context/UserContext";
import UsedValuesList from "./components/UsedValuesList";
import StoryTextarea from "./components/StoryTextarea";
import SaveButton from "./components/SaveButton";
import LoadingScreen from "./components/LoadingScreen";
import AdvanceWarning from "./components/AdvanceWarning";
import DoublePyramid from "./components/DoublePyramid";

const MyStoryComponent = () => {
  const [story, setStory] = useState("");
  const [usedValues, setUsedValues] = useState([]);
  const [mainValues, setMainValues] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showCongratulations, setShowCongratulations] = useState(false);

  const { user } = useUser();
  const userId = user.id;

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

        const storedValues =
          JSON.parse(localStorage.getItem("order-values")) || [];
        const normalizedValues = storedValues.map((item) => item.dominant);
        setMainValues(normalizedValues);

        const lifeHistoryData = await getLifeHistory(userId);
        if (lifeHistoryData.success) {
          const savedStory = lifeHistoryData.data.text || "";
          setStory(savedStory);
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
    detectUsedValues(text, mainValues);
  };

  const handleSaveStory = async () => {
    try {
      await saveLifeHistory({ id_user: userId, text: story });

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

  // Aquí partimos los valores en 5 y 5
  const firstFive = mainValues.slice(0, 5).map((val) => ({ dominant: val }));
  const secondFive = mainValues.slice(5, 10).map((val) => ({ dominant: val }));

  if (loading) return <LoadingScreen />;

  return (
    <div className="mx-auto p-2 rounded-lg ">
      <div className="bg-[#F7E9BA] p-4 rounded-md my-6">
        <h2 className="text-fs-18 text-center mb-4 o-b">Escribe tu historia</h2>
        <p className="text-center text-fs-14">
          Aquí escribirás una historia personal en la que reflejarás tus valores
          principales. Piensa en momentos importantes de tu vida y cómo tus
          valores te guiaron. ¡Déjate llevar y sé auténtico!
        </p>
      </div>

      {showCongratulations && <CongratulationsMyStory />}

      {/* Pirámides de valores */}
      <DoublePyramid
        pyramid1Values={firstFive}
        pyramid2Values={secondFive}
        usedValues={usedValues}
      />

      {/* Lista de valores usados */}
      {/* <UsedValuesList mainValues={mainValues} usedValues={usedValues} /> */}

      {/* Textarea */}
      <StoryTextarea
        story={story}
        onChange={handleStoryChange}
        wordCount={wordCount}
      />

      {/* Validación límite de palabras */}
      {wordCount > 3000 && (
        <p className="text-red-600 text-sm text-center mt-1 mb-4">
          Ha alcanzado el límite de 3000 palabras.
        </p>
      )}

      {/* Botón de guardar */}
      <SaveButton onClick={handleSaveStory} />

      {/* Mensaje de avance guardado incompleto */}
      {!isComplete && showCongratulations && <AdvanceWarning />}
    </div>
  );
};

export default MyStoryComponent;
