const SkeletonBox = () => (
  <div className="animate-pulse bg-gray-200 rounded-md h-12"></div>
);

export const SkeletonSummaryValues = () => {
  return (
    <>
      <div className="bg-[#F7E9BA] px-4 py-6 rounded-md ">
        <div className="h-4 w-4/4 bg-gray-300 rounded mb-2" />
        <div className="h-3 w-3/2 bg-gray-300 rounded mx-auto mb-2" />
        <div className="h-3 w-2/2 bg-gray-300 rounded mx-auto mb-2" />
        <div className="h-3 w-1/2 bg-gray-300 rounded mx-auto" />
      </div>

      <div className="border-t-2 border-[#BEB79B] shadow-sm w-full my-6" />

      <div className="p-8 relative bg-white rounded-lg">
        {/* Temporizador Skeleton */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="w-24 h-4 bg-gray-200 rounded mb-2 animate-pulse" />
          <div className="flex items-center space-x-2">
            <div className="w-16 h-10 bg-gray-200 rounded-md animate-pulse" />
            <span className="text-xl font-semibold text-gray-400">:</span>
            <div className="w-16 h-10 bg-gray-200 rounded-md animate-pulse" />
          </div>
          
        </div>

        {/* Skeleton de los valores (grid) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {Array.from({ length: 40 }).map((_, i) => (
            <SkeletonBox key={i} />
          ))}
        </div>

        {/* Skeleton de paginación */}
        <div className="flex justify-center items-center mt-6 gap-2">
          <div className="w-10 h-10 bg-gray-200 rounded-md animate-pulse" />
          <div className="w-10 h-10 bg-gray-200 rounded-md animate-pulse" />
          <div className="w-10 h-10 bg-gray-200 rounded-md animate-pulse" />
        </div>
      </div>
    </>
  );
};
