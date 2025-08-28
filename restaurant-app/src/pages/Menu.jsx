"use client"

import { useState, useEffect } from "react"
import menuItems from "../data/menuData"
import MenuItem from "../components/MenuItem"

const BRAND_RED = "#e11d48"
const BRAND_ORANGE = "#f97316"
const BRAND_YELLOW = "#f59e0b"
const LIGHT_BG = "#fefefe"
const DARK_BG = "#0f172a"
const CARD_BG = "#ffffff"

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", ...new Set(menuItems.map((item) => item.category))]

  const filteredItems =
    selectedCategory === "All" ? menuItems : menuItems.filter((item) => item.category === selectedCategory)

  const getItemCount = (category) => {
    return category === "All" ? menuItems.length : menuItems.filter((item) => item.category === category).length
  }

  // Icônes pour les catégories
  const getCategoryIcon = (category) => {
    const icons = {
      All: "🍽️",
      Appetizers: "🥗",
      Main: "🍖",
      Desserts: "🍰",
      Beverages: "🥤",
      Pizza: "🍕",
      Burgers: "🍔",
      Salads: "🥙",
    }
    return icons[category] || "🍴"
  }

  useEffect(() => {
    // Scroll animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    document.querySelectorAll(".menu-item-wrapper").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [filteredItems])

  return (
    <div style={styles.container}>
      {/* Hero Section avec animations */}
      <div style={styles.heroSection}>
        <div style={styles.heroBackground}>
          <div style={styles.heroPattern}></div>
          <div style={styles.heroGradient}></div>
          <div style={styles.heroOrbs}></div>
        </div>

        <div style={styles.heroContent}>
          <div style={styles.heroBadge}>
            <span style={styles.badgeIcon}>✨</span>
            <span style={styles.badgeText}>Menu Premium</span>
          </div>

          <h1 style={styles.heading}>
            Notre Menu <span style={styles.headingAccent}>Délicieux</span>
          </h1>

          <p style={styles.subtitle}>
            Explorez nos créations culinaires exceptionnelles, préparées avec passion et des ingrédients de première
            qualité sélectionnés par nos chefs.
          </p>

          <div style={styles.statsContainer}>
            <div style={styles.statCard}>
              <div style={styles.statIcon}>🍽️</div>
              <div style={styles.statInfo}>
                <span style={styles.statNumber}>{menuItems.length}+</span>
                <span style={styles.statLabel}>Plats Signature</span>
              </div>
            </div>

            <div style={styles.statCard}>
              <div style={styles.statIcon}>🏆</div>
              <div style={styles.statInfo}>
                <span style={styles.statNumber}>{categories.length - 1}</span>
                <span style={styles.statLabel}>Catégories</span>
              </div>
            </div>

            <div style={styles.statCard}>
              <div style={styles.statIcon}>⭐</div>
              <div style={styles.statInfo}>
                <span style={styles.statNumber}>4.9</span>
                <span style={styles.statLabel}>Note Moyenne</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Section modernisée */}
      <div style={styles.filterSection}>
        <div style={styles.filterContainer}>
          <div style={styles.filterHeader}>
            <h2 style={styles.filterTitle}>
              <span style={styles.filterIcon}>🎯</span>
              Parcourir par Catégorie
            </h2>
            <p style={styles.filterSubtitle}>Trouvez exactement ce que vous cherchez</p>
          </div>

          <div style={styles.categoriesGrid}>
            {categories.map((cat, index) => {
              const isActive = selectedCategory === cat
              const itemCount = getItemCount(cat)
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={isActive}
                  className="category-button"
                  style={{
                    ...styles.categoryButton,
                    ...(isActive ? styles.categoryButtonActive : {}),
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div style={styles.categoryIcon}>{getCategoryIcon(cat)}</div>
                  <div style={styles.categoryInfo}>
                    <span style={styles.categoryName}>{cat}</span>
                    <span style={styles.categoryCount}>{itemCount} plats</span>
                  </div>
                  {isActive && <div style={styles.activeIndicator}></div>}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Results Header amélioré */}
      <div style={styles.resultsSection}>
        <div style={styles.resultsHeader}>
          <div style={styles.resultsLeft}>
            <h3 style={styles.resultsTitle}>{selectedCategory === "All" ? "Tous nos plats" : selectedCategory}</h3>
            <div style={styles.resultsSubtitle}>
              Découvrez notre sélection {selectedCategory === "All" ? "complète" : "spécialisée"}
            </div>
          </div>

          <div style={styles.resultsRight}>
            <div style={styles.resultsCounter}>
              <span style={styles.counterNumber}>{filteredItems.length}</span>
              <span style={styles.counterLabel}>
                {filteredItems.length === 1 ? "plat" : "plats"} disponible{filteredItems.length === 1 ? "" : "s"}
              </span>
            </div>
            <div style={styles.sortButton}>
              <span>📊</span>
              <span>Trier</span>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items Grid avec animations */}
      <div style={styles.menuGrid}>
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className="menu-item-wrapper"
            style={{
              ...styles.menuItemWrapper,
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <MenuItem {...item} />
          </div>
        ))}
      </div>

      {/* Empty State amélioré */}
      {filteredItems.length === 0 && (
        <div style={styles.emptyState}>
          <div style={styles.emptyAnimation}>
            <div style={styles.emptyIcon}>🔍</div>
            <div style={styles.emptyPulse}></div>
          </div>
          <h3 style={styles.emptyTitle}>Aucun plat trouvé</h3>
          <p style={styles.emptyText}>Essayez une autre catégorie pour découvrir nos délicieuses options !</p>
          <button onClick={() => setSelectedCategory("All")} style={styles.emptyButton}>
            Voir tous les plats
          </button>
        </div>
      )}

      {/* Section Newsletter */}
      <div style={styles.newsletterSection}>
        <div style={styles.newsletterCard}>
          <div style={styles.newsletterIcon}>📧</div>
          <div style={styles.newsletterContent}>
            <h4 style={styles.newsletterTitle}>Restez informé</h4>
            <p style={styles.newsletterText}>Recevez nos nouveautés et offres spéciales</p>
          </div>
          <div style={styles.newsletterAction}>
            <input type="email" placeholder="Votre email" style={styles.newsletterInput} />
            <button style={styles.newsletterButton}>S'abonner</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: LIGHT_BG,
    minHeight: "100vh",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  },

  // Hero Section améliorée
  heroSection: {
    position: "relative",
    padding: "6rem 2rem 5rem",
    textAlign: "center",
    overflow: "hidden",
    background: `linear-gradient(135deg, ${LIGHT_BG} 0%, #fef7f0 30%, #fef3f2 70%, #fff1f2 100%)`,
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
  },

  heroBackground: {
    position: "absolute",
    inset: 0,
    zIndex: 0,
  },

  heroPattern: {
    position: "absolute",
    inset: 0,
    backgroundImage: `
      radial-gradient(circle at 20% 20%, ${BRAND_RED}08 0%, transparent 50%), 
      radial-gradient(circle at 80% 80%, ${BRAND_ORANGE}06 0%, transparent 50%),
      radial-gradient(circle at 40% 60%, ${BRAND_YELLOW}04 0%, transparent 50%)
    `,
    opacity: 0.7,
  },

  heroGradient: {
    position: "absolute",
    inset: 0,
    background: `linear-gradient(45deg, transparent 20%, ${BRAND_YELLOW}03 50%, transparent 80%)`,
  },

  heroOrbs: {
    position: "absolute",
    inset: 0,
    background: `
      radial-gradient(circle at 15% 15%, rgba(225, 29, 72, 0.1) 0%, transparent 25%),
      radial-gradient(circle at 85% 25%, rgba(249, 115, 22, 0.08) 0%, transparent 30%),
      radial-gradient(circle at 70% 85%, rgba(245, 158, 11, 0.06) 0%, transparent 35%)
    `,
    animation: "float 20s ease-in-out infinite",
  },

  heroContent: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1000px",
    margin: "0 auto",
    width: "100%",
  },

  heroBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "1rem 2rem",
    background: "linear-gradient(135deg, rgba(225, 29, 72, 0.1), rgba(249, 115, 22, 0.08))",
    borderRadius: "60px",
    border: "2px solid rgba(225, 29, 72, 0.15)",
    marginBottom: "2.5rem",
    backdropFilter: "blur(20px)",
    boxShadow: "0 8px 32px rgba(225, 29, 72, 0.1)",
  },

  badgeIcon: {
    fontSize: "1.5rem",
    filter: "drop-shadow(0 0 8px rgba(225, 29, 72, 0.3))",
  },

  badgeText: {
    fontWeight: "700",
    color: BRAND_RED,
    fontSize: "1rem",
    letterSpacing: "0.5px",
    textShadow: "0 2px 4px rgba(225, 29, 72, 0.1)",
  },

  heading: {
    margin: "0 0 2.5rem 0",
    fontSize: "5rem",
    fontWeight: "900",
    color: DARK_BG,
    lineHeight: "1.05",
    letterSpacing: "-0.03em",
    textShadow: "0 4px 20px rgba(15, 23, 42, 0.1)",
  },

  headingAccent: {
    background: `linear-gradient(135deg, ${BRAND_RED} 0%, ${BRAND_ORANGE} 50%, ${BRAND_YELLOW} 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    filter: "drop-shadow(0 2px 4px rgba(225, 29, 72, 0.2))",
  },

  subtitle: {
    margin: "0 0 4rem 0",
    fontSize: "1.375rem",
    color: "#475569",
    fontWeight: "400",
    lineHeight: "1.8",
    maxWidth: "750px",
    marginLeft: "auto",
    marginRight: "auto",
    textShadow: "0 2px 4px rgba(71, 85, 105, 0.1)",
  },

  statsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "2.5rem",
    maxWidth: "900px",
    margin: "0 auto",
  },

  statCard: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    padding: "2.5rem",
    background: "rgba(255, 255, 255, 0.9)",
    borderRadius: "24px",
    border: "1px solid rgba(225, 29, 72, 0.08)",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(225, 29, 72, 0.04)",
    backdropFilter: "blur(20px)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    overflow: "hidden",
  },

  statIcon: {
    fontSize: "3rem",
    padding: "16px",
    background: `linear-gradient(135deg, ${BRAND_RED}12, ${BRAND_ORANGE}10)`,
    borderRadius: "20px",
    filter: "drop-shadow(0 4px 12px rgba(225, 29, 72, 0.15))",
  },

  statInfo: {
    display: "flex",
    flexDirection: "column",
  },

  statNumber: {
    fontSize: "2.5rem",
    fontWeight: "900",
    color: BRAND_RED,
    lineHeight: "1",
    textShadow: "0 2px 8px rgba(225, 29, 72, 0.2)",
  },

  statLabel: {
    fontSize: "0.95rem",
    color: "#64748b",
    fontWeight: "600",
    marginTop: "6px",
    letterSpacing: "0.3px",
  },

  // Filter Section améliorée
  filterSection: {
    padding: "5rem 2rem",
    background: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)",
    position: "relative",
  },

  filterContainer: {
    maxWidth: "1300px",
    margin: "0 auto",
  },

  filterHeader: {
    textAlign: "center",
    marginBottom: "4rem",
  },

  filterTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.5rem",
    fontSize: "3rem",
    fontWeight: "900",
    color: DARK_BG,
    marginBottom: "1.5rem",
    textShadow: "0 4px 16px rgba(15, 23, 42, 0.1)",
  },

  filterIcon: {
    fontSize: "2.5rem",
    filter: "drop-shadow(0 4px 8px rgba(225, 29, 72, 0.2))",
  },

  filterSubtitle: {
    fontSize: "1.25rem",
    color: "#64748b",
    margin: "0",
    fontWeight: "500",
  },

  categoriesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
  },

  categoryButton: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    padding: "2rem",
    background: "linear-gradient(135deg, #ffffff 0%, #fafafa 100%)",
    border: "2px solid #e2e8f0",
    borderRadius: "24px",
    cursor: "pointer",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    overflow: "hidden",
    animation: "slideInUp 0.8s ease-out forwards",
    opacity: 0,
    transform: "translateY(30px)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
  },

  categoryButtonActive: {
    background: `linear-gradient(135deg, ${BRAND_RED} 0%, ${BRAND_ORANGE} 100%)`,
    borderColor: "transparent",
    color: "#ffffff",
    transform: "translateY(-6px)",
    boxShadow: "0 20px 60px rgba(225, 29, 72, 0.35), 0 8px 24px rgba(225, 29, 72, 0.2)",
  },

  categoryIcon: {
    fontSize: "3rem",
    padding: "16px",
    background: "rgba(255, 255, 255, 0.15)",
    borderRadius: "16px",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },

  categoryInfo: {
    flex: 1,
    textAlign: "left",
  },

  categoryName: {
    display: "block",
    fontSize: "1.375rem",
    fontWeight: "800",
    marginBottom: "6px",
    letterSpacing: "-0.01em",
  },

  categoryCount: {
    fontSize: "0.95rem",
    opacity: 0.85,
    fontWeight: "600",
    letterSpacing: "0.3px",
  },

  activeIndicator: {
    position: "absolute",
    top: "16px",
    right: "16px",
    width: "16px",
    height: "16px",
    background: "#ffffff",
    borderRadius: "50%",
    boxShadow: "0 0 0 4px rgba(255, 255, 255, 0.3), 0 4px 12px rgba(255, 255, 255, 0.2)",
  },

  // Results Section améliorée
  resultsSection: {
    padding: "3rem 2rem",
    background: `linear-gradient(135deg, ${LIGHT_BG} 0%, #f8fafc 100%)`,
  },

  resultsHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1300px",
    margin: "0 auto",
    gap: "2rem",
  },

  resultsLeft: {},

  resultsTitle: {
    margin: "0 0 0.75rem 0",
    fontSize: "2.75rem",
    fontWeight: "900",
    color: DARK_BG,
    letterSpacing: "-0.02em",
    textShadow: "0 4px 16px rgba(15, 23, 42, 0.1)",
  },

  resultsSubtitle: {
    color: "#64748b",
    fontSize: "1.125rem",
    fontWeight: "500",
  },

  resultsRight: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
  },

  resultsCounter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1.5rem 2rem",
    background: "linear-gradient(135deg, #ffffff 0%, #fafafa 100%)",
    borderRadius: "20px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.06)",
  },

  counterNumber: {
    fontSize: "2rem",
    fontWeight: "900",
    color: BRAND_RED,
    textShadow: "0 2px 8px rgba(225, 29, 72, 0.2)",
  },

  counterLabel: {
    fontSize: "0.875rem",
    color: "#64748b",
    textAlign: "center",
    fontWeight: "600",
    marginTop: "4px",
  },

  sortButton: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "1.5rem",
    background: "linear-gradient(135deg, #ffffff 0%, #fafafa 100%)",
    borderRadius: "16px",
    border: "1px solid #e2e8f0",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "700",
    color: "#64748b",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.04)",
    transition: "all 0.3s ease",
  },

  // Menu Grid améliorée
  menuGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
    gap: "2.5rem",
    padding: "3rem 2rem",
    maxWidth: "1300px",
    margin: "0 auto",
  },

  menuItemWrapper: {
    animation: "fadeInScale 0.8s ease-out forwards",
    opacity: 0,
    transform: "translateY(40px) scale(0.95)",
  },

  // Empty State amélioré
  emptyState: {
    textAlign: "center",
    padding: "5rem 2rem",
    maxWidth: "600px",
    margin: "0 auto",
  },

  emptyAnimation: {
    position: "relative",
    display: "inline-block",
    marginBottom: "3rem",
  },

  emptyIcon: {
    fontSize: "6rem",
    opacity: "0.7",
    animation: "bounce 2s infinite",
    filter: "drop-shadow(0 4px 16px rgba(100, 116, 139, 0.2))",
  },

  emptyPulse: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "120px",
    height: "120px",
    border: "3px solid rgba(225, 29, 72, 0.2)",
    borderRadius: "50%",
    animation: "pulse 2s infinite",
  },

  emptyTitle: {
    margin: "0 0 1.5rem 0",
    fontSize: "2.25rem",
    fontWeight: "800",
    color: DARK_BG,
    textShadow: "0 4px 16px rgba(15, 23, 42, 0.1)",
  },

  emptyText: {
    margin: "0 0 3rem 0",
    color: "#64748b",
    fontSize: "1.25rem",
    lineHeight: "1.7",
    fontWeight: "500",
  },

  emptyButton: {
    padding: "1.25rem 2.5rem",
    background: `linear-gradient(135deg, ${BRAND_RED} 0%, ${BRAND_ORANGE} 100%)`,
    color: "#ffffff",
    border: "none",
    borderRadius: "60px",
    fontWeight: "700",
    cursor: "pointer",
    fontSize: "1.125rem",
    boxShadow: "0 12px 40px rgba(225, 29, 72, 0.35)",
    transition: "all 0.4s ease",
    letterSpacing: "0.3px",
  },

  // Newsletter Section améliorée
  newsletterSection: {
    padding: "5rem 2rem",
    background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
  },

  newsletterCard: {
    display: "flex",
    alignItems: "center",
    gap: "3rem",
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "3.5rem",
    background: `linear-gradient(135deg, ${BRAND_RED}08, ${BRAND_ORANGE}04)`,
    borderRadius: "32px",
    border: "1px solid rgba(225, 29, 72, 0.08)",
    boxShadow: "0 20px 60px rgba(225, 29, 72, 0.1)",
    position: "relative",
    overflow: "hidden",
  },

  newsletterIcon: {
    fontSize: "4rem",
    padding: "1.5rem",
    background: `linear-gradient(135deg, ${BRAND_RED} 0%, ${BRAND_ORANGE} 100%)`,
    borderRadius: "24px",
    color: "#ffffff",
    boxShadow: "0 12px 32px rgba(225, 29, 72, 0.3)",
  },

  newsletterContent: {
    flex: 1,
  },

  newsletterTitle: {
    margin: "0 0 0.75rem 0",
    fontSize: "2rem",
    fontWeight: "800",
    color: DARK_BG,
    textShadow: "0 2px 8px rgba(15, 23, 42, 0.1)",
  },

  newsletterText: {
    margin: "0",
    color: "#64748b",
    fontSize: "1.125rem",
    fontWeight: "500",
    lineHeight: "1.6",
  },

  newsletterAction: {
    display: "flex",
    gap: "1.5rem",
  },

  newsletterInput: {
    padding: "1.25rem 2rem",
    borderRadius: "60px",
    border: "2px solid #e2e8f0",
    fontSize: "1.125rem",
    minWidth: "250px",
    outline: "none",
    transition: "all 0.3s ease",
    fontWeight: "500",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.04)",
  },

  newsletterButton: {
    padding: "1.25rem 2.5rem",
    background: `linear-gradient(135deg, ${BRAND_RED} 0%, ${BRAND_ORANGE} 100%)`,
    color: "#ffffff",
    border: "none",
    borderRadius: "60px",
    fontWeight: "700",
    cursor: "pointer",
    fontSize: "1.125rem",
    boxShadow: "0 12px 40px rgba(225, 29, 72, 0.35)",
    transition: "all 0.4s ease",
    whiteSpace: "nowrap",
    letterSpacing: "0.3px",
  },
}

