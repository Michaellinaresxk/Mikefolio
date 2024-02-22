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
      <ToggleMenu />
      <div className="mb-8">
        <ProjectPresentation
          title1={project.title1}
          title2={project.title2}
          subtitle={project.subtitle}
        />
        <div className="flex flex-col md:flex-row p-2 mt-4 w-5/6 mx-auto">
          <div className="flex-1 p-6 flex-wrap">
            <div>{project.description}</div>
            <div className="mt-5">
              <h2 className="font-bold mb-5">Technologies:</h2>
              <div className="ml-10">
                {project.technologies.map((technology, index) => (
                  <div key={index} className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      className="fill-green-500 shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      ></path>
                    </svg>
                    <h3 className="ml-2 mb-2" > {technology} </h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5">
							<h2 className="font-bold mb-5">What I Improve:</h2>
              <div>
                {project.whatIImprube.map((text, index) => (
                  <div key={index} className="mt-8">
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1 p-6 mb-3">
            <img src={project.appImage} alt="" />
          </div>
        </div>
      </div>

      <Footer text="Copyright Michaelxk ©" year="2024" />
    </>
  );
};

export default ProjectDetails;
