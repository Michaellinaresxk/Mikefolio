import Menu from "../components/stateless/Menu";
import CallToAction from "../components/stateless/CallToAction";
import Footer from "../components/stateless/Footer";
import { AboutMeText } from "../components/stateless/AboutMeText";
import { ProfileCvSection } from "../components/stateless/ProfileCvSection";
import { ExperienceSection } from "../components/stateless/ExperienceSection";
import { WhatIUse } from "../components/stateless/WhatIUse";
import WhatIDo from "../components/stateless/WhatIDo";

import { about_background_image, spaceShip } from "../assets/img/index";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <img
        alt="feature"
        className="object-cover object-center h-300  w-full"
        src={about_background_image}
      />
      <section className="about-banner  min-h-screen flex flex-col">
        <Menu />
        <div className="relative bg-dark-blue text-white font-sans">
          <div className="container mx-auto px-6 py-20 text-center">
            <div className="uppercase tracking-wide text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              <span className="text-gray-300">
                {/* Innovating User Experiences with Every Line of Code */}
                Creative Code, Engaging Experiences
              </span>
            </div>
            <div className="flex justify-center items-center">
              {/* Asumiendo que la figura geométrica se encuentra aquí */}
              <div className="absolute z-0 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
              <h1 className="relative z-10 text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-none font-extrabold tracking-tight">
                Hello, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                  Michael
                </span>
              </h1>
            </div>
            <div className="mt-8 md:mt-12 lg:mt-16">
              <Link
                to={`/projects`}
                className="inline-block text-sm md:text-base lg:text-lg font-medium leading-loose text-indigo-200 hover:text-indigo-100"
              >
                Latest Project <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img
            src={spaceShip}
            alt="space chip image"
            className="about-space-ship"
          />
        </div>

        <AboutMeText />
        <ExperienceSection />
        <div className="mt-20">
          <CallToAction />
        </div>
        <ProfileCvSection resumeLink="/path-to-your-resume.pdf" />
        <WhatIDo />
        <WhatIUse />
      </section>
      <Footer text="Copyright Michaelxk ©" year={2024} />
    </>
  );
};
export default About;
