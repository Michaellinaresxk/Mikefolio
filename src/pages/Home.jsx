import Presentation from "../components/stateless/Presentation";
import ToggleMenu from "../components/statefull/ToggleMenu";
const Home = () => {
	return (
		<div className="bg-home transition-all ease-in">
			<div className="w-screen h-screen bg-slate-900 bg-opacity-70">
				<ToggleMenu />
				<Presentation
					name="Michael"
					surname="Linares"
					skills="FrontEnd Developer, Web Designer & Entreprenuer"
				/>
			</div>
		</div>
	);
};
export default Home;
