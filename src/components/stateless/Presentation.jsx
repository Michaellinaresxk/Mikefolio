import { AnimatePresence, motion } from "framer-motion";
import {
	homeContentAnimation,
	homeTextAnimation,
	slideAnimation,
} from "../../config/motion";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Presentation = ({ name, surname, skills }) => {
	return (
		<AnimatePresence>
			<motion.section
				{...slideAnimation("left")}
				className="flex flex-col"
			>
				<motion.div {...homeTextAnimation}>
					<div className="text-4xl md:text-6xl lg:text-8xl font-extrabold ">
						{name} <span className="text-lightgreen">{surname}</span>
					</div>
					<div className=" md:text-xl lg:text-2xl mt-5 text-3xl md:text-4xl">
						{skills}
					</div>
				</motion.div>
				<motion.div
					className="flex items-center justify-around w-[180px] h-10 mt-5"
					{...homeContentAnimation}
				>
					<a href="https://github.com/Michaellinaresxk" target="_blank">
						<FaGithub size={35} color="white" />
					</a>
					<a href="https://dribbble.com/michaelxk" target="_blank">
						<FaDribbble size={35} color="white" />
					</a>
					<a href="https://www.linkedin.com/in/michael-linares-abreu/" target="_blank">
						<FaLinkedin size={35} color="white" />
					</a>
					<a href="https://www.youtube.com/@XkWeb/videos" target="_blank">
						<FaYoutube size={35} color="white" />
					</a>
				</motion.div>
			</motion.section>
		</AnimatePresence>
	);
};

export default Presentation;
