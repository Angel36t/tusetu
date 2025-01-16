import React, { useState } from "react";
import CongratulationsMyStory from "./CongratulationsMyStory";
import DragAndDropTable from "./TableValuesStory";
// import DragAndDropTable from "./TableValuesStory";
// import TableValuesStory from "./TableValuesStory";

const mainValues = [
  "Abundancia",
  "Audacia",
  "Aventura",
  "Balance",
  "Bondad",
  "Calidad",
  "Calma",
  "Conciencia",
  "Contribución",
  "Dedicación",
];

const MyStoryComponent = () => {
  const [story, setStory] = useState("");
  const [usedValues, setUsedValues] = useState([]);
  const [isSaved, setIsSaved] = useState(false);

  const handleStoryChange = (e) => {
    const text = e.target.value;
    setStory(text);

    const detectedValues = mainValues.filter((value) =>
      new RegExp(`\\b${value}\\b`, "i").test(text)
    );
    setUsedValues(detectedValues);
  };

  const handleSaveStory = () => {
    setIsSaved(true);
  };

  const wordCount = story.trim().split(/\s+/).length;

  if (isSaved) {
    return <CongratulationsMyStory />;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Escribe tu historia
      </h1>

      <DragAndDropTable />

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
    </div>
  );
};

export default MyStoryComponent;
