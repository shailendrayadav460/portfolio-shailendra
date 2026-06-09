"use client";

import React from "react";
import Link from "next/link";
import { 
  User, 
  Code2, 
  Cpu, 
  Terminal, 
  FileText, 
  Sparkles, 
  CheckCircle,
  Workflow
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useTheme } from "@/context/ThemeContext";

export default function AboutPage() {
  const { personalInfo, about, skills, services, stats } = portfolioData;
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const serviceIcons = {
    "Full Stack Development": <Code2 className="w-6 h-6" />,
    "Performance Tuning": <Cpu className="w-6 h-6" />,
    "Premium UI/UX Design": <Sparkles className="w-6 h-6" />,
    "API Development & Security": <Terminal className="w-6 h-6" />
  };

  return (
    <div className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10 space-y-12 sm:space-y-16">
        
        {/* Top Header Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 opacity-10 blur-xl"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${
              isDark ? "bg-purple-500/10 border-purple-500/25 text-purple-400" : "bg-purple-100 border-purple-200 text-purple-700"
            }`}>
              <User className="w-7 h-7" />
            </div>
            
            <div className="flex-1 text-center md:text-left space-y-1.5">
              <span className={`inline-flex items-center gap-1 px-3 py-0.5 text-[10px] sm:text-xs font-bold rounded-full ${
                isDark ? "text-purple-400 bg-purple-500/10 border border-purple-500/20" : "text-purple-700 bg-purple-100 border border-purple-200"
              }`}>
                MERN Developer
              </span>
              <h1 className={`text-2xl sm:text-5xl font-black ${
                isDark ? "text-white" : "text-slate-900"
              }`}>
                About Me
              </h1>
              <p className={`text-xs sm:text-base ${
                isDark ? "text-gray-400" : "text-slate-600"
              }`}>
                Get to know my developer story, technical stack, and capabilities.
              </p>
            </div>

            {/* Link to printable resume */}
            <Link
              href="/resume"
              className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-xl font-bold shadow-md hover:shadow-xl hover:shadow-purple-500/20 hover:scale-[1.03] transition-all cursor-pointer text-sm"
            >
              <FileText className="w-4 h-4" />
              View Printable CV
            </Link>
          </div>
        </div>

        {/* Story & Biography Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Main Story (Col-span-2) */}
          <div className="md:col-span-2 glass-panel rounded-3xl p-6 sm:p-8 space-y-5 sm:space-y-6">
            <h2 className={`text-xl sm:text-2xl font-bold ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              My Developer Journey
            </h2>
            <p className={`text-xs sm:text-base leading-relaxed ${
              isDark ? "text-gray-400" : "text-slate-600"
            }`}>
              {about.detailedBio}
            </p>
            <p className={`text-xs sm:text-base leading-relaxed ${
              isDark ? "text-gray-400" : "text-slate-600"
            }`}>
              I specialize in combining strong backend capabilities (Node.js, Express, MongoDB) with pixel-perfect frontend experiences (React, Next.js, TailwindCSS) to develop highly optimized products. Recently, I integrated **n8n Workflow Automation** to engineer automated backend tasks, connect APIs seamlessly, and boost overall product delivery times.
            </p>
            
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t ${
              isDark ? "border-white/5" : "border-slate-200"
            }`}>
              <div className="flex gap-2.5">
                <CheckCircle className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0" />
                <span className={`text-xs sm:text-sm ${isDark ? "text-gray-300" : "text-slate-700"}`}>Scalable MERN Database Architectures</span>
              </div>
              <div className="flex gap-2.5">
                <CheckCircle className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0" />
                <span className={`text-xs sm:text-sm ${isDark ? "text-gray-300" : "text-slate-700"}`}>Clean Next.js Static Exporting</span>
              </div>
              <div className="flex gap-2.5">
                <CheckCircle className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0" />
                <span className={`text-xs sm:text-sm ${isDark ? "text-gray-300" : "text-slate-700"}`}>n8n API Integration Workflows</span>
              </div>
              <div className="flex gap-2.5">
                <CheckCircle className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0" />
                <span className={`text-xs sm:text-sm ${isDark ? "text-gray-300" : "text-slate-700"}`}>Responsive Tailwind CSS Design</span>
              </div>
            </div>
          </div>

          {/* Core Info & Visual Stats (Col-span-1) */}
          <div className="space-y-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 text-center space-y-4">
              <h3 className={`font-bold text-sm sm:text-base ${isDark ? "text-white" : "text-slate-900"}`}>
                Quick Statistics
              </h3>
              <div className="grid grid-cols-2 gap-3.5">
                {stats.slice(0, 4).map((stat, idx) => (
                  <div key={idx} className={`p-3 sm:p-4 rounded-2xl border ${
                    isDark ? "bg-white/5 border-white/5" : "bg-slate-100/50 border-slate-200/60"
                  }`}>
                    <div className="text-lg sm:text-2xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                      {stat.num}
                    </div>
                    <div className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider ${
                      isDark ? "text-gray-400" : "text-slate-500"
                    }`}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* n8n Automation highlight card */}
            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-orange-500/20 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-orange-500 opacity-5 blur-xl"></div>
              <div className="flex gap-3 items-center mb-3">
                <div className="w-9 h-9 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <Workflow className="w-5.5 h-5.5" />
                </div>
                <h4 className={`font-bold text-sm sm:text-base ${isDark ? "text-white" : "text-slate-900"}`}>Workflow Automation</h4>
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-slate-600"}`}>
                Leveraging **n8n** automation pipelines to construct robust webhooks, schedule database syncs, configure automated emails, and orchestrate complex API architectures.
              </p>
            </div>
          </div>

        </div>

        {/* Visual Skills Matrix */}
        <div className="glass-panel rounded-3xl p-6 sm:p-12 space-y-6 sm:space-y-8">
          <div className="text-center md:text-left">
            <h2 className={`text-xl sm:text-3xl font-bold ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              Technical Proficiency Matrix
            </h2>
            <p className={`text-xs sm:text-sm mt-1 ${isDark ? "text-gray-400" : "text-slate-600"}`}>
              Detailed breakdown of frontend, backend, database, and automation tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {Object.entries(skillsByCategory).map(([category, items]) => (
              <div key={category} className="space-y-3.5">
                <h3 className={`text-xs font-bold uppercase tracking-wider border-b pb-2 ${
                  isDark ? "text-purple-400 border-white/5" : "text-purple-700 border-slate-200"
                }`}>
                  {category}
                </h3>
                <div className="space-y-3.5">
                  {items.map((skill, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className={isDark ? "text-gray-300" : "text-slate-700"}>{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className={`w-full h-1.5 rounded-full overflow-hidden ${
                        isDark ? "bg-white/5" : "bg-slate-200"
                      }`}>
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
