import React from "react";
import photo from "./assets/photo.jpg";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="content">
        <h1 className="hover">
          Hi, It's <span className="hover">Shanmuga</span> <span className="name">Prema</span>
        </h1>
        <h3>I'm a Frontend Developer</h3>
        <p>
          A passionate Web Developer with experience in HTML, CSS, JavaScript, and React.js.
          Always eager to learn and explore new technologies.
        </p>
        <div className="icons">
          <a href="#" className="icon"><i className="bx bxl-github"></i></a>
          <a href="#" className="icon"><i className="bx bxl-linkedin-square"></i></a>
          <a href="#" className="icon"><i className="bx bxl-instagram"></i></a>
        </div>
        <br />
        <div className="contact">
          <a href="#contact" className="btn">Contact</a>
        </div>
      </div>
      <div className="image">
        <img src={photo} alt="Shanmuga Prema" className="photo" />
      </div>
    </section>
  );
};

export default Home;
