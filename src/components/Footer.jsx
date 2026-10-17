function Footer({ email = "haardvadodaria@gmail.com", year = new Date().getFullYear() }) {
  return (
    <footer className="footer-card">
      <div className="footer-contact">
        <span className="contact-item">
          <strong>Email:</strong> {email}
        </span>
        <span className="contact-separator">|</span>
        <span className="contact-item">
          <strong>GitHub:</strong> github.com/haardvadodaria
        </span>
        <span className="contact-separator">|</span>
        <span className="contact-item">
          <strong>LinkedIn:</strong> linkedin.com/in/haardvadodaria
        </span>
      </div>
      <p className="footer-copyright">
        © {year} Haard Vadodaria • Practical 1: Introduction to React & Component Architecture • All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
