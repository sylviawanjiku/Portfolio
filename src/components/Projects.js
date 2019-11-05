import React from 'react';
import Travela from "../assets/img/Travela.png";

class Projects extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="col s12 m4">
          <span class="card-title">Card Title</span>
          <div class="card small">
            <div class="card-image">
              <img src={Travela} alt='Travela Project'/>
            </div>
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="/">Github</a>
              <a href="/">LinkedIn</a>
              <a href="/">StackOverflow</a>
            </div>
          </div>
        </div>
        <div class="col s12 m4">
          <span class="card-title">Card Title</span>
          <div class="card small">
            <div class="card-image">
            <img src={Travela} alt='Travela Project'/>
            </div>
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="/">Github</a>
              <a href="/">LinkedIn</a>
              <a href="/">StackOverflow</a>
            </div>
          </div>
        </div>
        <div class="col s12 m4">
          <span class="card-title">Card Title</span>
          <div class="card small">
            <div class="card-image">
            <img src={Travela} alt='Travela Project'/>
            </div>
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="/">Github</a>
              <a href="/">LinkedIn</a>
              <a href="/">StackOverflow</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
