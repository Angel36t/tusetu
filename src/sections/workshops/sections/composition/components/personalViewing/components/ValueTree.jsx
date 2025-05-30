import React, { useState } from "react";

export default function ValueTree({ values }) {
  const [selectedValue, setSelectedValue] = useState(null);

  if (!values || values.length < 1) return null;

  const [root, child1, child2, grandchild1, grandchild2] = values;

  const getNodeClasses = (value) => {
    const isSelected = selectedValue === value?.dominant;
    return [
      "px-6 py-2 rounded shadow w-[120px] text-center cursor-pointer transition-colors",
      isSelected ? "bg-blue-500 text-white" : "bg-white text-gray-800"
    ].join(" ");
  };

  return (
    <div className="flex flex-col items-center text-sm text-gray-700 font-medium p-6 rounded-md relative overflow-visible">
      {/* Nivel 0 - Raíz */}
      <div
        className={`bg-[#3cb4a7] text-white px-6 py-2 rounded-md shadow z-10 w-[120px] text-center cursor-pointer ${
          selectedValue === root?.dominant ? "bg-blue-500" : ""
        }`}
        onClick={() => setSelectedValue(root?.dominant)}
      >
        {root?.dominant}
      </div>

      {/* Conexión diagonal hacia hijos */}
      <div className="relative h-8 w-40 z-0">
        <div className="absolute left-[20%] top-0 h-8 w-0.5 rotate-[30deg] origin-top-left border-l-2 border-dashed border-[#a1836b] z-0" />
        <div className="absolute right-[20%] top-0 h-8 w-0.5 -rotate-[30deg] origin-top-right border-l-2 border-dashed border-[#a1836b] z-0" />
      </div>

      {/* Nivel 1 - Hijos */}
      <div className="flex gap-36 justify-center items-start relative z-10">
        {/* Hijo 1 */}
        {child1 && (
          <div
            className={getNodeClasses(child1)}
            onClick={() => setSelectedValue(child1.dominant)}
          >
            {child1.dominant}
          </div>
        )}

        {/* Hijo 2 */}
        {child2 && (
          <div
            className={getNodeClasses(child2)}
            onClick={() => setSelectedValue(child2.dominant)}
          >
            {child2.dominant}
          </div>
        )}
      </div>

      {/* Diagonales hacia nietos */}
      <div className="relative h-8 w-full z-0 mt-2">
        <div className="absolute left-[22%] top-0 h-10 w-0.5 rotate-[35deg] origin-top-left border-l-2 border-dashed border-[#a1836b] z-0" />
        <div className="absolute right-[22%] top-0 h-10 w-0.5 -rotate-[35deg] origin-top-right border-l-2 border-dashed border-[#a1836b] z-0" />
      </div>

      {/* Nivel 2 - Nietos */}
      <div className="flex gap-52 justify-center z-10">
        {grandchild1 && (
          <div
            className={getNodeClasses(grandchild1)}
            onClick={() => setSelectedValue(grandchild1.dominant)}
          >
            {grandchild1.dominant}
          </div>
        )}
        {grandchild2 && (
          <div
            className={getNodeClasses(grandchild2)}
            onClick={() => setSelectedValue(grandchild2.dominant)}
          >
            {grandchild2.dominant}
          </div>
        )}
      </div>
    </div>
  );
}
