import Presentation from "../components/stateless/Presentation";
import Menu from "../components/stateless/Menu";
import WebsSection from "../components/stateless/WebsSection";
import { AboutMeText } from "../components/stateless/AboutMeText";
import CallToAction from "../components/stateless/CallToAction";
import Footer from "../components/stateless/Footer";
import WhatIDo from "../components/stateless/WhatIDo";

const Home = () => {
  return (
    <>
      <main>
        <div className="bg-home transition-all ease-in">
          <div className="w-screen h-screen bg-slate-900 bg-opacity-0  w-full flex flex-grow h-full items-center pl-20">
            <Menu />
            <div className="container-presentation">
              <Presentation
                title1="Michael"
                title2="Linares"
                subtitle="FrontEnd Developer & Web Designer"
              />
            </div>
          </div>
        </div>
      </main>
      <AboutMeText />
      <WhatIDo />
      <WebsSection />

      <CallToAction />
      <Footer text="Copyright Michaelxk ©" year={2024} />
    </>
  );
};
export default Home;
