"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Star,
  Printer,
  Sparkles
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useTheme } from "@/context/ThemeContext";

export default function ResumeViewer() {
  const { personalInfo, about, skills, experience, education, certifications, achievements, languages, interests } = portfolioData;
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  // Group skills by category for organized display
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const textPurple = isDark ? "text-purple-400" : "text-purple-600";
  const borderThemeColor = isDark ? "border-white/5" : "border-slate-200";

  return (
    <div className="relative min-h-screen py-6 px-3 sm:py-12 sm:px-6 overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute glowing-blob blob-purple w-[400px] h-[400px] -top-20 -left-10 animate-pulse-slow pointer-events-none"></div>
      <div className="absolute glowing-blob blob-pink w-[400px] h-[400px] bottom-10 right-0 animate-pulse-slow pointer-events-none" style={{ animationDelay: "3s" }}></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Buttons Panel */}
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between mb-6 sm:mb-8 print:hidden">
          <div>
            <span className={`inline-flex items-center gap-1 px-3 py-0.5 text-[10px] sm:text-xs font-semibold rounded-full mb-1.5 ${
              isDark ? "text-purple-400 bg-purple-500/10 border border-purple-500/20" : "text-purple-700 bg-purple-100 border border-purple-200"
            }`}>
              <Sparkles className="w-3 h-3" /> Printable CV
            </span>
            <h1 className={`text-2xl sm:text-3xl font-black ${isDark ? "text-white" : "text-slate-900"}`}>Interactive Resume</h1>
          </div>
          <button
            onClick={handlePrint}
            className="flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-50 hover:to-pink-500 text-white rounded-xl hover:shadow-xl hover:shadow-purple-500/20 transform hover:scale-[1.03] transition-all font-semibold shadow-md cursor-pointer text-sm w-full sm:w-auto"
          >
            <Printer size={18} />
            Print / Save PDF
          </button>
        </div>

        {/* Resume Sheet Container */}
        <div
          id="resume-content"
          className={`border shadow-2xl rounded-3xl overflow-hidden transition-colors duration-300 print:bg-white print:border-none print:shadow-none print:rounded-none ${
            isDark 
              ? "bg-[#0b0821]/80 border-white/10" 
              : "bg-white border-slate-200"
          }`}
        >
          {/* Header Banner */}
          <div className={`relative px-4 sm:px-8 py-6 sm:py-10 border-b print:bg-gradient-to-r print:from-purple-800 print:to-black print:p-8 ${
            isDark
              ? "bg-gradient-to-br from-purple-900/60 via-[#120e36] to-[#07051d] border-white/5"
              : "bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 border-slate-200"
          }`}>
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className={`text-2xl sm:text-5xl font-black tracking-tight mb-2 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}>
                  {personalInfo.name}
                </h1>
                <p className={`text-sm sm:text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent print:text-purple-700 ${
                  isDark ? "from-purple-400 to-pink-400" : "from-purple-600 to-pink-600"
                }`}>
                  {personalInfo.title}
                </p>
                <div className={`flex flex-wrap gap-x-6 gap-y-2.5 mt-4 sm:mt-5 text-xs sm:text-sm print:text-gray-700 ${
                  isDark ? "text-gray-300" : "text-slate-600"
                }`}>
                  <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-purple-500 transition-colors">
                    <Mail size={15} className={textPurple} />
                    <span>{personalInfo.email}</span>
                  </a>
                  <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-2 hover:text-purple-500 transition-colors">
                    <Phone size={15} className={textPurple} />
                    <span>{personalInfo.phone}</span>
                  </a>
                  <span className="flex items-center gap-2">
                    <MapPin size={15} className={textPurple} />
                    <span>{personalInfo.location}</span>
                  </span>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-purple-500 transition-colors">
                    <Linkedin size={15} className={textPurple} />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Body */}
          <div className="px-4 sm:px-8 py-6 sm:py-10 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10 print:p-8 print:grid-cols-3">

            
            {/* Left/Main Column - Experience & Education */}
            <div className="lg:col-span-2 space-y-10 print:col-span-2">
              
              {/* Professional Summary */}
              <section>
                <div className={`flex items-center gap-3 mb-4 border-b pb-2 ${borderThemeColor}`}>
                  <div className={`w-8.5 h-8.5 rounded-lg flex items-center justify-center border print:bg-purple-100 print:text-purple-700 ${
                    isDark ? "bg-purple-500/10 border-purple-500/25 text-purple-400" : "bg-purple-100 border-purple-200 text-purple-700"
                  }`}>
                    <Briefcase size={17} />
                  </div>
                  <h2 className={`text-lg sm:text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                    Professional Profile
                  </h2>
                </div>
                <p className={`leading-relaxed text-xs sm:text-sm ${
                  isDark ? "text-gray-400" : "text-slate-600"
                }`}>
                  {about.summary}
                </p>
              </section>

              {/* Work Experience Timeline */}
              <section>
                <div className={`flex items-center gap-3 mb-5 border-b pb-2 ${borderThemeColor}`}>
                  <div className={`w-8.5 h-8.5 rounded-lg flex items-center justify-center border print:bg-purple-100 print:text-purple-700 ${
                    isDark ? "bg-purple-500/10 border-purple-500/25 text-purple-400" : "bg-purple-100 border-purple-200 text-purple-700"
                  }`}>
                    <Code size={17} />
                  </div>
                  <h2 className={`text-lg sm:text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                    Professional Experience
                  </h2>
                </div>

                <div className={`relative border-l pl-6 sm:pl-8 space-y-6 sm:space-y-8 print:border-gray-300 ${
                  isDark ? "border-white/10" : "border-slate-200"
                }`}>
                  {experience.map((exp) => (
                    <div key={exp.id} className="relative">
                      {/* Timeline Dot */}
                      <span className={`absolute -left-[31px] sm:-left-[40px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-4 print:border-white ${
                        isDark ? "border-[#0b0821]" : "border-white"
                      }`}></span>
                      
                      <div className="mb-2">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h3 className={`text-sm sm:text-base font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                            {exp.role}
                          </h3>
                          <span className={`text-[10px] font-semibold px-2.5 py-0.5 border rounded-full w-fit ${
                            isDark
                              ? "bg-white/5 border-white/10 text-purple-400"
                              : "bg-purple-50 border-purple-200 text-purple-700"
                          }`}>
                            {exp.duration}
                          </span>
                        </div>
                        <p className={`text-xs sm:text-sm font-semibold ${textPurple}`}>
                          {exp.company} • <span className={isDark ? "text-gray-400 font-normal" : "text-slate-500 font-normal"}>{exp.location}</span>
                        </p>
                      </div>
                      
                      <p className={`text-xs sm:text-sm mb-3 leading-relaxed ${
                        isDark ? "text-gray-400" : "text-slate-600"
                      }`}>
                        {exp.description}
                      </p>

                      <ul className="space-y-1.5 text-xs">
                        {exp.points.map((point, pointIdx) => (
                          <li key={pointIdx} className={`flex items-start gap-2 ${
                            isDark ? "text-gray-400" : "text-slate-600"
                          }`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section>
                <div className={`flex items-center gap-3 mb-5 border-b pb-2 ${borderThemeColor}`}>
                  <div className={`w-8.5 h-8.5 rounded-lg flex items-center justify-center border print:bg-purple-100 print:text-purple-700 ${
                    isDark ? "bg-purple-500/10 border-purple-500/25 text-purple-400" : "bg-purple-100 border-purple-200 text-purple-700"
                  }`}>
                    <GraduationCap size={17} />
                  </div>
                  <h2 className={`text-lg sm:text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                    Education
                  </h2>
                </div>

                <div className="space-y-4">
                  {education.map((edu, idx) => (
                    <div key={idx} className="border-l-2 border-purple-500/30 pl-6 py-0.5 print:border-purple-300">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <h3 className={`font-bold text-xs sm:text-base ${isDark ? "text-white" : "text-slate-900"}`}>
                          {edu.degree}
                        </h3>
                        <span className="text-[10px] sm:text-xs font-semibold text-gray-500">
                          {edu.year}
                        </span>
                      </div>
                      <p className={`text-[11px] sm:text-xs ${isDark ? "text-gray-400" : "text-slate-600"}`}>
                        {edu.school} • <span className="italic">{edu.location}</span>
                      </p>
                      {edu.board && (
                        <p className={`text-[10px] font-semibold print:text-purple-700 ${textPurple}`}>{edu.board}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right/Side Column - Skills, Languages, Certs */}
            <div className={`space-y-8 lg:border-l lg:pl-10 print:border-t-0 print:border-l print:border-gray-200 print:pl-6 ${
              isDark ? "border-white/5" : "border-slate-200"
            }`}>
              
              {/* Technical Skills (Progress) */}
              <section>
                <div className={`flex items-center gap-3 mb-5 border-b pb-2 ${borderThemeColor}`}>
                  <div className={`w-8.5 h-8.5 rounded-lg flex items-center justify-center border print:bg-purple-100 print:text-purple-700 ${
                    isDark ? "bg-purple-500/10 border-purple-500/25 text-purple-400" : "bg-purple-100 border-purple-200 text-purple-700"
                  }`}>
                    <Code size={17} />
                  </div>
                  <h2 className={`text-base sm:text-lg font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                    Technical Stack
                  </h2>
                </div>

                <div className="space-y-5">
                  {Object.entries(skillsByCategory).map(([category, items]) => (
                    <div key={category}>
                      <h3 className={`text-[10px] font-bold uppercase tracking-wider mb-2 print:text-purple-700 ${textPurple}`}>
                        {category}
                      </h3>
                      <div className="space-y-3">
                        {items.map((skill, index) => (
                          <div key={index} className="space-y-1">
                            <div className="flex justify-between text-[11px] font-semibold">
                              <span className={isDark ? "text-gray-300" : "text-slate-700"}>{skill.name}</span>
                              <span className="text-gray-500">{skill.level}%</span>
                            </div>
                            <div className={`w-full h-1 rounded-full overflow-hidden ${
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
              </section>

              {/* Certifications */}
              <section>
                <div className={`flex items-center gap-3 mb-4 border-b pb-2 ${borderThemeColor}`}>
                  <div className={`w-8.5 h-8.5 rounded-lg flex items-center justify-center border print:bg-purple-100 print:text-purple-700 ${
                    isDark ? "bg-purple-500/10 border-purple-500/25 text-purple-400" : "bg-purple-100 border-purple-200 text-purple-700"
                  }`}>
                    <Award size={17} />
                  </div>
                  <h2 className={`text-base sm:text-lg font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                    Certificates
                  </h2>
                </div>
                <ul className="space-y-2 text-xs">
                  {certifications.map((cert, idx) => (
                    <li key={idx} className={`flex items-start gap-2 ${
                      isDark ? "text-gray-400" : "text-slate-600"
                    }`}>
                      <Star size={13} className="text-yellow-500 fill-yellow-500/30 mt-0.5 flex-shrink-0" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Achievements */}
              <section>
                <div className={`flex items-center gap-3 mb-4 border-b pb-2 ${borderThemeColor}`}>
                  <div className={`w-8.5 h-8.5 rounded-lg flex items-center justify-center border print:bg-purple-100 print:text-purple-700 ${
                    isDark ? "bg-purple-500/10 border-purple-500/25 text-purple-400" : "bg-purple-100 border-purple-200 text-purple-700"
                  }`}>
                    <Award size={17} />
                  </div>
                  <h2 className={`text-base sm:text-lg font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                    Achievements
                  </h2>
                </div>
                <ul className="space-y-2 text-xs">
                  {achievements.map((ach, idx) => (
                    <li key={idx} className={`flex items-start gap-2 ${
                      isDark ? "text-gray-400" : "text-slate-600"
                    }`}>
                      <Star size={13} className={`fill-purple-500/20 mt-0.5 flex-shrink-0 ${textPurple}`} />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Languages & Interests */}
              <div className="grid grid-cols-2 gap-4">
                <section>
                  <h4 className={`text-[10px] font-bold uppercase tracking-wider mb-1.5 print:text-purple-700 ${textPurple}`}>
                    Languages
                  </h4>
                  <p className={`text-xs ${isDark ? "text-gray-400" : "text-slate-600"}`}>
                    {languages.join(", ")}
                  </p>
                </section>
                <section>
                  <h4 className={`text-[10px] font-bold uppercase tracking-wider mb-1.5 print:text-purple-700 ${textPurple}`}>
                    Interests
                  </h4>
                  <p className={`text-xs ${isDark ? "text-gray-400" : "text-slate-600"}`}>
                    {interests.join(", ")}
                  </p>
                </section>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
