const SaveButton = ({ onClick }) => {
    return (
      <div className="flex justify-center mt-4">
        <button
          onClick={onClick}
          className="mt-10 bg-[#DAE462] w-b text-[#2F2F2F] rounded-md text-sm border-r-[4px] border-b-[4px] border-[#C5CD59] shadow-[2px_2px_4px_rgba(0,0,0,0.1)] hover:bg-[#cbdc50] transition duration-200 py-[12px] px-[52px]"
        >
          Guardar historia
        </button>
      </div>
    );
  };
  
  export default SaveButton;
  