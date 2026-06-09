"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Heart } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useTheme } from "@/context/ThemeContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { personalInfo } = portfolioData;
  const { theme } = useTheme();

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: personalInfo.linkedin,
      label: "LinkedIn",
      bgHover: "hover:bg-blue-600 hover:text-white"
    },
    {
      icon: <Github className="w-5 h-5" />,
      url: personalInfo.github,
      label: "GitHub",
      bgHover: "hover:bg-purple-600 hover:text-white"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      url: personalInfo.twitter,
      label: "Twitter",
      bgHover: "hover:bg-sky-500 hover:text-white"
    }
  ];

  return (
    <footer className={`relative mt-auto border-t transition-colors duration-300 py-12 px-6 overflow-hidden ${
      theme === "dark" 
        ? "border-white/10 bg-black/50 text-gray-300" 
        : "border-slate-200 bg-slate-100 text-slate-600"
    }`}>
      {/* Decorative Blob */}
      <div className="absolute -bottom-10 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* Column 1: Brand & Bio */}
          <div>
            <h3 className={`text-xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}>
              {personalInfo.name}
            </h3>
            <p className={`text-sm leading-relaxed max-w-xs ${
              theme === "dark" ? "text-gray-400" : "text-slate-500"
            }`}>
              MERN Stack Developer specializing in crafting clean, high-performance web applications with rich user experience and n8n workflow automation.
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}>
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2.5 hover:text-purple-500 transition-colors"
                >
                  <Mail className="w-4 h-4 text-purple-500" />
                  <span>{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-2.5 hover:text-purple-500 transition-colors"
                >
                  <Phone className="w-4 h-4 text-purple-500" />
                  <span>{personalInfo.phone}</span>
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-purple-500" />
                  <span>{personalInfo.location}</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation & Socials */}
          <div className="flex flex-col md:items-start">
            <h3 className={`text-lg font-semibold mb-4 ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}>
              Connect
            </h3>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 ${social.bgHover} hover:scale-110 ${
                    theme === "dark"
                      ? "bg-white/5 border-white/10 text-gray-300"
                      : "bg-slate-200/50 border-slate-300/40 text-slate-600"
                  }`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 text-sm font-semibold">
              <Link href="/about" className="hover:text-purple-500 transition-colors">About</Link>
              <Link href="/resume" className="hover:text-purple-500 transition-colors">Resume</Link>
              <Link href="/project" className="hover:text-purple-500 transition-colors">Projects</Link>
              <Link href="/contact" className="hover:text-purple-500 transition-colors">Contact</Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`w-full h-px my-6 ${theme === "dark" ? "bg-white/5" : "bg-slate-200"}`}></div>

        {/* Bottom Bar */}
        <div className={`flex flex-col sm:flex-row items-center justify-between text-xs gap-4 ${
          theme === "dark" ? "text-gray-500" : "text-slate-400"
        }`}>
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" /> using Next.js & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}
