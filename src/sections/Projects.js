import React from "react";
import Project from "../components/Project";

const Projects = () => {
  return (
    <section id="projects" className="h-screen flex items-center justify-center bg-gray-200">
      <h1 className="text-4xl font-bold">PROJECTS</h1>
      <Project />
    </section>
  );
};

export default Projects;
