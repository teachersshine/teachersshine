
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowDown,
  FiCheckCircle,
  FiGift,
  FiPackage,
  FiTruck,
} from "react-icons/fi";

import { useCart } from "../../context/CartContext";
import collectionPacks from "../../data/collectionPacks";

import CollectionPackCard from "../../components/collection/CollectionPackCard";

import "./Collection.css";

function Collection() {
  const { addPackToCart } = useCart();

  const [notification, setNotification] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const activePacks = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return collectionPacks.filter((pack) => {
      if (!pack.active) return false;

      const start = new Date(`${pack.startDate}T00:00:00`);
      const end = new Date(`${pack.endDate}T23:59:59`);

      return today >= start && today <= end;
    });
  }, []);

  const handleAddPack = (pack) => {
    addPackToCart(pack, 1);
    setNotification(`${pack.name} a été ajouté à votre panier.`);

    window.setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  return (
    <main className="collection-page">
      {/* NOTIFICATION */}
      {notification && (
        <div
          className="collection-notification"
          role="status"
          aria-live="polite"
        >
          <FiCheckCircle />
          <span>{notification}</span>
          <Link to="/cart">Voir le panier</Link>
        </div>
      )}

      {/* HERO */}
      <section className="collection-hero">
        <div className="collection-hero-decoration collection-decoration-one" />
        <div className="collection-hero-decoration collection-decoration-two" />

        <div className="container collection-hero-container">
          <div className="collection-hero-content">
            <span className="collection-eyebrow">
              <FiGift />
              COLLECTION SPÉCIALE · HIVER 2026
            </span>

            <h1>
              Des packs pensés
              <span> pour vos classes.</span>
            </h1>

            <p>
              Découvrez nos offres spéciales Teacher Shine :
              des produits soigneusement sélectionnés et
              des cadeaux offerts pour vous faire plaisir.
            </p>

            <a
              href="#collection-packs"
              className="collection-hero-button"
            >
              Découvrir les packs
              <FiArrowDown />
            </a>

            <div className="collection-hero-trust">
              <span>
                <FiCheckCircle />
                Offres exclusives
              </span>

              <span>
                <FiGift />
                Cadeaux offerts
              </span>
            </div>
          </div>

          <div className="collection-hero-art">
            <div className="collection-hero-image-frame">
              <img
                src={activePacks[0]?.image}
                alt="Collection spéciale Teacher Shine"
              />
            </div>

            <div className="collection-floating-card">
              <span className="collection-floating-icon">
                <FiGift />
              </span>

              <div>
                <strong>Un cadeau en plus !</strong>
                <span>Dans nos packs sélectionnés</span>
              </div>
            </div>

            <span className="collection-hero-star star-one">✦</span>
            <span className="collection-hero-star star-two">✧</span>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="collection-benefits">
        <div className="container collection-benefits-grid">
          <div className="collection-benefit">
            <span><FiGift /></span>
            <div>
              <strong>Des cadeaux offerts</strong>
              <p>Un produit supplémentaire dans chaque offre concernée.</p>
            </div>
          </div>

          <div className="collection-benefit">
            <span><FiPackage /></span>
            <div>
              <strong>Des packs pratiques</strong>
              <p>Plusieurs articles réunis dans une seule offre.</p>
            </div>
          </div>

          <div className="collection-benefit">
            <span><FiTruck /></span>
            <div>
              <strong>Livraison en Tunisie</strong>
              <p>Livraison disponible dans les 24 gouvernorats.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PACKS */}
      <section
        className="collection-packs-section"
        id="collection-packs"
      >
        <div className="container">
          <div className="collection-section-heading">
            <span className="collection-section-eyebrow">
              NOS OFFRES DU MOMENT
            </span>

            <h2>
              Découvrez nos
              <span> packs promotionnels</span>
            </h2>

            <p>
              Chaque pack a été préparé pour vous proposer
              une sélection utile avec un petit cadeau en plus.
            </p>
          </div>

          {activePacks.length > 0 ? (
            <div className="collection-packs-grid">
              {activePacks.map((pack) => (
                <CollectionPackCard
                  key={pack.id}
                  pack={pack}
                  onAddToCart={handleAddPack}
                />
              ))}
            </div>
          ) : (
            <div className="collection-no-offers">
              <FiGift />
              <h3>Nos prochaines offres arrivent bientôt !</h3>
              <p>
                Consultez notre boutique pour découvrir
                tous nos produits.
              </p>
              <Link to="/shop">Visiter la boutique</Link>
            </div>
          )}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="collection-final-cta">
        <div className="container">
          <div className="collection-final-content">
            <span>TEACHER SHINE</span>

            <h2>
              Faites briller
              <br />
              votre quotidien en classe !
            </h2>

            <p>
              Découvrez également tous nos accessoires
              et nos outils pédagogiques.
            </p>

            <Link to="/shop">
              Explorer la boutique
              <FiArrowDown />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Collection;
