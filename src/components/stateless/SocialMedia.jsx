/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const SocialMedia = ({ size, color }) => {
	return (
    <div className="flex items-center justify-around w-[180px] h-10 mt-5">
      <a href="https://github.com/Michaellinaresxk" target="_blank" rel="noopener noreferrer" className="flex-1">
        <FaGithub size={size} color={color} />
      </a>
      <a href="https://dribbble.com/michaelxk" target="_blank" rel="noopener noreferrer" className="flex-1">
        <FaDribbble size={size} color={color} />
      </a>
      <a href="https://www.linkedin.com/in/michael-linares-abreu/" target="_blank" rel="noopener noreferrer" className="flex-1">
        <FaLinkedin size={size} color={color} />
      </a>
      <a href="https://www.youtube.com/c/XkWeb/videos" target="_blank" rel="noopener noreferrer" className="flex-1">
        <FaYoutube size={size} color={color} />
      </a>
    </div>
  );
};
export default SocialMedia;
