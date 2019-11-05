import React from 'react';
import "../assets/scss/home.scss";
import Logo from "../assets/img/Logo.png";
import Sylvia from "../assets/img/Sylvia.jpg";
import Wanjiku from "../assets/img/Wanjiku.png";
import Mbugua from "../assets/img/Mbugua.png";
import {ReactComponent as Stackoverflow} from "../assets/img/Stackoverflow.svg"
import {ReactComponent as Github} from "../assets/img/Github.svg"
import { ReactComponent as LinkedIn} from "../assets/img/LinkedIn.svg"
// import "../assets/scss/link.scss";

class Introduction extends React.Component {
  render() {
    return (
      <div className="helloContainer">
        <div className="greetings">
        <div className="logo">
        <img src={Logo} alt="Logo"></img>
        </div>
        <div className="message">
          <span> Hello,I am a frontend/backend software developer. <br/> Welcome to my Portfolio!</span>
        </div>
        <div className="icons">
          <li> <Github/></li>
          <li> <Stackoverflow/> </li>
          <li> <LinkedIn/> </li>
       
        </div>
        </div>
        <div className="imageSelf">
        <img src={Sylvia} alt="Sylvia Wanjiku Mbugua" id="myPicture"></img>
        </div>
        <div className="otherDetails">
        <div className="bigNameLogo">
        </div>
        <div className="title">
        <img src={Wanjiku} alt="Sylvia Wanjiku Mbugua" id="wanjiku"></img>
        <img src={Mbugua} alt="Sylvia Wanjiku Mbugua" id="mbugua"></img>
        </div>
        </div>
      </div>
      
    );
  }
}

export default Introduction;