import Header from "../components/layout/Header";
import Feedback from "../components/sections/Feedback";
import Footer from "../components/sections/Footer";
import Getstarted from "../components/sections/Getstarted";
import Hero from "../components/sections/Hero";
import Insights from "../components/sections/Insights";
import Whatsnew from "../components/sections/Whatsnew";
import About from "./About";

const home = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="relative">
          <div className="gradient2 z-0" />
          <Header />
          <Hero />
        </div>
        <div className="relative">
          <div className="gradient z-0" />
          <About />
        </div>
        <div className="relative">
          <div className="gradient3 z-0" />
          <Getstarted />
          <Whatsnew />
        </div>
        <Insights />
        <div className="relative">
          <div className="gradient3 z-0" />
          <Feedback />
        </div>
        <div className="relative">
          <Footer />
          <div className="FooterGradient" />
        </div>
      </div>
    </>
  );
};

export default home;
