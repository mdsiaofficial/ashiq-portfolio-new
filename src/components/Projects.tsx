"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar, FaRocket } from "react-icons/fa";
import { portfolioData } from "@/lib/data";
import { Project } from "@/lib/types";

// const featuredProjects = Object.values(portfolioData.projects).filter(p => p.featured).slice(0, 4); //! i wont use it.
const featuredProjects = Object.values(portfolioData.projects); // i use it.

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaStar className="text-amber-400" />
            <span className="text-cyan-400 font-medium">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Products I&apos;ve </span>
            <span className="bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Built
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Real products serving real users. These are the projects I&apos;m most proud of -
            from AI platforms to enterprise solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project: Project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-linear-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 rounded-2xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-cyan-500/20 rounded-xl">
                <FaRocket className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Have a project in mind?</h3>
                <p className="text-slate-400">Let&apos;s discuss how we can work together.</p>
              </div>
            </div>
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-100 transition-all duration-300 whitespace-nowrap"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500"
    >
      <div className="absolute top-4 right-4 z-10">
        {project.featured && (
          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30">
            Featured
          </span>
        )}
      </div>

      <div className="aspect-video overflow-hidden bg-slate-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm text-slate-500">{project.date}</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm mb-5 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300 border border-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <FaExternalLinkAlt className="w-3 h-3" />
              View Project
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              <FaGithub className="w-4 h-4" />
              Source
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
