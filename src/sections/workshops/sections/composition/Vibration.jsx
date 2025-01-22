
import { VibrationProvider } from "../../context/VibrationContext";
import StepsImagesValidation from "./components/steps/StepsImages";

export default function VibrationLayout() {
  return (
    <VibrationProvider>
      <StepsImagesValidation />
    </VibrationProvider>
  );
}
