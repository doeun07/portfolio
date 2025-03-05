import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <span>DOEUN.PORTFOLIO</span>
      <ul>
        <li>
          <a href="#profile" className="hover:text-gray-400">PROFILE</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-gray-400">PROJECTS</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-400">CONTACT</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
