import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
function ToggleMenu() {
	const [toggle, setToggle] = useState(true);

	const handleToggle = () => {
		setToggle(!toggle);
	};

	return (
		<>
			{toggle ? (
				<div onClick={handleToggle} className="absolute top-3 right-3 z-20">
					<GiHamburgerMenu color="white" size={35} />
				</div>
			) : (
				<div onClick={handleToggle} className="absolute top-3 right-3 z-20">
					<IoCloseSharp color="white" size={35} />
				</div>
			)}

			{!toggle && (
				<div className="menu-container">
					<div className="flex flex-col items-center text-2xl mt-10">
						<span className="menu-item">
							<Link to="/">Home </Link>
						</span>
						<span className="menu-item mt-2">
							<Link to="/about">About</Link>
						</span>
						<span className="menu-item mt-2">
							<Link to="/proyects">Projects</Link>
						</span>
						<span className="menu-item mt-2">
							<Link to="/contact">Contact</Link>
						</span>
					</div>
				</div>
			)}
		</>
	);
}
export default ToggleMenu;
