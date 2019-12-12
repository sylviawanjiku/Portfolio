import React from 'react';
import "../assets/scss/projects.scss";
import Navbar from "./Navbar"
import projectDetails from '../utils/projectDetails'


export const ProjectCard = ({
  title,
  image,
  description,
  link
}) => {
  return (
    <div className="row">
      <div className="col s12 project-card">
        <span className="card-title">{title}</span>
        <div className="card small detail-card">
          <div className="card-image">
            <img src={image} alt=' Project' />
          </div>
          <div className="card-content">
            <p>{description}</p>
          </div>
          <div className="card-action">
            <a href={link}> <i className="small material-icons">link</i></a>
          </div>
        </div>
      </div>
    </div>

  );
}


export const ProjectCards = () => {
  return (
    <div className="container">
      <div className="next"><a href="/#/contact" > <i className="material-icons large">chevron_right</i></a></div>
      <div className="back"><a href="/#/about" > <i className="material-icons large">chevron_left</i></a></div>
      <h3 className="center title">
        Projects Done:
        </h3>
      <div className="navBar">
        <Navbar />
      </div>
      <div className="resume">
        <div>

          <h5 className=" resume title">
            Resume
            </h5>
        </div>

        <div>
          <a href="https://drive.google.com/file/d/1J0BceMl4WB7vQk9hx2EsmnwzPcBsH5Ik/view?usp=sharing">
            <i className="small material-icons resume-icon">cloud_download</i></a>
        </div>
      </div>
      {projectDetails.map(projectData => {
        console.log("aaaa", projectData)
        return (
          <ProjectCard
            key={projectData.id}
            title={projectData.title}
            image={projectData.image}
            description={projectData.description}
          />
        );

      })}
    </div>
  );
}

export default ProjectCards;
