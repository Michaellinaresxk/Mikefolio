/* eslint-disable react/prop-types */
const Footer = ({ text, year }) => {
	return (
		<div className="flex justify-center items-center text-justify  h-[50px] bg-slate-700">
			{text}
			{year}
		</div>
	);
};
export default Footer;
