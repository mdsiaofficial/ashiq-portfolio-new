"use client";

import { motion } from "framer-motion";
import { FaCode, FaCloud, FaTools, FaBrain, FaLayerGroup } from "react-icons/fa";
import { portfolioData } from "@/lib/data";

const skillCategories = [
  {
    title: "Languages",
    icon: FaCode,
    skills: portfolioData.skills.programmingLanguages,
  },
  {
    title: "Frameworks & Tools",
    icon: FaLayerGroup,
    skills: portfolioData.skills.WebDev,
  },
  {
    title: "Cloud & DevOps",
    icon: FaCloud,
    skills: portfolioData.skills.cloud || [],
  },
  {
    title: "Tools",
    icon: FaTools,
    skills: portfolioData.skills.tools || [],
  },
  {
    title: "Domains",
    icon: FaBrain,
    skills: portfolioData.skills.domains || [],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-cyan-400 font-medium mb-2 block">Technical Arsenal</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">What I </span>
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Modern technologies I use to build scalable, production-ready applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/30 hover:bg-slate-800/80 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-cyan-500/10">
                  <category.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-slate-700/50 text-slate-300 border border-slate-600/50 hover:border-cyan-500/30 hover:text-cyan-400 transition-all cursor-default"
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
