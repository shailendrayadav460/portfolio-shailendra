import aiSaasImg from "../images/ai-saas.png";
import remindMeImg from "../images/RemindMe.png";
import clientPannelImg from "../images/client-pannel-project.png";
import opt2dealImg from "../images/opt2deal-project.png";
import personalPortfolioImg from "../images/personal-portfolio.png";

export const portfolioData = {
  personalInfo: {
    name: "Shailendra Yadav",
    nickname: "Badal",
    title: "Full-Stack Developer",
    email: "badalyadav7493@gmail.com",
    phone: "+91-9305815719",
    location: "Noida-201309, Uttar Pradesh, India",
    github: "https://github.com/shailendrayadav460",
    linkedin: "https://www.linkedin.com/in/shailendra-yadavvy",
    twitter: "https://twitter.com/",
    resumeUrl: "/resume"
  },

  roles: [
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "AI & Automation Builder",
    "Backend Engineer"
  ],

  about: {
    summary: "Full Stack Developer with hands-on experience in designing, developing, and deploying scalable web applications using React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, and MySQL. Skilled in building secure RESTful APIs, implementing authentication and authorization with JWT, OAuth 2.0, and RBAC, and integrating third-party services including Razorpay, Twilio WhatsApp API, and Google Workspace APIs. Experienced in AI-powered application development, LLM integrations, prompt engineering, and business workflow automation using n8n. Proficient in Git and GitHub for version control, with practical experience deploying and maintaining production applications on Vercel and Render.",
    detailedBio: "Passionate about building high-quality, user-centric solutions and continuously learning modern technologies to solve real-world business challenges. I enjoy solving real-world problems through technology. My strongest skill is React — I've built complex, state-heavy applications including AI SaaS platforms, real-time boards, and AI-powered chat interfaces. On the backend, I architect REST APIs with Node.js and Express, design MongoDB and PostgreSQL schemas, and integrate payment gateways including Razorpay with Twilio WhatsApp API. I've automated business workflows with n8n, integrated Google Workspace APIs, and worked with LLMs including ChatGPT and Claude."
  },

  skills: [
    // Frontend
    { name: "React.js",           category: "Frontend",         level: 92, color: "from-blue-400 to-cyan-500" },
    { name: "Next.js",            category: "Frontend",         level: 85, color: "from-purple-500 to-indigo-600" },
    { name: "JavaScript (ES6+)",  category: "Frontend",         level: 90, color: "from-yellow-400 to-amber-500" },
    { name: "HTML5 & CSS3",       category: "Frontend",         level: 95, color: "from-orange-400 to-red-500" },
    { name: "TailwindCSS",        category: "Frontend",         level: 90, color: "from-cyan-400 to-teal-500" },
    { name: "Bootstrap",          category: "Frontend",         level: 80, color: "from-violet-400 to-purple-500" },
    // Backend
    { name: "Node.js",            category: "Backend",          level: 88, color: "from-green-400 to-emerald-500" },
    { name: "Express.js",         category: "Backend",          level: 87, color: "from-gray-500 to-gray-700" },
    { name: "REST API Dev",       category: "Backend",          level: 90, color: "from-blue-500 to-indigo-500" },
    { name: "JWT Auth",           category: "Backend",          level: 85, color: "from-amber-400 to-yellow-600" },
    { name: "Prisma ORM",         category: "Backend",          level: 75, color: "from-teal-400 to-cyan-600" },
    { name: "Razorpay",           category: "Backend",          level: 82, color: "from-violet-500 to-purple-700" },
    { name: "Twilio WhatsApp",    category: "Backend",          level: 78, color: "from-red-400 to-pink-500" },
    // Database
    { name: "MongoDB",            category: "Database",         level: 85, color: "from-emerald-500 to-green-600" },
    { name: "PostgreSQL",         category: "Database",         level: 78, color: "from-blue-600 to-blue-800" },
    { name: "MySQL",              category: "Database",         level: 72, color: "from-orange-500 to-amber-600" },
    // AI & Automation
    { name: "OpenAI API",         category: "AI & Automation",  level: 82, color: "from-rose-400 to-pink-600" },
    { name: "n8n Automation",     category: "AI & Automation",  level: 85, color: "from-red-500 to-orange-600" },
    { name: "LLM Integration",    category: "AI & Automation",  level: 78, color: "from-fuchsia-500 to-purple-600" },
    // Google APIs
    { name: "Google Workspace",   category: "Integrations",     level: 75, color: "from-sky-400 to-blue-500" },
    { name: "OAuth 2.0",          category: "Integrations",     level: 80, color: "from-lime-400 to-green-500" },
    // DevOps & Tools
    { name: "Git & GitHub",       category: "DevOps & Tools",   level: 90, color: "from-zinc-600 to-zinc-900" },
    { name: "Postman",            category: "DevOps & Tools",   level: 88, color: "from-orange-500 to-red-500" },
    { name: "VS Code",            category: "DevOps & Tools",   level: 92, color: "from-blue-400 to-indigo-500" },
    { name: "Docker",             category: "DevOps & Tools",   level: 70, color: "from-sky-500 to-blue-600" },
  ],

  experience: [
    {
      id: 1,
      role: "Software Developer",
      company: "AyanshTech Solutions",
      duration: "Feb 2025 – Present",
      location: "Noida, India",
      description: "Developed and maintained full-stack web applications using React.js, Next.js, Node.js, and Express.js, building scalable RESTful APIs and integrating MongoDB, PostgreSQL, and MySQL databases.",
      points: [
        "Developed and maintained full-stack web applications using React.js, Next.js, Node.js, and Express.js, building scalable RESTful APIs and integrating MongoDB, PostgreSQL, and MySQL databases.",
        "Implemented secure authentication and authorization using JWT, bcrypt, OAuth 2.0, and role-based access control (RBAC), while integrating third-party services such as Razorpay, Twilio WhatsApp API, and Google Workspace APIs.",
        "Built and integrated AI-powered features and n8n automation workflows, connecting multiple business systems and APIs to streamline processes, enhance productivity, and improve user experience."
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "AI-SaaS Platform",
      description: "A full-stack AI SaaS productivity platform with an interactive AI chatbot that uses a dynamic tool-calling system to recognize user intent and automatically trigger the correct third-party API — such as creating a Google Doc, scheduling a Calendar event, or sending a Gmail — without any manual navigation. Integrated Razorpay Payment Gateway for Free vs PRO subscriptions and Twilio WhatsApp API.",
      tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "Framer Motion", "Recharts"],
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      emoji: "🤖",
      category: "AI SaaS",
      link: "https://ai-saas-three-eosin.vercel.app/login",
      demo: "https://ai-saas-three-eosin.vercel.app/login",
      image: aiSaasImg
    },
    {
      id: 2,
      title: "Personal Portfolio",
      description: "A highly interactive portfolio highlighting 1.3+ years of professional experience as a Full Stack Developer, complete with a structured resume viewer, project gallery, contact portal, and theme toggle (light/dark mode). Engineered with Next.js 15, React 19, Tailwind CSS v4 (with PostCSS), and Lucide Icons.",
      tech: ["Next.js", "React.js", "Tailwind CSS", "Lucide Icons", "PostCSS"],
      gradient: "from-purple-500 via-indigo-500 to-pink-500",
      emoji: "💼",
      category: "Full Stack",
      link: "https://portfolio-shailendra-vjgv.vercel.app/",
      demo: "https://portfolio-shailendra-vjgv.vercel.app/",
      image: personalPortfolioImg
    },
    {
      id: 3,
      title: "RemindMe App",
      description: "A complete mobile reminder app with full frontend, backend, and REST APIs. Features task scheduling, push notifications, user authentication, and a clean mobile-responsive UI.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      gradient: "from-emerald-500 via-teal-500 to-green-500",
      emoji: "⏰",
      category: "Full Stack",
      link: "https://remindme.website-design-india.com/",
      demo: "https://remindme.website-design-india.com/",
      image: remindMeImg
    },
    {
      id: 4,
      title: "Opt-Deal Dashboard",
      description: "A desktop dashboard application with API integration, advanced data viewing, searching, and management features. Built for business data operations with a clean, professional interface.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
      gradient: "from-red-500 via-orange-500 to-amber-500",
      emoji: "📊",
      category: "Full Stack",
      link: "https://opt-deal.vercel.app/",
      demo: "https://opt-deal.vercel.app/",
      image: opt2dealImg
    },
    {
      id: 5,
      title: "Client Pannel",
      description: "A React client management frontend with chat, video calls, payments, AI integration, real Jarvis assistant, human cloth wear e-commerce, and n8n automation workflows.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "n8n", "TailwindCSS"],
      gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
      emoji: "🧑‍💼",
      category: "Full Stack",
      link: "https://client-pannel.vercel.app/",
      demo: "https://client-pannel.vercel.app/",
      image: clientPannelImg
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      school: "Dr. A.P.J. Abdul Kalam Technical University",
      location: "Lucknow, Uttar Pradesh",
      year: "2024",
      grade: "First Division"
    }
  ],

  certifications: [
    "TCS iON NQT – Cognitive Skills | Score: 55.6% — Evaluated on analytical thinking, cognitive aptitude, and problem-solving"
  ],

  achievements: [
    "Scored 55.6% in TCS iON National Qualifier Test (NQT) — demonstrating strong logic, analytical reasoning, and algorithmic problem-solving.",
    "Deployed 5+ production-grade applications on Vercel and Render with real users.",
    "Built and integrated AI-powered features with n8n automation workflows connecting multiple business systems."
  ],

  softSkills: [
    "Analytical Problem-Solving",
    "Adaptability",
    "Clear Communication",
    "Team Collaboration",
    "Continuous Learning"
  ],

  languages: ["English", "Hindi"],
  interests: ["Cricket", "Chess", "Coding", "Music", "AI & LLMs"],

  services: [
    {
      icon: "💻",
      title: "Full Stack Development",
      desc: "End-to-end web apps — React & Next.js on the frontend, Node.js + Express + MongoDB/PostgreSQL on the backend, deployed on Vercel & Render.",
      color: "border-blue-500/30 text-blue-400 bg-blue-500/5"
    },
    {
      icon: "🤖",
      title: "AI Integration & Automation",
      desc: "OpenAI API integrations, AI-powered application development, LLM integrations (ChatGPT, Claude), and intelligent chat assistants.",
      color: "border-rose-500/30 text-rose-400 bg-rose-500/5"
    },
    {
      icon: "💳",
      title: "Payment Gateway Integration",
      desc: "Seamless Razorpay integrations with Twilio WhatsApp API, secure webhooks, subscription billing (Free vs PRO tiers), and order management.",
      color: "border-violet-500/30 text-violet-400 bg-violet-500/5"
    },
    {
      icon: "🔄",
      title: "n8n Workflow Automation",
      desc: "Automated business pipelines — lead capture, CRM sync, email sequences, API orchestration — using n8n to connect multiple business systems.",
      color: "border-orange-500/30 text-orange-400 bg-orange-500/5"
    },
    {
      icon: "🌐",
      title: "Google Workspace APIs",
      desc: "Integration with Gmail, Google Calendar, Drive, Docs, Sheets, and Meet APIs using OAuth 2.0 for seamless productivity automation.",
      color: "border-sky-500/30 text-sky-400 bg-sky-500/5"
    },
    {
      icon: "🎨",
      title: "Premium UI/UX Design",
      desc: "Stunning, responsive React UIs with TailwindCSS, Framer Motion animations, glassmorphism, data visualization with Recharts, and dark/light themes.",
      color: "border-purple-500/30 text-purple-400 bg-purple-500/5"
    }
  ],

  stats: [
    { num: "1.3+", label: "Years Experience",    gradient: "from-blue-500 to-cyan-500" },
    { num: "5+",   label: "Live Projects",       gradient: "from-purple-500 to-pink-500" },
    { num: "10+",  label: "Tech Stack Mastered", gradient: "from-emerald-500 to-teal-500" },
    { num: "100%", label: "Client Satisfaction", gradient: "from-orange-500 to-red-500" }
  ]
};
