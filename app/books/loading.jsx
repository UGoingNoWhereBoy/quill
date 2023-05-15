const SkeletonCount = [1, 2, 3, 4, 5, 6];

const Loading = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-8">
        {SkeletonCount.map((_, index) => (
          <div
            className="block rounded-lg p-6 border-2 border-t-violet-400 border-b-violet-400 border-r-violet-500 border-l-violet-600"
            key={index}
          >
            <div
              className="h-56 w-full rounded-md bg-gray-200 animate-pulse"
              style={{ animationDuration: "700ms" }}
            />

            <div className="mt-6">
              <div
                className="bg-gray-200 h-8 w-3/4 rounded-md animate-pulse"
                style={{ animationDuration: "700ms" }}
              />

              <div className="mt-4 flex items-center gap-4 text-sm">
                <div className="inline-flex items-center gap-1">
                  <div
                    className="bg-gray-200 h-6 w-24 rounded-md animate-pulse"
                    style={{ animationDuration: "700ms" }}
                  />
                </div>

                <div className="inline-flex items-center gap-1">
                  <div
                    className="bg-gray-200 h-6 w-12 rounded-md animate-pulse"
                    style={{ animationDuration: "700ms" }}
                  />
                </div>

                <div className="inline-flex items-center gap-1">
                  <div
                    className="bg-gray-200 h-6 w-16 rounded-md animate-pulse"
                    style={{ animationDuration: "700ms" }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
