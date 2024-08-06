import { myPicture } from "../../assets/img/index";

const WhatIDo = () => {
  return (
    <section className="bg-about-text py-20">
      <div className="flex justify-center">
        <h2 className="text-7xl font-bold mt-10 mb-10">
          What I <span className="font-normal text-orange-500">Do</span>
        </h2>
      </div>
      <div className="container mx-auto px-6 flex flex-col lg:flex-row lg:items-center lg:space-x-6">
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <img
            className="object-cover max-w-lg mx-auto transform transition duration-500 hover:scale-105"
            src={myPicture}
            alt="Descriptive Alt Text"
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-about-text to-transparent"></div>
        </div>
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          <h2 className="text-3xl font-bold tracking-wide text-white lg:text-5xl">
            Creating modern and innovative designs.
          </h2>
          <div className="mt-8 space-y-5">
            <div className="flex items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="ml-3 text-2xl">User-Friendly Interfaces</span>
            </div>
            <div className="flex items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="ml-3 text-2xl">Visual Appeal</span>
            </div>
            <div className="flex items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="ml-3 text-2xl">Aesthetically Pleasing</span>
            </div>
            <div className="flex items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="ml-3 text-2xl">Cross-Browser Compatibility</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
