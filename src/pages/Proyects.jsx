import ProjectCard from "../components/stateless/ProjectCard";
import ToggleMenu from "../components/statefull/ToggleMenu";
import ProjectPresentation from "../components/stateless/ProjectPresentation";
import Footer from "../components/stateless/Footer";
import { projects } from "../data/projects";

const Proyects = () => {
	return (
		<>
			<ToggleMenu />
			<ProjectPresentation
				title1="My"
				title2="Work"
				subtitle="Check out some of my projects..."
			/>
			<div className="grid gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr sm:w-5/6 md:w-4/5 lg:w-5/6 mx-auto cursor-pointer mt-8 mb-16">
				{projects.map((project) => (
					<div key={project.id} className="mx-auto">
						<ProjectCard
							image={project.CardImage}
							title={project.title}
							app_link={project.projectLinks}
							repo_provider={project.repoProvider}
							repo_link={project.repoLink}
							id={project.id}
						/>
					</div>
				))}
			</div>
			<Footer text="Copyright Michaelxk ©" year="2024" />
		</>
	);
};
export default Proyects;
