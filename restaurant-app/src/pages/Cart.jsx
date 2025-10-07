"use client"

import { useState } from "react"
import { useCart } from "../context/CartContext"

const BRAND_RED = "#ff6b6b"
const BRAND_ORANGE = "#ffa726"
const BRAND_YELLOW = "#ffeb3b"
const LIGHT_BG = "#f8fafc"
const DARK_BG = "#1e293b"
const ACCENT_PURPLE = "#8b5cf6"
const ACCENT_TEAL = "#14b8a6"

// Images par défaut pour les plats (vous pouvez les remplacer par vos vraies images)
const getItemImage = (itemName) => {
  const imageMap = {
    // Pizza
    "Margherita Pizza": "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&q=80",
    "Pepperoni Pizza": "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
    Pizza: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&q=80",

    // Burgers
    "Classic Burger": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80",
    Cheeseburger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
    Burger: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80",

    // Desserts
    "Chocolate Cake": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80",
    Tiramisu: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80",
    "Ice Cream": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80",

    // Beverages
    Coffee: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
    Tea: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80",
    Juice: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&q=80",

    // Default
    default: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&q=80",
  }

  // Recherche exacte d'abord
  if (imageMap[itemName]) return imageMap[itemName]

  // Recherche par mots-clés
  const lowerName = itemName.toLowerCase()
  if (lowerName.includes("pizza")) return imageMap["Pizza"]
  if (lowerName.includes("burger")) return imageMap["Burger"]
  if (lowerName.includes("cake") || lowerName.includes("dessert")) return imageMap["Chocolate Cake"]
  if (lowerName.includes("coffee")) return imageMap["Coffee"]
  if (lowerName.includes("tea")) return imageMap["Tea"]

  return imageMap["default"]
}

