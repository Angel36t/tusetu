import React from "react";
import { ValuesProvider } from "../../../../context/ValuesContext";
import ToggleValueSelection from "./ToggleValueSelection";

export default function SelectValuesGrid() {
  return (
    <ValuesProvider>
      <ToggleValueSelection />
    </ValuesProvider>
  );
}
