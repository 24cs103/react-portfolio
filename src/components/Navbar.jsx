import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar-card">
      <div className="navbar-brand">
        <span className="brand-dot"></span>
        <span className="brand-name">Haard Vadodaria</span>
        <span className="brand-tag">Portfolio</span>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
