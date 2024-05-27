import React from "react";

export const AboutMeText = () => {
  return (
    <>
      <main className="h-screen flex bg-aboutme-container justify-center items-center flex-col">
        <div className="flex items-center pl-5 lg:pl-20">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold tracking-wide text-white lg:text-6xl mb-4">
              I am,
            </h2>
            <p className="text-xl lg:text-5xl text-white">
              Front-End Developer, I create fully functional, immersive{" "}
              <span className="text-orange-500">
                websites and applications, {""}
              </span>
              doing remote work with companies, and collaborating with talented
              people to create{" "}
              <span className="text-orange-500">digital products.</span>
            </p>
          </div>
        </div>

        <div className="mt-10 pl-5 lg:pl-20">
          <div className="w-full lg:w-1/2">
            <p className="text-xl lg:text-3xl text-white">
              My journey as a Developer started when I noticed that I can bring
              my ideas to life and develop my knowledge in the same process.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
