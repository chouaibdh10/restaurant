import { useState } from "react";
import { useCart } from "../context/CartContext";

const BRAND_RED = "#f03328";
const BRAND_ORANGE = "#ff6b5b";
const TINT_BORDER = "rgba(240, 51, 40, 0.14)";
const CARD_BG = "#ffffff";
const CARD_HOVER_BG = "#fff9f8";

function MenuItem({ name, description, price, image, id }) {
  const { addToCart } = useCart();
  const [imgError, setImgError] = useState(false);

  const handleAdd = () => {
    addToCart({ id, name, price });
  };

  return (
    <div className="mi-card" style={styles.card} role="group" aria-label={name}>
      <div style={styles.imageWrap}>
        <img
          src={
            !imgError && image
              ? image
              : "/placeholder.svg?height=150&width=250&query=food%20dish%20photo"
          }
          alt={name}
          style={styles.image}
          onError={() => setImgError(true)}
        />
      </div>

      <div style={styles.body}>
        <h3 style={styles.title}>{name}</h3>
        <p style={styles.desc}>{description}</p>

        <div style={styles.footer}>
          <span style={styles.price}>${price.toFixed(2)}</span>
          <button
            onClick={handleAdd}
            className="mi-btn"
            style={styles.button}
            aria-label={`Add ${name} to cart`}
          >
            <span aria-hidden="true">🛒</span> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: `1px solid ${TINT_BORDER}`,
    borderRadius: "14px",
    backgroundColor: CARD_BG,
    width: "260px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
    transition: "transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease",
  },
  imageWrap: {
    position: "relative",
    width: "100%",
    height: "150px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  body: {
    padding: "0.9rem 1rem 1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    flex: 1,
  },
  title: {
    fontSize: "1.05rem",
    fontWeight: 800,
    color: "#1f2937",
    margin: 0,
  },
  desc: {
    fontSize: "0.92rem",
    color: "#6b7280",
    margin: 0,
    lineHeight: 1.4,
    minHeight: "2.6rem",
  },
  footer: {
    marginTop: "0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "0.75rem",
  },
  price: {
    background: `linear-gradient(135deg, ${BRAND_RED} 0%, ${BRAND_ORANGE} 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    fontWeight: 900,
    fontSize: "1.05rem",
  },
  button: {
    padding: "0.55rem 0.9rem",
    background: `linear-gradient(135deg, ${BRAND_RED} 0%, ${BRAND_ORANGE} 100%)`,
    color: "#fff",
    border: "none",
    borderRadius: "9999px",
    cursor: "pointer",
    fontWeight: 800,
    fontSize: "0.9rem",
    boxShadow: "0 6px 16px rgba(240,51,40,0.28)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease",
    whiteSpace: "nowrap",
  },
};

// Inject hover/focus styles once
if (!document.head.querySelector('style[data-menu-item-styles]')) {
  const style = document.createElement("style");
  style.setAttribute("data-menu-item-styles", "true");
  style.textContent = `
    .mi-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 28px rgba(240,51,40,0.14);
      background-color: ${CARD_HOVER_BG};
    }
    .mi-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 10px 24px rgba(240,51,40,0.34);
      filter: brightness(1.02);
    }
    .mi-btn:active {
      transform: translateY(0);
      box-shadow: 0 6px 16px rgba(240,51,40,0.24);
    }
    .mi-btn:focus-visible {
      outline: 3px solid ${BRAND_ORANGE};
      outline-offset: 2px;
    }
    @media (prefers-reduced-motion: reduce) {
      .mi-card, .mi-btn { transition: none !important; }
    }
  `;
  document.head.appendChild(style);
}

export default MenuItem;
