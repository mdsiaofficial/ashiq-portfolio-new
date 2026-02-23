"use client";

import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/mdsiaofficial", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/mdsiaofficial", label: "LinkedIn" },
    { icon: SiLeetcode, href: "https://leetcode.com/mdsiaofficial", label: "LeetCode" },
    { icon: SiCodeforces, href: "https://codeforces.com/profile/mdsiaofficial", label: "Codeforces" },
  ];

  return (
    <footer className="py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <span>Made with</span>
            <FaHeart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>by Md Shoriful Islam Ashiq</span>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="text-gray-500 text-sm">
            &copy; {currentYear} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
