
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheck,
  FiGift,
  FiShoppingBag,
  FiTag,
} from "react-icons/fi";

function formatPrice(price) {
  return `${Number(price).toFixed(3)} DT`;
}

function CollectionPackCard({ pack, onAddToCart }) {
  const [added, setAdded] = useState(false);

  const savings = Math.max(
    0,
    Number(pack.originalPrice) - Number(pack.price)
  );

  const gifts = pack.items.filter((item) => item.isGift);
  const included = pack.items.filter((item) => !item.isGift);

  const handleAdd = () => {
    onAddToCart(pack);
    setAdded(true);

    window.setTimeout(() => {
      setAdded(false);
    }, 2200);
  };

  return (
    <article className="collection-pack-card">
      <div className="collection-pack-visual">
        <img
          src={pack.image}
          alt={pack.name}
          loading="lazy"
          decoding="async"
        />

        <span className="collection-pack-label">
          {pack.badge}
        </span>

        <span className="collection-pack-number">
          OFFRE EXCLUSIVE
        </span>
      </div>

      <div className="collection-pack-body">
        <div className="collection-pack-heading">
          <div>
            <span className="collection-pack-kicker">
              TEACHER SHINE COLLECTION
            </span>

            <h3>{pack.name}</h3>
            <p>{pack.subtitle}</p>
          </div>

          <div className="collection-pack-gift-icon">
            <FiGift />
          </div>
        </div>

        <p className="collection-pack-description">
          {pack.description}
        </p>

        <div className="collection-pack-items">
          <div className="collection-pack-items-title">
            <FiShoppingBag />
            <strong>Dans votre pack</strong>
          </div>

          {included.map((item) => (
            <div
              className="collection-pack-item"
              key={item.product.id}
            >
              <img
                src={item.product.image}
                alt={item.product.name}
              />

              <div className="collection-pack-item-info">
                <strong>{item.product.name}</strong>
                <span>Quantité : {item.quantity}</span>
              </div>

              <span className="collection-pack-included">
                <FiCheck />
                Inclus
              </span>
            </div>
          ))}

          {gifts.map((item) => (
            <div
              className="collection-pack-item collection-pack-item--gift"
              key={item.product.id}
            >
              <img
                src={item.product.image}
                alt={item.product.name}
              />

              <div className="collection-pack-item-info">
                <strong>{item.product.name}</strong>
                <span>Quantité : {item.quantity}</span>
              </div>

              <span className="collection-pack-gift">
                <FiGift />
                GRATUIT
              </span>
            </div>
          ))}
        </div>

        <div className="collection-pack-pricing">
          <div>
            <span className="collection-pack-price-label">
              Prix du pack
            </span>

            <div className="collection-pack-price">
              {formatPrice(pack.price)}
            </div>

            {savings > 0 && (
              <span className="collection-pack-old-price">
                Au lieu de {formatPrice(pack.originalPrice)}
              </span>
            )}
          </div>

          {savings > 0 && (
            <div className="collection-pack-saving">
              <FiTag />
              <span>
                Économisez
                <strong>{formatPrice(savings)}</strong>
              </span>
            </div>
          )}
        </div>

        <button
          type="button"
          className={`collection-pack-button ${
            added ? "is-added" : ""
          }`}
          onClick={handleAdd}
        >
          {added ? (
            <>
              <FiCheck />
              Pack ajouté au panier
            </>
          ) : (
            <>
              Ajouter le pack au panier
              <FiArrowRight />
            </>
          )}
        </button>

        <Link
          to="/cart"
          className="collection-pack-cart-link"
        >
          Voir mon panier
        </Link>
      </div>
    </article>
  );
}

export default CollectionPackCard;
