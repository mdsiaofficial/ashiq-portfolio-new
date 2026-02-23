"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaRocket } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { portfolioData } from "@/lib/data";

export default function Contact() {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: portfolioData.socialLinks?.email || "ashiq@midgen.ai",
      href: `mailto:${portfolioData.socialLinks?.email || "ashiq@midgen.ai"}`,
    },
    {
      icon: FaMapMarkerAlt,
      label: "Based in",
      value: "Dhaka, Bangladesh",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: portfolioData.socialLinks?.linkedin || "https://linkedin.com/in/mdsiaofficial", label: "LinkedIn" },
    { icon: FaGithub, href: portfolioData.socialLinks?.github || "https://github.com/mdsiaofficial", label: "GitHub" },
    { icon: FaMedium, href: portfolioData.socialLinks?.medium || "https://medium.com/@mdsiaofficial", label: "Medium" },
  ];

  return (
    <section id="contact" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-cyan-400 font-medium mb-2 block">Let&apos;s Connect</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Ready to </span>
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Build Something?
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Whether you want to collaborate on a project, discuss a business idea, 
            or just grab coffee (virtually), I&apos;m always open to connecting.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                Let&apos;s start a conversation
              </h3>
              <div className="space-y-4 mb-8">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-800/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <info.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div>
                <p className="text-slate-400 text-sm mb-4">Find me on</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-xl flex items-center justify-center hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-500/20 rounded-xl">
                  <FaRocket className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Start a Project</h3>
              </div>
              <p className="text-slate-400 mb-8 leading-relaxed">
                I&apos;m currently available for freelance projects, consulting, 
                and full-time opportunities. Let&apos;s discuss how I can help bring your vision to life.
              </p>
              <a
                href={`mailto:${portfolioData.socialLinks?.email || "ashiq@midgen.ai"}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-100 transition-all duration-300"
              >
                <FaPaperPlane className="w-4 h-4" />
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
