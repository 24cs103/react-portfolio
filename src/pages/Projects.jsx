import { useState } from 'react';

function Projects() {
  // Sample student projects list
  const initialProjects = [
    {
      id: 1,
      title: "Student Developer Portfolio",
      category: "React",
      description: "Component-driven single page portfolio application built using React and Vite, featuring modular UI architecture, props flow, and React Router navigation.",
      technologies: ["React", "Vite", "React Router", "CSS3"],
      highlights: "Built with 4 reusable components, dynamic .map() rendering, and zero external UI libraries."
    },
    {
      id: 2,
      title: "Coursework & Lab Tracker",
      category: "Full Stack",
      description: "Full-stack web dashboard designed for engineering students to track laboratory assignments, project milestones, and viva preparation schedules.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      highlights: "Implemented RESTful API endpoints and CRUD operations for coursework task management."
    },
    {
      id: 3,
      title: "Campus Tech Symposium Portal",
      category: "Frontend",
      description: "Responsive event management interface for university technical symposiums, coding competitions, paper presentations, and workshop registrations.",
      technologies: ["JavaScript (ES6+)", "HTML5", "CSS Grid", "Flexbox"],
      highlights: "100% responsive fluid layout optimized for both mobile and desktop screens."
    },
    {
      id: 4,
      title: "Real-Time Weather Dashboard",
      category: "React",
      description: "Interactive web dashboard fetching real-time climate observations, 5-day forecasts, and atmospheric data using asynchronous fetch requests.",
      technologies: ["React", "REST API", "Hooks", "CSS Modules"],
      highlights: "Demonstrates asynchronous state handling and dynamic component re-rendering."
    }
  ];

  // Practical 2 - useState Hook 1: Active Project Category Filter
  const [activeCategory, setActiveCategory] = useState("All");

  // Practical 2 - useState Hook 2: Expanded Project Card Highlights
  const [expandedId, setExpandedId] = useState(null);

  // Available filter categories
  const categories = ["All", "React", "Full Stack", "Frontend"];

  // Filter projects dynamically based on current state
  const filteredProjects = activeCategory === "All"
    ? initialProjects
    : initialProjects.filter((project) => project.category === activeCategory);

  // Handler to toggle card highlights
  const handleToggleDetails = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="page-content projects-page">
      {/* Header Banner */}
      <section className="page-header-card">
        <div className="header-badge">Practical 2: React State & Routing</div>
        <h1 className="page-title">Featured Projects</h1>
        <p className="page-subtitle">
          Showcasing student web development practical work and academic projects.
        </p>

        {/* State-driven Category Filter Buttons */}
        <div className="category-filter-group">
          <span className="filter-label">Filter by Category:</span>
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <p className="filter-count">
          Showing <strong>{filteredProjects.length}</strong> of {initialProjects.length} projects
        </p>
      </section>

      {/* Projects Cards Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => {
          const isExpanded = expandedId === project.id;
          return (
            <article key={project.id} className="project-card">
              <div className="project-card-header">
                <span className="project-category-badge">{project.category}</span>
                <h2 className="project-title">{project.title}</h2>
              </div>

              <p className="project-description">{project.description}</p>

              {/* Technologies Used Pills */}
              <div className="project-tech-list">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Collapsible Key Highlights using useState */}
              {isExpanded && (
                <div className="project-highlights-box">
                  <strong>Key Highlight:</strong> {project.highlights}
                </div>
              )}

              {/* Interactive Show More / Hide Details Button */}
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => handleToggleDetails(project.id)}
              >
                {isExpanded ? "▲ Hide Highlights" : "▼ View Highlights"}
              </button>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
