import { useState } from "react";
import menuItems from "../data/menuData";
import MenuItem from "../components/MenuItem";

const BRAND_RED = "#f03328";
const BRAND_ORANGE = "#ff6b5b";
const LIGHT_BG = "#fffaf5";
const TINT_BORDER = "rgba(240, 51, 40, 0.14)";
const TINT_BG_SOFT = "#fff1ef";

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", ...new Set(menuItems.map((item) => item.category))];
  
  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const getItemCount = (category) => {
    return category === "All" 
      ? menuItems.length 
      : menuItems.filter(item => item.category === category).length;
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heading}>Our Delicious Menu</h1>
          <p style={styles.subtitle}>
            Discover our carefully crafted dishes made with the finest ingredients
          </p>
          <div style={styles.statsContainer}>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>{menuItems.length}+</span>
              <span style={styles.statLabel}>Dishes</span>
            </div>
            <div style={styles.statDivider}></div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>{categories.length - 1}</span>
              <span style={styles.statLabel}>Categories</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Section */}
      <div style={styles.filterSection}>
        <h2 style={styles.filterTitle}>Browse by Category</h2>
        <div style={styles.buttons}>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            const itemCount = getItemCount(cat);
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                aria-pressed={isActive}
                className="menu-button"
                style={{
                  ...styles.button,
                  ...(isActive ? styles.buttonActive : styles.buttonIdle),
                }}
              >
                <span style={styles.buttonText}>{cat}</span>
                <span style={styles.buttonCount}>({itemCount})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Header */}
      <div style={styles.resultsHeader}>
        <h3 style={styles.resultsTitle}>
          {selectedCategory === "All" ? "All Dishes" : selectedCategory}
        </h3>
        <div style={styles.resultsCount}>
          {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} found
        </div>
      </div>

      {/* Menu Items Grid */}
      <div style={styles.gridContainer}>
        <div style={styles.grid}>
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              style={{
                ...styles.menuItemWrapper,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <MenuItem {...item} />
            </div>
          ))}
        </div>
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div style={styles.emptyState}>
          <div style={styles.emptyIcon}>🍽️</div>
          <h3 style={styles.emptyTitle}>No items found</h3>
          <p style={styles.emptyText}>
            Try selecting a different category to see more delicious options!
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: LIGHT_BG,
    minHeight: "100vh",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  },

  // Hero Section
  heroSection: {
    background: `linear-gradient(135deg, ${LIGHT_BG} 0%, #fff5f2 50%, ${TINT_BG_SOFT} 100%)`,
    padding: "4rem 2rem 3rem",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },

  heroContent: {
    maxWidth: "800px",
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  },

  heading: {
    margin: "0 0 1rem 0",
    fontSize: "3.5rem",
    fontWeight: "900",
    color: "#1a1a1a",
    background: `linear-gradient(135deg, ${BRAND_RED} 0%, ${BRAND_ORANGE} 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    lineHeight: "1.1",
    letterSpacing: "-0.02em",
  },

  subtitle: {
    margin: "0 0 2rem 0",
    fontSize: "1.2rem",
    color: "#4a5568",
    fontWeight: "400",
    lineHeight: "1.6",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  },

  statsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    marginTop: "2rem",
  },

  statItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  statNumber: {
    fontSize: "2.5rem",
    fontWeight: "800",
    color: BRAND_RED,
    lineHeight: "1",
  },

  statLabel: {
    fontSize: "0.875rem",
    color: "#718096",
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },

  statDivider: {
    width: "1px",
    height: "3rem",
    backgroundColor: "#e2e8f0",
  },

  // Filter Section
  filterSection: {
    padding: "3rem 2rem 2rem",
    textAlign: "center",
    backgroundColor: "#ffffff",
    borderTop: "1px solid #f7fafc",
  },

  filterTitle: {
    margin: "0 0 2rem 0",
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#2d3748",
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "1rem",
    maxWidth: "900px",
    margin: "0 auto",
  },

  button: {
    padding: "0.875rem 1.5rem",
    borderRadius: "50px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "0.95rem",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    borderWidth: "2px",
    borderStyle: "solid",
    outline: "none",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    position: "relative",
    overflow: "hidden",
  },

  buttonText: {
    fontSize: "0.95rem",
    fontWeight: "600",
  },

  buttonCount: {
    fontSize: "0.8rem",
    opacity: "0.8",
    fontWeight: "500",
  },

  buttonIdle: {
    backgroundColor: "#ffffff",
    color: BRAND_RED,
    borderColor: TINT_BORDER,
    boxShadow: "0 2px 8px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.08)",
  },

  buttonActive: {
    background: `linear-gradient(135deg, ${BRAND_RED} 0%, ${BRAND_ORANGE} 100%)`,
    color: "#ffffff",
    borderColor: "transparent",
    boxShadow: "0 8px 25px rgba(240, 51, 40, 0.3), 0 3px 10px rgba(240, 51, 40, 0.2)",
    transform: "translateY(-2px)",
  },

  // Results Section
  resultsHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2rem 2rem 1rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  resultsTitle: {
    margin: 0,
    fontSize: "1.75rem",
    fontWeight: "700",
    color: "#2d3748",
  },

  resultsCount: {
    fontSize: "1rem",
    color: "#718096",
    fontWeight: "500",
    backgroundColor: "#f7fafc",
    padding: "0.5rem 1rem",
    borderRadius: "20px",
  },

  // Grid Section
  gridContainer: {
    padding: "1rem 2rem 4rem",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  menuItemWrapper: {
    animation: "fadeInUp 0.6s ease-out forwards",
  },

  // Empty State
  emptyState: {
    textAlign: "center",
    padding: "4rem 2rem",
    maxWidth: "500px",
    margin: "0 auto",
  },

  emptyIcon: {
    fontSize: "4rem",
    marginBottom: "1rem",
    opacity: "0.6",
  },

  emptyTitle: {
    margin: "0 0 1rem 0",
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#4a5568",
  },

  emptyText: {
    margin: 0,
    color: "#718096",
    fontSize: "1rem",
    lineHeight: "1.6",
  },
};

// Enhanced CSS with animations and responsive design
if (!document.head.querySelector('style[data-menu-styles]')) {
  const style = document.createElement("style");
  style.setAttribute("data-menu-styles", "true");
  style.textContent = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .menu-button:not([aria-pressed="true"]):hover {
      background-color: ${TINT_BG_SOFT};
      border-color: rgba(240, 51, 40, 0.3);
      box-shadow: 0 6px 20px rgba(240, 51, 40, 0.15), 0 2px 6px rgba(0,0,0,0.1);
      transform: translateY(-3px);
    }
    
    .menu-button[aria-pressed="true"]:hover {
      filter: brightness(1.05);
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(240, 51, 40, 0.4), 0 4px 12px rgba(240, 51, 40, 0.3);
    }
    
    .menu-button:focus-visible {
      outline: 3px solid ${BRAND_ORANGE};
      outline-offset: 2px;
    }

    .menu-button:active {
      transform: translateY(-1px);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .hero-heading {
        font-size: 2.5rem !important;
      }
      
      .filter-section {
        padding: 2rem 1rem !important;
      }
      
      .results-header {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
      }
      
      .grid {
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)) !important;
        gap: 1.5rem !important;
      }
    }

    @media (max-width: 480px) {
      .stats-container {
        flex-direction: column;
        gap: 1rem !important;
      }
      
      .stat-divider {
        display: none;
      }
      
      .buttons {
        gap: 0.75rem !important;
      }
      
      .menu-button {
        padding: 0.75rem 1.25rem !important;
        font-size: 0.9rem !important;
      }
    }
    
    @media (prefers-reduced-motion: reduce) {
      .menu-button, .menu-item-wrapper { 
        transition: none !important; 
        animation: none !important;
      }
    }
  `;
  document.head.appendChild(style);
}

export default Menu;