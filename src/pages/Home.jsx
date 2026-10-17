import { useState } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';

function Home() {
  // Student data reused from Practical 1
  const studentName = "Haard Vadodaria";

  const skills = [
    "HTML5 & Semantic Elements",
    "CSS3 & Flexbox / Grid",
    "Modern JavaScript (ES6+)",
    "React.js & JSX",
    "Component Hierarchy & Props",
    "React Hooks (useState)",
    "React Router DOM",
    "Git & GitHub Version Control"
  ];

  // Practical 2 - useState Hook 1: Availability Status Toggle
  const [isAvailable, setIsAvailable] = useState(true);

  // Practical 2 - useState Hook 2: Interactive Skill Endorsement Counter
  const [endorsements, setEndorsements] = useState(12);
  const [hasEndorsed, setHasEndorsed] = useState(false);

  // Handler to toggle availability state
  const handleToggleStatus = () => {
    setIsAvailable((prev) => !prev);
  };

  // Handler to increment endorsements using state
  const handleEndorse = () => {
    if (!hasEndorsed) {
      setEndorsements((prev) => prev + 1);
      setHasEndorsed(true);
    } else {
      setEndorsements((prev) => prev - 1);
      setHasEndorsed(false);
    }
  };

  return (
    <div className="page-content home-page">
      {/* 1. Header Component with Name prop */}
      <Header
        name={studentName}
        title="Student Developer Portfolio"
        badge="Practical 2: React useState & React Router"
      />

      {/* 2. Practical 2 Interactive useState Showcase Card */}
      <section className="interactive-status-card">
        <div className="status-info">
          <span className="status-indicator-badge">
            <span className={`status-bulb ${isAvailable ? 'available' : 'busy'}`}></span>
            <strong>Status:</strong> {isAvailable ? "Open to Web Developer Roles & Projects" : "Focused on Lab Experiments & Academics"}
          </span>
          <span className="endorse-badge">
            ⭐ <strong>{endorsements}</strong> Peer Endorsements
          </span>
        </div>

        <div className="status-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleToggleStatus}
            title="Click to toggle availability state"
          >
            🔄 Toggle Status ({isAvailable ? "Set to Busy" : "Set to Available"})
          </button>

          <button
            type="button"
            className={`btn ${hasEndorsed ? 'btn-endorsed' : 'btn-primary'}`}
            onClick={handleEndorse}
            title="Click to endorse skills"
          >
            {hasEndorsed ? "✅ Endorsed! (-1 to Undo)" : "⭐ Endorse Skills (+1)"}
          </button>
        </div>
      </section>

      {/* 3. Main Grid Composing About and Skills */}
      <main className="portfolio-main">
        <About />
        <Skills skillList={skills} />
      </main>
    </div>
  );
}

export default Home;
