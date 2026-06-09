"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Code2, Sun, Moon } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useTheme } from "@/context/ThemeContext";

export default function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/resume", label: "Resume" },
    { href: "/project", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <div className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-4">
      {/* Floating Glass Header */}
      <header
        className={`max-w-6xl mx-auto rounded-2xl border transition-all duration-300 shadow-lg ${
          theme === "dark"
            ? "border-white/10 bg-black/40 backdrop-blur-xl shadow-black/30"
            : "border-slate-200 bg-white/70 backdrop-blur-xl shadow-slate-100"
        }`}
      >
        <nav className="px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-500 via-violet-600 to-pink-500 shadow-lg shadow-purple-500/30">
                  <Code2 className="h-5 w-5 text-white" />
                </div>

                {/* Two-line stacked name — all devices */}
                <div className={`flex flex-col leading-tight ${
                  theme === "dark" ? "text-white" : "text-slate-900"
                }`}>
                  <span className={`text-[11px] font-black uppercase tracking-wide bg-gradient-to-r bg-clip-text text-transparent ${
                    theme === "dark"
                      ? "from-white via-gray-200 to-gray-400"
                      : "from-slate-900 to-slate-600"
                  }`}>
                    {portfolioData.personalInfo.name.split(' ')[0]}
                  </span>
                  <span className={`text-[11px] font-black uppercase tracking-wide bg-gradient-to-r bg-clip-text text-transparent ${
                    theme === "dark"
                      ? "from-purple-400 to-pink-400"
                      : "from-purple-600 to-pink-600"
                  }`}>
                    {portfolioData.personalInfo.name.split(' ')[1]}
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation — show at 720px+ */}
            <div className="hidden min-[720px]:flex items-center space-x-2 lg:space-x-5">
              <ul className="flex items-center space-x-1 lg:space-x-3">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`relative px-2 lg:px-3 py-2 text-xs lg:text-sm font-semibold transition-all duration-300 rounded-lg ${
                          active
                            ? theme === "dark"
                              ? "text-purple-400 bg-white/5"
                              : "text-purple-600 bg-slate-900/5"
                            : theme === "dark"
                              ? "text-gray-300 hover:text-white hover:bg-white/5"
                              : "text-slate-600 hover:text-slate-900 hover:bg-slate-900/5"
                        }`}
                      >
                        {item.label}
                        {active && (
                          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 lg:w-8 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-[0_0_8px_#a855f7]"></span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="w-px h-6 bg-slate-200 dark:bg-white/10"></div>

              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className={`p-2.5 rounded-xl border transition-all duration-300 hover:scale-105 cursor-pointer ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 text-yellow-400 hover:bg-white/10 hover:text-yellow-300"
                    : "bg-slate-100 border-slate-200 text-indigo-600 hover:bg-slate-200 hover:text-indigo-800"
                }`}
              >
                {theme === "dark" ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-3 lg:px-4 py-2 text-xs lg:text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl transition-all duration-300 shadow-md hover:shadow-purple-500/20 hover:scale-[1.03] whitespace-nowrap"
              >
                Hire Me
              </Link>
            </div>

            {/* Mobile Actions — shows below 720px */}
            <div className="min-[720px]:hidden flex items-center gap-2">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 text-yellow-400"
                    : "bg-slate-100 border-slate-200 text-indigo-600"
                }`}
              >
                {theme === "dark" ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
              </button>

              {/* Hamburger — relative anchor for the floating dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`inline-flex items-center justify-center p-2 rounded-xl transition-colors cursor-pointer ${
                    theme === "dark"
                      ? "text-gray-300 hover:text-white hover:bg-white/10"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>

                {/* Floating overlay dropdown — same style as filter popover */}
                {isOpen && (
                  <>
                    {/* Transparent backdrop closes menu on outside click */}
                    <div
                      className="fixed inset-0 z-20"
                      onClick={() => setIsOpen(false)}
                    ></div>

                    {/* Menu panel — anchored right below the hamburger */}
                    <div
                      className={`absolute right-0 top-full mt-2 w-44 rounded-2xl border p-2 shadow-2xl backdrop-blur-xl z-30 ${
                        theme === "dark"
                          ? "bg-[#0b0821]/95 border-white/10 shadow-black/40"
                          : "bg-white/95 border-slate-200/80 shadow-slate-200/50"
                      }`}
                    >
                      {/* Section label */}
                      <p className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 mb-1 ${
                        theme === "dark" ? "text-gray-500" : "text-slate-400"
                      }`}>
                        Navigation
                      </p>

                      <div className="space-y-1">
                        {navItems.map((item) => {
                          const active = isActive(item.href);
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className={`w-full text-left px-3 py-2 text-sm rounded-xl font-semibold flex items-center justify-between transition-colors ${
                                active
                                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                                  : theme === "dark"
                                    ? "text-gray-300 hover:bg-white/5 hover:text-white"
                                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                              }`}
                            >
                              {item.label}
                              {active && (
                                <span className="w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0"></span>
                              )}
                            </Link>
                          );
                        })}
                      </div>

                      {/* Divider */}
                      <div className={`my-2 h-px ${theme === "dark" ? "bg-white/5" : "bg-slate-100"}`}></div>

                      {/* Hire Me CTA */}
                      <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-center px-3 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl transition-all shadow-md active:scale-95"
                      >
                        Hire Me 💼
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>

          </div>
        </nav>
      </header>
    </div>
  );
}
