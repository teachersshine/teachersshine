
import { useCallback, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FiSearch,
  FiShoppingBag,
  FiMenu,
  FiX,
  FiArrowRight,
  FiGift,
} from "react-icons/fi";

import { useCart } from "../../context/CartContext";
import brandLogo from "../../assets/logo/logo final.png";
import "./Navbar.css";

const NAVIGATION_LINKS = [
  { label: "Accueil", path: "/" },
  { label: "Boutique", path: "/shop" },
  { label: "À propos", path: "/about" },
  { label: "Commander", path: "/commander" },
  { label: "Contact", path: "/contact" },
];
const isWinterCampaignActive = () => {
  const now = new Date();
  const month = now.getMonth();
  const day = now.getDate();

  const isSeason =
    (month === 10 && day >= 10) ||
    month === 11 ||
    (month === 0 && day <= 10);

  const isPreview =
    new URLSearchParams(window.location.search)
      .get("winterPreview") === "1";

  return isSeason || isPreview;
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const isWinterCampaign = isWinterCampaignActive();

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((previous) => !previous);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen, closeMenu]);

  // Bloquer le scroll derrière le menu sur mobile.
  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const cartLabel = `Panier, ${totalItems} article${
    totalItems > 1 ? "s" : ""
  }`;

  const navLinkClass = ({ isActive }) =>
    `nav-link${isActive ? " active" : ""}`;

  const mobileLinkClass = ({ isActive }) =>
    `mobile-nav-link${isActive ? " active" : ""}`;

  return (
    <header className="navbar">
      {/* Barre principale */}
      <div className="navbar-main">
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-brand"
            onClick={closeMenu}
            aria-label="Teacher Shine - Accueil"
          >
            <img
              src={brandLogo}
              alt="Teacher Shine"
              className="navbar-brand-logo"
            />

            <div className="navbar-brand-text">
              <span className="navbar-brand-name">
                Teacher Shine
              </span>
              <span className="navbar-brand-tagline">
                Outils pour enseignants
              </span>
            </div>
          </Link>

          {/* Navigation desktop */}
          <nav
            className="navbar-menu"
            aria-label="Navigation principale"
          >
            {NAVIGATION_LINKS.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                className={navLinkClass}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="navbar-actions">
            <button
              type="button"
              className="navbar-action-button navbar-search-button"
              aria-label="Rechercher"
              onClick={() => {
                window.dispatchEvent(
                  new CustomEvent("teachershine:open-search")
                );
              }}
            >
              <FiSearch aria-hidden="true" />
            </button>

            <Link
              to="/cart"
              className="navbar-cart"
              aria-label={cartLabel}
              onClick={closeMenu}
            >
              <FiShoppingBag
                className="navbar-cart-icon"
                aria-hidden="true"
              />

              {totalItems > 0 && (
                <span className="cart-count" aria-hidden="true">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>

            <button
              type="button"
              className={`mobile-menu-button${
                isMenuOpen ? " open" : ""
              }`}
              onClick={toggleMenu}
              aria-label={
                isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? (
                <FiX aria-hidden="true" />
              ) : (
                <FiMenu aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Bandeau d'information */}
      
{/* Bandeau saisonnier et information */}
<div
  className={`navbar-order-notice ${
    isWinterCampaign ? "winter-campaign" : ""
  }`}
>
  {isWinterCampaign && (
    <div className="winter-campaign-content">
      <div className="winter-campaign-icon">
        <FiGift aria-hidden="true" />
      </div>

      <div className="winter-campaign-copy">
        <span className="winter-campaign-eyebrow">
          WINTER COLLECTION
        </span>

        <p className="winter-campaign-title">
          L'hiver arrive chez Teacher Shine !
        </p>

        <p className="winter-campaign-description">
          Découvrez notre sélection pour rendre votre
          quotidien en classe encore plus spécial.
        </p>
      </div>

      <Link
        to="/collection"
        className="winter-campaign-link"
        onClick={closeMenu}
      >
        Découvrir la collection
        <FiArrowRight aria-hidden="true" />
      </Link>
    </div>
  )}

  
  </div>

      {/* Fond sombre du menu mobile */}
      <button
        type="button"
        className={`mobile-menu-overlay${
          isMenuOpen ? " visible" : ""
        }`}
        onClick={closeMenu}
        aria-label="Fermer le menu"
        aria-hidden={!isMenuOpen}
        tabIndex={isMenuOpen ? 0 : -1}
      />

      {/* Menu latéral mobile */}
      <nav
        id="mobile-navigation"
        className={`mobile-menu${isMenuOpen ? " open" : ""}`}
        aria-label="Navigation mobile"
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
      >
        <div className="mobile-menu-header">
          <div className="mobile-menu-brand">
            <img
              src={brandLogo}
              alt=""
              className="mobile-menu-logo"
            />

            <div className="mobile-menu-brand-text">
              <strong>Teacher Shine</strong>
              <span>Outils pour enseignants</span>
            </div>
          </div>

          <button
            type="button"
            className="mobile-menu-close"
            onClick={closeMenu}
            aria-label="Fermer le menu"
          >
            <FiX aria-hidden="true" />
          </button>
        </div>

        <div className="mobile-menu-intro">
          <span className="mobile-menu-eyebrow">
            BIENVENUE CHEZ TEACHER SHINE
          </span>
          <p>
            Tout pour rendre votre quotidien d'enseignant plus
            simple et plus créatif.
          </p>
        </div>

        <div className="mobile-menu-links">
          {NAVIGATION_LINKS.map(({ label, path }, index) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={mobileLinkClass}
              onClick={closeMenu}
            >
              <span className="mobile-nav-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="mobile-nav-label">{label}</span>

              <FiArrowRight
                className="mobile-nav-arrow"
                aria-hidden="true"
              />
            </NavLink>
          ))}

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `mobile-nav-link mobile-cart-link${
                isActive ? " active" : ""
              }`
            }
            onClick={closeMenu}
          >
            <span className="mobile-nav-number">
              <FiShoppingBag aria-hidden="true" />
            </span>

            <span className="mobile-nav-label">Mon panier</span>

            {totalItems > 0 && (
              <span className="mobile-cart-count">
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            )}

            <FiArrowRight
              className="mobile-nav-arrow"
              aria-hidden="true"
            />
          </NavLink>
        </div>

        <div className="mobile-menu-footer">
          <div className="mobile-menu-footer-copy">
            <strong>Besoin d'aide ?</strong>
            <p>Nous sommes là pour vous accompagner.</p>
          </div>

          <Link
            to="/contact"
            className="mobile-contact-button"
            onClick={closeMenu}
          >
            Nous contacter
            <FiArrowRight aria-hidden="true" />
          </Link>

          <span className="mobile-menu-signature">
            TEACHER SHINE · POUR LES ENSEIGNANTS
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
