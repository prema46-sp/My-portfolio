import React from "react";

const Header = () => {
  return (
    <header className="head">
      <a className="sp">Portfo<span className="name" id="name">lio</span></a>
      <nav id="navbar" className="navbar">
        <a href="#home">Home</a>
        <a href="#About">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
