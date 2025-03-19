import React from "react";
import photo from "./assets/photo.jpg";

const About = () => {
  return (
    <section id="About" className="about">
      <div className="aboutme">
        <img src={photo} alt="Shanmuga Prema" className="photo" />
      </div>
      <div className="aboutme1">
        <h2 className="aboutname">About <span className="name2">Me</span></h2>
        <p className="P">
          Hi, I'm Prema, a passionate web developer with a keen interest in creating
          responsive and user-friendly applications. I enjoy solving problems and
          building interactive web experiences that are both functional and visually
          appealing.
        </p>
        <br />
        <p className="P">My journey in development has been driven by curiosity and a love for coding. Whether it's designing intuitive interfaces or developing dynamic applications, I always strive to deliver efficient and innovative solutions.  
              When I'm not coding, you can find me exploring new tech trends, working on side projects, or learning about the latest advancements in web development. Let's build something amazing together! </p>
       <br className='br'></br>
        <a href="#" className="btn">Read more</a>
      </div>
    </section>
  );
};

export default About;
