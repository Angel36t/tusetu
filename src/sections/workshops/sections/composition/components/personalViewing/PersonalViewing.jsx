import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
  KeyboardSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  sortableKeyboardCoordinates,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// Simulación del JSON original
const values = {
  Asombro: {
    dominant: "Asombro",
    secondaryValues: ["Experiencia", "Claridad", "Crecimiento", "Colaboración"],
  },
  Caridad: {
    dominant: "Integridad",
    secondaryValues: [
      "Integridad",
      "Honor",
      "Intensidad",
      "Modestía",
      "Recreación",
    ],
  },
  Justicia: {
    dominant: "Justicia",
    secondaryValues: ["Independencia", "Objetividad", "Productividad"],
  },
  Inspiración: {
    dominant: "Fama",
    secondaryValues: ["Imaginación", "Fama", "Dinamismo", "Creatividad"],
  },
  Sabiduría: {
    dominant: "Sabiduría",
    secondaryValues: [
      "Dignidad",
      "Comunicación",
      "Autoridad",
      "Compañerismo",
      "Aprendizaje",
      "Desafío",
    ],
  },
  Serenidad: {
    dominant: "Serenidad",
    secondaryValues: [
      "Energía",
      "Gratitud",
      "Lógica",
      "Puntualidad",
      "Riqueza",
    ],
  },
  Comunidad: {
    dominant: "Comunidad",
    secondaryValues: ["Cuidado", "Fe", "Nobleza", "Reputación"],
  },
  Aprendizaje: {
    dominant: "Perspicacia",
    secondaryValues: ["Rectitud", "Satisfacción", "Vocación"],
  },
  Compasión: {
    dominant: "Compasión",
    secondaryValues: ["Intimidad", "Humildad", "Paciencia", "Realismo"],
  },
  Apoyo: {
    dominant: "Apoyo",
    secondaryValues: [
      "Motivación",
      "Entusiasmo",
      "Credibilidad",
      "Calma",
      "Audacia",
    ],
  },
};

// Ordenar por cantidad de valores secundarios
const getSortedPrimaryValues = (valuesObj) => {
  return Object.values(valuesObj)
    .map((value) => ({
      dominant: value.dominant,
      secondaryCount: value.secondaryValues.length,
    }))
    .sort((a, b) => b.secondaryCount - a.secondaryCount);
};

// Item draggable
function SortableItem({ id, dominant, secondaryCount }) {
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

function ValueTree({ values }) {
    if (!values || values.length < 1) return null;
  
    const [root, child1, child2, grandchild1, grandchild2] = values;
  
    return (
      <div className="flex flex-col items-center text-sm text-gray-700 font-medium  p-6 rounded-md relative overflow-visible">
        {/* Nivel 0 - Raíz */}
        <div className="bg-[#3cb4a7] text-white px-6 py-2 rounded-md shadow z-10 w-[120px] text-center">
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
          <div className="flex flex-col items-center gap-2">
            {child1 && (
              <div className="bg-white px-6 py-2 rounded shadow w-[120px] text-center">
                {child1.dominant}
              </div>
            )}
          </div>
  
          {/* Hijo 2 */}
          <div className="flex flex-col items-center gap-2">
            {child2 && (
              <div className="bg-white px-6 py-2 rounded shadow w-[120px] text-center">
                {child2.dominant}
              </div>
            )}
          </div>
        </div>
  
        {/* Diagonales hacia nietos */}
        <div className="relative h-8 w-full z-0 mt-2">
          <div className="absolute left-[22%] top-0 h-10 w-0.5 rotate-[35deg] origin-top-left border-l-2 border-dashed border-[#a1836b] z-0" />
          <div className="absolute right-[22%] top-0 h-10 w-0.5 -rotate-[35deg] origin-top-right border-l-2 border-dashed border-[#a1836b] z-0" />
        </div>
  
        {/* Nivel 2 - Nietos */}
        <div className=" flex gap-52 justify-center z-10">
          {grandchild1 && (
            <div className="bg-white px-6 py-2 rounded shadow z-10 w-[120px] text-center">
              {grandchild1.dominant}
            </div>
          )}
          {grandchild2 && (
            <div className="bg-white px-6 py-2 rounded shadow z-10 w-[120px] text-center">
              {grandchild2.dominant}
            </div>
          )}
        </div>
      </div>
    );
  }
  
  
  
  
  
  

// Sección de tabla + árbol
function SortableSection({ data }) {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Tabla */}
      <div className="w-full md:w-1/2 bg-white rounded-xl shadow-md overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-[#7c4f3c] text-white">
            <tr>
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">Valores primarios</th>
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


// Componente principal
export default function PersonalViewing() {
  const sortedInitial = getSortedPrimaryValues(values);
  const [items, setItems] = useState(sortedInitial);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = items.findIndex((item) => item.dominant === active.id);
      const newIndex = items.findIndex((item) => item.dominant === over.id);
      const newArray = arrayMove(items, oldIndex, newIndex);
      setItems(newArray);
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="bg-[#F7E9BA] p-4 rounded-md">
        <h2 className="text-fs-18 text-center mb-4 o-b">
          Explora y analiza los valores
        </h2>
        <p className="text-center text-fs-14">
          ¡Hey! esta parte está hecha justo para que explores y analices esas{" "}
          <span className="o-b">200 opciones de valores</span> de <br />
          valores. Sé que puede sonar un poco intimidante al principio, pero
          estoy seguro de que <br /> puedes con esto y más.
        </p>
      </div>

      {/* Aquí un solo DndContext */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={items.map((item) => item.dominant)}
          strategy={verticalListSortingStrategy}
        >
          {/* Pasa todo el arreglo "items", pero separando visualmente en dos tablas */}
          <div className="flex flex-col gap-6">
            <SortableSection data={items.slice(0, 5)} />
            <SortableSection data={items.slice(5, 10)} />
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
