import React, { useState } from "react";
import CongratulationsDominant from "./CongratulationsDominant";

function DominantValue() {
  const mainValues = [
    { name: "Abundancia", secondaryValues: ["Riqueza", "Prosperidad", "Crecimiento"] },
    { name: "Audacia", secondaryValues: ["Confianza", "Decisión", "Iniciativa"] },
    { name: "Aventura", secondaryValues: ["Exploración", "Curiosidad", "Descubrimiento"] },
    { name: "Balance", secondaryValues: ["Equilibrio", "Armonía", "Estabilidad"] },
    { name: "Bondad", secondaryValues: ["Generosidad", "Compasión", "Altruismo"] },
    { name: "Calidad", secondaryValues: ["Excelencia", "Atención", "Esfuerzo"] },
    { name: "Calma", secondaryValues: ["Serenidad", "Paz", "Tranquilidad", "Reflexión"] },
    { name: "Conciencia", secondaryValues: ["Presencia", "Atención Plena", "Reflexión"] },
    { name: "Contribución", secondaryValues: ["Apoyo", "Entrega", "Cooperación"] },
    { name: "Dedicación", secondaryValues: ["Esfuerzo", "Disciplina", "Compromiso"] },
  ];

  const [dominantValues, setDominantValues] = useState({});
  const [completed, setCompleted] = useState(false);

  const handleSetDominant = (mainName, value) => {
    setDominantValues((prevDominantValues) => {
      const updatedValues = {
        ...prevDominantValues,
        [mainName]: prevDominantValues[mainName] === value ? null : value,
      };
      // Check if all main values have a dominant value selected
      const allCompleted = mainValues.every(
        (main) => updatedValues[main.name] != null
      );
      setCompleted(allCompleted);
      return updatedValues;
    });
  };

  const handleSave = () => {
    setCompleted(false);
  };

  return (
    <div className="overflow-x-auto max-w-5xl mx-auto mt-8 px-4">
      <h2 className="text-2xl font-bold text-center mb-4">
        Identifica tu valor "Dominante"
      </h2>
      {!completed ? (
        <>
          <p className="text-gray-500 text-center mb-6">
            Selecciona un valor principal o secundario como valor dominante para
            cada fila.
          </p>
          <table className="w-full bg-white border border-gray-200 rounded-lg shadow-sm text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700 uppercase">
                <th className="px-6 py-3 border-b text-left font-semibold text-sm">
                  Valor Principal
                </th>
                <th className="px-6 py-3 border-b text-left font-semibold text-sm">
                  Valores Secundarios
                </th>
                <th className="px-6 py-3 border-b text-center font-semibold text-sm">
                  Conteo
                </th>
                <th className="px-6 py-3 border-b text-center font-semibold text-sm">
                  Valor Dominante
                </th>
              </tr>
            </thead>
            <tbody>
              {mainValues.map((main) => (
                <tr
                  key={main.name}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td
                    className={`px-6 py-4 border-b text-gray-800 font-medium text-sm cursor-pointer ${
                      dominantValues[main.name] === main.name
                        ? "bg-blue-100"
                        : ""
                    }`}
                    onClick={() => handleSetDominant(main.name, main.name)}
                  >
                    {main.name}
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    <div className="flex flex-wrap gap-2">
                      {main.secondaryValues.map((value) => (
                        <div
                          key={value}
                          onClick={() => handleSetDominant(main.name, value)}
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs cursor-pointer ${
                            dominantValues[main.name] === value
                              ? "bg-blue-100 text-blue-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {value}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 border-b text-center text-gray-800 font-medium text-sm">
                    {main.secondaryValues.length}
                  </td>
                  <td className="px-6 py-4 border-b text-center text-sm">
                    {dominantValues[main.name] ? (
                      <span className="text-blue-600 font-semibold">
                        {dominantValues[main.name]}
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {completed && (
            <div className="text-center mt-6">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors duration-200"
              >
                Guardar valores dominantes
              </button>
            </div>
          )}
        </>
      ) : (
        <CongratulationsDominant/>
      )}
    </div>
  );
}

export default DominantValue;
