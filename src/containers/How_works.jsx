import React from "react";

const how_works = () => {
  return (
    <div className="w-full px-[60px] py-[72px] dark:bg-[#0D1117] bg-[#F5F9FF]">
      <h1 className="text-[44px] lg:text-[44px] xl:text-[44px]  dark:text-white text-black font-semibold font-Space text-center mb-[24px]">
        How it Works
      </h1>
      <div className="w-[80vw] mx-auto mb-[64px]">
        <h3 className="text-gradient-how-it-works text-[54px] font-semibold font-Inter text-center mb-[16px]">
          Discover Best Design Resources & Tools
        </h3>
        <p className="text-[24px] font-Inter font-light dark:text-[#A3B3BC] text-[#5B6478]  text-center leading-tight">
          Finding the right design resources & tools can be time consuming, So
          We've spend hours curating the best design resources and tools to save
          you time and needless web wandering with.
        </p>
      </div>
      <div className="">
        <p className="text-[32px] text-black font-medium font-Space md:text-left mb-[36px] dark:text-white">
          How to be a Resource Contributor and help the Design Community grow
        </p>
        <div className="w-full flex md:flex-row lg:flex-row flex-col items-start justify-between">
          <div className="w-full lg:w-[28%] xl:w-[28%] ">
            <div className="flex w-full items-center">
              <h3 className="font-SInter text-[18px] text-black dark:text-[white]">
                1
              </h3>
              <div className="w-full rounded-sm h-[1px] ml-2 bg-[#ecf2f580]"></div>
            </div>
            <h3 className="text-[18px] font-medium dark:text-[#A3B3BC] text-[#5B6478]  font-Inter">
              Discover best design resources and tools with over 60 categories
            </h3>
          </div>
          <div className="w-full lg:w-[28%] xl:w-[28%] ">
            <div className="flex w-full items-center">
              <h3 className="font-Inter text-[18px] text-black dark:text-[white]">
                2
              </h3>
              <div className="w-full rounded-sm h-[1px] ml-2 bg-[#ecf2f580]"></div>
            </div>
            <h3 className="text-[18px] font-medium dark:text-[#A3B3BC] text-[#5B6478]  font-Inter">
              Suggest a new resource if you have found one in any category.
            </h3>
          </div>
          <div className="w-full lg:w-[28%] xl:w-[28%] ">
            <div className="flex w-full items-center">
              <h3 className="font-Inter text-[18px] text-black dark:text-[white]">
                3
              </h3>
              <div className="w-full rounded-sm h-[1px] ml-2 bg-[#ecf2f580]"></div>
            </div>
            <h3 className="text-[18px] font-medium font-Inter dark:text-[#A3B3BC] text-[#5B6478] ">
              Your resource will be reviewed and added to the app, also see your
              name in the contributor’s section
            </h3>
          </div>
        </div>

        {/* <p className="text-[32px] text-white font-medium font-Space md:text-left mb-[48px] mt-[72px]">
          Found a new resource, contribute to the community
        </p> */}

        <div className="flex items-center justify-center mt-[72px]">
          <button class="relative items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
            <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
            <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
              <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
            </span>
            <span class="relative text-white text-[20px] font-Inter font-medium">
              Contribute
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default how_works;
