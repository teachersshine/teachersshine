
import { Link, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiGift,
  FiPackage,
  FiShoppingBag,
  FiTrash2,
  FiTruck,
} from "react-icons/fi";

import { useCart } from "../../context/CartContext";
import "./Cart.css";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    subtotal,
    totalItems,
  } = useCart();

  const navigate = useNavigate();

  const deliveryFee = cartItems.length > 0 ? 9 : 0;
  const total = subtotal + deliveryFee;

  const formatPrice = (price) =>
    `${Number(price || 0).toFixed(3)} DT`;

  const isPack = (item) => item.type === "pack";

  const handleOrder = () => {
    if (!cartItems.length) return;
    navigate("/commander");
  };

  const handleDecrease = (item) => {
    updateQuantity(item.id, item.quantity - 1);
  };

  const handleIncrease = (item) => {
    updateQuantity(item.id, item.quantity + 1);
  };

  if (cartItems.length === 0) {
    return (
      <section className="cart-page">
        <div className="container">
          <div className="cart-empty">
            <div className="cart-empty-icon">
              <FiShoppingBag />
            </div>

            <span className="cart-empty-eyebrow">
              TEACHER SHINE
            </span>

            <h1>Votre panier est vide</h1>

            <p>
              Découvrez nos produits et nos offres spéciales
              pour trouver les accessoires parfaits pour votre
              quotidien d'enseignant.
            </p>

            <div className="cart-empty-actions">
              <Link to="/shop" className="cart-empty-button">
                Découvrir la boutique
                <FiArrowRight />
              </Link>

              <Link
                to="/collection"
                className="cart-empty-collection"
              >
                Découvrir les packs
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <div className="container">
        {/* HEADER */}
        <header className="cart-header">
          <div>
            <span className="cart-eyebrow">
              VOTRE SÉLECTION TEACHER SHINE
            </span>

            <h1>Mon panier</h1>

            <p>
              {cartItems.length} sélection
              {cartItems.length > 1 ? "s" : ""} · {totalItems} article
              {totalItems > 1 ? "s" : ""}
            </p>
          </div>

          <Link to="/shop" className="continue-shopping">
            <FiArrowLeft />
            Continuer mes achats
          </Link>
        </header>

        <div className="cart-layout">
          {/* LISTE DES ARTICLES */}
          <div className="cart-products">
            {cartItems.map((item) => {
              const pack = isPack(item);

              return (
                <article
                  className={`cart-item ${
                    pack ? "cart-item--pack" : ""
                  }`}
                  key={`${item.type || "product"}-${item.id}`}
                >
                  {/* IMAGE */}
                  <div className="cart-item-image">
                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    {pack && (
                      <span className="cart-pack-image-badge">
                        PACK
                      </span>
                    )}
                  </div>

                  {/* INFORMATIONS */}
                  <div className="cart-item-info">
                    <span className="cart-item-category">
                      {pack
                        ? "COLLECTION PROMOTIONNELLE"
                        : item.category}
                    </span>

                    <h2 className="cart-item-name">
                      {item.name}
                    </h2>

                    {pack ? (
                      <>
                        <p className="cart-pack-description">
                          {item.description}
                        </p>

                        <div className="cart-pack-content">
                          <div className="cart-pack-content-title">
                            <FiPackage />
                            <strong>Contenu de votre pack</strong>
                          </div>

                          {item.items?.map((packItem, index) => (
                            <div
                              className="cart-pack-product"
                              key={`${packItem.product.id}-${index}`}
                            >
                              <img
                                src={packItem.product.image}
                                alt={packItem.product.name}
                              />

                              <div className="cart-pack-product-info">
                                <strong>
                                  {packItem.product.name}
                                </strong>

                                <span>
                                  Quantité : {packItem.quantity}
                                </span>
                              </div>

                              {packItem.isGift ? (
                                <span className="cart-gift-badge">
                                  <FiGift />
                                  OFFERT
                                </span>
                              ) : (
                                <span className="cart-included-badge">
                                  Inclus
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </>
                    ) : null}

                    {/* PRIX */}
                    <div className="cart-item-pricing">
                      <strong className="cart-item-price">
                        {formatPrice(item.price)}
                      </strong>

                      {pack &&
                        Number(item.originalPrice) >
                          Number(item.price) && (
                          <span className="cart-item-original-price">
                            {formatPrice(item.originalPrice)}
                          </span>
                        )}
                    </div>

                    {/* ACTIONS */}
                    <div className="cart-item-actions">
                      <div className="quantity-control">
                        <button
                          type="button"
                          onClick={() => handleDecrease(item)}
                          aria-label={`Diminuer la quantité de ${item.name}`}
                        >
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          type="button"
                          onClick={() => handleIncrease(item)}
                          aria-label={`Augmenter la quantité de ${item.name}`}
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        className="remove-item"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <FiTrash2 />
                        Supprimer
                      </button>
                    </div>
                  </div>

                  {/* TOTAL LIGNE */}
                  <div className="cart-item-total">
                    {formatPrice(
                      Number(item.price) * Number(item.quantity)
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {/* RÉSUMÉ */}
          <aside className="cart-summary">
            <div className="cart-summary-card">
              <div className="cart-summary-heading">
                <div>
                  <span>VOTRE COMMANDE</span>
                  <h2>Résumé</h2>
                </div>

                <FiShoppingBag />
              </div>

              <div className="summary-line">
                <span>Sous-total ({totalItems} article{totalItems > 1 ? "s" : ""})</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>

              <div className="summary-line">
                <span>
                  <FiTruck />
                  Livraison
                </span>
                <strong>{formatPrice(deliveryFee)}</strong>
              </div>

              <div className="summary-divider" />

              <div className="summary-total">
                <span>Total à payer</span>
                <strong>{formatPrice(total)}</strong>
              </div>

              <button
                type="button"
                className="checkout-button"
                onClick={handleOrder}
              >
                Passer ma commande
                <FiArrowRight />
              </button>

              <div className="checkout-security">
                <span><FiGift /></span>
                <p>Les cadeaux de vos packs sont inclus gratuitement.</p>
              </div>

              <div className="checkout-security">
                <span><FiTruck /></span>
                <p>Livraison partout en Tunisie : 9 DT.</p>
              </div>

              <Link
                to="/collection"
                className="cart-summary-collection"
              >
                <FiGift />
                Découvrir les autres packs
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Cart;
