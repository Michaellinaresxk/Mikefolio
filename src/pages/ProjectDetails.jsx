import { useParams } from "react-router-dom";
import Menu from "../components/stateless/Menu";
import Heading from "../components/stateless/Heading";
import Footer from "../components/stateless/Footer";
import { projects } from "../data/projects";

const ProjectDetails = () => {
	let { id } = useParams();
	let project = projects.find((pro) => pro.id === parseInt(id));
	console.log(project);

	return (
		<>
			<section className="flex flex-col min-h-screen">
				<Menu />
				<div className="flex-grow">
					<div className="mb-8">
						<Heading
							title1={project.title1}
							title2={project.title2}
							subtitle={project.subtitle}
						/>

						<div className="flex flex-col md:flex-row p-2 mt-4 w-5/6 mx-auto">
							<div className="flex-1 p-6 flex-wrap">
								<span>{project.description}</span>
								<div className="mt-5">
									<span>Technologies:</span>
									<ol className="ml-10 list-disc">
										{project.technologies.map((tecno, index) => (
											<li key={index}> -{tecno} </li>
										))}
									</ol>
								</div>
								<div className="mt-5">
									<span>What I learned:</span>
									<div>
										{project.whatIImprube.map((text, index) => (
											<p key={index} className="mt-8">
												{text}
											</p>
										))}
									</div>
								</div>
							</div>
							<div className="flex-1 p-6 mb-3">
								<img src={project.appImage} alt="" />
							</div>
						</div>
					</div>
				</div>
				<Footer text="Copyright Michaelxk ©" year="2024" />
			</section>
		</>
	);
};

export default ProjectDetails;
