/* eslint-disable react/prop-types */
const Footer = ({ text, year }) => {
	return (
		<footer className="flex justify-center w-full items-center h-auto p-4 bg-slate-700">
			<span>{text}</span>
			<span>{year}</span>
		</footer>
	);
};
export default Footer;
