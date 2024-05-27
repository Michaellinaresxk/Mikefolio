import { useState, useEffect } from "react";

export const WebCards = ({ title, year, imageUrl, visitUrl }) => {
  const [bgColor, setBgColor] = useState(""); // your existing color logic

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
      className={` ${bgColor} rounded-xl overflow-hidden max-h-700px`} // Example with maximum height
      style={{ borderRadius: "30px" }}
    >
      <div className="flex justify-between px-8 py-6">
        <div>
          <div className="font-bold text-2xl mb-4">{title}</div>
          <p className="text-gray-700 text-lg">{year}</p>
        </div>
        <a
          href={visitUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white font-bold py-3 px-6 rounded "
        >
          Here
        </a>
      </div>
      <div
        className="flex justify-center items-center p-4 rounded-lg overflow-hidden"
        style={{ borderRadius: "10px" }}
      >
        <img
          className=" self-center rounded-lg"
          src={imageUrl}
          alt={`Project titled ${title}`}
        />
      </div>
    </div>
  );
};
