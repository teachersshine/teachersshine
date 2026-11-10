
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const CartContext = createContext(null);

const CART_STORAGE_KEY = "teachershine_cart";

const normalizeCart = (items) => {
  if (!Array.isArray(items)) return [];

  return items.filter(
    (item) =>
      item &&
      item.id !== undefined &&
      item.id !== null &&
      Number(item.quantity) > 0
  );
};

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);

      return savedCart
        ? normalizeCart(JSON.parse(savedCart))
        : [];
    } catch (error) {
      console.error("Erreur de lecture du panier :", error);
      return [];
    }
  });

  // Sauvegarde automatique
  useEffect(() => {
    try {
      localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(cartItems)
      );
    } catch (error) {
      console.error("Erreur de sauvegarde du panier :", error);
    }
  }, [cartItems]);

  // Ajouter un produit classique
  const addToCart = (product, quantity = 1) => {
    const safeQuantity = Math.max(1, Number(quantity) || 1);

    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) =>
          String(item.id) === String(product.id) &&
          item.type !== "pack"
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item === existingItem
            ? {
                ...item,
                quantity: Number(item.quantity) + safeQuantity,
              }
            : item
        );
      }

      return [
        ...currentItems,
        {
          ...product,
          type: "product",
          quantity: safeQuantity,
        },
      ];
    });
  };

  // Ajouter un pack promotionnel
  const addPackToCart = (pack, quantity = 1) => {
    if (!pack || !pack.id || !Array.isArray(pack.items)) {
      console.error("Pack invalide :", pack);
      return;
    }

    const safeQuantity = Math.max(1, Number(quantity) || 1);

    const packCartItem = {
      id: pack.id,
      type: "pack",
      name: pack.name,
      category: "Collection promotionnelle",
      description: pack.description || "",
      image: pack.image,
      price: Number(pack.price),
      originalPrice: Number(pack.originalPrice || pack.price),
      badge: pack.badge || "OFFRE SPÉCIALE",
      items: pack.items.map((item) => ({
        product: {
          id: item.product.id,
          name: item.product.name,
          image: item.product.image,
          price: Number(item.product.price),
        },
        quantity: Number(item.quantity) || 1,
        isGift: Boolean(item.isGift),
      })),
      quantity: safeQuantity,
    };

    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) =>
          item.type === "pack" &&
          String(item.id) === String(pack.id)
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item === existingItem
            ? {
                ...item,
                quantity: Number(item.quantity) + safeQuantity,
              }
            : item
        );
      }

      return [...currentItems, packCartItem];
    });
  };

  // Supprimer un article ou un pack
  const removeFromCart = (productId) => {
    setCartItems((currentItems) =>
      currentItems.filter(
        (item) => String(item.id) !== String(productId)
      )
    );
  };

  // Modifier la quantité
  const updateQuantity = (productId, quantity) => {
    const safeQuantity = Number(quantity);

    if (!Number.isFinite(safeQuantity) || safeQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        String(item.id) === String(productId)
          ? {
              ...item,
              quantity: safeQuantity,
            }
          : item
      )
    );
  };

  // Vider le panier
  const clearCart = () => {
    setCartItems([]);
  };

  // Nombre total de lignes / unités commandées
  // Un pack compte comme un seul article, quelle que soit sa composition.
  const totalItems = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + Number(item.quantity || 0),
        0
      ),
    [cartItems]
  );

  // Sous-total : prix du pack, et non somme de ses composants.
  const subtotal = useMemo(
    () =>
      cartItems.reduce(
        (total, item) =>
          total +
          Number(item.price || 0) *
            Number(item.quantity || 0),
        0
      ),
    [cartItems]
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        addPackToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart doit être utilisé à l'intérieur de CartProvider"
    );
  }

  return context;
}
