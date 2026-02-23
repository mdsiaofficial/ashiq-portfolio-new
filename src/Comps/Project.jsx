import React, { useState } from 'react';
import data from '../assets/data.json';

const ProjectCard = ({ project }) => {
  return (
    <div className=" bg-slate-300 rounded-lg shadow-xl p-6 w-[22rem] md:w-[19rem]">
      <div className="flex justify-center items-center">

        <img src={project.image} alt="" className="w-[16rem] border-4 hover:scale-150 duration-500 hover:duration-500 mb-4" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.date}</p>
      <p className="text-gray-600 w-[16rem] mb-4">{project.description}</p>
      <div className="flex flex-wrap">
      {project.techStack.map((tech) => (
          <span key={tech} className="bg-gray-200 text-gray-700 text-sm font-medium px-2 py-1 rounded-md mx-1 mb-2">
            {tech}
          </span>
      ))}
      </div>

      <div className="flex">
        {project.link && (
          <a href={project.link} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mr-2">
            Website
          </a>
        )}
        {project.github && (
          <a href={project.github} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md">
            Source
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = data[0].projects;

  return (
    <div className="md:container flex md:gap-3 md:max-w-[43rem] flex-col mx-auto md:px-4 py-5">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Check Out my Projects</h2>
      <p className="text-gray-600 mb-4">I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>

      <div className="flex flex-wrap gap-6 justify-center">
        {Object.values(projects).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;