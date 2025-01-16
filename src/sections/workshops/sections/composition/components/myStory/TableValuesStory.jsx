import React from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";

const DragAndDropTable = () => {
  const [items, setItems] = React.useState([
    { id: "1", name: "Abundancia", count: 7 },
    { id: "2", name: "Audacia", count: 6 },
    { id: "3", name: "Aventura", count: 7 },
    { id: "4", name: "Balance", count: 5 },
    { id: "5", name: "Bondad", count: 5 },
    { id: "6", name: "Crecimiento", count: 4 },
    { id: "7", name: "Determinación", count: 8 },
    { id: "8", name: "Empatía", count: 6 },
    { id: "9", name: "Felicidad", count: 7 },
    { id: "10", name: "Generosidad", count: 5 },
  ]);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);

      setItems((prev) => arrayMove(prev, oldIndex, newIndex));
    }
  };

  const firstTableItems = items.filter((item, index) => index < 5);
  const secondTableItems = items.filter((item, index) => index >= 5);

  return (
    <div className="flex gap-4">
      <Table
        items={firstTableItems}
        onDragEnd={handleDragEnd}
        title="Table 1"
        indexOffset={0}
      />
      <Table
        items={secondTableItems}
        onDragEnd={handleDragEnd}
        title="Complementarios"
        indexOffset={5}
      />
    </div>
  );
};

const Table = ({ items, onDragEnd, title, indexOffset }) => {
  return (
    <div>
      <h3 className="mb-2 text-lg font-bold">{title}</h3>
      <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <SortableContext
          items={items.map((item) => item.id)}
          strategy={verticalListSortingStrategy}
        >
          <table className="w-[300px] border border-gray-300 bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th
                  className="border border-gray-300 px-4 py-2 text-sm font-semibold"
                  style={{ width: "10%" }}
                >
                  #
                </th>
                <th
                  className="border border-gray-300 px-4 py-2 text-sm font-semibold"
                  style={{ width: "20%" }}
                >
                  Suma
                </th>
                <th
                  className="border border-gray-300 px-4 py-2 text-sm font-semibold"
                  style={{ width: "70%" }}
                >
                  {title === "Complementarios" ? "Complementarios" : "Primarios"}
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <SortableRow
                  key={item.id}
                  item={item}
                  index={index + indexOffset}
                />
              ))}
            </tbody>
          </table>
        </SortableContext>
      </DndContext>
    </div>
  );
};

const SortableRow = ({ item, index }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: `translate3d(${transform?.x || 0}px, ${transform?.y || 0}px, 0)`,
    transition,
  };

  return (
    <tr
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="odd:bg-gray-50 even:bg-white cursor-move hover:bg-blue-100 transition-all"
    >
      <td className="border border-gray-300 px-2 py-1 text-center text-sm">
        {index + 1}
      </td>
      <td className="border border-gray-300 px-2 py-1 text-center text-sm">
        {item.count}
      </td>
      <td className="border border-gray-300 px-2 py-1 text-sm">{item.name}</td>
    </tr>
  );
};

export default DragAndDropTable;
