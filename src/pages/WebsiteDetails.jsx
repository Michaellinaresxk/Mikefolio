import { useParams } from "react-router-dom";
import Menu from "../components/stateless/Menu";
import Heading from "../components/stateless/Heading";
import Footer from "../components/stateless/Footer";
import { projects } from "../data/projects";
import { FaEye } from "react-icons/fa";
import CallToAction from "../components/stateless/CallToAction";

const WebsiteDetails = () => {
  let { id } = useParams();
  let project = projects.find((pro) => pro.id === parseInt(id));
  return (
    <>
      <Menu />
      <div className="mb-8">
        <Heading
          title1={project.title1}
          title2={project.title2}
          subtitle={project.subtitle}
        />

        <section className="text-gray-700 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap text-white">
            <div className="lg:w-1/3 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <img
                alt="feature"
                className="object-cover object-center h-300  w-full"
                src={project.appImage}
              />

              <div className="project-details__technologies p-10 mt-20">
                <h2 className=" mb-4 text-white text-3xl">Technologies:</h2>
                <div className="text-orange-500 h-1 w-16 mb-10"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4 mt-2.5">
                  {project.technologies.map((technology, index) => (
                    <div
                      key={index}
                      className="flex items-center text-white p-1 rounded-lg"
                    >
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
                      <span className="mx-2">{technology}</span>
                    </div>
                  ))}
                </div>
              </div>

              <h2 className=" text-3xl mt-10 mb-4">QuickLinks:</h2>
              <div className="bg-orange-500 h-1 w-16 mb-6"></div>
              <div className="flex mt-10">
                <a className="flex" href={project.projectLinks} target="_blank">
                  <button className="flex gap-3cursor-pointer ml-5 text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
                    <FaEye className="mr-2" size={25} />
                    {project.title1} {project.title2}
                  </button>
                </a>
                <a className="flex" href={project.repoLink} target="_blank">
                  <button className="flex gap-3  ml-10   cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
                    <svg
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#FFFFFF"
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                      ></path>
                    </svg>
                    Github
                  </button>
                </a>
              </div>
            </div>
            <div className="flex flex-col flex-wrap lg:py-6 mb-10 lg:w-1/2 lg:pl-12 lg:text-left">
              <div className="project-details__description p-10 text-2xl mb-10">
                <h2 className="mb-4 text-white text-3xl">Description:</h2>
                <div className="bg-orange-500 h-1 w-16 mb-6"></div>
                {project.description}
              </div>
              <div className="project-details__improobe p-10 flex flex-col mb-10 lg:items-start items-center">
                <h2 className="mb-4 mt-6 text-white text-3xl">
                  What i improve:
                </h2>
                <div className="bg-orange-500 h-1 w-16 mb-6"></div>
                {project.whatIImprube.map((text, index) => (
                  <div key={index} className="mt-8">
                    <div className="text-2xl mb-8">{text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <CallToAction />
      <Footer text="Copyright Michaelxk ©" year="2024" />
    </>
  );
};

export default WebsiteDetails;
