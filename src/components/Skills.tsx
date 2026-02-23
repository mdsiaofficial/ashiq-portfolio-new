"use client";

import { motion } from "framer-motion";
import { FaCode, FaGlobe, FaTools, FaBrain, FaLaptopCode, FaTrophy } from "react-icons/fa";
import { portfolioData } from "@/lib/data";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: FaCode,
    skills: portfolioData.skills.programmingLanguages,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Web Development",
    icon: FaGlobe,
    skills: portfolioData.skills.WebDev,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Development Tools",
    icon: FaTools,
    skills: portfolioData.skills["developmentTools:"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Core Competencies",
    icon: FaBrain,
    skills: portfolioData.skills["coreCompetencies:"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Operating Systems",
    icon: FaLaptopCode,
    skills: portfolioData.skills.operatingSystems,
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Problem Solving",
    icon: FaTrophy,
    skills: portfolioData.skills.problemSolvingPlatforms,
    color: "from-yellow-500 to-amber-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${category.color} opacity-70 hover:opacity-100 transition-opacity cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
