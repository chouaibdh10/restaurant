import { useCart } from "../context/CartContext";

const BRAND_RED = "#f03328";
const BRAND_ORANGE = "#ff6b5b";
const LIGHT_BG = "#fffaf5";
const TINT_BORDER = "rgba(240, 51, 40, 0.12)"; // subtle red tint
const TINT_BG_SOFT = "#fff1ef"; // very light red background
const TINT_BG_ITEM = "#fff8f7"; // item row background

function Cart() {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div style={styles.emptyContainer}>
        <div style={styles.emptyIcon}>🛒</div>
        <h2 style={styles.emptyTitle}>Your cart is empty</h2>
        <p style={styles.emptySubtitle}>Add some items to get started!</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Shopping Cart</h2>
        <div style={styles.itemCount}>
          {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
        </div>
      </div>

      <div style={styles.itemsContainer}>
        {cartItems.map((item, index) => (
          <div
            key={item.id}
            className="cart-item"
            style={{
              ...styles.item,
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <div style={styles.itemInfo}>
              <div style={styles.itemName}>{item.name}</div>
              <div style={styles.itemDetails}>
                Quantity: <span style={styles.quantity}>{item.quantity}</span>
                <span style={styles.separator}>•</span>
                Unit price: <span style={styles.unitPrice}>${item.price.toFixed(2)}</span>
              </div>
            </div>
            <div style={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</div>
          </div>
        ))}
      </div>

      <div style={styles.summary}>
        <div style={styles.summaryRow}>
          <span style={styles.summaryLabel}>Subtotal:</span>
          <span style={styles.summaryValue}>${totalPrice.toFixed(2)}</span>
        </div>
        <div style={styles.totalRow}>
          <span style={styles.totalLabel}>Total:</span>
          <span style={styles.totalValue}>${totalPrice.toFixed(2)}</span>
        </div>
        <button className="checkout-button" style={styles.checkoutButton}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "700px",
    margin: "2rem auto",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.06)",
    border: `1px solid ${TINT_BORDER}`,
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
    paddingBottom: "1rem",
    borderBottom: `2px solid ${TINT_BG_SOFT}`,
  },
  title: {
    margin: 0,
    fontSize: "1.75rem",
    fontWeight: "700",
    color: "#1a1a1a",
    background: `linear-gradient(135deg, ${BRAND_RED} 0%, ${BRAND_ORANGE} 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  itemCount: {
    backgroundColor: TINT_BG_SOFT,
    color: BRAND_RED,
    padding: "0.45rem 0.9rem",
    borderRadius: "20px",
    fontSize: "0.875rem",
    fontWeight: "600",
    border: `1px solid ${TINT_BORDER}`,
  },
  itemsContainer: {
    marginBottom: "2rem",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.1rem 1.25rem",
    marginBottom: "1rem",
    backgroundColor: TINT_BG_ITEM,
    borderRadius: "12px",
    border: `1px solid ${TINT_BORDER}`,
    transition: "all 0.25s ease",
    animation: "slideInUp 0.5s ease-out forwards",
    cursor: "pointer",
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#2d3748",
    marginBottom: "0.5rem",
  },
  itemDetails: {
    fontSize: "0.9rem",
    color: "#718096",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  quantity: {
    backgroundColor: "#ffe5e5",
    padding: "0.25rem 0.5rem",
    borderRadius: "6px",
    fontWeight: "600",
    color: BRAND_RED,
    border: `1px solid ${TINT_BORDER}`,
  },
  separator: {
    color: "#cbd5e0",
  },
  unitPrice: {
    fontWeight: "600",
    color: "#4a5568",
  },
  itemPrice: {
    fontSize: "1.1rem",
    fontWeight: "800",
    color: BRAND_RED,
    backgroundColor: "#fff",
    padding: "0.55rem 0.85rem",
    borderRadius: "10px",
    border: `2px solid ${TINT_BORDER}`,
  },
  summary: {
    backgroundColor: LIGHT_BG,
    padding: "1.5rem",
    borderRadius: "12px",
    border: `1px solid ${TINT_BORDER}`,
  },
  summaryRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  },
  summaryLabel: {
    fontSize: "1rem",
    color: "#6c757d",
    fontWeight: "600",
  },
  summaryValue: {
    fontSize: "1rem",
    color: "#495057",
    fontWeight: "700",
  },
  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "1rem",
    borderTop: `2px solid ${TINT_BG_SOFT}`,
    marginBottom: "1.25rem",
  },
  totalLabel: {
    fontSize: "1.15rem",
    fontWeight: "800",
    color: "#2d3748",
  },
  totalValue: {
    fontSize: "1.4rem",
    fontWeight: "900",
    background: `linear-gradient(135deg, ${BRAND_RED} 0%, ${BRAND_ORANGE} 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  checkoutButton: {
    width: "100%",
    padding: "1rem 2rem",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontSize: "1.05rem",
    fontWeight: "800",
    cursor: "pointer",
    transition: "all 0.25s ease",
    background: `linear-gradient(135deg, ${BRAND_RED} 0%, ${BRAND_ORANGE} 100%)`,
    boxShadow: "0 6px 18px rgba(240, 51, 40, 0.35)",
  },

  // Empty state styles
  emptyContainer: {
    textAlign: "center",
    padding: "4rem 2rem",
    maxWidth: "500px",
    margin: "2rem auto",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
    border: `1px solid ${TINT_BORDER}`,
  },
  emptyIcon: {
    fontSize: "4rem",
    marginBottom: "1rem",
    opacity: "0.8",
  },
  emptyTitle: {
    margin: "0 0 0.75rem 0",
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#4a5568",
  },
  emptySubtitle: {
    margin: 0,
    color: "#718096",
    fontSize: "1rem",
  },
};

// Add CSS animations and hover effects only once
if (!document.head.querySelector('style[data-cart-styles]')) {
  const styleSheet = document.createElement("style");
  styleSheet.setAttribute("data-cart-styles", "true");
  styleSheet.textContent = `
    @keyframes slideInUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    /* Hover effects matching brand color */
    .cart-item:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 28px rgba(240, 51, 40, 0.18) !important;
      border-color: rgba(240, 51, 40, 0.22) !important;
      background-color: #fff4f2 !important;
    }

    .checkout-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 28px rgba(240, 51, 40, 0.45) !important;
      filter: brightness(1.02);
    }

    .checkout-button:active {
      transform: translateY(0);
      box-shadow: 0 6px 16px rgba(240, 51, 40, 0.3) !important;
    }
  `;
  document.head.appendChild(styleSheet);
}

export default Cart;
