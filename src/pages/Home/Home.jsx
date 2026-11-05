import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheck,
  FiChevronRight,
  FiHeart,
  FiShoppingBag,
  FiStar,
  FiTruck,
  FiZap,
  FiBookOpen,
  FiUsers,
  FiAward,
  FiPackage,
  FiMessageCircle,
  FiShield,
} from "react-icons/fi";

import {
  GiTeacher,
  GiSchoolBag,
  GiPencilRuler,
} from "react-icons/gi";

import "./Home.css";
import pointeur from "../../assets/images/products/Pointeurs.png"
import Sonnette from "../../assets/images/products/Sonnette.png"
import medailles from "../../assets/images/products/medailles.png"
import trophees from "../../assets/images/products/trophees.png"
function Home() {
  /* ==================================================
     DATA
  ================================================== */

  const categories = [
    {
      id: "teachers-tools",
      icon: <GiTeacher />,
      title: "Outils enseignants",
      description:
        "Des accessoires pratiques pour faciliter votre quotidien en classe.",
      count: "Accessoires",
    },
    {
      id: "bags",
      icon: <GiSchoolBag />,
      title: "Sacs & trousses",
      description:
        "Des solutions pratiques pour organiser vos affaires.",
      count: "Organisation",
    },
    {
      id: "educational-games",
      icon: <FiBookOpen />,
      title: "Jeux éducatifs",
      description:
        "Des activités pour apprendre autrement et avec plaisir.",
      count: "Éducation",
    },
    {
      id: "rewards",
      icon: <FiAward />,
      title: "Récompenses",
      description:
        "Des petites attentions pour encourager vos élèves.",
      count: "Motivation",
    },
  ];

const featuredProducts = [
  {
    id: 1,
    name: "Pointeur enseignant",
    price: "10.000 DT",
    category: "Outils enseignants",
    image: pointeur,
    badge: "Populaire",
  },
  {
    id: 2,
    name: "Sonnette de classe",
    price: "13.000 DT",
    category: "Outils enseignants",
    image: Sonnette,
    badge: "Nouveau",
  },
  {
    id: 3,
    name: "Medailles",
    price: "2.500 DT",
    category: "Récompenses",
    image: medailles,
    badge: "",
  },
  {
    id: 4,
    name: "Trophées",
    price: "7.000 DT",
    category: "Récompenses",
    image: trophees,
    badge: "Top vente",
  },
];

  const benefits = [
    {
      icon: <FiPackage />,
      title: "Produits sélectionnés",
      text: "Des articles utiles et pensés pour le quotidien des enseignants.",
    },
    {
      icon: <FiZap />,
      title: "Simple & pratique",
      text: "Une expérience claire pour trouver rapidement ce dont vous avez besoin.",
    },
    {
      icon: <FiTruck />,
      title: "Livraison en Tunisie",
      text: "Nous préparons votre commande avec soin pour une livraison partout en Tunisie.",
    },
    {
      icon: <FiMessageCircle />,
      title: "Commande facile",
      text: "Un parcours simple pour commander et nous contacter rapidement.",
    },
  ];

  const stats = [
    {
      icon: <FiUsers />,
      value: "Pour vous",
      label: "Pensé pour les enseignants",
    },
    {
      icon: <FiPackage />,
      value: "Sélection",
      label: "Produits utiles",
    },
    {
      icon: <FiHeart />,
      value: "Avec soin",
      label: "Chaque commande",
    },
  ];

  /* ==================================================
     RENDER
  ================================================== */

  return (
    <main className="home">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="hero">

        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="container hero-container">

          {/* LEFT */}

          <div className="hero-content">

            <div className="hero-eyebrow">
              <span className="hero-eyebrow-icon">
                <GiTeacher />
              </span>

              <span>
                L'univers des enseignants
              </span>

              <span className="hero-eyebrow-dot" />
            </div>

            <h1 className="hero-title">
              Rendez votre
              <span> quotidien en classe </span>
              plus simple.
            </h1>

            <p className="hero-description">
              Découvrez des outils, accessoires, jeux et articles
              soigneusement sélectionnés pour accompagner les enseignants
              au quotidien.
            </p>

            <div className="hero-actions">

              <Link
                to="/shop"
                className="hero-primary-button"
              >
                <span>Découvrir la boutique</span>
                <FiArrowRight />
              </Link>

              <a
                href="#categories"
                className="hero-secondary-button"
              >
                Explorer les catégories
                <FiChevronRight />
              </a>

            </div>

            {/* TRUST */}

            <div className="hero-trust">

              <div className="hero-trust-item">
                <span className="hero-trust-icon">
                  <FiCheck />
                </span>

                <span>Produits utiles</span>
              </div>

              <div className="hero-trust-item">
                <span className="hero-trust-icon">
                  <FiCheck />
                </span>

                <span>Commande simple</span>
              </div>

              <div className="hero-trust-item">
                <span className="hero-trust-icon">
                  <FiCheck />
                </span>

                <span>Livraison en Tunisie</span>
              </div>

            </div>

          </div>


          {/* RIGHT / VISUAL */}

          <div className="hero-visual">

            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />

            <div className="hero-product-stage">

              <div className="hero-stage-header">
                <div>
                  <span>Collection</span>
                  <strong>TeacherShine</strong>
                </div>

                <span className="hero-stage-badge">
                  <FiStar />
                  Favoris
                </span>
              </div>

              <div className="hero-stage-main">

                <div className="hero-stage-circle" />

                <div className="hero-stage-product">

                  <GiTeacher />

                  <span>
                    Pour les enseignants
                  </span>

                </div>

              </div>

              <div className="hero-stage-footer">

                <div className="hero-stage-footer-icon">
                  <FiShoppingBag />
                </div>

                <div>
                  <strong>
                    Des outils qui font la différence
                  </strong>

                  <span>
                    Pratiques • utiles • créatifs
                  </span>
                </div>

              </div>

            </div>


            {/* Floating card */}

            <div className="hero-floating-card hero-floating-card-left">

              <div className="floating-icon floating-icon-green">
                <FiCheck />
              </div>

              <div>
                <strong>Bien pensé</strong>
                <span>Pour la classe</span>
              </div>

            </div>


            <div className="hero-floating-card hero-floating-card-right">

              <div className="floating-icon floating-icon-yellow">
                <FiStar />
              </div>

              <div>
                <strong>Nos favoris</strong>
                <span>Très appréciés</span>
              </div>

            </div>

          </div>

        </div>


        {/* HERO BOTTOM STATS */}

        <div className="container hero-stats-container">

          <div className="hero-stats">

            {stats.map((stat) => (
              <div className="hero-stat" key={stat.label}>

                <div className="hero-stat-icon">
                  {stat.icon}
                </div>

                <div>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          CATEGORIES
      ================================================== */}

      <section
        className="section categories-section"
        id="categories"
      >

        <div className="container">

          <div className="section-heading">

            <div className="section-kicker">
              <span />
              Découvrez notre univers
              <span />
            </div>

            <h2>
              Tout commence par
              <span> la bonne idée.</span>
            </h2>

            <p>
              Parcourez nos catégories et trouvez facilement les
              articles adaptés à votre quotidien.
            </p>

          </div>


          <div className="categories-grid">

            {categories.map((category, index) => (

              <Link
                to="/shop"
                className="category-card"
                key={category.id}
              >

                <div className="category-top">

                  <span className="category-number">
                    0{index + 1}
                  </span>

                  <span className="category-arrow">
                    <FiArrowRight />
                  </span>

                </div>


                <div className="category-icon">
                  {category.icon}
                </div>


                <div className="category-content">

                  <span className="category-count">
                    {category.count}
                  </span>

                  <h3>
                    {category.title}
                  </h3>

                  <p>
                    {category.description}
                  </p>

                </div>


                <div className="category-bottom">

                  <span>
                    Découvrir
                  </span>

                  <FiArrowRight />

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          FEATURED PRODUCTS
      ================================================== */}

      <section className="section products-section">

        <div className="container">

          <div className="products-heading">

            <div>

              <div className="section-kicker section-kicker-left">
                <span />
                Sélection TeacherShine
              </div>

              <h2>
                Les produits
                <span> qu'on aime.</span>
              </h2>

              <p>
                Une sélection d'articles pratiques pour vous accompagner
                chaque jour.
              </p>

            </div>


            <Link
              to="/shop"
              className="products-view-all"
            >
              <span>Voir toute la boutique</span>
              <FiArrowRight />
            </Link>

          </div>


          <div className="products-grid">

            {featuredProducts.map((product) => (

              <article
                className="product-card"
                key={product.id}
              >

                <Link
                  to={`/product/${product.id}`}
                  className="product-image-wrapper"
                  aria-label={`Voir ${product.name}`}
                >

                  {product.badge && (
                    <span className="product-badge">
                      {product.badge}
                    </span>
                  )}


                  <button
                    type="button"
                    className="product-favorite"
                    aria-label={`Ajouter ${product.name} aux favoris`}
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                    }}
                  >
                    <FiHeart />
                  </button>


                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                    loading="lazy"
                    decoding="async"
                  />


                  <div className="product-image-overlay">

                    <span>
                      Voir le produit
                    </span>

                    <FiArrowRight />

                  </div>

                </Link>


                <div className="product-info">

                  <span className="product-category">
                    {product.category}
                  </span>

                  <Link
                    to={`/product/${product.id}`}
                    className="product-name"
                  >
                    {product.name}
                  </Link>


                  <div className="product-bottom">

                    <strong className="product-price">
                      {product.price}
                    </strong>

                    <Link
                      to={`/product/${product.id}`}
                      className="product-add"
                      aria-label={`Voir ${product.name}`}
                    >
                      <FiPlus />
                    </Link>

                  </div>

                </div>

              </article>

            ))}

          </div>


          <div className="products-mobile-cta">

            <Link
              to="/shop"
              className="outline-button"
            >
              Explorer tous les produits
              <FiArrowRight />
            </Link>

          </div>

        </div>

      </section>


      {/* ==================================================
          BRAND / EXPERIENCE SECTION
      ================================================== */}

      <section className="experience-section">

        <div className="container">

          <div className="experience">

            <div className="experience-content">

              <div className="section-kicker section-kicker-left">
                <span />
                Notre philosophie
              </div>

              <h2>
                Parce que les
                <span> petits détails </span>
                changent une journée.
              </h2>

              <p>
                TeacherShine est pensé autour d'une idée simple :
                proposer aux enseignants des produits utiles, pratiques
                et agréables à utiliser.
              </p>


              <div className="experience-list">

                <div className="experience-list-item">

                  <span>
                    <FiCheck />
                  </span>

                  <div>
                    <strong>Des produits vraiment utiles</strong>
                    <p>
                      Une sélection pensée pour votre quotidien.
                    </p>
                  </div>

                </div>


                <div className="experience-list-item">

                  <span>
                    <FiCheck />
                  </span>

                  <div>
                    <strong>Une expérience simple</strong>
                    <p>
                      Trouvez ce qu'il vous faut sans perdre de temps.
                    </p>
                  </div>

                </div>


                <div className="experience-list-item">

                  <span>
                    <FiCheck />
                  </span>

                  <div>
                    <strong>Une boutique qui évolue</strong>
                    <p>
                      De nouveaux produits et idées régulièrement.
                    </p>
                  </div>

                </div>

              </div>


              <Link
                to="/about"
                className="experience-link"
              >
                Découvrir TeacherShine
                <FiArrowRight />
              </Link>

            </div>


            <div className="experience-visual">

              <div className="experience-card experience-card-main">

                <div className="experience-card-icon">
                  <GiPencilRuler />
                </div>

                <span>
                  TeacherShine
                </span>

                <strong>
                  Créé pour
                  <br />
                  inspirer.
                </strong>

              </div>


              <div className="experience-card experience-card-small experience-card-small-one">

                <FiHeart />

                <span>
                  Avec soin
                </span>

              </div>


              <div className="experience-card experience-card-small experience-card-small-two">

                <FiZap />

                <span>
                  Avec idée
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          BENEFITS
      ================================================== */}

      <section className="section benefits-section">

        <div className="container">

          <div className="section-heading">

            <div className="section-kicker">
              <span />
              Pourquoi TeacherShine ?
              <span />
            </div>

            <h2>
              Une expérience
              <span> pensée pour vous.</span>
            </h2>

            <p>
              Chaque détail de notre boutique est pensé pour rendre
              votre expérience plus simple.
            </p>

          </div>


          <div className="benefits-grid">

            {benefits.map((benefit) => (

              <div
                className="benefit-card"
                key={benefit.title}
              >

                <div className="benefit-icon">
                  {benefit.icon}
                </div>

                <h3>
                  {benefit.title}
                </h3>

                <p>
                  {benefit.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          FINAL CTA
      ================================================== */}

      <section className="final-cta">

        <div className="container">

          <div className="final-cta-inner">

            <div className="final-cta-decoration final-cta-decoration-one" />
            <div className="final-cta-decoration final-cta-decoration-two" />


            <div className="final-cta-icon">
              <FiShoppingBag />
            </div>

            <div className="section-kicker final-kicker">
              <span />
              Commencez votre découverte
              <span />
            </div>

            <h2>
              Trouvez quelque chose
              <span> qui vous ressemble.</span>
            </h2>

            <p>
              Parcourez notre sélection et découvrez les outils,
              accessoires et idées qui peuvent faire la différence
              dans votre quotidien.
            </p>


            <Link
              to="/shop"
              className="final-cta-button"
            >
              <span>Explorer la boutique</span>
              <FiArrowRight />
            </Link>


            <div className="final-cta-trust">

              <span>
                <FiShield />
                Commande simple
              </span>

              <span>
                <FiTruck />
                Livraison en Tunisie
              </span>

              <span>
                <FiMessageCircle />
                Contact facile
              </span>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

/*
  Small local icon used by the quick-add button.
  Keeping it here avoids another import.
*/
function FiPlus() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export default Home;