/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaEye, FaGithub } from "react-icons/fa";

const ProjectCard = ({
	image,
	title,
	repo_link,
	app_link,
	repo_provider,
	id,
}) => {
	return (
		<>
			<div className="block max-w-[18rem] rounded-lg bg-slate-600 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
				<Link to={`/proyects/${id}`}>
					<div className="relative overflow-hidden bg-cover bg-no-repeat hover:bg-blend-darken">
						<img
							className="rounded-t-lg border-2 border-white hover:border-lightgreen hover:brightness-75"
							src={image}
							alt=""
						/>
					</div>
				</Link>
				<div className="p-6 mt-1">
					<div className="text-base text-neutral-600 dark:text-neutral-200">
						<div className="flex items-center bg-white hover:bg-lightgreen h-8 rounded-xl">
							<div className="ml-2">
								<FaEye />
							</div>
							<a className="ml-1" href={app_link} target="_blank">
								<span>{title}</span>
							</a>
						</div>
						<div className="flex items-center bg-black hover:bg-lightgreen hover:text-black mt-3 text-white h-8 rounded-xl">
							<div className="ml-2">
								<FaGithub color="white" />
							</div>
							<a className="ml-1" href={repo_link} target="_blank">
								<span>{repo_provider}</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default ProjectCard;
