const UsedValuesList = ({ mainValues, usedValues }) => {
    return (
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {mainValues.map((value, index) => {
          const isUsed = usedValues.includes(value);
  
          return (
            <div
              key={index}
              className={`w-36 flex items-center justify-center gap-2 px-4 py-2 rounded-xl o-b text-sm border text-center
                ${isUsed ? "bg-teal-600 text-white border-transparent" : "bg-transparent text-[#7C6D4C] border-[#7C6D4C]"}
              `}
            >
              <span className="text-base">{isUsed ? "✨" : "★"}</span>
              <span>{value}</span>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default UsedValuesList;
  