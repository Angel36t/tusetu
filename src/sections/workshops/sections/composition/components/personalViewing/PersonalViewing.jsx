import React, { useEffect, useState } from "react";
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
} from "@dnd-kit/sortable";
import { useUser } from "../../../../../../context/UserContext";
import { getPrimarySecondaryValues } from "../../api/api";
import { SortableSection } from "./components/SortableItem";
import ErrorAlertSection from "../alerts/ErrorAlertSection";

// Ordenar por cantidad de valores secundarios
const getSortedPrimaryValues = (valuesObj) => {
  return Object.values(valuesObj)
    .map((value) => ({
      dominant: value.dominant,
      secondaryCount: value.secondaryValues.length,
    }))
    .sort((a, b) => b.secondaryCount - a.secondaryCount);
};

// Componente principal
export default function PersonalViewing() {
  const { user } = useUser();
  const userId = user.id;

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false); // <-- Nuevo estado para errores

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    const fetchValues = async () => {
      try {
        const response = await getPrimarySecondaryValues(userId);
        console.log(response);

        const values = response.data.values;

        // Verificar si algún valor tiene 'dominant' en null
        const hasNullDominant = Object.values(values).some(
          (value) => value.dominant === null
        );

        if (hasNullDominant) {
          setHasError(true);
          return; // <- Cortamos acá. No seguimos.
        }

        const sortedValues = getSortedPrimaryValues(values);
        setItems(sortedValues);

        // Guardar orden inicial en localStorage
        localStorage.setItem(`order-values`, JSON.stringify(sortedValues));

        setHasError(false); // No hubo error
      } catch (error) {
        console.error("Error fetching user values:", error);
        setHasError(true); // Hubo un error en el fetch
      } finally {
        setLoading(false);
      }
    };

    fetchValues();
  }, [userId]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = items.findIndex((item) => item.dominant === active.id);
      const newIndex = items.findIndex((item) => item.dominant === over.id);
      const newItems = arrayMove(items, oldIndex, newIndex);
      setItems(newItems);

      // Guardar nuevo orden en localStorage
      localStorage.setItem(`order-values`, JSON.stringify(newItems));
    }
  };

  if (loading) {
    return <div>Cargando valores...</div>;
  }

  if (hasError) {
    return <ErrorAlertSection />;
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="bg-[#F7E9BA] p-4 rounded-md">
        <h2 className="text-fs-18 text-center mb-4 o-b">
          Ordena tus valores según su importancia
        </h2>
        <p className="text-center text-fs-14">
          Tienes a tu disposición <span className="o-b">10 valores</span>, y tu
          tarea será organizarlos dentro de una pirámide. <br />
          Arrastra y suelta los que consideres{" "}
          <span className="o-b">más importantes en la parte superior</span> como
          valores principales, y los{" "}
          <span className="o-b">complementarios más abajo</span>. <br />
          No se trata de hacerlo perfecto, sino de ser honesto contigo mismo.
          Tómate tu tiempo y conéctate con lo que realmente te mueve.
        </p>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={items.map((item) => item.dominant)}
          strategy={verticalListSortingStrategy}
        >
          <div className="flex flex-col gap-6">
            <SortableSection
              data={items.slice(0, 5)}
              title="Valores Primarios	"
            />
            <SortableSection
              data={items.slice(5, 10)}
              title="Valores Complementarios"
            />
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
