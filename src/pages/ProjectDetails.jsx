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
                <div className="flex flex-wrap -m-1">
                  {project.technologies.map((technology, index) => (
                    <div key={index} className="m-1 mr-5">
                      <span className="inline-flex items-center px-4 py-1 border border-white text-sm font-medium rounded-full shadow-sm text-white bg-transparent hover:bg-lightgreen hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2 -ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {technology}
                      </span>
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
