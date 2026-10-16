# Student Portfolio - Practical 1

**Course:** Advanced Web Development Frameworks (AWDF)  
**Aim:** To set up a React development environment using Vite and build a static UI using independently structured, reusable components.  
**Developer:** Haard Vadodaria  
**Status:** B.Tech Graduate  
**Email:** haardvadodaria@gmail.com  
**Repository:** [https://github.com/24cs103/react-portfolio](https://github.com/24cs103/react-portfolio)

---

## 🚀 Features & Component Architecture

This application is built with **React** and **Vite**, showcasing functional components, reusable architecture, and unidirectional data flow using props:

1. **`Header.jsx` (`src/components/Header.jsx`)**
   - Displays the portfolio title, lab practical badge, and developer name.
   - Receives the developer's name dynamically via the `name` prop from `App.jsx`.

2. **`About.jsx` (`src/components/About.jsx`)**
   - Displays a student biography, educational qualification (**B.Tech Graduate**), course name, and learning focus.

3. **`Skills.jsx` (`src/components/Skills.jsx`)**
   - Receives an array of skills via the `skillList` prop from `App.jsx`.
   - Iterates over the skills dynamically using `.map()` and renders clean badges with unique `key` props.

4. **`Footer.jsx` (`src/components/Footer.jsx`)**
   - Displays contact information (email: `haardvadodaria@gmail.com`, GitHub, LinkedIn) and dynamic copyright information.

5. **`App.jsx` (`src/App.jsx`)**
   - Root component that manages the portfolio data (`studentName`, `skills`, `studentEmail`) and composes all four child components into a modern responsive layout.

---

## 🛠️ Tech Stack

- **Library:** React 18
- **Tooling & Bundler:** Vite
- **Syntax:** Modern JavaScript (ES6+) with JSX
- **Styling:** Modern CSS3 (CSS Grid & Flexbox, no bloated UI frameworks)

---

## 💻 Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/24cs103/react-portfolio.git
   cd react-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://127.0.0.1:5173/
   ```
