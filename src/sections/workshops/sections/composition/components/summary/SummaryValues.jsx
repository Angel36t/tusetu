import { useState, useEffect, useContext } from "react";
import { ClockIcon } from "@heroicons/react/24/outline";

import { getRecords } from "../../api/api";
import { CompositionContext } from "../../../../context/CompositionContext";

const ITEMS_PER_PAGE = 72;

export const SummaryValues = () => {
  const [values, setValues] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(300);
  const [currentPage, setCurrentPage] = useState(1);
  const { setRecords } = useContext(CompositionContext);

  const totalPages = Math.ceil(values.length / ITEMS_PER_PAGE);

  useEffect(() => {
    const fetchValues = async () => {
      try {
        setLoading(true);
        const response = await getRecords();
        const records = response.records.map((record) => record.value);
        setRecords(records);
        
        setValues(records);
      } catch (err) {
        setError("Error loading data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchValues();
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const getPageValues = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return values.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handlePageSelect = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return <div className="text-center">Cargando datos...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-screen-lg mx-auto p-6 rounded-lg border-gray-200">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-bl-100">
          ¡Explora y Analiza los Valores!
        </h1>
        <p className="text-gray-700 mt-2">
          ¡Hey! Esta parte está hecha justo para que explores y analices esas{" "}
          <strong>200 opciones de valores</strong>. Sé que puede sonar un poco
          intimidante al principio, pero estoy seguro de que puedes con esto. 🚀
        </p>
        <br />
        <div className="text-x text-center flex items-center justify-center">
          <ClockIcon className="w-6 h-6 text-bl-100 mr-2" />{" "}
          {/* Icono de reloj */}
          Tiempo restante:{" "}
          <span className="text-red-100 font-bold ml-2">
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <div className="relative w-full sm:w-auto">
          <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-300 mt-2 sm:mt-0">
            <div
              style={{ width: `${(timeLeft / 300) * 100}%` }}
              className="bg-red-500 transition-all duration-300 ease-in-out"
            ></div>
          </div>
        </div>
      </div>

      {timeLeft > 0 ? (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
            {getPageValues().map((value, index) => (
              <div
                key={index}
                className="w-full py-2 rounded-lg text-sm text-center bg-blue-100 text-bl-100 shadow-sm border border-gray-200 hover:bg-bl-110 transition-all"
              >
                {value}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition-all"
            >
              Anterior
            </button>
            <div className="flex space-x-2 my-4 sm:my-0">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageSelect(page)}
                    className={`px-3 py-1 rounded-lg border text-sm ${
                      page === currentPage
                        ? "bg-bl-100 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition-all"
            >
              Siguiente
            </button>
          </div>
        </>
      ) : (
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-gray-700">
            Se ha terminado el tiempo.
          </h3>
          <p className="text-gray-500 mt-2">
            Por favor, reinicia la página o ponte en contacto para más detalles.
          </p>
        </div>
      )}
    </div>
  );
};
