function Header({ name, title = "Student Portfolio", badge = "Practical 2: React useState & Router" }) {
  return (
    <header className="header-card">
      <div className="header-badge">{badge}</div>
      <h1 className="header-title">{title}</h1>
      <p className="header-subtitle">
        Welcome to the personal portfolio of <span className="highlight-name">{name}</span> (B.Tech Graduate)
      </p>
    </header>
  );
}

export default Header;
