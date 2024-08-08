import React from "react";
import { WebCards } from "./WebCards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { websites } from "../../data/websites";

const WebsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
      <div className="flex flex-col md:flex-row md:items-center gap-10">
        <div className="w-full  md:w-4/12">
          <h2 className="text-5xl font-bold mb-6">
            Recently <span className="font-normal text-orange-500">Works:</span>
          </h2>
          <p className="mb-5 text-lg">
            I've played a key role in developing impactful projects. Here's a
            curated selection showcasing my expertise and the achieved results.
          </p>
          <a href="/projects">
            <button className="bg-gradient-to-r from-gray-700 to-gray-900 text-white font-medium rounded-full px-8 py-4 md:px-12 md:py-6 hover:from-gray-600 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 transition ease-in-out duration-300 text-lg md:text-xl shadow-lg">
              View all
            </button>
          </a>
        </div>
        <div className="w-full md:w-8/12">
          <Slider {...settings}>
            {websites.map((web) => (
              <div key={web.id} className="p-4">
                <WebCards title={web.title} imageUrl={web.CardImage} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default WebsSection;
