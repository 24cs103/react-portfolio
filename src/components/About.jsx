function About({ bio }) {
  const defaultBio =
    "I am a B.Tech graduate and passionate Web Developer dedicated to building responsive, accessible, and user-friendly web applications. Currently exploring modern frontend engineering, component-driven design, and interactive web frameworks.";

  return (
    <section className="about-card">
      <h2 className="section-title">About Me</h2>
      <p className="about-text">{bio || defaultBio}</p>
      <div className="about-details">
        <div className="detail-item">
          <span className="detail-label">Qualification:</span> B.Tech Graduate
        </div>
        <div className="detail-item">
          <span className="detail-label">Course:</span> Advanced Web Development Frameworks (AWDF)
        </div>
        <div className="detail-item">
          <span className="detail-label">Focus:</span> Modern React & Component Architecture
        </div>
      </div>
    </section>
  );
}

export default About;
