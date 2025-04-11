export const PaginationSelection = ({ currentPage, totalPages, setCurrentPage }) => {
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
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
  );
};
