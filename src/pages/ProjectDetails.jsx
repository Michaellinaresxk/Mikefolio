import { useParams } from "react-router-dom";
import Menu from "../components/stateless/Menu";
import Heading from "../components/stateless/Heading";
import Footer from "../components/stateless/Footer";
import { projects } from "../data/projects";

const ProjectDetails = () => {
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
            </div>
            <div className="flex flex-col flex-wrap lg:py-6 mb-10 lg:w-1/2 lg:pl-12 lg:text-left">
              <h2 className="mb-4 text-white text-3xl">Description:</h2>
              <div className="bg-lightgreen h-1 w-16 mb-6"></div>
              <div className="text-2xl mb-10">{project.description}</div>
              <h2 className="mb-4 mt-6 text-white text-3xl">What i improve:</h2>
              <div className="bg-lightgreen h-1 w-16 mb-6"></div>
              <div className="flex flex-col mb-10 lg:items-start items-center">
                {project.whatIImprube.map((text, index) => (
                  <div key={index} className="mt-8">
                    <div className="text-2xl mb-8">{text}</div>
                  </div>
                ))}
              </div>

              <div className="">
                <h2 className=" mb-4 text-white text-3xl">Technologies:</h2>
                <div className="bg-lightgreen h-1 w-16 mb-10"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4 mt-2.5">
                  {project.technologies.map((technology, index) => (
                    <div
                      key={index}
                      className="flex items-center text-white p-1 rounded-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mx-2 text-lightgreen"
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
            </div>
          </div>
        </section>
      </div>

      <Footer text="Copyright Michaelxk ©" year="2024" />
    </>
  );
};

export default ProjectDetails;
