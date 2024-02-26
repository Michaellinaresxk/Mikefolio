import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../../useDimensions";
import MenuToggle from "./MenuToggle";
import Navigation from "./Navigation";
import { sidebar } from "../../config/motion";

const Menu = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);

	return (
		<motion.nav
		className="absolute top-5 right-5 z-50 bottom-0 w-[68px]"
			initial={false}
			animate={isOpen ? "open" : "closed"}
			custom={height}
			ref={containerRef}
		>
			<motion.div
				className="absolute top-0 right-0 bottom-0 w-[450px] h-screen bg-black/75"
				variants={sidebar}
			/>
			<Navigation />
			<MenuToggle toggle={() => toggleOpen()} />
		</motion.nav>
	);
};

export default Menu;
