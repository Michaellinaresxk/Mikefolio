/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaEye, FaGithub } from "react-icons/fa";

const ProjectCard = ({
  image,
  title,
  repo_link,
  app_link,
  id,
  description,
  repoProvider,
}) => {
  return (
    <>
      <div className="project-card__body text-white rounded-lg mt-10 overflow-hidden mx-auto ">
        <Link to={`/proyects/${id}`}>
          <img src={image} className="w-full" />
        </Link>

        <div className="px-6 py-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-white text-base mt-3">
            {description.length > 120
              ? `${description.substring(0, 120)}...`
              : description}
          </p>
        </div>
        <div className="px-6 py-4 mb-5 flex text-gray-600 justify-center">
          <a className="flex" href={repo_link} target="_blank">
            <span className="text-white flex bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold mr-5 cursor-pointer font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
              <FaGithub className="mr-2" size={20} />
              {repoProvider}
            </span>
          </a>

          <a className="flex" href={app_link} target="_blank">
            <span className="text-white flex  bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold cursor-pointer font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
              <FaEye className="mr-2" size={20} />
              Project
            </span>
          </a>
        </div>
      </div>
    </>
  );
};
export default ProjectCard;
