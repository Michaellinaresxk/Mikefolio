import Menu from "../components/stateless/Menu";
import CallToAction from "../components/stateless/CallToAction";
import Footer from "../components/stateless/Footer";
import { FiMonitor } from "react-icons/fi"; // Importa el icono que prefieras
import { MdDeveloperMode } from "react-icons/md";
import { about_background_image } from "../assets/img/index";
// import { CreativeTitleBanner } from "../components/stateless/CreativeTitleBanner";

// import TimeLine from "../components/stateless/TimeLine";

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
        {/* <CreativeTitleBanner /> */}
        {/* <img src={} alt="" style={{ width: "500px" }} /> */}
        {/* <TimeLine /> */}
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
                  <h3 className="text-xl md:text-2xl font-medium mb-3">
                    <MdDeveloperMode className="text-4xl mr-4 transition-transform transform hover:scale-125" />
                    Development
                  </h3>
                  <p className="text-sm md:text-base">
                    I construct scalable websites from the ground up, seamlessly
                    aligning them with the design. My primary emphasis lies in
                    micro animations, transitions, and interactivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <section className="bg-white dark:bg-gray-800">
          <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
                  Easiest way to create your website
                </h2>

                <div className="mt-8 space-y-5">
                  <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-2 text-blue-500"
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

                    <span className="mx-2">Clean and Simple Layout</span>
                  </p>

                  <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-2 text-blue-500"
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

                    <span className="mx-2">Just Copy Paste Codeing</span>
                  </p>

                  <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-2 text-blue-500"
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

                    <span className="mx-2">Easy to Use</span>
                  </p>
                </div>
              </div>

              <div className="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
                <form className="flex flex-col lg:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
                  />

                  <button
                    type="button"
                    className="h-10 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
                  >
                    Join Us
                  </button>
                </form>
              </div>
            </div>

            <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
              <img
                className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
                src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="glasses photo"
              />
            </div>
          </div>
        </section> */}

        <CallToAction />
      </section>
      <Footer text="Copyright Michaelxk ©" year={2024} />
    </>
  );
};
export default About;
