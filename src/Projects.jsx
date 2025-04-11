import React from "react";
import digital from "./assets/digital-clock.png";
import form from "./assets/form.svg";
import qrcode from "./assets/qr_code.jpeg";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projectname">My <span className="name">Projects</span></h2>
         <div className="projects-box">
           <div className="project-card">
              <img src={digital}  className="projects" alt="shopping website"></img>
              <h3>Digital clock</h3>
              <p>A real-time digital clock displaying the current time (with AM/PM), date, day, and year in a single line.</p>
             <a href="https://prema46-sp.github.io/Digital-clock/" className="btn">View</a>
           </div>
     
           <div className="project-card">
              <img src={form}  className="projects" alt="weather monitor "></img>
              <h3> Input form</h3>
              <p>A user-friendly input form that collects and submits data with validation, including fields for name, email, phone, and message.</p>
             <a className="btn">View</a>
           </div>
     
           <div className="project-card">
              <img src={qrcode}  className="projects"  alt="Qrcode generator"></img>
              <h3>QR code generator</h3>
              <p>A simple and efficient tool that converts text or URLs into QR codes, making information sharing quick and convenient.</p>
              <a className="btn" href="https://prema46-sp.github.io/qrcode/">View</a>
           </div>
     
           </div>
    </section>
  );
};

export default Projects;
