"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaAward, FaUniversity } from "react-icons/fa";
import { portfolioData } from "@/lib/data";

export default function Education() {
  const education = portfolioData.education;

  return (
    <section className="py-20 relative bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-cyan-400 font-medium mb-2 block">Background</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Education
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {education.map((edu, index) => (
            <motion.div
              key={edu.uni}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                  <FaUniversity className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {edu.uni}
                  </h3>
                  <p className="text-slate-400 text-sm mb-3">{edu.program}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-slate-500">
                      <FaCalendarAlt className="w-4 h-4" />
                      {edu.year}
                    </div>
                    {edu.result && (
                      <div className="flex items-center gap-2 text-emerald-400">
                        <FaAward className="w-4 h-4" />
                        GPA: {edu.result}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
