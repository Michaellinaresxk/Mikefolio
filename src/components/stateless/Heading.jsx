/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { homeTextAnimation, slideAnimation } from "../../config/motion";

const ProjectPresentation = ({ title1, title2, subtitle }) => {
	return (
		<AnimatePresence>
			<motion.main {...slideAnimation("left")} className="">
				<motion.section
					{...homeTextAnimation}
					className="flex flex-col items-center lg:items-start mt-14 p-3 lg:ml-36"
				>
					<div className="text-4xl md:text-6xl lg:text-8xl font-semibold">
						<h1>
							{title1} <span className="text-lightgreen">{title2}</span>
						</h1>
					</div>
					<h2 className="text-[16px] font-semibold md:text-2xl lg:text-3xl mt-5">
						{subtitle}
					</h2>
				</motion.section>
			</motion.main>
		</AnimatePresence>
	);
};
export default ProjectPresentation;
