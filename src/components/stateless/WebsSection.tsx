import React from "react";

// Assuming you have a Card component for your slider items
import { WebCards } from "./WebCards";
import { mmoon } from "../../assets/img/index";

const WebsSection = ({}) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row md:items-center gap-8">
        <div className="w-full md:w-1/3">
          <h2 className="text-7xl font-bold mb-10">
            Recently <span className="font-normal text-orange-500">Works:</span>
          </h2>
          <p className="mb-5 text-lg">
            I've played a key role in developing impactful projects. Here's a
            curated selection showcasing my expertise and the achieved results.
          </p>
          <button className="bg-gradient-to-r from-gray-700 to-gray-900 text-white font-medium rounded-full px-8 py-4 md:px-12 md:py-4 hover:from-gray-600 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 transition ease-in-out duration-300 text-lg md:text-xl shadow-lg">
            View all
          </button>
        </div>
        <div className="w-full md:w-3/3">
          {/* Slider implementation */}
          <div className="flex gap-5 ">
            {[...Array(2)].map((_, i) => (
              <div key={i} className=" w-50vw max-h-700px">
                <WebCards
                  title="UAE Year of 2023"
                  year="2023"
                  imageUrl={mmoon}
                  visitUrl="https://picsum.photos/200/300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsSection;
