"use client";

import { useTheme } from "@/context/ThemeContext";
import { Shield, Eye, Lock, Database, Mail, Phone, RefreshCw, UserCheck, Globe } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    id: "information-collect",
    icon: Database,
    title: "1. Information We Collect",
    content: [
      {
        subtitle: "Contact Form Data",
        text: "When you use the contact form on this website, we may collect your name, email address, and the message you submit. This information is used solely to respond to your inquiry.",
      },
      {
        subtitle: "Usage & Analytics Data",
        text: "We may collect non-personally identifiable information such as browser type, device type, pages visited, time spent on the site, and referring URLs to help understand how visitors interact with this portfolio.",
      },
      {
        subtitle: "Cookies & Local Storage",
        text: "This site uses local storage to save your theme preference (light or dark mode). No tracking cookies or third-party cookies are set by this website.",
      },
    ],
  },
  {
    id: "how-we-use",
    icon: Eye,
    title: "2. How We Use Your Information",
    content: [
      {
        subtitle: "Communication",
        text: "Contact form submissions are used only to reply to your message. We will never use your email for unsolicited marketing.",
      },
      {
        subtitle: "Site Improvement",
        text: "Aggregated, anonymised analytics data may be used to improve the performance, usability, and content of this portfolio.",
      },
      {
        subtitle: "No Selling of Data",
        text: "We do not sell, trade, or otherwise transfer your personally identifiable information to any third party under any circumstances.",
      },
    ],
  },
  {
    id: "data-security",
    icon: Lock,
    title: "3. Data Security",
    content: [
      {
        subtitle: "Secure Transmission",
        text: "This website is served over HTTPS, ensuring that data transmitted between your browser and our server is encrypted.",
      },
      {
        subtitle: "Limited Retention",
        text: "Contact form submissions are retained only as long as necessary to respond to your inquiry and are not stored in any permanent database by this portfolio.",
      },
      {
        subtitle: "Third-Party Services",
        text: "If third-party services (such as an email delivery provider) are used to process contact form messages, they operate under their own privacy policies and data-protection standards.",
      },
    ],
  },
  {
    id: "your-rights",
    icon: UserCheck,
    title: "4. Your Rights",
    content: [
      {
        subtitle: "Access & Deletion",
        text: "You have the right to request access to, or deletion of, any personal information we hold about you. Simply send a request via the contact page.",
      },
      {
        subtitle: "Opt-Out",
        text: "You may disable cookies or clear local storage at any time through your browser settings. This may affect your theme preference on the site.",
      },
      {
        subtitle: "Correction",
        text: "If you believe any information we hold about you is inaccurate, please contact us and we will promptly correct it.",
      },
    ],
  },
  {
    id: "third-party-links",
    icon: Globe,
    title: "5. Third-Party Links",
    content: [
      {
        subtitle: "External Sites",
        text: "This portfolio may contain links to external websites such as GitHub, LinkedIn, or live project demos. These sites have their own privacy policies, and we have no responsibility or liability for their content or practices.",
      },
      {
        subtitle: "Social Media",
        text: "Clicking social media icons may direct you to third-party platforms. Your interactions on those platforms are governed by their respective privacy policies.",
      },
    ],
  },
  {
    id: "updates",
    icon: RefreshCw,
    title: "6. Updates to This Policy",
    content: [
      {
        subtitle: "Policy Changes",
        text: "This Privacy Policy may be updated from time to time to reflect changes in practices or for other operational, legal, or regulatory reasons. The 'Last Updated' date at the top of this page will be revised accordingly.",
      },
      {
        subtitle: "Continued Use",
        text: "Your continued use of this website after any changes constitutes your acceptance of the updated Privacy Policy.",
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "mesh-bg-dark" : "mesh-bg-light"
      }`}
    >
      {/* Decorative blobs */}
      <div className="glowing-blob blob-purple w-96 h-96 -top-24 -left-24" />
      <div className="glowing-blob blob-pink w-72 h-72 top-1/2 -right-16" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

        {/* Hero Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-500 via-violet-600 to-pink-500 shadow-lg shadow-purple-500/30 mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1
            className={`text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-violet-400 to-pink-400 bg-clip-text text-transparent`}
          >
            Privacy Policy
          </h1>
          <p
            className={`text-sm sm:text-base max-w-xl mx-auto ${
              isDark ? "text-gray-400" : "text-slate-500"
            }`}
          >
            Your privacy matters. This policy explains what data this portfolio
            collects, how it is used, and how it is protected.
          </p>
          <div
            className={`mt-4 inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border ${
              isDark
                ? "bg-white/5 border-white/10 text-gray-400"
                : "bg-slate-100 border-slate-200 text-slate-500"
            }`}
          >
            <RefreshCw className="w-3 h-3" />
            Last Updated: June 2026
          </div>
        </div>

        {/* Intro Card */}
        <div
          className={`glass-panel rounded-2xl p-6 sm:p-8 mb-10 ${
            isDark ? "border-white/10" : "border-slate-200"
          }`}
        >
          <p
            className={`text-sm sm:text-base leading-relaxed ${
              isDark ? "text-gray-300" : "text-slate-600"
            }`}
          >
            Welcome to the personal portfolio of{" "}
            <span className="font-semibold text-purple-500">
              Shailendra Yadav
            </span>{" "}
            (Badal). This Privacy Policy describes how information about visitors
            is handled when you browse this website. By using this site you agree
            to the practices described below. If you do not agree, please
            discontinue use of the site.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                id={section.id}
                className={`glass-panel glass-card-hover rounded-2xl p-6 sm:p-8 border ${
                  isDark ? "border-white/10" : "border-slate-200"
                }`}
              >
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-500/20 to-pink-500/20 border border-purple-500/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <h2
                    className={`text-lg sm:text-xl font-bold ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {section.title}
                  </h2>
                </div>

                {/* Sub-sections */}
                <div className="space-y-5">
                  {section.content.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-b from-purple-400 to-pink-400 mt-2" />
                      <div>
                        <h3
                          className={`text-sm font-semibold mb-1 ${
                            isDark ? "text-gray-200" : "text-slate-800"
                          }`}
                        >
                          {item.subtitle}
                        </h3>
                        <p
                          className={`text-sm leading-relaxed ${
                            isDark ? "text-gray-400" : "text-slate-500"
                          }`}
                        >
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Card */}
        <div
          className={`mt-10 glass-panel rounded-2xl p-6 sm:p-8 border text-center ${
            isDark ? "border-white/10" : "border-slate-200"
          }`}
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-500/20 to-pink-500/20 border border-purple-500/20 mb-4">
            <Mail className="w-6 h-6 text-purple-400" />
          </div>
          <h2
            className={`text-xl font-bold mb-2 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Questions About This Policy?
          </h2>
          <p
            className={`text-sm mb-6 max-w-md mx-auto ${
              isDark ? "text-gray-400" : "text-slate-500"
            }`}
          >
            If you have any questions, concerns, or requests regarding this
            Privacy Policy, feel free to reach out directly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:badalyadav7493@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl transition-all duration-300 shadow-md hover:shadow-purple-500/20 hover:scale-[1.03]"
            >
              <Mail className="w-4 h-4" />
              badalyadav7493@gmail.com
            </a>
            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl border transition-all duration-300 hover:scale-[1.03] ${
                isDark
                  ? "border-white/10 bg-white/5 text-gray-200 hover:bg-white/10"
                  : "border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Phone className="w-4 h-4" />
              Contact Page
            </Link>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-10 text-center">
          <Link
            href="/"
            className={`inline-flex items-center gap-2 text-sm font-medium hover:text-purple-500 transition-colors ${
              isDark ? "text-gray-400" : "text-slate-500"
            }`}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
