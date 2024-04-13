import Menu from "../components/stateless/Menu";
import CallToAction from "../components/stateless/CallToAction";
import Footer from "../components/stateless/Footer";
import { FiMonitor } from "react-icons/fi"; // Importa el icono que prefieras
import { MdDeveloperMode } from "react-icons/md";
import { AboutMeText } from "../components/stateless/AboutMeText";
import {
  about_background_image,
  myPicture,
  spaceShip,
} from "../assets/img/index";

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
              <a
                href="#latest-project"
                className="inline-block text-sm md:text-base lg:text-lg font-medium leading-loose text-indigo-200 hover:text-indigo-100"
              >
                Latest Project <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="mt-2 md:mt-4 lg:mt-6 text-sm md:text-base lg:text-lg">
              <span className="text-gray-300">[ Scroll ]</span>
            </div>
          </div>
        </div>

        {/* <article>
          <div className="bg-gray-900 text-gray-100 p-10 md:p-20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 md:mb-20">
                <h2 className="text-5xl md:text-4xl mb-4 text-3xl font-bold tracking-wide lg:text-5xl">
                  I can help you with:
                </h2>
                <p className="max-w-xl mx-auto">
                  Choose a service that fits your needs and learn more about how
                  I can contribute to your project.
                </p>
              </div>
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-5">
                  <h3 className="text-xl md:text-2xl font-medium mb-3">
                    <FiMonitor className="text-5xl mr-4 transition-transform transform hover:scale-125" />
                    Design
                  </h3>
                  <p className="text-sm md:text-base">
                    With a proven history of crafting websites and apps, I bring
                    forth robust and user-centric digital designs. The
                    cornerstone of any successful website lies in a firm
                    corporate branding.
                  </p>
                </div>
                <div className="md:col-span-7">
                  <img
                    className="object-cover w-full h-full max-w-lg mx-auto"
                    src={spaceShip}
                    alt="Descriptive Alt Text"
                  />
                </div>
              </div>
            </div>
          </div>
        </article> */}
        <AboutMeText />
        <section>
          <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:space-y-0 lg:flex-row lg:items-center">
            <div className="flex items-center justify-center w-full lg:w-1/2">
              <img
                className="object-cover w-full h-full max-w-lg mx-auto rounded-md"
                src={myPicture}
                alt="Descriptive Alt Text"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div>
                <h2 className="text-3xl font-bold tracking-wide text-gray-800 text-white lg:text-5xl">
                  Creting modern and innovative design,
                </h2>

                <div className="mt-8 space-y-5">
                  <p className="flex items-center -mx-2 text-gray-700s">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-2 text-orange-500"
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
                    <span className="mx-2 text-2xl text-white">
                      Easy to use
                    </span>
                  </p>

                  <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-2 text-orange-500"
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
                    <span className="mx-2 text-2xl text-white">
                      Esthetically pleasing
                    </span>
                  </p>

                  <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-2 text-orange-500"
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
                    <span className="mx-2 text-2xl text-white">
                      Easy to Use
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CallToAction />
      </section>
      <Footer text="Copyright Michaelxk ©" year={2024} />
    </>
  );
};
export default About;
