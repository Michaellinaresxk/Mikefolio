import Menu from "../components/stateless/Menu";
import Footer from "../components/stateless/Footer";

const About = () => {
	return (
		<>
			<section className="min-h-screen flex flex-col">
				<Menu />
				<div className="flex-grow text-white">
					<span>Esta es la pagina de about</span>
				</div>
				<Footer text="Copyright Michaelxk ©" year={2024} />
			</section>
		</>
	);
};
export default About;
