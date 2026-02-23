"use client";

import { motion } from "framer-motion";
import { FaUserGraduate, FaAward, FaCode, FaLightbulb } from "react-icons/fa";
import { portfolioData } from "@/lib/data";

const stats = [
  { icon: FaCode, label: "Problems Solved", value: "190+" },
  { icon: FaAward, label: "Certifications", value: "5+" },
  { icon: FaUserGraduate, label: "Education", value: "2" },
  { icon: FaLightbulb, label: "Projects", value: "16+" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl p-8 gradient-border">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                Who I Am
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                {portfolioData.basicInfo.about}
              </p>
              <p className="text-gray-300 leading-relaxed">
                I&apos;m currently pursuing my BSc in Computer Science & Engineering at City University Bangladesh. 
                My journey in programming started with competitive programming, and I&apos;ve since expanded into 
                full-stack web development, building applications that make a difference.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <p className="text-3xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
