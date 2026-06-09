"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import profileImg from "../images/body.jpg";
import { useRouter } from "next/navigation";
import { portfolioData } from "@/data/portfolioData";
import { ArrowRight, Code, Shield, Cpu, Paintbrush, ChevronRight, Briefcase } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function HomePage() {
  const router = useRouter();
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const { theme } = useTheme();

  const { personalInfo, roles, skills, projects, services, stats, about } = portfolioData;

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const serviceIcons = {
    "Full Stack Development": <Code className="w-8 h-8" />,
    "Performance Tuning": <Cpu className="w-8 h-8" />,
    "Premium UI/UX Design": <Paintbrush className="w-8 h-8" />,
    "API Development & Security": <Shield className="w-8 h-8" />
  };

  const isDark = theme === "dark";

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto">
          <div className="glass-panel rounded-3xl p-6 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden">
            {/* Corner Accent Glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 blur-xl"></div>

            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
              
              {/* Profile Image Column */}
              <div className="relative flex-shrink-0 group">
                {/* Glow ring backing */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-300 animate-tilt"></div>
                <div className={`relative w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 shadow-2xl ${
                  isDark ? "border-[#030014]" : "border-slate-50"
                }`}>
                  <Image
                    src={profileImg}
                    alt={personalInfo.name}
                    width={224}
                    height={224}
                    priority
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition duration-500 ease-out"
                  />
                </div>
              </div>

              {/* Text Intro Column */}
              <div className="text-center lg:text-left flex-1 space-y-5 sm:space-y-6">
                <div>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full mb-3 ${
                    isDark 
                      ? "text-purple-400 bg-purple-500/10 border border-purple-500/20" 
                      : "text-purple-700 bg-purple-100 border border-purple-200"
                  }`}>
                    <Briefcase className="w-3.5 h-3.5" /> MERN Stack Specialist
                  </span>
                  <h1 className={`text-3xl sm:text-6xl font-extrabold tracking-tight mb-2 ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}>
                    Hi, I&apos;m <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-400 bg-clip-text text-transparent">{personalInfo.name}</span>
                  </h1>
                  
                  {/* Dynamic Roles */}
                  <div className="h-10 flex items-center justify-center lg:justify-start">
                    <p className={`text-lg sm:text-2xl font-bold ${
                      isDark ? "text-gray-300" : "text-slate-700"
                    }`}>
                      I build <span className="text-purple-500 font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">{text}</span>
                      <span className="text-purple-500 animate-pulse font-light">|</span>
                    </p>
                  </div>
                </div>

                <p className={`text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
                  isDark ? "text-gray-400" : "text-slate-600"
                }`}>
                  A dedicated <span className={isDark ? "text-white font-semibold" : "text-slate-900 font-semibold"}>MERN Stack Developer</span> with <span className="text-pink-500 font-bold">{stats[0].num} Years Experience</span> — building full-stack apps with modern backend & frontend technologies.
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-1">
                  {[
                    { label: "Node.js",         color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/8" },
                    { label: "Express",          color: "text-yellow-400  border-yellow-400/30  bg-yellow-400/8"  },
                    { label: "MongoDB",          color: "text-lime-400    border-lime-400/30    bg-lime-400/8"    },
                    { label: "Socket.io",        color: "text-sky-400     border-sky-400/30     bg-sky-400/8"     },
                    { label: "Payment Gateway",  color: "text-violet-400  border-violet-400/30  bg-violet-400/8"  },
                    { label: "AI Integration",   color: "text-rose-400    border-rose-400/30    bg-rose-400/8"    },
                    { label: "MCP Server",       color: "text-cyan-400    border-cyan-400/30    bg-cyan-400/8"    },
                    { label: "Docker",           color: "text-blue-400    border-blue-400/30    bg-blue-400/8"    },
                  ].map((tech) => (
                    <span
                      key={tech.label}
                      className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold border ${tech.color} transition-transform hover:scale-105`}
                    >
                      {tech.label}
                    </span>
                  ))}
                </div>

                {/* Micro-grid of top skills */}
                <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start pt-2">
                  {skills.slice(0, 6).map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-lg hover:border-purple-500/30 transition duration-300 border ${
                        isDark 
                          ? "bg-white/5 border-white/10 text-gray-300" 
                          : "bg-slate-200/50 border-slate-200/80 text-slate-700"
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                  <Link 
                    href="/about" 
                    className={`px-2.5 py-1 text-xs font-bold rounded-lg border hover:scale-105 transition-transform duration-200 ${
                      isDark 
                        ? "text-purple-400 bg-purple-500/10 border-purple-500/20" 
                        : "text-purple-700 bg-purple-100 border-purple-200"
                    }`}
                  >
                    + More Stack
                  </Link>
                </div>

                {/* Primary Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start pt-3">
                  <Link
                    href="/project"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-50 hover:to-pink-500 text-white font-bold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.03] transition-all duration-300 gap-2 cursor-pointer text-sm sm:text-base"
                  >
                    View My Work <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/resume"
                    className={`inline-flex items-center justify-center px-6 py-3 font-bold rounded-xl border hover:scale-[1.03] transition-all duration-300 cursor-pointer text-sm sm:text-base ${
                      isDark 
                        ? "bg-white/5 hover:bg-white/10 text-white border-white/10 hover:border-purple-500/40" 
                        : "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200 hover:border-purple-500/30"
                    }`}
                  >
                    View Resume
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`relative z-10 py-20 px-4 sm:px-6 lg:px-8 border-y transition-colors duration-300 ${
        isDark ? "bg-black/20 border-white/5" : "bg-slate-100/50 border-slate-200"
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-2xl sm:text-5xl font-black mb-4 ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              What I Offer
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            <p className={`mt-4 text-xs sm:text-base max-w-lg mx-auto ${
              isDark ? "text-gray-400" : "text-slate-600"
            }`}>
              Delivering high-end full-stack capabilities, design system compliance, and optimized performance guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="glass-panel glass-card-hover rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-inner border ${
                    isDark 
                      ? "bg-purple-500/10 border-purple-500/25 text-purple-400" 
                      : "bg-purple-100 border-purple-200 text-purple-700"
                  }`}>
                    {serviceIcons[service.title] || service.icon}
                  </div>
                  <h3 className={`text-base sm:text-lg font-bold mb-3 ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}>{service.title}</h3>
                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    isDark ? "text-gray-400" : "text-slate-600"
                  }`}>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12 lg:mb-16 gap-4">
            <div className="text-center sm:text-left">
              <h2 className={`text-2xl sm:text-5xl font-black mb-3 ${
                isDark ? "text-white" : "text-slate-900"
              }`}>
                Featured Projects
              </h2>
              <p className={`text-xs sm:text-base ${
                isDark ? "text-gray-400" : "text-slate-600"
              }`}>
                Explore a selected set of full-stack and automation developments.
              </p>
            </div>
            <Link
              href="/project"
              className={`inline-flex items-center gap-1.5 px-5 py-2.5 font-semibold rounded-xl border transition-all duration-300 text-xs sm:text-sm group ${
                isDark
                  ? "bg-white/5 hover:bg-white/10 text-purple-400 border-white/10 hover:border-purple-500/30"
                  : "bg-slate-100 hover:bg-slate-200 text-purple-700 border-slate-200 hover:border-purple-500/20"
              }`}
            >
              All Projects <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-8">
            {projects.slice(0, 3).map((project, idx) => (
              <div
                key={idx}
                className={`group relative glass-panel rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 flex flex-col h-full border ${
                  isDark
                    ? "border-white/10 hover:border-purple-500/30"
                    : "border-slate-200 hover:border-purple-500/20"
                }`}
              >
                {/* Visual Header */}
                <div className="relative h-20 sm:h-44 overflow-hidden bg-slate-950 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10"></div>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-45 group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                  )}
                  <span className="relative z-20 text-3xl sm:text-6xl transform group-hover:scale-110 transition duration-500">
                    {project.emoji}
                  </span>
                </div>

                {/* Content Area */}
                <div className="p-2 sm:p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className={`text-xs sm:text-xl font-bold mb-0.5 sm:mb-2 group-hover:text-purple-500 transition-colors duration-300 line-clamp-1 ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}>
                      {project.title}
                    </h3>
                    <p className={`text-[10px] sm:text-sm mb-2 sm:mb-4 leading-snug line-clamp-2 sm:line-clamp-3 ${
                      isDark ? "text-gray-400" : "text-slate-600"
                    }`}>
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-1.5 sm:space-y-4 pt-1.5 border-t border-purple-500/5">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className={`px-1.5 py-0.5 border text-[8px] sm:text-[10px] rounded-md font-semibold ${
                            isDark
                              ? "bg-white/5 border-white/10 text-gray-300"
                              : "bg-slate-100 border-slate-200 text-slate-700"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 text-[10px] sm:text-sm font-bold hover:underline transition-all duration-300 ${
                        isDark 
                          ? "text-purple-400 hover:text-purple-300" 
                          : "text-purple-600 hover:text-purple-800"
                      }`}
                    >
                      View Repo <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`relative z-10 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-y transition-colors duration-300 ${
        isDark ? "bg-black/30 border-white/5" : "bg-slate-100/50 border-slate-200"
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-5 sm:p-6 text-center shadow-lg relative overflow-hidden"
              >
                <div className={`text-3xl sm:text-5xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1 sm:mb-2`}>
                  {stat.num}
                </div>
                <div className={`text-[10px] sm:text-xs font-bold tracking-wider uppercase ${
                  isDark ? "text-gray-300" : "text-slate-600"
                }`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden border border-purple-500/20">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <h2 className={`text-2xl sm:text-5xl font-black mb-6 ${
              isDark 
                ? "bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent" 
                : "text-slate-900"
            }`}>
              Let&apos;s Create Together
            </h2>
            <p className={`text-xs sm:text-base mb-8 max-w-xl mx-auto leading-relaxed ${
              isDark ? "text-gray-400" : "text-slate-600"
            }`}>
              Have a challenging project or a hiring requirement? Let&apos;s connect. I&apos;m always open to discussing new opportunities, full-time MERN Developer roles, and creative collaborations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-xl shadow-lg shadow-purple-500/30 hover:scale-[1.03] transition-all duration-300 text-sm sm:text-base cursor-pointer"
            >
              Get In Touch 💬
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
