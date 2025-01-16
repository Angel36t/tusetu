
import { CompositionProvider } from "../../context/CompositionContext";
import StepsImagesValidation from "./components/steps/StepsImages";

export default function CompositionLayout() {
  return (
    <CompositionProvider>
      <StepsImagesValidation />
    </CompositionProvider>
  );
}
