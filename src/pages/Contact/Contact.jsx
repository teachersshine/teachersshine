import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiArrowUpRight,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import "./Contact.css";

const EMAILJS_SERVICE_ID = "service_98alejb";
const EMAILJS_TEMPLATE_ID = "template_2qg4sph";
const EMAILJS_PUBLIC_KEY = "0_b0O1tBvSy1FhNmm";

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    if (status) {
      setStatus("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus("");

    const templateParams = {
      from_name: formData.name.trim(),
      from_email: formData.email.trim(),
      subject:
        formData.subject.trim() ||
        "Nouveau message depuis le site Teacher Shine",
      message: formData.message.trim(),
      sent_at: new Date().toLocaleString("fr-FR", {
        dateStyle: "short",
        timeStyle: "short",
      }),
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setFormData(initialFormData);
      setStatus("success");
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="ts-contact-page">
      {/* Bannière d'introduction */}
      <section className="ts-contact-hero">
        <div className="ts-contact-hero-decoration ts-contact-decoration-one" />
        <div className="ts-contact-hero-decoration ts-contact-decoration-two" />

        <div className="ts-contact-container ts-contact-hero-content">
          <span className="ts-contact-eyebrow">
            <FiMail aria-hidden="true" />
            RESTONS EN CONTACT
          </span>

          <h1>
            Parlons de vos <span>projets</span>
          </h1>

          <p>
            Une question, une suggestion ou besoin d'informations sur nos
            produits ? Notre équipe Teacher Shine est là pour vous répondre.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="ts-contact-main">
        <div className="ts-contact-container ts-contact-layout">
          {/* Informations de contact */}
          <aside className="ts-contact-sidebar">
            <div className="ts-contact-sidebar-heading">
              <span className="ts-contact-section-label">
                NOUS CONTACTER
              </span>

              <h2>
                Nous sommes à votre <span>écoute.</span>
              </h2>

              <p>
                Choisissez le moyen de contact qui vous convient. Nous serons
                ravis de vous accompagner.
              </p>
            </div>

            <div className="ts-contact-info-list">
              <a
                className="ts-contact-info-card"
                href="tel:+21626900751"
              >
                <span className="ts-contact-info-icon">
                  <FiPhone aria-hidden="true" />
                </span>

                <span className="ts-contact-info-text">
                  <span className="ts-contact-info-label">Téléphone</span>
                  <strong>+216 26 900 751</strong>
                  <span className="ts-contact-info-hint">
                    Appelez-nous pour vos questions
                  </span>
                </span>

                <FiArrowUpRight
                  className="ts-contact-info-arrow"
                  aria-hidden="true"
                />
              </a>

              <a
                className="ts-contact-info-card"
                href="mailto:teacher.shine@gmail.com"
              >
                <span className="ts-contact-info-icon">
                  <FiMail aria-hidden="true" />
                </span>

                <span className="ts-contact-info-text">
                  <span className="ts-contact-info-label">E-mail</span>
                  <strong>teachersshine2026@gmail.com</strong>
                  <span className="ts-contact-info-hint">
                    Écrivez-nous à tout moment
                  </span>
                </span>

                <FiArrowUpRight
                  className="ts-contact-info-arrow"
                  aria-hidden="true"
                />
              </a>

              <div className="ts-contact-info-card ts-contact-info-static">
                <span className="ts-contact-info-icon">
                  <FiMapPin aria-hidden="true" />
                </span>

                <span className="ts-contact-info-text">
                  <span className="ts-contact-info-label">Adresse</span>
                  <strong>Route de Mahdia, 8 km</strong>
                  <span className="ts-contact-info-hint">Sfax, Tunisie</span>
                </span>
              </div>

              <div className="ts-contact-info-card ts-contact-info-static">
                <span className="ts-contact-info-icon">
                  <FiClock aria-hidden="true" />
                </span>

                <span className="ts-contact-info-text">
                  <span className="ts-contact-info-label">Disponibilité</span>
                  <strong>À votre écoute</strong>
                  <span className="ts-contact-info-hint">
                    Nous vous répondrons dès que possible.
                  </span>
                </span>
              </div>
            </div>

            <div className="ts-contact-social">
              <p>Retrouvez Teacher Shine sur les réseaux sociaux</p>

              <div className="ts-contact-social-links">
                <a
                  href="https://www.facebook.com/profile.php?id=61574699244368"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Teacher Shine sur Facebook"
                >
                  <FaFacebookF aria-hidden="true" />
                </a>

                <a
                  href="https://www.instagram.com/for.teachers2026/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Teacher Shine sur Instagram"
                >
                  <FaInstagram aria-hidden="true" />
                </a>
              </div>
            </div>
          </aside>

          {/* Formulaire */}
          <section className="ts-contact-form-card">
            <div className="ts-contact-form-heading">
              <span className="ts-contact-section-label">
                FORMULAIRE DE CONTACT
              </span>

              <h2>Envoyez-nous un message</h2>

              <p>
                Remplissez les champs ci-dessous. Votre message sera transmis
                à notre équipe par e-mail.
              </p>
            </div>

            <form
              className="ts-contact-form"
              onSubmit={handleSubmit}
            >
              <div className="ts-contact-form-row">
                <div className="ts-contact-field">
                  <label htmlFor="contact-name">
                    Nom complet <span>*</span>
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Votre nom complet"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    maxLength={100}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="ts-contact-field">
                  <label htmlFor="contact-email">
                    Adresse e-mail <span>*</span>
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="exemple@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    maxLength={254}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="ts-contact-field">
                <label htmlFor="contact-subject">
                  Sujet <span className="ts-contact-optional">(facultatif)</span>
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="Objet de votre message"
                  value={formData.subject}
                  onChange={handleChange}
                  maxLength={150}
                  disabled={isSubmitting}
                />
              </div>

              <div className="ts-contact-field">
                <label htmlFor="contact-message">
                  Votre message <span>*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Expliquez-nous comment nous pouvons vous aider..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  maxLength={5000}
                  required
                  disabled={isSubmitting}
                />

                <span className="ts-contact-character-count">
                  {formData.message.length}/5000 caractères
                </span>
              </div>

              {status === "success" && (
                <div
                  className="ts-contact-status ts-contact-status-success"
                  role="status"
                  aria-live="polite"
                >
                  <FiCheckCircle aria-hidden="true" />
                  <p>
                    Votre message a été envoyé avec succès. Merci d'avoir
                    contacté Teacher Shine !
                  </p>
                </div>
              )}

              {status === "error" && (
                <div
                  className="ts-contact-status ts-contact-status-error"
                  role="alert"
                  aria-live="assertive"
                >
                  <FiAlertCircle aria-hidden="true" />
                  <p>
                    Une erreur est survenue lors de l'envoi. Veuillez
                    réessayer dans quelques instants.
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="ts-contact-submit"
                disabled={isSubmitting}
              >
                <span>
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </span>

                <FiSend
                  className={isSubmitting ? "ts-contact-send-loading" : ""}
                  aria-hidden="true"
                />
              </button>

              <p className="ts-contact-form-note">
                <span>*</span> Les champs marqués d'un astérisque sont
                obligatoires.
              </p>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Contact;