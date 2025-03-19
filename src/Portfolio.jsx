import React, {useState,useEffect} from 'react'
import "boxicons/css/boxicons.min.css"; 
import photo from "./assets/photo.jpg";
import shopping from"./assets/shopping.webp";
import weather from "./assets/weather.jpg";
import qrcode from "./assets/qr_code.jpeg";
import axios from "axios";
import c from "./assets/c.png";
import python from "./assets/python.webp";
import html from "./assets/HTML.png";
import css from "./assets/css.png";
import js from "./assets/js.jpeg";
import react from "./assets/react.svg";
import mongodb from "./assets/mongodb.jpeg";

const Contact = () => {
    const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("Submitting Form:", formData); 
    
      try {
        const response = await axios.post("http://127.0.0.1:5001/contact", formData);

        alert(response.data.message || "Message sent successfully!"); 
        setFormData({ fullName: "", email: "", phone: "", message: "" }); 
    
      } catch (error) {
        console.error("Error sending message:", error); 
    
        if (error.response) {
          console.log("Error Response Data:", error.response.data);
          alert(`Server Error: ${error.response.data.message || "Something went wrong!"}`);
          
        } else if (error.request) {
          console.log("No Response from Server:", error.request);
          alert("No response received. Make sure the backend is running!");
    
        } else {
          console.log("Request Error:", error.message);
          alert(`Request Error: ${error.message}`);
        }
      }
    };
    
    return( 
    
      <section className="info">
      <h1>Contact <span className="name">Me</span></h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-box">
            <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className='input-box'>
            <input type="tel" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />
          </div>
        </div>
        <div className="input-group2">
          <textarea name="message" rows="5" placeholder="Enter your message" value={formData.message} onChange={handleChange} required></textarea>
          <input type="submit" value="Send Message" className='btn1' />
        </div>
      </form>
    </section>
  );
};
   
const Portfolio=()=>{

  const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisibility);
  return () => window.removeEventListener("scroll", toggleVisibility);
}, []);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
  return (
    <> 
   <div className="full">
    <header className="head">
    <a  className="sp">Portfo<span className="name" id="name">lio</span> </a>
    <nav id="navbar" className="navbar">
  <a href="#home">Home</a>
  <a href="#About" >About</a>
  <a href="#contact" >skills</a>
  <a href="#projects">Projects</a>
  <a href="#contact" >Contact</a>

</nav>
    </header> 

 <section  id="home" className="home">
           <div className="content">
                <h1 className="hover">Hi,It's <span className="hover">Shanmuga</span> <span className="name"> prema</span></h1>
                <h3>I'm Front end devoloper</h3>
                <p>A passionate Web Developer with experience in building responsive websites and applications using HTML, CSS, JavaScript, and React.js. Always eager to learn and explore new technologies to create efficient and user-friendly solutions.</p>
                <div className="icons">
                  <a href="#" className="icon"><i className='bx bxl-github'></i></a>
                  <a href="#" className="icon"><i className='bx bxl-linkedin-square'></i></a>
                  <a href="#" className="icon"><i className='bx bxl-instagram'></i></a>
                </div>
                <br></br>
                <div className="contact">
                    <a href="#contact" className="btn">Contact</a>
                </div>
           </div>

           <div className="image">
             <img src={photo} alt="photo" className="photo"></img>
           </div>
           
      </section>


      <section id="About" className="about">
                  <div className="aboutme">
                    <img src={photo} alt="image" className="photo"></img>
                   </div>
                   <div className="aboutme1">
                    <h2 className="aboutname">About <span className="name2">Me</span></h2>
                    <p className="P"> Hi, I'm Prema, a passionate web developer with a keen interest in creating responsive and user-friendly applications. I have experience working with HTML, CSS, JavaScript, and React.js, and I'm constantly learning new technologies to enhance my skills. I enjoy solving problems and building interactive web experiences that are both functional and visually appealing.  

</p>
<br className='br'></br><p className="P">My journey in development has been driven by curiosity and a love for coding. Whether it's designing intuitive interfaces or developing dynamic applications, I always strive to deliver efficient and innovative solutions.  

When I'm not coding, you can find me exploring new tech trends, working on side projects, or learning about the latest advancements in web development. Let's build something amazing together! </p>
                    <br className='br'></br>
                    <a href="#" className="btn">Read more</a>
                   </div>
      </section>
      
      <section className="skills">
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

      <section id="projects" className="projects">
      <h2 className="projectname">My <span className="name">Projects</span></h2>
    <div className="projects-box">
      <div className="project-card">
         <img src={shopping}  className="projects" alt="shopping website"></img>
         <h3>Shopping cart webiste</h3>
         <p>A user-friendly e-commerce platform that allows browsing, adding to cart, and secure checkout for an shopping experience.</p>
         <div className="btn">View</div>
      </div>

      <div className="project-card">
         <img src={weather}  className="projects" alt="weather monitor "></img>
         <h3>Weather app</h3>
         <p>A real-time weather application that provides users with accurate temperature, humidity, and forecasts based on their location.</p>
         <div className="btn">View</div>
      </div>

      <div className="project-card">
         <img src={qrcode}  className="projects"  alt="Qrcode generator"></img>
         <h3>QR code generator</h3>
         <p>A simple and efficient tool that converts text or URLs into QR codes, making information sharing quick and convenient.</p>
         <div className="btn">View</div>
      </div>

      </div>
      </section>

      <section id="contact" className="info">
        <Contact />
        <footer className="footer">
      <div className="icons"id="icons">
                  <a href="#" className="icon"><i className='bx bxl-github'></i></a>
                  <a href="#" className="icon"><i className='bx bxl-linkedin-square'></i></a>
                  
                </div >
                <ul className="list">
                  <li className="title">
                    <a href="#" className="title">FAQ</a>
                  </li>
                  <li className="title">
                    <a href="#about"className="title">About me</a>
                  </li>
                  <li className="title">
                    <a href="#contact"className="title">Contact</a>
                  </li>
                </ul>
                <p className="copyright">
                © Shanmuga prema | all rights reserved
                </p>
      </footer>
      <button className={`uparrow ${isVisible ? "show" : "hide"}`} onClick={scrollToTop}>
       ⬆
       </button>

   
      </section>
</div>
   </>
  );
};

export default Portfolio