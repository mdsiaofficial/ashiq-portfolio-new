"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { portfolioData } from "@/lib/data";

export default function Experience() {
  const experiences = portfolioData.experiences;

  return (
    <section id="experience" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-cyan-400 font-medium mb-2 block">Career Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Where I&apos;ve </span>
            <span className="bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Made Impact
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            From building products from zero to thousands of users, to leading teams and mentoring the next generation.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-linear-to-b from-cyan-500 via-emerald-500 to-transparent hidden md:block" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.title}-${exp.company}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="md:absolute md:left-8 md:top-8 w-4 h-4 rounded-full bg-linear-to-r from-cyan-500 to-emerald-500 shadow-lg shadow-cyan-500/30 hidden md:block z-10" />
                
                <div className="md:ml-20 bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {index === 0 ? "Current" : "Past"}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-cyan-400 font-medium mb-3">{exp.company}</p>
                      <p className="text-slate-400 leading-relaxed">
                        {exp.responsibilities}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-slate-500 text-sm md:text-right whitespace-nowrap">
                      <FaCalendarAlt className="w-4 h-4" />
                      {exp.date}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
