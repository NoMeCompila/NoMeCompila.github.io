# QA Automation Engineer Portfolio

Welcome to the source code of my personal web portfolio! This repository contains the code for my professional portfolio, where I showcase my experience, skills, and projects as a QA Automation Engineer, QC Analyst, and Performance Tester.

## 🚀 Project Overview

The goal of this project is to provide a comprehensive, interactive, and visually appealing presentation of my professional background. The portfolio highlights my expertise in software quality assurance, automated testing frameworks, and my AI-First mindset. It is completely static and ready to be hosted out of the box.

## 🛠️ Technologies Used

This project was built focusing on a lightweight, fast, and dependency-free approach:

- **HTML5**: For semantic and accessible structure.
- **Tailwind CSS**: (via CDN) For rapid, modern, and responsive UI styling.
- **Vanilla JavaScript**: For logic handling, specifically custom Internationalization (i18n) features.
- **Vanilla CSS**: For custom specific styling overrides and visual refinements (`style.css`).
- **Google Fonts & Material Symbols**: For modern typography (Inter font) and scalable icons.

## 🧠 Development Strategy

The development of this portfolio was driven by several core technical and design strategies:

1. **Custom Internationalization (i18n)**
   - Implemented a custom, lightweight Vanilla JavaScript solution (`lang.js`) to support both English (default) and Spanish languages. 
   - Uses `data-i18n` HTML attributes to dynamically map and swap text keys from a translation dictionary.
   - Automatically detects and saves the user's language preference locally using the browser's `localStorage`.
   - Allows instant language switching via a UI toggle button without requiring page reloads.

2. **Responsive & Mobile-First Design**
   - Utilizing Tailwind CSS grid and flexbox utilities to ensure the layout adapts seamlessly to any screen size, from mobile phones to wide desktop monitors.

3. **Dark Mode Architecture**
   - The UI is meticulously designed using Tailwind's `dark:` classes everywhere throughout the document, providing a built-in dark mode aesthetic that reduces eye strain and looks sleek.

4. **AI-Assisted Development**
   - Embracing an AI-First mindset, the development workflow was accelerated and optimized using AI coding assistants to generate boilerplate, refactor logic, implement features, and translate text efficiently.

5. **No-Build-Step Architecture**
   - By using Tailwind via CDN and purely Vanilla JS, the project completely bypasses complex build tools (like Webpack or Vite) or package managers (npm). It can be executed and hosted on any static file server (like GitHub Pages or Vercel) instantly.

## 📫 Let's Connect

Feel free to explore the code, take inspiration from it, or contact me for professional inquiries!
- **Email**: cabafer1@gmail.com
- **LinkedIn**: [Fernando Caballero](https://www.linkedin.com/in/qa-fer-caballero/)