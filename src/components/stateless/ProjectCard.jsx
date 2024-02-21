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
}) => {
	return (
		<>
			<div className="bg-white   max-w-sm rounded-lg overflow-hidden mx-auto ">
      <Link to={`/proyects/${id}`}>

			<img src={image} className="w-full" />
			</Link>
      <div className="px-4 py-6">
        <h3 className="text-[#333] text-xl font-bold">{title}</h3>
        <p className="mt-4 text-sm text-gray-500">{description.length > 120 ? `${description.substring(0, 120)}...` : description}
        </p>
      </div>
			<div>

			</div>
			<div className="text-black flex">
					<a className="" href={repo_link} target="_blank">
						<FaGithub className="" size={40} />
					</a>
					<a className="" href={app_link} target="_blank">
						<FaEye className="" size={40}  />
					</a>
			</div>
    </div>
		</>
	);
};
export default ProjectCard;
