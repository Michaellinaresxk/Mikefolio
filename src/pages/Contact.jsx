import Menu from "../components/stateless/Menu";
import Footer from "../components/stateless/Footer";
const Contact = () => {
	return (
		<section className="text-white flex flex-col min-h-screen">
			<Menu />
			<div className="flex-grow">Esta es la pagina de contacto</div>

			<Footer text="Copyright Michaelxk ©" year={2024} />
		</section>
	);
};
export default Contact;
