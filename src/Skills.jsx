import React from "react";
import c from "./assets/c.png";
import python from "./assets/python.webp";
import html from "./assets/HTML.png";
import css from "./assets/css.png";
import js from "./assets/js.jpeg";
import react from "./assets/react.svg";
import mongodb from "./assets/mongodb.jpeg";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div>
                       <h1>My skills </h1>
                       <div>
                       <img src={c} alt="c" className="skill"></img>
                       <img src={python} alt="python" className="skill"></img>
                       <img src={html} alt="html" className="skill"></img>
                       <img src={css} alt="css" className="skill"></img>
                       </div>
                       <div>
                       <img src={js} alt="js" className="skill"></img>
                       <img src={react} alt="react" className="skill"></img>
                       <img src={mongodb} alt="mongodb" className="skill"></img>
                       </div>
                      </div>
    </section>
  );
};

export default Skills;
