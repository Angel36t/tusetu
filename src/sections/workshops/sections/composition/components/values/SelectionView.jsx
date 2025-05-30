import { useEffect, useState } from "react";
import { ArrowsPointingOutIcon } from "@heroicons/react/24/outline";

import { getRecords, getUserMainValues } from "../../api/api";
import { useUser } from "../../../../../../context/UserContext";
import { useValuesContext } from "../../../../context/ValuesContext";
import { FullscreenSelectionModal } from "./components/FullscreenSelectionModal";
import { ValuesSelectionGrid } from "./components/ValuesSelectionGrid";

const ITEMS_PER_PAGE = 40;

export const SelectionView = ({ setLoading }) => {
  const { selectedValues, setSelectedValues, toggleValueSelection } =
    useValuesContext();
  const [values, setValues] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false); // 👈 Estado para abrir/cerrar el modal
  const { user } = useUser();

  const totalPages = Math.ceil(values.length / ITEMS_PER_PAGE);

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

  const openFullscreen = () => setIsFullscreenOpen(true);
  const closeFullscreen = () => setIsFullscreenOpen(false);

  useEffect(() => {
    const fetchValues = async () => {
      try {
        const records = await getRecords();
        const recordValues = records.records.map((record) => record.value);
        setValues(recordValues);

        const userId = user.id;
        const userValues = await getUserMainValues(userId);
        const selectedNames = userValues.map((item) => item.name);
        setSelectedValues(selectedNames);
      } catch (err) {
        setError("Error loading data. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchValues();
  }, [setSelectedValues, setLoading]);

  return (
    <div className="relative max-w-screen-lg mx-auto p-4 bg-white px-[1rem] py-[1rem]">
      {/* Botón Pantalla Completa */}
      <button
        onClick={openFullscreen}
        className="absolute right-4 top-4 flex items-center gap-2 px-4 py-2 bg-[#d4e157] hover:bg-[#c0ca33] text-gray-800 font-semibold rounded-md shadow transition"
      >
        <>
          <ArrowsPointingOutIcon className="h-5 w-5" />
          Pantalla completa
        </>
      </button>


      <ValuesSelectionGrid
        values={getPageValues()}
        selectedValues={selectedValues}
        toggleValueSelection={toggleValueSelection}
      />

      {/* Paginación */}
      <div className="flex justify-center items-center mt-6 gap-2">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`w-10 h-10 flex justify-center items-center rounded-md transition ${
            currentPage === 1
              ? "bg-[#F4ECD9] text-[#7B6848] cursor-not-allowed opacity-50"
              : "bg-[#F4ECD9] text-[#7B6848] hover:bg-[#E8E0C9]"
          }`}
        >
          &#x276E;
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 flex justify-center items-center rounded-md text-sm font-semibold transition ${
                page === currentPage
                  ? "bg-[#DAE462] text-black"
                  : "bg-[#F5F5F5] text-[#444] hover:bg-[#E8E0C9]"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`w-10 h-10 flex justify-center items-center rounded-md transition ${
            currentPage === totalPages
              ? "bg-[#F4ECD9] text-[#7B6848] cursor-not-allowed opacity-50"
              : "bg-[#F4ECD9] text-[#7B6848] hover:bg-[#E8E0C9]"
          }`}
        >
          &#x276F;
        </button>
      </div>

      {/* Modal de Pantalla Completa */}
      <FullscreenSelectionModal
        isOpen={isFullscreenOpen}
        onClose={closeFullscreen}
        values={values}
        selectedValues={selectedValues}
        toggleValueSelection={toggleValueSelection}
      />
    </div>
  );
};
