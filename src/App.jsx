import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Proyects from "./pages/Proyects";
import Resume from "./pages/Resume";
import ProjectDetails from "./pages/ProjectDetails";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/proyects" element={<Proyects />} />
				<Route path="/proyects/:id" element={<ProjectDetails />} />
				<Route path="/resume" element={<Resume />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
