import ProjectCard from "../components/stateless/ProjectCard";
import Menu from "../components/stateless/Menu";
import Heading from "../components/stateless/Heading";
import CallToAction from "../components/stateless/CallToAction";
import Footer from "../components/stateless/Footer";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const filterCategories = ["All", "Apps", "Websites", "UI Designs"];
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter;
  });

  return (
    <>
      <div className="bg-projects">
        <Menu />
        <Heading title1="My" title2="Work" subtitle="Explore my projects" />

        <div className="flex justify-center mt-10">
          {filterCategories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 mx-2 rounded-full ${
                activeFilter === category
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr sm:w-5/6 md:w-4/5 lg:w-6/6 mx-auto cursor-pointer mt-20 mb-16"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} className="mx-auto" layout>
              <ProjectCard
                image={project.CardImage}
                title={project.title}
                app_link={project.projectLinks}
                repo_link={project.repoLink}
                id={project.id}
                description={project.description}
                repoProvider={project.repoProvider}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <CallToAction />
      <Footer text="Copyright Michaelxk ©" year="2024" />
    </>
  );
};
export default Projects;
