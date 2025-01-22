import { useEffect, useState } from "react";

import { getPrimarySecondaryValues, registerPrimarySecondaryValues } from "../../api/api";
import CongratulationsDominant from "./CongratulationsDominant";
import { useUser } from "../../../../../../context/UserContext";

function DominantValue() {
  const [mainValues, setMainValues] = useState([]);
  const [dominantValues, setDominantValues] = useState({});
  const [loading, setLoading] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);

  const { user } = useUser();
  const userId = user.id;

  // Cargar valores desde el endpoint al montar el componente
  useEffect(() => {
    const fetchValues = async () => {
      try {
        const response = await getPrimarySecondaryValues(userId);
        const formattedValues = Object.entries(response.data.values).map(
          ([key, value]) => ({
            name: key,
            dominant: value.dominant,
            secondaryValues: value.secondaryValues,
          })
        );
        setMainValues(formattedValues);

        // Inicializar dominantValues desde los datos existentes
        const initialDominantValues = Object.fromEntries(
          Object.entries(response.data.values).map(([key, value]) => [
            key,
            value.dominant,
          ])
        );
        setDominantValues(initialDominantValues);
      } catch (error) {
        console.error("Error al cargar los valores:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchValues();
  }, [userId]);

  const handleSetDominant = (mainName, value) => {
    setDominantValues((prevDominantValues) => {
      const updatedValues = {
        ...prevDominantValues,
        [mainName]: prevDominantValues[mainName] === value ? null : value,
      };
      const allCompleted = mainValues.every(
        (main) => updatedValues[main.name] != null
      );
      setShowConfirm(allCompleted);
      return updatedValues;
    });
  };

  const handleSave = async () => {
    // Crear el objeto a enviar al backend
    const updatedValues = mainValues.reduce((acc, main) => {
      acc[main.name] = {
        dominant: dominantValues[main.name],
        secondaryValues: main.secondaryValues,
      };
      return acc;
    }, {});

    try {
      await registerPrimarySecondaryValues(userId, updatedValues);
      alert("Valores dominantes actualizados con éxito");
    } catch (error) {
      console.error("Error al guardar valores dominantes:", error);
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-8">
        <p className="text-gray-500">Cargando valores...</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto max-w-5xl mx-auto mt-8 px-4">
      <h2 className="text-2xl font-bold text-center mb-4 text-bl-100">
        Identifica tu valor "Dominante"
      </h2>
      <p className="text-gray-500 text-center mb-6">
        Selecciona un valor principal o secundario como valor dominante para
        cada fila.
      </p>
      <table className="w-full bg-white border border-gray-200 rounded-lg shadow-sm text-sm">
        <thead>
          <tr className="bg-bl-100 text-white uppercase">
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
                  dominantValues[main.name] === main.name ? "bg-blue-100" : ""
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
      {showConfirm && (
        <div className="text-center mt-6">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors duration-200"
          >
            Guardar valores dominantes
          </button>
        </div>
      )}
    </div>
  );
}

export default DominantValue;
