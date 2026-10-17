function Skills({ skillList = [] }) {
  return (
    <section className="skills-card">
      <h2 className="section-title">Technical Skills</h2>
      <ul className="skills-list">
        {skillList.map((skill, index) => (
          <li key={index} className="skill-pill">
            <span className="skill-bullet">•</span>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
