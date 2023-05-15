const SkeletonCount = [1, 2, 3, 4];

const Loading = () => {
  return (
    <div
      className="rounded-xl shadow-2xl shadow-inherit h-screen max-w-screen-lg mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8 
flex flex-col md:flex-row justify-between items-start md:items-center sm:mt-2 mt-24"
    >
      <div className="w-full md:w-1/2">
        {SkeletonCount.map((i) => (
          <div
            key={i}
            className="h-8 mb-4 w-full bg-gray-700 animate-pulse"
            style={{
              animationDuration: "900ms",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loading;
