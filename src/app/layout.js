import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import ThemeBodyWrapper from "@/components/ThemeBodyWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const isVercel = process.env.VERCEL === '1';
const isDev = process.env.NODE_ENV === 'development';
const prefix = (isVercel || isDev) ? "" : "/shailen-portfolio-2002";

export const metadata = {
  title: "Shailendra Yadav | MERN Stack & Full Stack Developer Portfolio",
  description:
    "Explore the portfolio of Shailendra Yadav (Badal), an experienced MERN Stack Developer with 1.3+ years of expertise. Specializing in high-performance Next.js, React, Node.js, Express, and MongoDB web applications.",
  keywords: [
    "Shailendra Yadav",
    "Badal",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Noida Developer",
    "Web Developer Portfolio"
  ],
  icons: {
    icon: `${prefix}/favicon.ico`,
    shortcut: `${prefix}/favicon-32x32.png`,
    apple: `${prefix}/apple-touch-icon.png`,
  },
  manifest: `${prefix}/site.webmanifest`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth" data-scroll-behavior="smooth">
      <ThemeProvider>
        <ThemeBodyWrapper
          geistSans={geistSans.variable}
          geistMono={geistMono.variable}
        >
          {children}
        </ThemeBodyWrapper>
      </ThemeProvider>
    </html>
  );
}
