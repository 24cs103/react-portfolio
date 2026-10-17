import { useState } from 'react';

function Contact() {
  // Practical 2 - useState Hook 1: Controlled Form Fields State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Practical 2 - useState Hook 2: Validation Errors State
  const [errors, setErrors] = useState({});

  // Practical 2 - useState Hook 3: Submission Confirmation State
  const [submitted, setSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState(null);

  // Controlled input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Form validation function
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Student or visitor name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address (e.g., student@example.com).";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message field cannot be empty.";
    } else if (formData.message.trim().length < 8) {
      newErrors.message = "Message must be at least 8 characters long.";
    }

    return newErrors;
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent full page reload

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Successful submission state update
    setSubmissionData({ ...formData });
    setSubmitted(true);
    setErrors({});
    // Reset form fields
    setFormData({ name: '', email: '', message: '' });
  };

  // Reset to send another message
  const handleReset = () => {
    setSubmitted(false);
    setSubmissionData(null);
  };

  return (
    <div className="page-content contact-page">
      {/* Header Banner */}
      <section className="page-header-card">
        <div className="header-badge">Practical 2: React State & Routing</div>
        <h1 className="page-title">Get in Touch</h1>
        <p className="page-subtitle">
          Have an inquiry, project idea, or lab feedback? Send a message below.
        </p>
      </section>

      <div className="contact-container-grid">
        {/* Contact Info Sidebar */}
        <aside className="contact-info-card">
          <h2 className="section-title">Direct Contact</h2>
          <p className="contact-intro">
            Feel free to connect directly using my student contact channels:
          </p>

          <div className="contact-detail-list">
            <div className="contact-box">
              <span className="contact-icon">📧</span>
              <div>
                <strong>Email Address</strong>
                <p>haardvadodaria@gmail.com</p>
              </div>
            </div>

            <div className="contact-box">
              <span className="contact-icon">🌐</span>
              <div>
                <strong>GitHub Profile</strong>
                <p>github.com/haardvadodaria</p>
              </div>
            </div>

            <div className="contact-box">
              <span className="contact-icon">💼</span>
              <div>
                <strong>LinkedIn Network</strong>
                <p>linkedin.com/in/haardvadodaria</p>
              </div>
            </div>

            <div className="contact-box">
              <span className="contact-icon">📍</span>
              <div>
                <strong>Status</strong>
                <p>B.Tech Graduate • Active Student</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Contact Form Section */}
        <section className="contact-form-card">
          <h2 className="section-title">Send a Message</h2>

          {submitted && submissionData ? (
            <div className="confirmation-box">
              <div className="confirmation-header">
                <span className="confirmation-icon">✅</span>
                <h3>Message Sent Successfully!</h3>
              </div>
              <p className="confirmation-text">
                Thank you, <strong>{submissionData.name}</strong>! Your message has been received locally using React <code>useState</code>.
              </p>
              <div className="confirmation-summary">
                <p><strong>Registered Email:</strong> {submissionData.email}</p>
                <p><strong>Summary:</strong> "{submissionData.message}"</p>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleReset}
              >
                ✉️ Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="contact-form">
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Haard Vadodaria"
                  className={`form-input ${errors.name ? 'input-error' : ''}`}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. haardvadodaria@gmail.com"
                  className={`form-input ${errors.email ? 'input-error' : ''}`}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message Content <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your note, feedback, or inquiry here..."
                  className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                ></textarea>
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary btn-submit">
                🚀 Submit Message
              </button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}

export default Contact;