function Cart() {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [couponCode, setCouponCode] = useState("")
  const [discount, setDiscount] = useState(0)

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const deliveryFee = subtotal > 50 ? 0 : 5.99
  const discountAmount = (subtotal * discount) / 100
  const totalPrice = subtotal + deliveryFee - discountAmount

  const applyCoupon = () => {
    const validCoupons = {
      WELCOME10: 10,
      FOODIE15: 15,
      SAVE20: 20,
    }

    if (validCoupons[couponCode.toUpperCase()]) {
      setDiscount(validCoupons[couponCode.toUpperCase()])
    } else {
      alert("Code promo invalide!")
    }
  }

  const handleCheckout = async () => {
    setIsCheckingOut(true)
    // Simulation d'une commande
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsCheckingOut(false)
    setOrderPlaced(true)
    setTimeout(() => {
      clearCart()
      setOrderPlaced(false)
    }, 3000)
  }

  if (orderPlaced) {
    return (
      <div style={styles.successContainer}>
        <div style={styles.successAnimation}>
          <div style={styles.successIcon}>✅</div>
          <div style={styles.successPulse}></div>
        </div>
        <h2 style={styles.successTitle}>Commande confirmée !</h2>
        <p style={styles.successText}>Votre commande sera prête dans 25-30 minutes</p>
        <div style={styles.orderNumber}>Commande #FD{Math.floor(Math.random() * 1000) + 1000}</div>
      </div>
    )
  }

  if (cartItems.length === 0) {
    return (
      <div style={styles.emptyContainer}>
        <div style={styles.emptyAnimation}>
          <div style={styles.emptyIcon}>🛒</div>
          <div style={styles.emptyPulse}></div>
        </div>
        <h2 style={styles.emptyTitle}>Votre panier est vide</h2>
        <p style={styles.emptySubtitle}>Découvrez nos délicieux plats et commencez votre commande !</p>
        <button style={styles.shopButton}>Voir le menu</button>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      {/* En-tête amélioré */}
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <h1 style={styles.title}>
            <span style={styles.titleIcon}>🛒</span>
            Votre Panier
          </h1>
          <div style={styles.headerStats}>
            <div style={styles.itemCount}>
              {cartItems.length} {cartItems.length === 1 ? "article" : "articles"}
            </div>
            <div style={styles.estimatedTime}>
              <span style={styles.timeIcon}>⏱️</span>
              25-30 min
            </div>
          </div>
        </div>
        <button onClick={clearCart} style={styles.clearButton}>
          Vider le panier
        </button>
      </div>

      <div style={styles.mainContent}>
        {/* Liste des articles */}
        <div style={styles.itemsSection}>
          {cartItems.map((item, index) => (
            <div
              key={item.id}
              className="cart-item"
              style={{
                ...styles.cartItem,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div style={styles.itemImage}>
                <img src={getItemImage(item.name) || "/placeholder.svg"} alt={item.name} style={styles.image} />
                <div style={styles.imageOverlay}>
                  <span style={styles.categoryBadge}>{item.category || "Plat"}</span>
                </div>
              </div>

              <div style={styles.itemDetails}>
                <div style={styles.itemHeader}>
                  <h3 style={styles.itemName}>{item.name}</h3>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={styles.removeButton}
                    title="Supprimer l'article"
                  >
                    🗑️
                  </button>
                </div>

                <p style={styles.itemDescription}>{item.description || "Délicieux plat préparé avec soin"}</p>

                <div style={styles.itemFooter}>
                  <div style={styles.quantityControls}>
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      style={styles.quantityButton}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span style={styles.quantityDisplay}>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={styles.quantityButton}>
                      +
                    </button>
                  </div>

                  <div style={styles.priceSection}>
                    <div style={styles.unitPrice}>{item.price.toFixed(2)}€/unité</div>
                    <div style={styles.totalItemPrice}>{(item.price * item.quantity).toFixed(2)}€</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Résumé de commande */}
        <div style={styles.summarySection}>
          <div style={styles.summaryCard}>
            <h3 style={styles.summaryTitle}>
              <span style={styles.summaryIcon}>📋</span>
              Résumé de commande
            </h3>

            {/* Code promo */}
            <div style={styles.couponSection}>
              <h4 style={styles.couponTitle}>Code promo</h4>
              <div style={styles.couponInput}>
                <input
                  type="text"
                  placeholder="WELCOME10, FOODIE15..."
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  style={styles.couponField}
                />
                <button onClick={applyCoupon} style={styles.couponButton}>
                  Appliquer
                </button>
              </div>
              {discount > 0 && <div style={styles.couponSuccess}>✅ Réduction de {discount}% appliquée !</div>}
            </div>

            {/* Détails de prix */}
            <div style={styles.priceBreakdown}>
              <div style={styles.priceRow}>
                <span>Sous-total</span>
                <span>{subtotal.toFixed(2)}€</span>
              </div>

              {discount > 0 && (
                <div style={styles.priceRow}>
                  <span style={styles.discountLabel}>Réduction ({discount}%)</span>
                  <span style={styles.discountValue}>-{discountAmount.toFixed(2)}€</span>
                </div>
              )}

              <div style={styles.priceRow}>
                <span>Livraison</span>
                <span style={deliveryFee === 0 ? styles.freeDelivery : {}}>
                  {deliveryFee === 0 ? "Gratuite" : `${deliveryFee.toFixed(2)}€`}
                </span>
              </div>

              {subtotal <= 50 && <div style={styles.deliveryTip}>💡 Livraison gratuite dès 50€ d'achat</div>}
            </div>

            <div style={styles.totalSection}>
              <div style={styles.totalRow}>
                <span style={styles.totalLabel}>Total</span>
                <span style={styles.totalValue}>{totalPrice.toFixed(2)}€</span>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                style={{
                  ...styles.checkoutButton,
                  ...(isCheckingOut ? styles.checkoutButtonLoading : {}),
                }}
              >
                {isCheckingOut ? (
                  <>
                    <span style={styles.loadingSpinner}></span>
                    Traitement...
                  </>
                ) : (
                  <>
                    <span style={styles.checkoutIcon}>🚀</span>
                    Commander maintenant
                  </>
                )}
              </button>

              <div style={styles.securityBadges}>
                <span style={styles.securityBadge}>🔒 Paiement sécurisé</span>
                <span style={styles.securityBadge}>⚡ Livraison rapide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
    minHeight: "100vh",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    padding: "2rem",
    background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
  },

  // En-tête
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "3rem",
    maxWidth: "1200px",
    margin: "0 auto 3rem auto",
    gap: "2rem",
  },

  headerLeft: {},

  title: {
    margin: "0 0 1rem 0",
    fontSize: "3rem",
    fontWeight: "900",
    color: DARK_BG,
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    lineHeight: "1.1",
    background: `linear-gradient(135deg, ${BRAND_RED}, ${ACCENT_PURPLE})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  titleIcon: {
    fontSize: "2.5rem",
    padding: "16px",
    background: `linear-gradient(135deg, ${BRAND_RED}, ${ACCENT_PURPLE})`,
    borderRadius: "20px",
    color: "#ffffff",
    boxShadow: "0 12px 40px rgba(255, 107, 107, 0.4)",
    backdropFilter: "blur(10px)",
  },

  headerStats: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },

  itemCount: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    color: BRAND_RED,
    padding: "0.75rem 1.5rem",
    borderRadius: "30px",
    fontSize: "0.875rem",
    fontWeight: "600",
    border: `2px solid rgba(255, 107, 107, 0.2)`,
    boxShadow: "0 8px 32px rgba(255, 107, 107, 0.2)",
    backdropFilter: "blur(10px)",
  },

  estimatedTime: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    backgroundColor: `rgba(255, 255, 255, 0.9)`,
    color: "#f59e0b",
    padding: "0.75rem 1.5rem",
    borderRadius: "30px",
    fontSize: "0.875rem",
    fontWeight: "600",
    border: "2px solid rgba(245, 158, 11, 0.2)",
    boxShadow: "0 8px 32px rgba(245, 158, 11, 0.2)",
    backdropFilter: "blur(10px)",
  },

  timeIcon: {
    fontSize: "1rem",
  },

  clearButton: {
    padding: "0.75rem 1.5rem",
    background: `linear-gradient(135deg, #ef4444, #dc2626)`,
    color: "#ffffff",
    border: "none",
    borderRadius: "30px",
    fontSize: "0.875rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "0 8px 32px rgba(239, 68, 68, 0.4)",
  },

  // Contenu principal
  mainContent: {
    display: "grid",
    gridTemplateColumns: "1fr 400px",
    gap: "3rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  // Section articles
  itemsSection: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },

  cartItem: {
    display: "flex",
    gap: "1.5rem",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "24px",
    padding: "2rem",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    animation: "slideInUp 0.6s ease-out forwards",
    opacity: 0,
    transform: "translateY(30px)",
    backdropFilter: "blur(20px)",
    position: "relative",
    overflow: "hidden",
  },

  itemImage: {
    position: "relative",
    minWidth: "120px",
    height: "120px",
  },

  image: {
    width: "120px",
    height: "120px",
    objectFit: "cover",
    borderRadius: "20px",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
    transition: "all 0.3s ease",
  },

  imageOverlay: {
    position: "absolute",
    top: "8px",
    right: "8px",
  },

  categoryBadge: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: "#ffffff",
    padding: "6px 12px",
    borderRadius: "16px",
    fontSize: "0.75rem",
    fontWeight: "500",
    backdropFilter: "blur(10px)",
  },

  itemDetails: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },

  itemHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "0.5rem",
  },

  itemName: {
    margin: "0",
    fontSize: "1.25rem",
    fontWeight: "700",
    color: DARK_BG,
    lineHeight: "1.3",
  },

  removeButton: {
    background: "rgba(239, 68, 68, 0.1)",
    border: "none",
    fontSize: "1.25rem",
    cursor: "pointer",
    padding: "8px",
    borderRadius: "12px",
    transition: "all 0.3s ease",
    opacity: 0.7,
    color: "#ef4444",
  },

  itemDescription: {
    margin: "0 0 1rem 0",
    color: "#64748b",
    fontSize: "0.875rem",
    lineHeight: "1.6",
    flex: 1,
  },

  itemFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
  },

  quantityControls: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    backgroundColor: "rgba(248, 250, 252, 0.8)",
    borderRadius: "16px",
    padding: "6px",
    border: "1px solid rgba(226, 232, 240, 0.5)",
    backdropFilter: "blur(10px)",
  },

  quantityButton: {
    width: "36px",
    height: "36px",
    border: "none",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
    color: BRAND_RED,
    fontSize: "1.125rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },

  quantityDisplay: {
    minWidth: "36px",
    textAlign: "center",
    fontWeight: "700",
    color: DARK_BG,
    fontSize: "1rem",
  },

  priceSection: {
    textAlign: "right",
  },

  unitPrice: {
    fontSize: "0.75rem",
    color: "#64748b",
    marginBottom: "4px",
  },

  totalItemPrice: {
    fontSize: "1.25rem",
    fontWeight: "800",
    background: `linear-gradient(135deg, ${BRAND_RED}, ${ACCENT_PURPLE})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  // Section résumé
  summarySection: {
    position: "sticky",
    top: "2rem",
    height: "fit-content",
  },

  summaryCard: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "24px",
    padding: "2.5rem",
    boxShadow: "0 25px 80px rgba(0, 0, 0, 0.12)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(20px)",
    position: "relative",
    overflow: "hidden",
  },

  summaryTitle: {
    margin: "0 0 2rem 0",
    fontSize: "1.5rem",
    fontWeight: "700",
    color: DARK_BG,
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  },

  summaryIcon: {
    fontSize: "1.25rem",
    color: BRAND_RED,
  },

  // Code promo
  couponSection: {
    marginBottom: "2rem",
    padding: "1.5rem",
    backgroundColor: "rgba(248, 250, 252, 0.8)",
    borderRadius: "20px",
    border: "1px solid rgba(226, 232, 240, 0.3)",
    backdropFilter: "blur(10px)",
  },

  couponTitle: {
    margin: "0 0 1rem 0",
    fontSize: "1rem",
    fontWeight: "600",
    color: DARK_BG,
  },

  couponInput: {
    display: "flex",
    gap: "0.75rem",
  },

  couponField: {
    flex: 1,
    padding: "0.875rem 1.25rem",
    border: "2px solid rgba(226, 232, 240, 0.3)",
    borderRadius: "16px",
    fontSize: "0.875rem",
    outline: "none",
    transition: "all 0.3s ease",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(10px)",
  },

  couponButton: {
    padding: "0.875rem 1.5rem",
    background: `linear-gradient(135deg, ${BRAND_YELLOW}, ${BRAND_ORANGE})`,
    color: "#92400e",
    border: "none",
    borderRadius: "16px",
    fontSize: "0.875rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    whiteSpace: "nowrap",
    boxShadow: "0 8px 25px rgba(255, 235, 59, 0.3)",
  },

  couponSuccess: {
    marginTop: "0.75rem",
    padding: "0.75rem 1.25rem",
    backgroundColor: "rgba(34, 197, 94, 0.15)",
    color: "#16a34a",
    borderRadius: "12px",
    fontSize: "0.875rem",
    fontWeight: "500",
    border: "1px solid rgba(34, 197, 94, 0.2)",
  },

  // Détails de prix
  priceBreakdown: {
    marginBottom: "2rem",
  },

  priceRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "0.75rem",
    fontSize: "1rem",
    color: "#64748b",
  },

  discountLabel: {
    color: "#16a34a",
    fontWeight: "500",
  },

  discountValue: {
    color: "#16a34a",
    fontWeight: "600",
  },

  freeDelivery: {
    color: "#16a34a",
    fontWeight: "600",
  },

  deliveryTip: {
    marginTop: "0.75rem",
    padding: "1rem 1.25rem",
    backgroundColor: "rgba(251, 191, 36, 0.15)",
    borderRadius: "12px",
    fontSize: "0.875rem",
    color: "#92400e",
    border: "1px solid rgba(251, 191, 36, 0.2)",
  },

  // Total et checkout
  totalSection: {
    paddingTop: "1.5rem",
    borderTop: "2px solid rgba(241, 245, 249, 0.5)",
  },

  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
  },

  totalLabel: {
    fontSize: "1.25rem",
    fontWeight: "700",
    color: DARK_BG,
  },

  totalValue: {
    fontSize: "2rem",
    fontWeight: "900",
    background: `linear-gradient(135deg, ${BRAND_RED}, ${ACCENT_PURPLE})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  checkoutButton: {
    width: "100%",
    padding: "1.5rem 2rem",
    background: `linear-gradient(135deg, ${BRAND_RED}, ${ACCENT_PURPLE})`,
    color: "#ffffff",
    border: "none",
    borderRadius: "20px",
    fontSize: "1.125rem",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "0 15px 40px rgba(255, 107, 107, 0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.75rem",
    marginBottom: "1.5rem",
    position: "relative",
    overflow: "hidden",
  },

  checkoutButtonLoading: {
    opacity: 0.7,
    cursor: "not-allowed",
  },

  checkoutIcon: {
    fontSize: "1.25rem",
  },

  loadingSpinner: {
    width: "20px",
    height: "20px",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    borderTop: "2px solid #ffffff",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },

  securityBadges: {
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
  },

  securityBadge: {
    fontSize: "0.75rem",
    color: "#64748b",
    fontWeight: "500",
    transition: "all 0.2s ease",
  },

  // États vides et succès
  emptyContainer: {
    textAlign: "center",
    padding: "4rem 2rem",
    maxWidth: "500px",
    margin: "2rem auto",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "24px",
    boxShadow: "0 25px 80px rgba(0, 0, 0, 0.12)",
    backdropFilter: "blur(20px)",
  },

  emptyAnimation: {
    position: "relative",
    display: "inline-block",
    marginBottom: "2rem",
  },

  emptyIcon: {
    fontSize: "5rem",
    opacity: "0.6",
    animation: "bounce 2s infinite",
    background: `linear-gradient(135deg, ${BRAND_RED}, ${ACCENT_PURPLE})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  emptyPulse: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "120px",
    height: "120px",
    border: "3px solid rgba(255, 107, 107, 0.3)",
    borderRadius: "50%",
    animation: "pulse 2s infinite",
  },

  emptyTitle: {
    margin: "0 0 1rem 0",
    fontSize: "2rem",
    fontWeight: "700",
    color: DARK_BG,
  },

  emptySubtitle: {
    margin: "0 0 2rem 0",
    color: "#64748b",
    fontSize: "1.125rem",
    lineHeight: "1.6",
  },

  shopButton: {
    padding: "1.25rem 2.5rem",
    background: `linear-gradient(135deg, ${BRAND_RED}, ${ACCENT_PURPLE})`,
    color: "#ffffff",
    border: "none",
    borderRadius: "25px",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "1rem",
    boxShadow: "0 15px 40px rgba(255, 107, 107, 0.4)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  },

  successContainer: {
    textAlign: "center",
    padding: "4rem 2rem",
    maxWidth: "500px",
    margin: "2rem auto",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "24px",
    boxShadow: "0 25px 80px rgba(0, 0, 0, 0.12)",
    backdropFilter: "blur(20px)",
  },

  successAnimation: {
    position: "relative",
    display: "inline-block",
    marginBottom: "2rem",
  },

  successIcon: {
    fontSize: "5rem",
    animation: "bounce 1s ease-out",
    color: "#16a34a",
  },

  successPulse: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "120px",
    height: "120px",
    border: "3px solid rgba(34, 197, 94, 0.3)",
    borderRadius: "50%",
    animation: "pulse 2s infinite",
  },

  successTitle: {
    margin: "0 0 1rem 0",
    fontSize: "2rem",
    fontWeight: "700",
    color: "#16a34a",
  },

  successText: {
    margin: "0 0 1.5rem 0",
    color: "#64748b",
    fontSize: "1.125rem",
  },

  orderNumber: {
    padding: "1rem 2rem",
    backgroundColor: "rgba(34, 197, 94, 0.15)",
    color: "#16a34a",
    borderRadius: "25px",
    fontWeight: "600",
    fontSize: "1.125rem",
    border: "1px solid rgba(34, 197, 94, 0.2)",
  },
}

if (!document.head.querySelector("style[data-modern-cart-styles]")) {
  const style = document.createElement("style")
  style.setAttribute("data-modern-cart-styles", "true")
  style.textContent = `
    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes bounce {
      0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
      40%, 43% { transform: translateY(-15px); }
      70% { transform: translateY(-8px); }
    }

    @keyframes pulse {
      0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
      100% { transform: translate(-50%, -50%) scale(1.4); opacity: 0; }
    }

    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }

    @keyframes glow {
      0%, 100% { box-shadow: 0 15px 40px rgba(255, 107, 107, 0.4); }
      50% { box-shadow: 0 20px 60px rgba(255, 107, 107, 0.6); }
    }

    .cart-item {
      position: relative;
      overflow: hidden;
    }

    .cart-item::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
      transition: left 0.5s;
    }

    .cart-item:hover::before {
      left: 100%;
    }

    .cart-item:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 25px 80px rgba(255, 107, 107, 0.2);
      border-color: rgba(255, 107, 107, 0.3);
    }

    .cart-item:hover .image {
      transform: scale(1.08) rotate(2deg);
    }

    .quantity-button:hover:not(:disabled) {
      background: linear-gradient(135deg, ${BRAND_RED}, ${ACCENT_PURPLE});
      color: #ffffff;
      transform: scale(1.15);
      box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
    }

    .quantity-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .remove-button:hover {
      background: rgba(239, 68, 68, 0.2);
      opacity: 1;
      transform: scale(1.15) rotate(90deg);
      box-shadow: 0 8px 25px rgba(239, 68, 68, 0.3);
    }

    .checkout-button {
      position: relative;
      overflow: hidden;
    }

    .checkout-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s;
    }

    .checkout-button:hover:not(:disabled) {
      transform: translateY(-4px);
      animation: glow 2s infinite;
    }

    .checkout-button:hover::before {
      left: 100%;
    }

    .clear-button:hover {
      background: linear-gradient(135deg, #dc2626, #b91c1c);
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 12px 40px rgba(239, 68, 68, 0.5);
    }

    .coupon-field:focus {
      border-color: ${BRAND_RED};
      box-shadow: 0 0 0 4px rgba(255, 107, 107, 0.15);
      background: rgba(255, 255, 255, 1);
    }

    .coupon-button:hover {
      background: linear-gradient(135deg, #f59e0b, #d97706);
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 12px 40px rgba(245, 158, 11, 0.4);
    }

    .shop-button:hover {
      transform: translateY(-4px) scale(1.05);
      animation: glow 2s infinite;
    }

    .item-count:hover,
    .estimated-time:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 12px 40px rgba(255, 107, 107, 0.25);
    }

    .security-badge:hover {
      color: ${BRAND_RED};
      transform: scale(1.1);
      transition: all 0.3s ease;
    }

    .summary-card {
      position: relative;
      overflow: hidden;
    }

    .summary-card::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255, 107, 107, 0.05) 0%, transparent 70%);
      animation: rotate 20s linear infinite;
      pointer-events: none;
    }

    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .main-content {
        grid-template-columns: 1fr !important;
        gap: 2rem !important;
      }

      .summary-section {
        position: static !important;
        order: 2;
      }

      .items-section {
        order: 1;
      }
    }

    @media (max-width: 768px) {
      .header {
        flex-direction: column !important;
        align-items: flex-start !important;
        gap: 1.5rem !important;
      }

      .header-stats {
        flex-wrap: wrap !important;
      }

      .title {
        font-size: 2.25rem !important;
      }

      .cart-item {
        flex-direction: column !important;
        gap: 1rem !important;
      }

      .item-image {
        align-self: center !important;
      }

      .item-footer {
        flex-direction: column !important;
        align-items: flex-start !important;
        gap: 1rem !important;
      }

      .quantity-controls {
        align-self: flex-start !important;
      }

      .price-section {
        align-self: flex-end !important;
        text-align: right !important;
      }

      .coupon-input {
        flex-direction: column !important;
      }

      .security-badges {
        flex-direction: column !important;
        text-align: center !important;
      }
    }

    @media (max-width: 480px) {
      .container {
        padding: 1rem !important;
      }

      .title {
        font-size: 1.875rem !important;
        flex-direction: column !important;
        align-items: flex-start !important;
      }

      .main-content {
        gap: 1.5rem !important;
      }

      .cart-item {
        padding: 1rem !important;
      }

      .summary-card {
        padding: 1.5rem !important;
      }

      .item-count, .estimated-time {
        padding: 0.5rem 1rem !important;
        font-size: 0.8rem !important;
      }
    }

    /* Enhanced focus states for accessibility */
    .quantity-button:focus-visible,
    .checkout-button:focus-visible,
    .clear-button:focus-visible,
    .remove-button:focus-visible {
      outline: 3px solid rgba(255, 107, 107, 0.5);
      outline-offset: 3px;
    }

    /* Reduced motion preferences */
    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        animation: none !important;
        transition: none !important;
      }

      .cart-item {
        opacity: 1 !important;
        transform: none !important;
      }
    }

    /* High contrast mode */
    @media (prefers-contrast: high) {
      .cart-item {
        border: 2px solid ${BRAND_RED};
      }
      
      .summary-card {
        border: 2px solid ${BRAND_RED};
      }
      
      .quantity-button {
        border: 1px solid ${BRAND_RED};
      }
    }
  `
  document.head.appendChild(style)
}

export default Cart