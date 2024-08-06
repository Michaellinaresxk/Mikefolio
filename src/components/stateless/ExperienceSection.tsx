import React from "react";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "EFS Innovation",
      period: "October 2022 - January 2024",
      location: "Remote",
    },
    {
      title: "Web Designer",
      company: "PCYR Punta Cana Yacht Rentals",
      period: "January 2018 - March 2022",
      location: "Hybrid",
    },
    // More experiences
  ];

  return (
    <section className="w-8/10 p-10">
      <h2 className="text-7xl font-bold mb-20 mt-20">
        Experience <span className="font-normal text-orange-500">History</span>
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="border-b border-gray-500 pb-10">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-3xl font-bold mb-3">{exp.title}</h3>
                <h5 className="text-lg text-gray-500 ">{exp.company}</h5>
              </div>
              <div className="text-right">
                <h6 className="text-lg text-gray-500">{exp.period}</h6>
                <h6 className="text-lg text-gray-500">{exp.location}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
