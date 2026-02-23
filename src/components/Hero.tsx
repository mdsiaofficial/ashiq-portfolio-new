"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaHackerrank } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { portfolioData } from "@/lib/data";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = portfolioData.basicTitles;

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    if (displayText.length < currentTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % titles.length);
        setDisplayText("");
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [displayText, currentIndex, titles]);

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/mdsiaofficial", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/mdsiaofficial", label: "LinkedIn" },
    { icon: SiLeetcode, href: "https://leetcode.com/mdsiaofficial", label: "LeetCode" },
    { icon: SiCodeforces, href: "https://codeforces.com/profile/mdsiaofficial", label: "Codeforces" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cyan-400 text-lg mb-4 font-medium">
              Hello, I&apos;m
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">{portfolioData.basicInfo.fullName}</span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-6 h-8">
              <span className="gradient-text">{displayText}</span>
              <span className="animate-pulse">|</span>
            </div>
            <p className="text-gray-400 text-lg mb-8 max-w-xl">
              {portfolioData.basicInfo.about.slice(0, 180)}...
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 glass rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View Work
              </a>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-300" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                <img
                  src="/ashiq.png"
                  alt={portfolioData.basicInfo.fullName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 p-4 glass rounded-xl">
                <div className="flex items-center gap-2">
                  <FaCode className="text-cyan-400" />
                  <span className="text-sm font-medium">500+ Hours</span>
                </div>
                <p className="text-xs text-gray-400">Coding Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
