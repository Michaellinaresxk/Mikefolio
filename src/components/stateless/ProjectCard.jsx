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
      <div className="bg-white   max-w-sm rounded-lg overflow-hidden mx-auto ">
        <Link to={`/proyects/${id}`}>
          <img src={image} className="w-full" />
        </Link>


        <div className="px-6 py-4">
          <h3 className="text-[#333] text-xl font-bold">{title}</h3>
          <p className="text-gray-600 text-base mt-3">
            {description.length > 120
              ? `${description.substring(0, 120)}...`
              : description}
          </p>
        </div>
        <div className="px-6 py-4 flex text-gray-600">
          <a className="flex" href={repo_link} target="_blank">
            <span className="flex bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold mr-2">
						<FaGithub className="mr-2" size={20}  />
						{repoProvider}
            </span>
          </a>
          <a className="flex" href={app_link} target="_blank">
            <span className="flex bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold mr-2">
						<FaEye className="mr-2" size={20} />
             {title}
            </span>
          </a>
        </div>
      </div>
    </>
  );
};
export default ProjectCard;
