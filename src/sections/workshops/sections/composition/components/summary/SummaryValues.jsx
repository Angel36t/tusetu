import { useState, useEffect, useContext } from "react";

import { ValuesGrid } from "./ValuesGrid";
import { getRecords } from "../../api/api";
import { FullScreenDialog } from "./FullScreenDialog";
import { ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import { VibrationContext } from "../../../../context/VibrationContext";
import { SkeletonSummaryValues } from "../skeleton/SkeletonSummaryValues";

const ITEMS_PER_PAGE = 40;
const INITIAL_TIME = 480;

const SummaryValues = () => {   // <-- Ya no exportas aquí
  const [values, setValues] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [started, setStarted] = useState(false);
  const [viewMode, setViewMode] = useState("normal");
  const { records } = useContext(VibrationContext);

  const totalPages = Math.ceil(values.length / ITEMS_PER_PAGE);

  useEffect(() => {
    if (records) {
      setValues(records);
      setLoading(false);
    }
  }, [records]);

  useEffect(() => {
    if (!started || timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [started, timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return { minutes, seconds: secs };
  };

  const getPageValues = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return values.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  const toggleViewMode = () => {
    setViewMode((prev) => (prev === "normal" ? "fullscreen" : "normal"));
  };

  const { minutes, seconds } = formatTime(timeLeft);

  if (loading) return <SkeletonSummaryValues />;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="relative mx-auto">
      {/* Texto introductorio */}
      <div className="bg-[#F7E9BA] p-6 rounded-md mb-6 text-center">
        <h2 className="text-fs-18 mb-4 o-b">Explora y analiza los valores</h2>
        <p className="text-fs-14">
          ¡Hey! Esta parte está hecha para que explores y analices esas{" "}
          <span className="o-b">200 opciones de valores</span>.
        </p>
      </div>

      {/* Contenido del juego */}
      <div className={`${!started ? "blur-sm pointer-events-none" : ""}`}>
        <div className="relative flex items-center justify-center mb-6">
          <div className="flex flex-col items-center">
            <span className="text-gray-600 text-xs tracking-wide uppercase w-b mb-1">
              Tiempo restante
            </span>
            <div className="flex items-center space-x-2">
              <div className="bg-gray-100 border border-gray-300 rounded-md px-3 py-2 text-xl w-16 text-center">
                {minutes}
              </div>
              <span className="text-xl font-semibold text-gray-600">:</span>
              <div className="bg-gray-100 border border-gray-300 rounded-md px-3 py-2 text-xl w-16 text-center">
                {seconds}
              </div>
            </div>
          </div>

          <button
            onClick={toggleViewMode}
            className="absolute right-0 flex items-center gap-2 px-4 py-2 bg-[#d4e157] hover:bg-[#c0ca33] text-gray-800 font-semibold rounded-md shadow transition"
          >
            <ArrowsPointingOutIcon className="h-5 w-5" />
            Pantalla completa
          </button>
        </div>

        {viewMode === "normal" ? (
          <ValuesGrid
            values={getPageValues()}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        ) : (
          <FullScreenDialog values={values} onClose={toggleViewMode} />
        )}
      </div>

      {/* Overlay Empezar */}
      {!started && (
        <div className="absolute inset-0 top-[150px] bg-opacity-80 backdrop-blur-sm flex flex-col items-center justify-center z-20 p-6 rounded-lg">
          <button
            onClick={() => {
              setStarted(true);
              setTimeLeft(INITIAL_TIME);
            }}
            className="flex items-center gap-2 px-6 py-3 bg-[#d4e157] hover:bg-[#c0ca33] text-gray-800 font-semibold rounded-md shadow-md transition"
          >
            <span>Empezar</span>
            <img src="/icon/play-circle.svg" alt="Play" />
          </button>
        </div>
      )}
    </div>
  );
};

export default SummaryValues; // <-- Aquí haces el export default
