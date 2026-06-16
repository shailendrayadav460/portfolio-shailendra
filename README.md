# Shailendra Yadav - Personal Portfolio

A sleek, premium, and fully responsive personal portfolio website designed to present professional experience, skills, projects, and contact information.

## Project Description

* **Modern Developer Showcase**: A highly interactive portfolio highlighting 1.3+ years of professional experience as a MERN Stack Developer, complete with a structured resume viewer, project gallery, contact portal, and theme toggle (light/dark mode).
* **High-Performance Tech Stack**: Engineered with **Next.js 15**, **React 19**, **Tailwind CSS v4 (with PostCSS)**, and **Lucide Icons** to deliver fast page speeds, smooth micro-animations, glassmorphic UI components, and fully responsive layouts.

---

## Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS v4, Lucide React, React Icons
- **Backend/Integrations**: EmailJS (for contact form processing)
- **Deployment**: Configured dynamically to support hosting on both **Vercel** and **GitHub Pages**

---

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18.x or later recommended).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shailendrayadav460/portfolio.git
   ```

2. Navigate to the project folder:
   ```bash
   cd portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Deployment

### Vercel
This project is configured to deploy seamlessly to Vercel at the root domain path. The configuration in [next.config.mjs](file:///c:/Users/DELL/Desktop/Personal_Portfolio/portfolio/next.config.mjs) automatically detects the Vercel build environment and serves all static assets correctly.
1. Connect your repository to Vercel.
2. Set the root directory to `portfolio`.
3. Vercel will build and deploy automatically on every push to your main branch.

### GitHub Pages
To deploy the static build to GitHub Pages:
```bash
npm run deploy
```
This runs the production build and pushes the static assets to your `gh-pages` branch using the configured subdirectory prefix (`/shailen-portfolio-2002`).
