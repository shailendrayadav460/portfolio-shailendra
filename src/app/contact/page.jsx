"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Loader2,
  CheckCircle2,
  XCircle
} from "lucide-react";
import emailjs from "emailjs-com";
import { portfolioData } from "@/data/portfolioData";
import { useTheme } from "@/context/ThemeContext";

export default function ContactPage() {
  const { personalInfo } = portfolioData;
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("idle"); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");

    emailjs
      .send(
        "service_m23f7pk",     // EmailJS Service ID
        "template_i4775c4",    // EmailJS Template ID
        formData,              // Dynamic form parameters
        "bwgzyfK3ODmI3v781"    // EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setFormStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setFormStatus("error");
          setErrorMessage(error?.text || "Something went wrong while sending the email. Please try again.");
        }
      );
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
      title: "Email Address",
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      accent: "hover:border-purple-500/30"
    },
    {
      icon: <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Phone Number",
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`,
      accent: "hover:border-blue-500/30"
    },
    {
      icon: <MapPin className="w-5 h-5 text-pink-600 dark:text-pink-400" />,
      title: "Office Location",
      value: personalInfo.location,
      link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(personalInfo.location)}`,
      accent: "hover:border-pink-500/30"
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5 text-white" />,
      name: "LinkedIn",
      url: personalInfo.linkedin,
      bg: "bg-blue-600 hover:bg-blue-500"
    },
    {
      icon: <Github className="w-5 h-5 text-white" />,
      name: "GitHub",
      url: personalInfo.github,
      bg: "bg-zinc-700 hover:bg-zinc-600"
    },
    {
      icon: <Twitter className="w-5 h-5 text-white" />,
      name: "Twitter",
      url: personalInfo.twitter,
      bg: "bg-sky-500 hover:bg-sky-400"
    },
  ];

  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full mb-3">
            📫 Connect with me
          </span>
          <h1 className={`text-4xl sm:text-6xl font-black mb-4 tracking-tight ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}>
            Get In Touch
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4"></div>
          <p className={`text-sm sm:text-base max-w-md mx-auto ${
            theme === "dark" ? "text-gray-400" : "text-slate-600"
          }`}>
            Have an opening, a MERN stack project, or just want to say hi? Fill out the form and I&apos;ll respond within 24 hours.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-panel rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 block border ${
                theme === "dark" 
                  ? "border-white/10 text-white bg-white/5" 
                  : "border-slate-200 text-slate-950 bg-white shadow-md shadow-slate-100"
              } ${info.accent}`}
            >
              <div className="w-10 h-10 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl flex items-center justify-center mb-4">
                {info.icon}
              </div>
              <h3 className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                theme === "dark" ? "text-gray-500" : "text-slate-400"
              }`}>
                {info.title}
              </h3>
              <p className={`font-semibold text-sm sm:text-base break-words ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
                {info.value}
              </p>
            </a>
          ))}
        </div>

        {/* Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Contact Form Container */}
          <div className={`glass-panel rounded-3xl p-8 relative overflow-hidden border ${
            theme === "dark" ? "border-white/10" : "border-slate-200 bg-white shadow-lg shadow-slate-100"
          }`}>
            <h2 className={`text-2xl font-bold mb-6 ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}>
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                  theme === "dark" ? "text-gray-400" : "text-slate-500"
                }`}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl focus:border-purple-500/50 outline-none text-sm transition focus:ring-2 focus:ring-purple-500/10 ${
                    theme === "dark"
                      ? "bg-white/5 border-white/10 text-white placeholder-gray-600 focus:bg-white/10"
                      : "bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400 focus:bg-white"
                  }`}
                  placeholder="e.g. John Doe"
                  required
                />
              </div>

              <div>
                <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                  theme === "dark" ? "text-gray-400" : "text-slate-500"
                }`}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl focus:border-purple-500/50 outline-none text-sm transition focus:ring-2 focus:ring-purple-500/10 ${
                    theme === "dark"
                      ? "bg-white/5 border-white/10 text-white placeholder-gray-600 focus:bg-white/10"
                      : "bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400 focus:bg-white"
                  }`}
                  placeholder="e.g. john@example.com"
                  required
                />
              </div>

              <div>
                <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                  theme === "dark" ? "text-gray-400" : "text-slate-500"
                }`}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl focus:border-purple-500/50 outline-none text-sm transition focus:ring-2 focus:ring-purple-500/10 ${
                    theme === "dark"
                      ? "bg-white/5 border-white/10 text-white placeholder-gray-600 focus:bg-white/10"
                      : "bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400 focus:bg-white"
                  }`}
                  placeholder="e.g. Project Inquiry / Hiring Discussion"
                  required
                />
              </div>

              <div>
                <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                  theme === "dark" ? "text-gray-400" : "text-slate-500"
                }`}>
                  Message Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 rounded-xl focus:border-purple-500/50 outline-none text-sm transition resize-none focus:ring-2 focus:ring-purple-500/10 ${
                    theme === "dark"
                      ? "bg-white/5 border-white/10 text-white placeholder-gray-600 focus:bg-white/10"
                      : "bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400 focus:bg-white"
                  }`}
                  placeholder="Tell me about your project or opportunity..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white py-4 rounded-xl font-bold hover:shadow-xl hover:shadow-purple-500/20 active:scale-95 disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                {formStatus === "sending" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Map and Socials */}
          <div className="space-y-8 flex flex-col justify-between">
            {/* CTA/Socials Card */}
            <div className={`glass-panel rounded-3xl p-8 relative overflow-hidden border ${
              theme === "dark" ? "border-white/10" : "border-slate-200 bg-white shadow-lg shadow-slate-100"
            }`}>
              <h3 className={`text-xl font-bold mb-3 ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
                Let&apos;s Connect
              </h3>
              <p className={`text-sm leading-relaxed mb-6 ${
                theme === "dark" ? "text-gray-400" : "text-slate-600"
              }`}>
                I am actively looking for **MERN Stack** / **Frontend Developer** opportunities. You can email, call, or reach out to me directly on my social profiles below!
              </p>
              
              <div className="flex flex-col gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-3.5 rounded-xl border transition group ${
                      theme === "dark"
                        ? "border-white/5 hover:border-white/10 bg-white/5 hover:bg-white/10 text-white"
                        : "border-slate-100 hover:border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800"
                    }`}
                  >
                    <div className={`w-9 h-9 ${social.bg} rounded-lg flex items-center justify-center shadow-lg transition-transform group-hover:scale-110`}>
                      {social.icon}
                    </div>
                    <span className="text-sm font-semibold">
                      Follow me on {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className={`rounded-3xl shadow-xl overflow-hidden border relative ${
              theme === "dark" ? "border-white/10" : "border-slate-200"
            }`} style={{ height: '320px' }}>
              {/* Dark overlay for dark theme without distorting the map */}
              {theme === "dark" && (
                <div className="absolute inset-0 bg-purple-900/10 z-10 pointer-events-none rounded-3xl"></div>
              )}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.925917520975!2d77.3910!3d28.5599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f7e6a82a8f%3A0x6d916a6c0b09c94a!2sSector%2076%2C%20Noida%2C%20Uttar%20Pradesh%20201304!5e0!3m2!1sen!2sin!4v1696068931234!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

        </div>
      </div>

      {/* Success/Error Overlay Modal alerts (No browser blocks) */}
      {formStatus === "success" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className={`border rounded-3xl p-8 max-w-sm text-center shadow-2xl animate-float ${
            theme === "dark" ? "bg-[#0b0821] border-purple-500/30" : "bg-white border-slate-200"
          }`}>
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
            <h3 className={`text-2xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>Message Sent!</h3>
            <p className={`text-sm mb-6 ${theme === "dark" ? "text-gray-400" : "text-slate-600"}`}>
              Thank you for reaching out. Your message has been received, and I&apos;ll get back to you as soon as possible.
            </p>
            <button
              onClick={() => setFormStatus("idle")}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-xl cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </div>
      )}

      {formStatus === "error" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className={`border rounded-3xl p-8 max-w-sm text-center shadow-2xl ${
            theme === "dark" ? "bg-[#0b0821] border-red-500/30" : "bg-white border-slate-200"
          }`}>
            <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h3 className={`text-2xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>Sending Failed</h3>
            <p className={`text-sm mb-6 ${theme === "dark" ? "text-gray-400" : "text-slate-600"}`}>
              {errorMessage}
            </p>
            <button
              onClick={() => setFormStatus("idle")}
              className="w-full py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl cursor-pointer"
            >
              Try Again
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
