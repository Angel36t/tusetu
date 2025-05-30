const StoryTextarea = ({ story, onChange, wordCount }) => {
  return (
    <div className="relative bg-white border border-gray-300 rounded-lg p-4 shadow-sm overflow-hidden w-full">
      
      {/* Cuadrícula */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className="absolute left-0 w-full border-b border-gray-200"
            style={{ top: `${rowIndex * 36}px` }}
          />
        ))}
        {Array.from({ length: 40 }).map((_, colIndex) => (
          <div
            key={`col-${colIndex}`}
            className="absolute top-0 h-full border-l border-gray-200"
            style={{ left: `${colIndex * 36}px` }}
          />
        ))}
      </div>

      {/* Círculos */}
      <div className="absolute top-6 bottom-6 left-2 flex flex-col justify-between z-10 pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full bg-gray-300 opacity-70"
            style={{ marginTop: i === 0 ? 0 : "48px" }}
          />
        ))}
      </div>

      {/* Texto */}
      <div className="relative z-20 pl-16">
        {/* Ícono de lápiz */}
        <div className="relative left-[-33px] bottom-[-30px] pointer-events-none">
          <img src="/icon/pencil.svg" alt="Pencil" />
        </div>
        
        <textarea
          value={story}
          onChange={onChange}
          placeholder="Escribe tu historia aquí..."
          rows="8"
          className="o-m w-full bg-transparent resize-none focus:outline-none text-gray-800 text-base leading-[36px] tracking-wide"
        />
      </div>

      <p className="relative z-20 text-right text-sm text-gray-600 mt-2">
        Palabras: <span className={wordCount > 3000 ? "text-red-600" : ""}>{wordCount}/3000</span>
      </p>
    </div>
  );
};

export default StoryTextarea;
