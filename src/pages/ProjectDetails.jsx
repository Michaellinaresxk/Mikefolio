import { useParams } from "react-router-dom";
import ToggleMenu from "../components/statefull/ToggleMenu";
import ProjectPresentation from "../components/stateless/ProjectPresentation";
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
						<p>{project.description}</p>
						<div className="mt-5">
							<span>Technologies:</span>
							<ol className="ml-10 list-disc">
								{project.technologies.map((technology, index) => (
									<li key={index}> -{technology} </li>
								))}
							</ol>
						</div>
						<div className="mt-5">
							<span>What I learned:</span>
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
