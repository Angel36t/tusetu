import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import ValueTree from "./ValueTree";

// Componente: Item individual draggable
export function SortableItem({ id, dominant, secondaryCount }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <tr
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="border-t bg-white hover:bg-gray-50"
    >
      <td className="py-3 px-4 text-gray-700 cursor-grab">≡</td>
      <td className="py-3 px-4">
        <span className="bg-[#f3f0e7] text-[#6a5d4d] px-3 py-1 rounded-full text-sm font-medium">
          {dominant}
        </span>
      </td>
      <td className="py-3 px-4">{secondaryCount}</td>
    </tr>
  );
}

// Componente: Sección de tabla + árbol
export function SortableSection({ data, title }) {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Tabla */}
      <div className="w-full md:w-1/2 bg-white rounded-xl shadow-md overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-[#7c4f3c] text-white">
            <tr>
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">{title}</th>
              <th className="py-3 px-4 text-left">Suma</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <SortableItem
                key={item.dominant}
                id={item.dominant}
                dominant={item.dominant}
                secondaryCount={item.secondaryCount}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Árbol jerárquico */}
      <div className="w-full md:w-1/2 flex justify-center items-start bg-[#f7f1e8] p-6 rounded-xl">
        <ValueTree values={data} />
      </div>
    </div>
  );
}
