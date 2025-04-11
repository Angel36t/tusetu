
import { VibrationProvider } from "../../context/VibrationContext";
import VibrationCourseLayout from "./components/steps/VibrationCourseLayout";
// import CourseSteps from "./components/steps/StepsImages";
// import StepsImagesValidation from "./components/steps/StepsImages";

export default function VibrationLayout() {
  return (
    <VibrationProvider>
      <VibrationCourseLayout />
    </VibrationProvider>
  );
}
