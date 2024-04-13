import React from "react";
import { ExperienceSection } from "./ExperienceSection";

export const AboutMeText = () => {
  return (
    <>
      <main className="h-screen flex justify-start items-center  flex flex-col">
        <div className="flex justify-start items-center pl-5 lg:pl-20">
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

        <div className="mt-10 items-center pl-5 lg:pl-20">
          <div className="w-full lg:w-1/2">
            <p className="text-xl lg:text-3xl text-white">
              My journey as a Developer started when I noticed that I can bring
              my ideas to life and develop my knowledge in the same process.
            </p>
          </div>
        </div>
      </main>
      <ExperienceSection />
    </>
  );
};
