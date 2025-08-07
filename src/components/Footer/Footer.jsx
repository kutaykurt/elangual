import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  const [form, setForm] = useState({ email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier könnte man später E-Mail-Versand oder API integrieren
    setSubmitted(true);
    setForm({ email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000); // Meldung nach 3 Sek. ausblenden
  };

  return (
    <footer className="Footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">E-Langual</h1>
          <p>
            Dein Begleiter für interaktives Sprachenlernen. Entdecke neue
            Vokabeln in verschiedenen Sprachen!
          </p>
        </div>

        <div className="footer-section links">
          <h2>Navigation</h2>
          <ul>
            <li>
              <Link to="/vocabulary">Vocabularies</Link>
            </li>
            <li>
              <Link to="/myvocabularies">My Library</Link>
            </li>
            <li>
              <Link to="/myexams">My Exams</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section contact-form">
          <h2>Kontakt</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Deine Email-Adresse..."
              className="text-input"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Deine Nachricht..."
              className="text-input"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn">
              ✉️ Senden
            </button>
            {submitted && (
              <p className="success-message">Danke für deine Nachricht!</p>
            )}
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} E-Langual | Designed by Kutay Kurt
      </div>
    </footer>
  );
};

export default Footer;
