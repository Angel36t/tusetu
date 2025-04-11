export default function ValueTree({ value }) {
    const half = Math.ceil(value.secondaryValues.length / 2);
    const left = value.secondaryValues.slice(0, half);
    const right = value.secondaryValues.slice(half);
  
    return (
      <div className="flex flex-col items-center text-center">
        <div className="bg-emerald-500 text-white px-4 py-2 rounded-md shadow-md">
          {value.dominant}
        </div>
  
        <div className="h-4 w-px bg-dashed border-l-2 border-dashed border-gray-400 mt-1 mb-2" />
  
        <div className="flex gap-10">
          {/* Left side */}
          <div className="flex flex-col items-center gap-2">
            {left.map((item, index) => (
              <div key={index} className="bg-white border rounded px-3 py-1 shadow-sm">
                {item}
              </div>
            ))}
          </div>
  
          {/* Right side */}
          <div className="flex flex-col items-center gap-2">
            {right.map((item, index) => (
              <div key={index} className="bg-white border rounded px-3 py-1 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  