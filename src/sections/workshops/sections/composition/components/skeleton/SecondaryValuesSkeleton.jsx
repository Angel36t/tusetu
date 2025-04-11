import React from "react";

const SecondaryValuesSkeleton = () => {
  const skeletonRow = Array(10).fill(0);

  return (
    <div className="animate-pulse space-y-4">
      <div className="bg-[#F7E9BA] px-4 py-6 rounded-md mt-8">
        <div className="h-4 w-4/4 bg-gray-300 rounded mb-2" />
        <div className="h-3 w-1/2 bg-gray-300 rounded mx-auto" />
      </div>

      <div className="border-t-2 border-[#BEB79B] shadow-sm w-full my-6" />

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-[#70A2D3] h-10" />

        <div className="divide-y divide-gray-200">
          {skeletonRow.map((_, idx) => (
            <div key={idx} className="flex items-center p-4 space-x-4">
              <div className="w-32 h-6 bg-gray-300 rounded" />
              <div className="flex-1 h-6 bg-gray-200 rounded" />
              <div className="w-20 h-6 bg-gray-300 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondaryValuesSkeleton;
