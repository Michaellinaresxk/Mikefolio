import Presentation from "../components/stateless/Presentation";
import Menu from "../components/stateless/Menu";

const Home = () => {
	return (
		<div className="bg-home transition-all ease-in">
			<div className="w-screen h-screen bg-slate-900 bg-opacity-70  w-full justify-center flex flex-grow h-full items-center">
				<Menu />
				<Presentation
					title1="Michael"
					title2="Linares"
					subtitle="FrontEnd Developer & Web Designer"
				/>
			</div>
		</div>
	);
};
export default Home;
