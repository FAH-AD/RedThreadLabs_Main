import React from "react";
import AboutHeader from "../components/About-header";
import AboutIntro from "../components/About-intro";
import CallToAction from "../components/Call-to-action";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import MinimalArea from "../components/Minimal-area";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import SkillsCircle from "../components/Skills-circle";
import Team1 from "../components/Team1";
import VideoWithTestimonials from "../components/Video-with-testimonials";
import DarkTheme from "../layouts/Dark";

const AboutDark = () => {
  const navbarRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} />
      <AboutHeader />
      <AboutIntro />
      <Services withPadding withOutTitle />
      <VideoWithTestimonials />
      <SkillsCircle subBG theme="dark" />
      <Team1 />
      <MinimalArea />
      <Clients theme="dark" />
      <CallToAction subBG />
      <Footer />
    </DarkTheme>
  );
};

export default AboutDark;
