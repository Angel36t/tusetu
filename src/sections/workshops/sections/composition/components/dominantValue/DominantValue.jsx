import { useEffect, useState } from "react";
import {
  getPrimarySecondaryValues,
  registerPrimarySecondaryValues,
} from "../../api/api";
import { useUser } from "../../../../../../context/UserContext";
import SecondaryValuesSkeleton from "../skeleton/SecondaryValuesSkeleton";

function DominantValue() {
  const [mainValues, setMainValues] = useState([]);
  const [dominantValues, setDominantValues] = useState({});
  const [loading, setLoading] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);

  const { user } = useUser();
  const userId = user.id;

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
    setDominantValues((prev) => {
      const updated = {
        ...prev,
        [mainName]: prev[mainName] === value ? null : value,
      };
      const allCompleted = mainValues.every(
        (main) => updated[main.name] != null
      );
      setShowConfirm(allCompleted);
      return updated;
    });
  };

  const handleSave = async () => {
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
      <SecondaryValuesSkeleton/>
    );
  }

  return (
    <div className="overflow-x-auto max-w-5xl mx-auto mt-8 px-4">
      <div className="bg-[#F7E9BA] p-4 rounded-md">
        <h2 className="text-fs-18 text-center mb-4 o-b">
          Identifica tu valor "Dominante"
        </h2>
        <p className="text-center text-fs-14">
          Selecciona un valor principal o secundario como valor dominante para
          cada fila.
        </p>
      </div>

      <div className="border-t-2 border-[#BEB79B] shadow-sm w-full my-6" />

      <table className="w-full bg-white text-sm text-left text-gray-700 rounded-xl overflow-hidden shadow-md">
        <thead>
          <tr className="bg-[#70A2D3] text-white">
            <th className="px-4 py-3 border-b font-semibold text-sm">
              Valor principal
            </th>
            <th className="px-4 py-3 border-b font-semibold text-sm">
              Valores ligados
            </th>
            <th className="px-4 py-3 border-b font-semibold text-sm text-center">
              Conteo
            </th>
            <th className="px-4 py-3 border-b font-semibold text-sm text-center">
              Valor dominante
            </th>
          </tr>
        </thead>
        <tbody>
          {mainValues.map((main, index) => (
            <tr
              key={`${main.name}-${index}`}
              className="hover:bg-[#F4F9FF] transition-colors duration-200"
            >
              {/* Valor principal */}
              <td className="px-4 py-3 border-b  font-medium">
                <div
                  onClick={() => handleSetDominant(main.name, main.name)}
                  className={`px-3 py-1 rounded-md text-xs cursor-pointer transition-colors duration-200 font-semibold text-center inline-block w-[120px] ${
                    dominantValues[main.name] === main.name
                      ? "bg-[#DAE462] text-black"
                      : "bg-[#D9E5EC] text-gray-800"
                  }`}

                >
                  {main.name}
                </div>
              </td>

              {/* Valores secundarios */}
              <td className="px-4 py-3 border-b">
                {main.secondaryValues.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {main.secondaryValues.map((value) => (
                      <div
                        key={value}
                        onClick={() => handleSetDominant(main.name, value)}
                        className={`inline-block px-3 py-1 rounded-md text-xs cursor-pointer transition-colors duration-200 ${
                          dominantValues[main.name] === value
                            ? "bg-[#DAE462] text-black font-semibold"
                            : "bg-[#F0F0F0] text-gray-700"
                        }`}
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                ) : (
                  <span className="text-gray-400 text-sm">
                    No hay valor secundario asignado
                  </span>
                )}
              </td>

              {/* Conteo */}
              <td className="px-4 py-3 border-b text-center font-semibold">
                {main.secondaryValues.length}
              </td>

              {/* Valor dominante */}
              <td className="px-4 py-3 border-b text-center">
                {dominantValues[main.name] ? (
                  <span className="inline-flex items-center gap-2 text-black px-3 py-1 rounded-full text-xs o-b  justify-center">
                    <img
                      src="/icon/circle-star.svg"
                      alt="Dominante"
                      className="w-5 h-5"
                    />
                    {dominantValues[main.name]}
                  </span>
                ) : (
                  <span className="text-gray-300">-</span>
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
            className="px-4 py-2 bg-[#DAE462] text-black font-semibold rounded hover:bg-[#cdd85c] transition-colors duration-200"
          >
            Guardar valores dominantes
          </button>
        </div>
      )}
    </div>
  );
}

export default DominantValue;
