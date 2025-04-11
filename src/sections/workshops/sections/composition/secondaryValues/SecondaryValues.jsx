import {
  SecondaryValuesProvider,
  useSecondaryValues,
} from "./SecondaryValuesContext";
import SecondaryValuesTable from "./SecondaryValuesTable";
import CongratulationsSecondary from "./CongratulationsSecondary";

function SecondaryValues() {
  const { isSaved } = useSecondaryValues();

  return (
    <div className="overflow-x-auto max-w-5xl mx-auto pt-2 px-4">
      {isSaved ? <CongratulationsSecondary /> : <SecondaryValuesTable />}
    </div>
  );
}

export default function SecondaryValuesWrapper() {
  return (
    <SecondaryValuesProvider>
      <SecondaryValues />
    </SecondaryValuesProvider>
  );
}
