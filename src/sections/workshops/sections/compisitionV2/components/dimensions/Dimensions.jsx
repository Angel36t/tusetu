import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dimensions() {
  const [data, setData] = useState({
    relacional: Array(6).fill(''),
    recreacional: Array(6).fill(''),
    profesional: Array(6).fill(''),
  });

  const navigate = useNavigate();

  const handleChange = (category, index, value) => {
    setData((prevData) => ({
      ...prevData,
      [category]: prevData[category].map((item, i) =>
        i === index ? value : item
      ),
    }));
  };

  const handleRedirect = (value) => {
    if (value) {
      const route = `/talleres/composicion/dimensiones/${value.toLowerCase()}`;
      navigate(route);
    } else {
      alert('Por favor, escribe algo antes de redirigir.');
    }
  };

  const handleSave = () => {
    alert('Datos guardados correctamente');
  };

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-8">3 Dimensiones Fijas y 3 Dimensiones Moldeables</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="p-4 bg-gray-200 border border-gray-300">Espiritual</th>
              <th className="p-4 bg-gray-200 border border-gray-300">Corporal</th>
              <th className="p-4 bg-gray-200 border border-gray-300">Mental</th>
              <th className="p-4 bg-blue-200 border border-gray-300">Relacional</th>
              <th className="p-4 bg-blue-200 border border-gray-300">Recreacional</th>
              <th className="p-4 bg-blue-200 border border-gray-300">Profesional</th>
            </tr>
          </thead>
          <tbody>
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <tr key={index}>
                  <td className="p-4 border border-gray-300 text-center">
                    {index === 0 && 'Esencia / Fuente'}
                    {index === 1 && 'Creencias / Fe'}
                  </td>
                  <td className="p-4 border border-gray-300 text-center">
                    {index === 0 && 'Saludable'}
                  </td>
                  <td className="p-4 border border-gray-300 text-center">
                    {index === 0 && 'A. Coeficiente Intelectual'}
                    {index === 1 && 'B. Inteligencia Emocional'}
                  </td>
                  {['relacional', 'recreacional', 'profesional'].map((category) => (
                    <td className="p-4 border border-gray-300" key={category}>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={data[category][index]}
                          onChange={(e) =>
                            handleChange(category, index, e.target.value)
                          }
                          className="w-full border rounded px-2 py-1"
                          placeholder="Escribe aquí"
                        />
                        <button
                          onClick={() => handleRedirect(data[category][index])}
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                        >
                          Ir
                        </button>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={handleSave}
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Guardar Datos
      </button>
    </div>
  );
}
