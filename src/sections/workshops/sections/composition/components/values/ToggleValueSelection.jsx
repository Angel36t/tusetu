import React, { useState } from "react";

import { SelectionView } from "./SelectionView";
import { ConfirmationView } from "./ConfirmationView";
import {
  useValuesContext,
  ValuesProvider,
} from "../../../../context/ValuesContext";
import { SkeletonSummaryValues } from "../skeleton/SkeletonSummaryValues";

const ToggleValueSelection = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [loading, setLoading] = useState(true); // 👈 Nuevo estado
  const { selectedValues } = useValuesContext();

  const confirmSelection = () => setIsConfirmed(true);

  console.log(selectedValues);

  // if (selectedValues.length === 0) {
  //   return <SkeletonSummaryValues />;
  // }

  return (
    <div className="max-w-5xl mx-auto p-4 rounded-lg bg-[#F8F2E2]">
      <div className="bg-[#F7E9BA] p-4 rounded-md">
        <h2 className="text-fs-18 text-center mb-4 o-b">
          Selecciona tus valores
        </h2>
        <p className="text-center text-fs-14">
          Puedes seleccionar hasta{" "}
          <span className="o-b">10 valores principales</span> para continuar con
          las actividades.
        </p>
      </div>

      <ConfirmationView confirmSelection={confirmSelection} />
      <SelectionView loading={loading} setLoading={setLoading} />
      {/* 👈 Pasa el estado */}
    </div>
  );
};

export default ToggleValueSelection;
