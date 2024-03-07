/* eslint-disable react/prop-types */
const Footer = ({ text, year }) => {
	return (
		<footer className="footer flex justify-center w-full items-center h-auto p-4">
			<span>{text}</span>
			<span>{year}</span>
		</footer>

	);
};
export default Footer;
