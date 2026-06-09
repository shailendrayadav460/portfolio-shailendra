"use client";

import { useTheme } from "@/context/ThemeContext";
import HeaderNav from "./header";
import Footer from "./footer";

export default function ThemeBodyWrapper({ children, geistSans, geistMono }) {
  const { theme } = useTheme();

  return (
    <body
      className={`${geistSans} ${geistMono} antialiased min-h-screen flex flex-col transition-colors duration-500 ${
        theme === "dark"
          ? "mesh-bg-dark text-gray-100 selection:bg-purple-500/30 selection:text-purple-200"
          : "mesh-bg-light text-slate-900 selection:bg-purple-500/20 selection:text-purple-800"
      }`}
    >
      <HeaderNav />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </body>
  );
}
