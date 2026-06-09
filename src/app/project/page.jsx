"use client";

import { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { ExternalLink, Github, Filter, Sparkles, ChevronDown, Check } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ProjectsPage() {
  const [projects, setProjects] = useState(portfolioData.projects);
  const [filteredProjects, setFilteredProjects] = useState(portfolioData.projects);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const gradients = [
    "from-blue-500 via-cyan-500 to-teal-500",
    "from-purple-500 via-indigo-500 to-pink-500",
    "from-emerald-500 via-teal-500 to-green-500",
    "from-amber-500 via-orange-500 to-red-500",
    "from-indigo-500 via-purple-500 to-pink-500",
    "from-pink-500 via-rose-500 to-red-500"
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://6855017f6a6ef0ed6630de24.mockapi.io/store/project");
        if (!res.ok) throw new Error("Failed to fetch");
        const apiData = await res.json();
        
        const formattedApiProjects = apiData.map((project, idx) => ({
          id: project.id || `api-${idx}`,
          title: project.title,
          description: project.description || "No description provided.",
          tech: project.tech || ["React", "CSS", "API"],
          link: project.link || "https://github.com/shailendrayadav460",
          image: project.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
          category: project.category || "Full Stack",
          emoji: project.emoji || "🚀",
          gradient: gradients[idx % gradients.length]
        }));
        
        const allProjects = [...portfolioData.projects, ...formattedApiProjects];
        const uniqueProjects = allProjects.filter(
          (project, index, self) =>
            index === self.findIndex((p) => p.title.toLowerCase() === project.title.toLowerCase())
        );

        setProjects(uniqueProjects);
      } catch (error) {
        console.error("API error, falling back to local projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category === selectedCategory));
    }
  }, [selectedCategory, projects]);

  const categories = ["All", "Full Stack", "MERN Stack"];
  const isDark = theme === "dark";

  return (
    <div className="relative min-h-screen py-10 px-3 sm:px-6 lg:px-8 overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute glowing-blob blob-purple w-[400px] h-[400px] top-10 -left-10 animate-pulse-slow pointer-events-none"></div>
      <div className="absolute glowing-blob blob-blue w-[400px] h-[400px] bottom-10 right-0 animate-pulse-slow pointer-events-none" style={{ animationDelay: "2s" }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full mb-3 ${
            isDark ? "text-purple-400 bg-purple-500/10 border border-purple-500/20" : "text-purple-700 bg-purple-100 border border-purple-200"
          }`}>
            <Sparkles className="w-3.5 h-3.5" /> Project Catalog
          </span>
          <h1 className={`text-2xl sm:text-5xl font-black mb-3 tracking-tight ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            My Built Projects
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4"></div>
          <p className={`text-xs sm:text-base max-w-md mx-auto ${
            isDark ? "text-gray-400" : "text-slate-600"
          }`}>
            A comprehensive gallery displaying application architectures, integrations, and frontend layouts I have completed.
          </p>
        </div>

        {/* Dynamic Dropdown Filter Trigger */}
        <div className="flex justify-center items-center mb-8 relative">
          <div className="relative">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl border transition-all duration-300 hover:scale-[1.02] cursor-pointer shadow-md ${
                isDark
                  ? "bg-white/5 border-white/10 hover:border-purple-500/40 text-gray-300 hover:text-white"
                  : "bg-white border-slate-200 hover:border-purple-500/30 text-slate-700 hover:text-slate-950 shadow-slate-100"
              }`}
            >
              <Filter className="w-3.5 h-3.5 text-purple-500" />
              <span>Category: <span className="text-purple-500 font-extrabold">{selectedCategory}</span></span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${
                showFilters ? "rotate-180" : ""
              }`} />
            </button>

            {/* Dropdown Menu */}
            {showFilters && (
              <>
                <div 
                  className="fixed inset-0 z-20" 
                  onClick={() => setShowFilters(false)}
                ></div>
                
                <div className={`absolute left-1/2 -translate-x-1/2 mt-2 w-52 rounded-2xl border p-2.5 shadow-2xl backdrop-blur-xl z-30 transition-all duration-300 ${
                  isDark
                    ? "bg-[#0b0821]/95 border-white/10 shadow-black/40"
                    : "bg-white/95 border-slate-200/80 shadow-slate-200/50"
                }`}>
                  <p className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 mb-1 ${
                    isDark ? "text-gray-500" : "text-slate-400"
                  }`}>
                    Select Category
                  </p>
                  
                  <div className="space-y-1">
                    {categories.map((category) => {
                      const isSelected = selectedCategory === category;
                      return (
                        <button
                          key={category}
                          onClick={() => {
                            setSelectedCategory(category);
                            setShowFilters(false);
                          }}
                          className={`w-full text-left px-3 py-2 text-xs sm:text-sm rounded-xl font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                            isSelected
                              ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                              : isDark
                                ? "text-gray-300 hover:bg-white/5 hover:text-white"
                                : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                          }`}
                        >
                          <span>{category}</span>
                          {isSelected && <Check className="w-4 h-4" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Skeleton loaders */}
        {loading && filteredProjects.length === 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="glass-panel h-72 sm:h-96 rounded-2xl animate-pulse flex flex-col justify-between p-4 sm:p-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="h-32 sm:h-44 bg-white/5 rounded-xl"></div>
                  <div className="h-4 sm:h-6 bg-white/5 rounded w-2/3"></div>
                  <div className="h-3 sm:h-4 bg-white/5 rounded w-full"></div>
                </div>
                <div className="h-6 sm:h-8 bg-white/5 rounded w-1/3"></div>
              </div>
            ))}
          </div>
        ) : (
          /* Projects Grid (2 columns on mobile, 3 columns on lg) */
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative glass-panel rounded-2xl overflow-hidden shadow-md sm:shadow-xl hover:shadow-2xl transition duration-500 flex flex-col h-full border ${
                  isDark
                    ? "border-white/10 hover:border-purple-500/30"
                    : "border-slate-200/80 hover:border-purple-500/20"
                }`}
              >
                {/* Image Cover Layer */}
                <div className="relative h-20 sm:h-48 overflow-hidden bg-slate-950 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10"></div>
                  
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-750 ease-out"
                      loading="lazy"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient || "from-purple-500 to-indigo-500"} opacity-20`}></div>
                  )}

                  <span className="relative z-20 text-3xl sm:text-6xl transform group-hover:scale-110 transition duration-500">
                    {project.emoji || "📁"}
                  </span>
                </div>

                {/* Info Content */}
                <div className="p-2 sm:p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <span className={`inline-block text-[8px] sm:text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full mb-1 sm:mb-3 ${
                      isDark ? "text-purple-400 bg-purple-500/10 border border-purple-500/20" : "text-purple-700 bg-purple-100 border border-purple-200"
                    }`}>
                      {project.category || "Full Stack"}
                    </span>
                    <h2 className={`text-xs sm:text-xl font-bold mb-0.5 sm:mb-2 group-hover:text-purple-500 transition-colors duration-300 line-clamp-1 ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}>
                      {project.title}
                    </h2>
                    <p className={`text-[10px] sm:text-sm mb-2 sm:mb-5 leading-snug line-clamp-2 sm:line-clamp-3 ${
                      isDark ? "text-gray-400" : "text-slate-600"
                    }`}>
                      {project.description}
                    </p>
                  </div>

                  <div className={`space-y-1.5 sm:space-y-4 pt-1.5 border-t ${
                    isDark ? "border-white/5" : "border-slate-100"
                  }`}>
                    {/* Tech List */}
                    <div className="flex flex-wrap gap-1">
                      {project.tech && project.tech.slice(0, 3).map((tech, i) => (
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

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4 pt-0.5 sm:pt-1 text-[10px] sm:text-xs">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1 font-bold hover:underline transition-all ${
                          isDark ? "text-purple-400 hover:text-purple-300" : "text-purple-600 hover:text-purple-800"
                        }`}
                      >
                        <Github className="w-3 h-3" /> Code
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1 font-bold hover:underline transition-all sm:ml-auto ${
                          isDark ? "text-pink-400 hover:text-pink-300" : "text-pink-600 hover:text-pink-800"
                        }`}
                      >
                        Demo <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state fallback */}
        {!loading && filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No projects found for the "{selectedCategory}" category.</p>
          </div>
        )}

      </div>
    </div>
  );
}
