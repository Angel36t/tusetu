
const Node = ({ label, isUsed }) => (
  <div
    className={`
      flex items-center justify-center
      px-6 py-2 rounded shadow w-[120px] text-center
      ${isUsed ? 'bg-[#3cb4a7] text-white' : 'bg-white text-gray-700'}
    `}
  >
    {label}
  </div>
);

function SinglePyramid({ values, usedValues }) {
  if (!values || values.length < 1) return null;

  const [root, child1, child2, grandchild1, grandchild2] = values;
  const isUsed = (value) => value && usedValues.includes(value.dominant);

  return (
    <div className="flex flex-col items-center text-sm font-medium p-6 rounded-md relative overflow-visible">
      {/* Nivel 0 - Raíz */}
      <div className="flex justify-center mb-4">
        <Node label={root?.dominant} isUsed={isUsed(root)} />
      </div>

      {/* Conexión diagonal hacia hijos */}
      <div className="relative h-8 w-40 mb-4">
        <div className="absolute left-[25%] top-0 h-8 w-0.5 rotate-[30deg] origin-top-left border-l-2 border-dashed border-[#a1836b]" />
        <div className="absolute right-[25%] top-0 h-8 w-0.5 -rotate-[30deg] origin-top-right border-l-2 border-dashed border-[#a1836b]" />
      </div>

      {/* Nivel 1 - Hijos */}
      <div className="flex justify-center gap-24 mb-4">
        {child1 && <Node label={child1.dominant} isUsed={isUsed(child1)} />}
        {child2 && <Node label={child2.dominant} isUsed={isUsed(child2)} />}
      </div>

      {/* Conexiones a nietos */}
      <div className="relative h-8 w-[300px] mb-4">
        <div className="absolute left-[20%] top-0 h-10 w-0.5 rotate-[35deg] origin-top-left border-l-2 border-dashed border-[#a1836b]" />
        <div className="absolute right-[20%] top-0 h-10 w-0.5 -rotate-[35deg] origin-top-right border-l-2 border-dashed border-[#a1836b]" />
      </div>

      {/* Nivel 2 - Nietos */}
      <div className="flex justify-center gap-40">
        {grandchild1 && <Node label={grandchild1.dominant} isUsed={isUsed(grandchild1)} />}
        {grandchild2 && <Node label={grandchild2.dominant} isUsed={isUsed(grandchild2)} />}
      </div>
    </div>
  );
}

export default function DoublePyramid({ pyramid1Values, pyramid2Values, usedValues }) {
  return (
    <div className="flex flex-col md:flex-row gap-10 justify-center items-start">
      <SinglePyramid values={pyramid1Values} usedValues={usedValues} />
      <SinglePyramid values={pyramid2Values} usedValues={usedValues} />
    </div>
  );
}
