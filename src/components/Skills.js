import React, { Component } from 'react';
import "../assets/scss/skills.scss";
import Chart from "../assets/img/Chart.png";
import Navbar from "./Navbar"

class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <div className="next"><a className="large" href="/#/work" > <i className="material-icons large">chevron_right</i></a></div>
                <div className="back"><a className="large" href="/#/" > <i className="material-icons large">chevron_left</i></a></div>
                <div className="container">
                    <div className="the-headers">
                    <div className="navBar">
          <Navbar />
        </div>
                        <h1 className="title">
                            Sylvia <br />Mbugua
                       </h1>
                     
                        <span className="heading">About Me:</span>
                    </div>


                    <div className="details">
                        <div className="about-details">
                            <span>Passionate, growth-oriented full-stack software engineer with about 2 years of professional experience. I'm well versed in working in agile software development, building efficient and well-tested software applications and working in a distributed team.
                            </span>
                        </div>
                        <div className="chart-details">
                            <img className="chart-det" src={Chart} alt="Chart"></img>
                        </div>

                    </div>
                </div>
            </div>

        )
    }

}
export default Skills;
