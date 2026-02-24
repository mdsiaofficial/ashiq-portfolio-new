"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaMedium, FaRocket, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { portfolioData } from "@/lib/data";

export default function Hero() {
  const socialLinks = [
    { icon: FaLinkedin, href: portfolioData.socialLinks?.linkedin || "https://linkedin.com/in/mdsiaofficial", label: "LinkedIn" },
    { icon: FaGithub, href: portfolioData.socialLinks?.github || "https://github.com/mdsiaofficial", label: "GitHub" },
    { icon: FaMedium, href: portfolioData.socialLinks?.medium || "https://medium.com/@mdsiaofficial", label: "Medium" },
    { icon: FaEnvelope, href: `mailto:${portfolioData.socialLinks?.email || "ashiq@midgen.ai"}`, label: "Email" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-150 h-150 -translate-x-1/2 -translate-y-1/2 bg-linear-radial from-cyan-500/5 to-transparent rounded-full" />
        </div>
        
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
                Co-Founder & COO
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Building Solutions,</span>
              <br />
              <span className="bg-linear-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Leading Teams, Scaling Operations
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 mb-4 font-light">
              {portfolioData.basicInfo.fullName}
            </p>

            <p className="text-lg text-slate-500 mb-8 max-w-xl leading-relaxed">
              {portfolioData.basicInfo.about}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-100 transition-all duration-300 flex items-center gap-2"
              >
                <FaRocket className="w-4 h-4" />
                Let's Build Together
              </a>
              <a
                href={portfolioData.featured?.website || "https://midgen.ai"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-slate-700 text-white rounded-full font-semibold hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300"
              >
                View My Work
              </a>
            </div>

            <div className="flex items-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                <img
                  src="/ashiq.png"
                  alt={portfolioData.basicInfo.fullName}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 p-4 bg-slate-900/90 backdrop-blur border border-slate-800 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                  <div>
                    <p className="text-sm font-semibold text-white">Co-Founder & COO</p>
                    <p className="text-xs text-slate-400">@ Midgen</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -top-6 -right-6 p-4 bg-slate-900/90 backdrop-blur border border-slate-800 rounded-xl"
              >
                <div className="text-right">
                  <p className="text-sm font-semibold text-white">500+ Members</p>
                  <p className="text-xs text-slate-400">Team Led</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
