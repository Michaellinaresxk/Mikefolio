import Presentation from "../components/stateless/Presentation";
import ToggleMenu from "../components/statefull/ToggleMenu";

const Home = () => {
	return (
		<div className="bg-home transition-all ease-in">
			<div className="w-screen h-screen bg-slate-900 bg-opacity-70  w-full justify-center flex flex-grow h-full items-center">
				<ToggleMenu />
				<Presentation
					name="Michael"
					surname="Linares"
					skills="FrontEnd Developer & Web Designer"
				/>
			</div>
		</div>
	);
};
export default Home;
