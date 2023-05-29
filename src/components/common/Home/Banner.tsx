const Banner = () => {
  return (
    <div className="bg-gray-100 shadow-sm mt-5 rounded-sm h-36 flex justify-center items-center flex-col">
      <h5 className="-tracking-[-.3rem] uppercase text-sm">
        Welcome to HeadlineHive
      </h5>
      <h3 className="p-2 text-2xl font-semibold md:w-3/4 lg:w-1/2 text-center">
        <span>Stay Ahead of the </span>
        <b className="text-red-500">Headlines: </b>
        <span>Your Source for Breaking News and In-Depth Analysis</span>
      </h3>
    </div>
  );
};

export default Banner;
