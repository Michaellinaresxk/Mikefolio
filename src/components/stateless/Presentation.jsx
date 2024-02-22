import { AnimatePresence, motion } from "framer-motion";
import SocialMedia from "./SocialMedia";
import {
	homeContentAnimation,
	homeTextAnimation,
	slideAnimation,
} from "../../config/motion";

// eslint-disable-next-line react/prop-types
const Presentation = ({ title1, title2, subtitle }) => {
	return (
		<AnimatePresence>
			<motion.section
				{...slideAnimation("left")}
				className="flex flex-col absolute w-[700px] h-72 left-14 top-60"
			>
				<motion.div {...homeTextAnimation}>
					<div className="text-4xl md:text-6xl lg:text-8xl font-semibold">
						{title1} <span className="text-lightgreen">{title2}</span>
					</div>
					<div className="text-[16px] font-semibold md:text-2xl lg:text-3xl mt-5">
						{subtitle}
					</div>
				</motion.div>
				<motion.div {...homeContentAnimation}>
					<SocialMedia size={30} color="white" />
				</motion.div>
			</motion.section>
		</AnimatePresence>
	);
};

export default Presentation;
