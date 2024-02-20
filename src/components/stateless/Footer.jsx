/* eslint-disable react/prop-types */
const Footer = ({ text, year }) => {
	return (
		<footer className="flex justify-center items-center text-justify h-[50px] bg-slate-700">
			{text}
			{year}
		</footer>
	);
};
export default Footer;
