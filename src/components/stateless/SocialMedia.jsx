/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const SocialMedia = ({ size, color }) => {
	return (
		<>
			<div className="flex items-center justify-around w-[180px] h-10 mt-5">
				<div className="flex-1">
					<FaGithub size={size} color={color} />
				</div>
				<div className="flex-1">
					<FaInstagram size={size} color={color} />
				</div>
				<div className="flex-1">
					<FaLinkedin size={size} color={color} />
				</div>
				<div className="flex-1">
					<FaYoutube size={size} color={color} />
				</div>
			</div>
		</>
	);
};
export default SocialMedia;
