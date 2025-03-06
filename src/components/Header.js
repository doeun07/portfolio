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
          <a href="#skills" className="hover:text-gray-400">SKILLS</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-gray-400">PROJECTS</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
