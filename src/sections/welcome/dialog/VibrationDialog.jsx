// src/components/VibrationDialog.jsx
import React from "react";

export default function VibrationDialog({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl w-3/4 max-w-4xl p-6 relative">
        <button
          className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl font-bold"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-xl font-semibold mb-4">Visualiza todos tus valores</h2>
        <div className="overflow-y-auto max-h-[400px]">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left">Valor dominante</th>
                <th className="p-2 text-left">Virtudes</th>
                <th className="p-2 text-left">Principio</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2">Abundancia</td>
                  <td className="p-2 space-x-2 flex flex-wrap gap-1">
                    {["Altruismo", "Aprendizaje", "Caridad", "Apoyo", "Autenticidad", "Colaboración"].map((v, i) => (
                      <span key={i} className="bg-gray-100 px-2 py-1 rounded text-sm">{v}</span>
                    ))}
                  </td>
                  <td className="p-2">
                    <span className="bg-gray-100 px-2 py-1 rounded text-sm">Apoyo</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
