import React from 'react';
import "../assets/scss/home.scss";
import Logo2 from "../assets/img/Logo2.png";
import Sylvia from "../assets/img/Sylvia.jpg";
import { ReactComponent as Stackoverflow } from "../assets/img/Stackoverflow.svg";
import { ReactComponent as Github } from "../assets/img/Github.svg";
import { ReactComponent as LinkedIn } from "../assets/img/LinkedIn.svg";

class Introduction extends React.Component {
  render() {
    return (
      <div className="helloContainer">
        <div className="greetings">
          <div className="logo">
            <img src={Logo2} alt="Logo"></img>
          </div>
          <div className="message">
            <span> Hello,meet Sylvia Mbugua. <br/>I am a frontend/backend software developer. <br /> Welcome to my Portfolio!</span>
          </div>
        </div>
        <div className="imageSelf">
          <img src={Sylvia} alt="Sylvia Wanjiku Mbugua" id="myPicture"></img>
        </div>
        <div className="otherDetails">
          <div className="bigNameLogo">
          </div>
          <div className="icons">
            <li> <Github /></li>
            <li> <Stackoverflow /> </li>
            <li> <LinkedIn /> </li>

          </div>
        </div>
      </div>

    );
  }
}

export default Introduction;