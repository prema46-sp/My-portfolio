import React, { useState,useEffect } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({ fullName: "", email: "", phone: "", message: "" });
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5001/contact", formData);
      alert(response.data.message || "Message sent successfully!");
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch (error) {
      alert("Error sending message. Please try again.");
    }
  };
  
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
          <div className="container">
            <section className="info">
              <h1>Contact <span className="name">Me</span></h1>
              <form>
                <div className="input-group">
                  <div className="input-box">
                    <input type="text" name="fullName" placeholder="Full Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                  </div>
                  <div className='input-box'>
                    <input type="tel" name="phone" placeholder="Enter your phone number" required />
                  </div>
                </div>
                <div className="input-group2">
                  <textarea name="message" rows="5" placeholder="Enter your message" required></textarea>
                  <input type="submit" value="Send Message" className='btn1' />
                </div>
              </form>
            </section>
      
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
          </div>

  );
};
export default Contact;
