/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { homeTextAnimation, slideAnimation } from "../../config/motion";

const ProjectPresentation = ({ title1, title2, subtitle }) => {
	return (
		<AnimatePresence>
			<motion.section {...slideAnimation("left")} className="">
				<motion.div
					{...homeTextAnimation}
					className="flex flex-col items-center lg:items-start mt-14 p-3 lg:ml-36"
				>
					<div className="text-4xl md:text-6xl lg:text-8xl font-semibold">
						{title1} <span className="text-lightgreen">{title2}</span>
					</div>
					<div className="text-[16px] font-semibold md:text-2xl lg:text-3xl mt-5">
						{subtitle}
					</div>
				</motion.div>
			</motion.section>
		</AnimatePresence>
	);
};
export default ProjectPresentation;
