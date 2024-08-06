import { useState, useEffect } from "react";

export const WebCards = ({ title, imageUrl, visitUrl }) => {
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    const colors = [
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-pink-500",
      "bg-purple-500",
      "bg-indigo-500",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  }, []);

  return (
    <div
      className={`rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105`}
      style={{ backgroundColor: "#111111", width: "420px" }}
    >
      <div className="relative">
        <img
          className="w-full h-50 object-cover"
          src={imageUrl}
          alt={`Project titled ${title}`}
        />
        <div
          className={`absolute top-0 left-0 w-full h-full ${bgColor} opacity-20`}
        />
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <a
          href={visitUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold py-2 px-4 rounded-full hover:from-gray-600 hover:to-gray-800 transition-colors"
        >
          Visit
        </a>
      </div>
    </div>
  );
};
