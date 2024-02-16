import { AnimatePresence, motion } from "framer-motion";
import {
	homeContentAnimation,
	homeTextAnimation,
	slideAnimation,
} from "../../config/motion";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Presentation = ({ name, surname, skills }) => {
	return (
		<AnimatePresence>
			<motion.section
				{...slideAnimation("left")}
				className="flex flex-col absolute w-[700px] h-72 left-14 top-60"
			>
				<motion.div {...homeTextAnimation}>
					<div className="text-4xl md:text-6xl lg:text-8xl font-semibold">
						{name} <span className="text-lightgreen">{surname}</span>
					</div>
					<div className="text-[16px] font-semibold md:text-2xl lg:text-3xl mt-5">
						{skills}
					</div>
				</motion.div>
				<motion.div
					className="flex items-center justify-around w-[180px] h-10 mt-5"
					{...homeContentAnimation}
				>
					<div>
						<FaGithub size={30} color="white" />
					</div>
					<div>
						<FaInstagram size={30} color="white" />
					</div>
					<div>
						<FaLinkedin size={30} color="white" />
					</div>
					<div>
						<FaYoutube size={30} color="white" />
					</div>
				</motion.div>
			</motion.section>
		</AnimatePresence>
	);
};

export default Presentation;
