import React from 'react';
import Travela from "../assets/img/Travela.png";
import Author from "../assets/img/Author.png";
import StoreManager from "../assets/img/StoreManager.png";
import "../assets/scss/projects.scss";

class Projects extends React.Component {
  render() {
    return (
      <div className="container">
        <h3 className="center title">
          Projects Done:
                </h3>
        <div className="resume">
          <div>
            <h5 className=" resume title">
              Resume
            </h5>
          </div>

          <div>
            <a href="https://drive.google.com/file/d/1J0BceMl4WB7vQk9hx2EsmnwzPcBsH5Ik/view?usp=sharing"> <i className="small material-icons resume-icon">cloud_download</i></a>
          </div>
        </div>
        <div className="row">
          <div className="col s12 project-card">
            <span className="card-title">Travela</span>
            <div className="card small detail-card">
              <div className="card-image">
                <img src={Travela} alt='Travela Project' />
              </div>
              <div className="card-content">
                <p>Travela is a travel management tool for Andelans across all centres. It improves the travel experience of Andelans by providing a platform to create, manage, and approve travel requests and also serves as a single source of truth for all travel-related information. I played the role of a full-stack developer. </p>
              </div>
              <div className="card-action">
                <a href="https://travela.andela.com/" > <i className="small material-icons">link</i></a>
              </div>
            </div>
          </div>
          <div className="col s12 project-card" >
            <span className="card-title">Authors' Haven</span>
            <div className="card small detail-card">
              <div className="card-image">
                <img src={Author} alt='Travela Project' />
              </div>
              <div className="card-content">
                <p>Author’s Haven is a social platform for writers, storytellers and thinkers to share their content and give readers new perspective in their fields of interest. </p>
              </div>
              <div className="card-action">
                <a href="https://theunsulliedf.herokuapp.com/" > <i className="small material-icons">link</i></a>
              </div>
            </div>
          </div>
          <div className="col s12 project-card">
            <span className="card-title">Store Manager</span>
            <div className="card small detail-card">
              <div className="card-image">
                <img src={StoreManager} alt='Travela Project' />
              </div>
              <div className="card-content">
                <p>A store management web application that was aimed at managing stock and inventory</p>
              </div>
              <div className="card-action">
                <a href="https://github.com/sylviawanjiku/storemanager" > <i className="small material-icons">link</i></a>
                <a href="https://github.com/sylviawanjiku/Store_Manager_Api_v2" > <i className="small material-icons">link</i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
