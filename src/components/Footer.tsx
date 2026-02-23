"use client";

import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { portfolioData } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaLinkedin, href: portfolioData.socialLinks?.linkedin || "https://linkedin.com/in/mdsiaofficial", label: "LinkedIn" },
    { icon: FaGithub, href: portfolioData.socialLinks?.github || "https://github.com/mdsiaofficial", label: "GitHub" },
    { icon: FaMedium, href: portfolioData.socialLinks?.medium || "https://medium.com/@mdsiaofficial", label: "Medium" },
  ];

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-white font-semibold">Md Shoriful Islam Ashiq</p>
            <p className="text-slate-500 text-sm">Co-Founder @ Midgen • Software Engineer</p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="text-slate-500 text-sm">
            © {currentYear} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
