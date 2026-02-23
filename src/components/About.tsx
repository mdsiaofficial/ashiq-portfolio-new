"use client";

import { motion } from "framer-motion";
import { FaRocket, FaUsers, FaTrophy, FaCode, FaBuilding, FaLightbulb } from "react-icons/fa";
import { leadership, portfolioData, stats } from "@/lib/data";



export default function About() {
  return (
    <section id="about" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">More Than </span>
            <span className="bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Just Code
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            I&apos;m a builder at heart. Whether it&apos;s leading a team, mentoring the next generation of engineers,
            or shipping products that solve real problems - I bring the same intensity and focus to everything I do.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-cyan-500/30 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-cyan-400 mb-4" />
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FaRocket className="text-cyan-400" />
              Leadership & Impact
            </h3>
            <div className="space-y-6">
              {leadership.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 bg-slate-900/50 border-l-2 border-cyan-500/50 rounded-r-lg"
                >
                  <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FaCode className="text-emerald-400" />
              Technical Foundation
            </h3>
            <div className="space-y-6">
              <div className="p-5 bg-slate-900/50 border border-slate-800 rounded-xl">
                <h4 className="text-lg font-semibold text-white mb-2">Full-Stack Engineering</h4>
                <p className="text-slate-400 text-sm">
                  Building scalable applications with Next.js, TypeScript, Node.js, and modern cloud infrastructure.
                </p>
              </div>
              <div className="p-5 bg-slate-900/50 border border-slate-800 rounded-xl">
                <h4 className="text-lg font-semibold text-white mb-2">AI/ML Integration</h4>
                <p className="text-slate-400 text-sm">
                  Leveraging OpenAI, Claude, and other AI APIs to build products that users love.
                </p>
              </div>
              <div className="p-5 bg-slate-900/50 border border-slate-800 rounded-xl">
                <h4 className="text-lg font-semibold text-white mb-2">System Architecture</h4>
                <p className="text-slate-400 text-sm">
                  Strong foundation in DSA and system design enables me to build efficient, scalable solutions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
