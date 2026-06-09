export const portfolioData = {
  personalInfo: {
    name: "Shailendra Yadav",
    nickname: "Badal",
    title: "MERN Stack Developer",
    email: "shailendrayadaw2004@gmail.com",
    phone: "+91-9305815719",
    location: "Sector 76, Noida, Uttar Pradesh, India",
    github: "https://github.com/shailendrayadav460",
    linkedin: "https://linkedin.com/in/shailendra-yadav-5b18aa222",
    twitter: "https://twitter.com/",
    resumeUrl: "/resume"
  },

  roles: [
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "AI & Automation Builder",
    "Backend Engineer"
  ],

  about: {
    summary: "Passionate MERN Stack Developer with 1.3+ years of professional experience building scalable, high-performance web applications. Highly skilled in React for building dynamic, component-driven UIs and building robust backend systems with Node.js, Express, and MongoDB. Experienced with real-time Socket.io applications, Payment Gateway integrations (Razorpay & Stripe), AI Integration with OpenAI APIs, MCP Server configuration, Docker containerization, and n8n workflow automation. Committed to writing clean, production-ready code and delivering real value on every project.",
    detailedBio: "I enjoy solving real-world problems through technology. My strongest skill is React — I've built complex, state-heavy applications including drag-and-drop builders, real-time boards, and AI-powered chat interfaces. On the backend, I architect REST APIs with Node.js and Express, design MongoDB schemas, and build WebSocket-powered systems with Socket.io. I've integrated Razorpay and Stripe payment gateways, automated business workflows with n8n, and configured MCP Servers for AI agent use. I'm currently deepening my Docker and DevOps skills."
  },

  skills: [
    // Frontend — React is primary strength
    { name: "React",            category: "Frontend",         level: 92, color: "from-blue-400 to-cyan-500" },
    { name: "JavaScript",       category: "Frontend",         level: 90, color: "from-yellow-400 to-amber-500" },
    { name: "HTML5 & CSS3",     category: "Frontend",         level: 95, color: "from-orange-400 to-red-500" },
    { name: "TailwindCSS",      category: "Frontend",         level: 90, color: "from-cyan-400 to-teal-500" },
    { name: "Next.js",          category: "Frontend",         level: 65, color: "from-purple-500 to-indigo-600" },
    { name: "n8n Automation",   category: "AI & Automation",  level: 85, color: "from-red-500 to-orange-600" },
    // Backend
    { name: "Node.js",          category: "Backend",          level: 88, color: "from-green-400 to-emerald-500" },
    { name: "Express.js",       category: "Backend",          level: 87, color: "from-gray-500 to-gray-700" },
    { name: "REST APIs",        category: "Backend",          level: 90, color: "from-blue-500 to-indigo-500" },
    { name: "Socket.io",        category: "Backend",          level: 80, color: "from-purple-400 to-pink-500" },
    { name: "Payment Gateway",  category: "Backend",          level: 78, color: "from-violet-500 to-purple-700" },
    { name: "MCP Server",       category: "Backend",          level: 70, color: "from-sky-400 to-blue-600" },
    // Database
    { name: "MongoDB",          category: "Database",         level: 85, color: "from-emerald-500 to-green-600" },
    { name: "SQL",              category: "Database",         level: 68, color: "from-blue-600 to-blue-800" },
    // AI & Automation
    { name: "AI Integration",   category: "AI & Automation",  level: 75, color: "from-rose-400 to-pink-600" },
    // DevOps & Tools
    { name: "Docker",           category: "DevOps & Tools",   level: 70, color: "from-sky-500 to-blue-600" },
    { name: "Git & GitHub",     category: "DevOps & Tools",   level: 90, color: "from-zinc-600 to-zinc-900" },
    { name: "Postman",          category: "DevOps & Tools",   level: 88, color: "from-orange-500 to-red-500" }
  ],

  experience: [
    {
      id: 1,
      role: "MERN Stack Developer",
      company: "Freelance & Professional Projects",
      duration: "Jan 2025 – Present",
      location: "Remote / Noida",
      description: "Architecting and delivering full-stack web applications using React, Node.js, Express, and MongoDB — with real-time features, payment integrations, AI capabilities, and automated workflows.",
      points: [
        "Built 'BMailPro — Real Estate Campaign Builder' using React — a drag-and-drop email template designer with live preview, dynamic field injection, and EmailJS-powered campaign dispatch.",
        "Integrated Razorpay & Stripe payment gateways in e-commerce apps with secure webhook handling, order lifecycle management, and refund flows.",
        "Implemented real-time collaboration features using Socket.io — live Kanban boards, multi-user cursors, and instant comment sync.",
        "Automated multi-step business workflows using n8n — lead capture from web forms, CRM data sync, automated email sequences, and API orchestration.",
        "Integrated OpenAI API with MCP Server configuration to build an AI assistant capable of performing tool calls, file operations, and API lookups.",
        "Containerized Node.js backend services with Docker for consistent development and production environments.",
        "Achieved 40%+ PageSpeed improvement through React lazy loading, code splitting, image optimization, and server-side rendering."
      ]
    },
    {
      id: 2,
      role: "Frontend Developer (Academic Projects)",
      company: "Feroze Gandhi Institute of Engineering and Technology",
      duration: "Jul 2023 – Dec 2024",
      location: "Raebareli, UP",
      description: "Built interactive web applications and dashboards as part of the academic curriculum, establishing strong foundations in frontend engineering, JavaScript, and version control.",
      points: [
        "Developed dynamic web apps with JavaScript, HTML5 & CSS3 focusing on responsive, mobile-first layouts.",
        "Built and styled multiple academic project UIs with clean structure and cross-browser compatibility.",
        "Used Git & GitHub for team collaboration with proper branching, pull requests, and commit management."
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "BMailPro — Real Estate Campaign Builder",
      description: "A drag-and-drop email campaign builder for real estate agents. Features dynamic template selection, live preview, contact management, and automated email dispatch via EmailJS.",
      tech: ["React", "Node.js", "Express", "MongoDB", "EmailJS", "TailwindCSS"],
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      emoji: "🏠",
      category: "Full Stack",
      link: "https://github.com/shailendrayadav460",
      demo: "",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "MERN E-Commerce with Payment Gateway",
      description: "A full-stack e-commerce platform with product catalog, cart system, Razorpay & Stripe payment integration, order tracking, admin dashboard, and JWT-secured APIs.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Razorpay", "Stripe", "TailwindCSS"],
      gradient: "from-purple-500 via-indigo-500 to-pink-500",
      emoji: "🛍️",
      category: "Full Stack",
      link: "https://github.com/shailendrayadav460",
      demo: "",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Real-time Collaboration Board",
      description: "A live team workspace with drag-and-drop Kanban task cards, real-time sync via Socket.io, live commenting, multi-user cursor tracking, and instant notifications.",
      tech: ["React", "Node.js", "Express", "Socket.io", "MongoDB", "TailwindCSS"],
      gradient: "from-emerald-500 via-teal-500 to-green-500",
      emoji: "✅",
      category: "MERN Stack",
      link: "https://github.com/shailendrayadav460",
      demo: "",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "n8n Business Automation Suite",
      description: "Multi-step workflow automation pipelines built with n8n — lead capture, CRM data sync, automated email follow-up sequences, Slack notifications, and REST API chaining.",
      tech: ["n8n", "REST APIs", "Webhooks", "EmailJS", "MongoDB"],
      gradient: "from-red-500 via-orange-500 to-amber-500",
      emoji: "⚡",
      category: "Automation",
      link: "https://github.com/shailendrayadav460",
      demo: "",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "AI Chat Assistant with MCP Server",
      description: "An AI chat interface powered by OpenAI API with MCP Server tool configuration — enabling AI agents to perform file operations, make API calls, and web lookups via natural language.",
      tech: ["React", "Node.js", "OpenAI API", "MCP Server", "Express", "MongoDB"],
      gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
      emoji: "🤖",
      category: "AI Integration",
      link: "https://github.com/shailendrayadav460",
      demo: "",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Dynamic Portfolio CMS Dashboard",
      description: "A headless CMS for managing portfolio content — projects, experience, and skills — with JWT authentication, role-based access control, and a live admin dashboard.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "TailwindCSS"],
      gradient: "from-amber-500 via-orange-500 to-red-500",
      emoji: "📁",
      category: "Full Stack",
      link: "https://github.com/shailendrayadav460",
      demo: "",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology — Electronics & Communication Engineering",
      school: "Feroze Gandhi Institute of Engineering and Technology",
      location: "Raebareli, Uttar Pradesh",
      year: "2024",
      grade: "First Division"
    },
    {
      degree: "Intermediate — Class XII",
      school: "Government Inter College",
      location: "Pratapgarh, Uttar Pradesh",
      year: "2020",
      board: "UP Board"
    },
    {
      degree: "High School — Class X",
      school: "St. Anthony Inter College",
      location: "Pratapgarh, Uttar Pradesh",
      year: "2018",
      board: "UP Board"
    }
  ],

  certifications: [
    "JavaScript for Beginners — Great Learning",
    "HTML Fundamentals — Great Learning",
    "CSS for Beginners — Great Learning",
    "Node.js & Express — Udemy",
    "MongoDB for Developers — MongoDB University",
    "Docker Essentials — IBM SkillsBuild"
  ],

  achievements: [
    "Scored 55.6% in TCS iON National Qualifier Test (NQT) — demonstrating strong logic, analytical reasoning, and algorithmic problem-solving.",
    "Delivered 15+ full-stack freelance projects with 100% client satisfaction and on-time delivery.",
    "Built and integrated a production-grade MCP Server with OpenAI API for a live AI assistant product."
  ],

  languages: ["English", "Hindi"],
  interests: ["Cricket", "Chess", "Coding", "Music", "AI & LLMs"],

  services: [
    {
      icon: "💻",
      title: "Full Stack Development",
      desc: "End-to-end web apps — React on the frontend, Node.js + Express + MongoDB on the backend, deployed with Docker.",
      color: "border-blue-500/30 text-blue-400 bg-blue-500/5"
    },
    {
      icon: "⚡",
      title: "Real-time & Socket Systems",
      desc: "Live collaborative apps, chat systems, and dashboards powered by Socket.io with WebSocket connections.",
      color: "border-amber-500/30 text-amber-400 bg-amber-500/5"
    },
    {
      icon: "💳",
      title: "Payment Gateway Integration",
      desc: "Seamless Razorpay & Stripe integrations with secure webhooks, subscription billing, and order management.",
      color: "border-violet-500/30 text-violet-400 bg-violet-500/5"
    },
    {
      icon: "🤖",
      title: "AI Integration & MCP Server",
      desc: "OpenAI & Gemini API integrations, MCP Server configuration for AI agents, and intelligent chat assistants.",
      color: "border-rose-500/30 text-rose-400 bg-rose-500/5"
    },
    {
      icon: "🔄",
      title: "n8n Workflow Automation",
      desc: "Automated business pipelines — lead capture, CRM sync, email sequences, API orchestration — using n8n.",
      color: "border-orange-500/30 text-orange-400 bg-orange-500/5"
    },
    {
      icon: "🎨",
      title: "Premium UI/UX Design",
      desc: "Stunning, responsive React UIs with TailwindCSS, glassmorphism, micro-animations, and dark/light themes.",
      color: "border-purple-500/30 text-purple-400 bg-purple-500/5"
    }
  ],

  stats: [
    { num: "1.3+", label: "Years Experience",    gradient: "from-blue-500 to-cyan-500" },
    { num: "15+",  label: "Projects Delivered",  gradient: "from-purple-500 to-pink-500" },
    { num: "8+",   label: "Tech Stack Mastered", gradient: "from-emerald-500 to-teal-500" },
    { num: "100%", label: "Client Satisfaction", gradient: "from-orange-500 to-red-500" }
  ]
};
