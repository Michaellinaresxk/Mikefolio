import React from "react";

export const WhatIUse = () => {
  const technologiesWeb = [
    { name: "HTML", id: 1 },
    { name: "CSS", id: 2 },
    { name: "JavaScript", id: 3 },
    { name: "Vue.js", id: 4 },
    { name: "Nuxt", id: 5 },
    { name: "React", id: 6 },
    { name: "Next", id: 7 },
    { name: "Node", id: 8 },
    { name: "Git", id: 9 },
    { name: "Figma", id: 10 },
    { name: "Photoshop", id: 11 },
    { name: "Jest", id: 12 },
    { name: "SCSS", id: 13 },
    { name: "Typescript", id: 14 },
    { name: "React-Native", id: 15 },
    { name: "GraphQL", id: 16 },
  ];

  return (
    <section className="what_i_use text-center p-10 mt-20 mb-20">
      <h2 className="text-7xl font-bold mb-20">
        What i <span className="font-normal text-orange-500">Use</span>
      </h2>
      <div className="container flex flex-wrap justify-center items-center gap-4 scroller__inner">
        {technologiesWeb.map((tech) => (
          <button
            key={tech.id}
            className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white font-medium rounded-full px-6 py-2 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 shadow-lg text-sm md:text-lg lg:text-xl"
          >
            {tech.name}
          </button>
        ))}
      </div>
    </section>
  );
};
