import React from "react";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Introduction from "../components/Introduction";
import "../assets/scss/home.scss"

const Home = () => (
  <div id="background">
    <div>
      <Navbar />
    </div>
    <div class="mainContainer">
      <Introduction id="introduction" /> 
      </div>
    <div class="container-large projects" >
      <Projects id="projects" />
    </div>
    <div class="container-large contact" >
      <Projects id="projects" />  
      </div>
  </div>
);
export default Home;