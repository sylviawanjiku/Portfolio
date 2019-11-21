import React from "react";
import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import "../assets/scss/home.scss";

const Home = () => (
  <div id="background">
    <div className="navigation">
      <Navbar />
    </div>
    <div className="mainContainer">
      <Introduction id="introduction" /> 
      </div>
  </div>
);
export default Home;