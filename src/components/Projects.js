import React from 'react';
import Travela from "../assets/img/Travela.png";
import Author from "../assets/img/Author.png";
import StoreManager from "../assets/img/StoreManager.png";
import "../assets/scss/projects.scss"

class Projects extends React.Component {
  render() {
    return (
      <div className="project-container"> 
        <h3 className="center">
          Projects Done:
                </h3>
        <div className="row">
          <div className="col s12">
            <span className="card-title">Travela</span>
            <div className="card small project-card">
              <div className="card-image">
                <img src={Travela} alt='Travela Project' />
              </div>
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
              </div>
              <div className="card-action">
                <a href="/">Github</a>
                <a href="/">LinkedIn</a>
                <a href="/">StackOverflow</a>
              </div>
            </div>
          </div>
          <div className="col s12">
            <span className="card-title">Authors' Haven</span>
            <div className="card small project-card">
              <div className="card-image">
                <img src={Author} alt='Travela Project' />
              </div>
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
              </div>
              <div className="card-action">
                <a href="/">Github</a>
                <a href="/">LinkedIn</a>
                <a href="/">StackOverflow</a>
              </div>
            </div>
          </div>
          <div className="col s12">
            <span className="card-title">Store Manager</span>
            <div className="card small project-card">
              <div className="card-image">
                <img src={StoreManager} alt='Travela Project' />
              </div>
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
              </div>
              <div className="card-action">
                <a href="/">Github</a>
                <a href="/">LinkedIn</a>
                <a href="/">StackOverflow</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
