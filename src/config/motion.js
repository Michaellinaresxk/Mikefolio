export const transition = { type: "spring", duration: 0.8 };

export const slideAnimation = (direction) => {
	return {
		initial: {
			x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
			y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
			opacity: 0,
			transition: { ...transition, delay: 0.5 },
		},
		animate: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: { ...transition, delay: 0 },
		},
		exit: {
			x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
			y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
			transition: { ...transition, delay: 0.5 },
		},
	};
};

export const fadeAnimation = {
	initial: {
		opacity: 0,
		transition: { ...transition, delay: 0.5 },
	},
	animate: {
		opacity: 1,
		transition: { ...transition, delay: 0 },
	},
	exit: {
		opacity: 0,
		transition: { ...transition, delay: 0 },
	},
};

export const homeTextAnimation = {
	initial: { x: 100, opacity: 0 },
	animate: { x: 0, opacity: 1 },
	transition: {
		type: "spring",
		damping: 5,
		stiffness: 40,
		restDelta: 0.001,
		duration: 2,
	},
};

export const homeContentAnimation = {
	initial: { y: 100, opacity: 0 },
	animate: { y: 0, opacity: 1 },
	transition: {
		type: "spring",
		damping: 7,
		stiffness: 30,
		restDelta: 0.001,
		duration: 1.5,
		delay: 0.5,
		delayChildren: 0.5,
	},
};

export const homeContainerAnimation = {
	initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
	animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
	exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
};

export const sidebar = {
	open: (width = 300) => ({
		clipPath: `circle(${width * 2 + 200}px at calc(100% - 40px) 40px)`,
		transition: {
			type: "spring",
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: "circle(30px at calc(100% - 40px) 40px)",
		transition: {
			delay: 0.5,
			type: "spring",
			stiffness: 400,
			damping: 40,
		},
	},
};

export const variants_menu_items = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

export const variants_navigation = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};
