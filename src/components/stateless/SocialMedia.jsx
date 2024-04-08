/* eslint-disable react/prop-types */
import { SotialIconLinkedin } from "./icons/SotialIconLinkedin";
import { SotialIconYoutube } from "./icons/SotialIconYoutube";
import { SotialIconGithub  } from "./icons/SotialIconGithub";
import { SotialIconDribble } from "./icons/SotialIconDribble";

const SocialMedia = () => {
	return (
    <div className="flex items-center  w-[180px] h-10 gap-5 mt-5">
      <a href="https://www.youtube.com/c/XkWeb/videos" target="_blank" rel="noopener noreferrer" className="flex-1">
        <SotialIconYoutube />
      </a>
      <a href="https://dribbble.com/michaelxk" target="_blank" rel="noopener noreferrer" className="flex-1">
        <SotialIconDribble />
      </a>
      <a href="https://github.com/Michaellinaresxk" target="_blank" rel="noopener noreferrer" className="flex-1">
        <SotialIconGithub />
      </a>
      <a href="https://www.linkedin.com/in/michael-linares-abreu/" target="_blank" rel="noopener noreferrer" className="flex-1">
        <SotialIconLinkedin />
      </a>
    </div>
  );
};
export default SocialMedia;