if (!document.head.querySelector("style[data-modern-menu-styles]")) {
  const style = document.createElement("style")
  style.setAttribute("data-modern-menu-styles", "true")
  style.textContent = `
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      33% { transform: translateY(-10px) rotate(1deg); }
      66% { transform: translateY(5px) rotate(-1deg); }
    }

    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeInScale {
      from {
        opacity: 0;
        transform: translateY(40px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes bounce {
      0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
      40%, 43% { transform: translateY(-15px); }
      70% { transform: translateY(-8px); }
    }

    @keyframes pulse {
      0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
      100% { transform: translate(-50%, -50%) scale(1.6); opacity: 0; }
    }

    .menu-item-wrapper.animate-in {
      animation: fadeInScale 0.8s ease-out forwards;
    }

    .category-button:not([aria-pressed="true"]):hover {
      background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
      border-color: rgba(225, 29, 72, 0.25);
      transform: translateY(-4px);
      box-shadow: 0 16px 50px rgba(225, 29, 72, 0.15), 0 8px 24px rgba(0, 0, 0, 0.08);
    }

    .category-button:not([aria-pressed="true"]):hover .categoryIcon {
      background: rgba(225, 29, 72, 0.1);
      color: ${BRAND_RED};
      transform: scale(1.05);
    }

    .category-button[aria-pressed="true"]:hover {
      transform: translateY(-8px);
      box-shadow: 0 24px 70px rgba(225, 29, 72, 0.4), 0 12px 32px rgba(225, 29, 72, 0.25);
    }

    .newsletter-input:focus {
      border-color: ${BRAND_RED};
      box-shadow: 0 0 0 4px rgba(225, 29, 72, 0.1), 0 8px 32px rgba(225, 29, 72, 0.15);
      transform: translateY(-2px);
    }

    .newsletter-button:hover, .empty-button:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 60px rgba(225, 29, 72, 0.45), 0 8px 24px rgba(225, 29, 72, 0.25);
    }

    .sort-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
      border-color: rgba(225, 29, 72, 0.2);
    }

    .stat-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12), 0 8px 32px rgba(225, 29, 72, 0.08);
    }

    .stat-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, ${BRAND_RED}, ${BRAND_ORANGE});
      border-radius: 24px 24px 0 0;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .stat-card:hover::before {
      opacity: 1;
    }

    .newsletter-card::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(45deg, transparent, rgba(225, 29, 72, 0.03), transparent);
      animation: shimmer 3s ease-in-out infinite;
      pointer-events: none;
    }

    @keyframes shimmer {
      0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
      100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
    }

    /* Responsive Design amélioré */
    @media (max-width: 768px) {
      .heading { font-size: 3.5rem !important; }
      .filter-title { font-size: 2.25rem !important; }
      .results-title { font-size: 2rem !important; }
      .categories-grid { grid-template-columns: 1fr !important; }
      .results-header { 
        flex-direction: column; 
        align-items: flex-start !important; 
        gap: 1.5rem !important; 
      }
      .menu-grid { 
        grid-template-columns: 1fr !important; 
        padding: 2rem 1rem !important; 
      }
      .newsletter-card { 
        flex-direction: column !important; 
        text-align: center !important; 
        gap: 2rem !important;
      }
      .newsletter-action { 
        flex-direction: column !important; 
        width: 100% !important; 
      }
      .newsletter-input { 
        width: 100% !important; 
        min-width: auto !important; 
      }
      .hero-section { 
        padding: 4rem 1rem 3rem !important; 
        min-height: 80vh !important;
      }
      .filter-section { padding: 4rem 1rem !important; }
      .newsletter-section { padding: 4rem 1rem !important; }
    }

    @media (max-width: 480px) {
      .stats-container { grid-template-columns: 1fr !important; }
      .stat-card { 
        flex-direction: column !important; 
        text-align: center !important; 
        gap: 1rem !important;
      }
      .heading { font-size: 2.75rem !important; }
      .hero-section { padding: 3rem 1rem 2rem !important; }
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { 
        animation: none !important; 
        transition: none !important; 
      }
    }

    /* Amélioration de l'accessibilité */
    @media (prefers-color-scheme: dark) {
      .container { background-color: #0f172a !important; }
      .hero-section { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%) !important; }
      .filter-section { background: linear-gradient(180deg, #1e293b 0%, #334155 100%) !important; }
    }
  `
  document.head.appendChild(style)
}

export default Menu
