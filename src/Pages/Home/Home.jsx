import React from "react";
import NavBar from "./../../Components/NavBar/NavBar";
import Banner from "../../Components/Banner/Banner";
import About from "../../Components/About/About";
import Skill from "../../Components/Skill/Skill";
import Projects from "../../Components/Projects/Projects";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="bg-base-300">
      <div className="lg:max-w-9/12 mx-auto">
      <nav>
        <NavBar></NavBar>
        <Banner></Banner>
        <About></About>
        <Skill></Skill>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </nav>
    </div>
    </div>
  );
};

export default Home;
