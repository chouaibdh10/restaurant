import { Link } from "react-router-dom";
import { useEffect } from "react";

// Images testées qui s'affichent correctement (Unsplash) - Tailles agrandies
const heroImg = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80";
const experienceImg = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80";
const pizzaImg = "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&q=80";
const burgerImg = "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80";
const dessertImg = "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80";

const Home = () => {
  useEffect(() => {
    addHoverEffects();
  }, []);

  return (
    <div style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.heroText}>
            <h1 style={styles.heroTitle}>
              Bienvenue chez <span style={styles.brandName}>Foodie</span>
            </h1>
            <p style={styles.heroParagraph}>
              Découvrez des plats délicieux préparés avec passion et des ingrédients frais dans une ambiance chaleureuse et authentique.
            </p>
            <Link to="/menu" style={styles.ctaButton} className="cta-button">
              Voir le menu
            </Link>
          </div>
          <div style={styles.heroImageContainer}>
            <img src={heroImg} alt="Restaurant Foodie" style={styles.heroImage} />
            <div style={styles.heroImageOverlay}></div>
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS CHOISIR */}
      <section style={styles.whyUs}>
        <div style={styles.whyContent}>
          <div style={styles.whyImageContainer}>
            <img src={experienceImg} alt="Chef en cuisine" style={styles.whyImage} />
            <div style={styles.whyImageBadge}>
              <span style={styles.badgeText}>✨ Excellence</span>
            </div>
          </div>
          <div style={styles.whyText}>
            <h2 style={styles.whyTitle}>L'expérience Foodie</h2>
            <p style={styles.whyParagraph}>
              Chez <span style={styles.brandHighlight}>Foodie</span>, nous ne faisons pas que cuisiner : nous créons des <strong>moments inoubliables</strong>. Chaque plat raconte une histoire, chaque saveur éveille vos sens.
            </p>
            <div style={styles.benefitsGrid}>
              {[
                { icon: "🍽️", title: "Produits frais", desc: "100% locaux et de saison" },
                { icon: "👨‍🍳", title: "Chefs passionnés", desc: "Créativité et savoir-faire" },
                { icon: "⚡", title: "Service premium", desc: "Rapide et attentionné" },
                { icon: "🏅", title: "Qualité garantie", desc: "Hygiène irréprochable" }
              ].map((benefit, index) => (
                <div key={index} style={styles.benefitItem}>
                  <span style={styles.benefitIcon}>{benefit.icon}</span>
                  <div>
                    <strong style={styles.benefitTitle}>{benefit.title}</strong>
                    <p style={styles.benefitDesc}>{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NOS SPÉCIALITÉS */}
      <section style={styles.specials}>
        <div style={styles.specialsHeader}>
          <h2 style={styles.specialsTitle}>Nos spécialités</h2>
          <p style={styles.specialsSubtitle}>
            Des créations culinaires qui réveilleront vos papilles
          </p>
        </div>
        <div style={styles.cards}>
          {[
            {
              img: pizzaImg,
              title: "Pizza au feu de bois",
              desc: "Cuite dans notre four traditionnel avec des ingrédients bio sélectionnés",
              price: "À partir de 12€"
            },
            {
              img: burgerImg,
              title: "Burger gourmet",
              desc: "Steak de bœuf français, cheddar affiné et pain artisanal maison",
              price: "À partir de 15€"
            },
            {
              img: dessertImg,
              title: "Desserts faits maison",
              desc: "Crèmes onctueuses, tartes croustillantes et douceurs sucrées",
              price: "À partir de 7€"
            }
          ].map((item, index) => (
            <div key={index} style={styles.card} className="specialty-card">
              <div style={styles.cardImageContainer}>
                <img src={item.img} alt={item.title} style={styles.cardImg} />
                <div style={styles.cardOverlay}>
                  <span style={styles.cardPrice}>{item.price}</span>
                </div>
              </div>
              <div style={styles.cardContent}>
                <h3 style={styles.cardHeading}>{item.title}</h3>
                <p style={styles.cardParagraph}>{item.desc}</p>
                <div style={styles.cardAction}>
                  <span style={styles.actionText}>Découvrir →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: "#fffbf7",
    minHeight: "100vh",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  
  // HERO SECTION
  hero: {
    background: "linear-gradient(135deg, #fffbf7 0%, #fff4ed 100%)",
    position: "relative",
    overflow: "hidden",
  },
  heroContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8rem 3rem",
    gap: "4rem",
    maxWidth: "1400px",
    margin: "0 auto",
    flexWrap: "wrap",
  },
  heroText: {
    flex: "1",
    minWidth: "400px",
    maxWidth: "600px",
  },
  heroTitle: {
    fontSize: "4.5rem",
    fontWeight: "800",
    marginBottom: "2rem",
    color: "#1a1a1a",
    lineHeight: "1.1",
    letterSpacing: "-0.02em",
  },
  brandName: {
    color: "#f03328",
    background: "linear-gradient(45deg, #f03328, #ff6b47)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  heroParagraph: {
    fontSize: "1.375rem",
    color: "#64748b",
    marginBottom: "3rem",
    lineHeight: "1.7",
    fontWeight: "400",
  },
  heroImageContainer: {
    flex: "1",
    position: "relative",
    minWidth: "400px",
    maxWidth: "550px",
  },
  heroImage: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    borderRadius: "24px",
    boxShadow: "0 25px 50px rgba(240, 51, 40, 0.2)",
  },
  heroImageOverlay: {
    position: "absolute",
    top: "20px",
    right: "20px",
    width: "80px",
    height: "80px",
    background: "linear-gradient(45deg, #f03328, #ff6b47)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    boxShadow: "0 8px 25px rgba(240, 51, 40, 0.3)",
  },
  ctaButton: {
    display: "inline-block",
    padding: "1.25rem 2.5rem",
    background: "linear-gradient(45deg, #f03328, #ff6b47)",
    color: "#fff",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    fontSize: "1.125rem",
    fontWeight: "600",
    textDecoration: "none",
    boxShadow: "0 8px 25px rgba(240, 51, 40, 0.3)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    overflow: "hidden",
  },

  // WHY US SECTION
  whyUs: {
    padding: "8rem 3rem",
    backgroundColor: "#fff",
    position: "relative",
  },
  whyContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "5rem",
    maxWidth: "1400px",
    margin: "0 auto",
    flexWrap: "wrap-reverse",
  },
  whyImageContainer: {
    flex: "1",
    position: "relative",
    minWidth: "400px",
    maxWidth: "500px",
  },
  whyImage: {
    width: "100%",
    height: "450px",
    objectFit: "cover",
    borderRadius: "24px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
  },
  whyImageBadge: {
    position: "absolute",
    top: "-15px",
    left: "-15px",
    background: "linear-gradient(45deg, #fbbf24, #f59e0b)",
    padding: "12px 20px",
    borderRadius: "50px",
    boxShadow: "0 8px 25px rgba(251, 191, 36, 0.3)",
  },
  badgeText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: "0.875rem",
  },
  whyText: {
    flex: "1",
    minWidth: "400px",
    maxWidth: "600px",
  },
  whyTitle: {
    fontSize: "4rem",
    fontWeight: "800",
    marginBottom: "2rem",
    color: "#1a1a1a",
    lineHeight: "1.1",
  },
  whyParagraph: {
    fontSize: "1.25rem",
    color: "#64748b",
    marginBottom: "3rem",
    lineHeight: "1.8",
  },
  brandHighlight: {
    color: "#f03328",
    fontWeight: "700",
  },
  benefitsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.5rem",
  },
  benefitItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
    padding: "1.5rem",
    backgroundColor: "#f8fafc",
    borderRadius: "16px",
    border: "1px solid #e2e8f0",
    transition: "all 0.3s ease",
  },
  benefitIcon: {
    fontSize: "2rem",
    padding: "8px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  },
  benefitTitle: {
    color: "#1a1a1a",
    fontSize: "1.125rem",
    fontWeight: "600",
    marginBottom: "4px",
  },
  benefitDesc: {
    color: "#64748b",
    fontSize: "0.875rem",
    margin: "0",
  },

  // SPECIALS SECTION
  specials: {
    padding: "8rem 3rem",
    backgroundColor: "#fffbf7",
  },
  specialsHeader: {
    textAlign: "center",
    marginBottom: "5rem",
    maxWidth: "600px",
    margin: "0 auto 5rem auto",
  },
  specialsTitle: {
    fontSize: "4rem",
    fontWeight: "800",
    color: "#1a1a1a",
    marginBottom: "1rem",
    lineHeight: "1.1",
  },
  specialsSubtitle: {
    fontSize: "1.25rem",
    color: "#64748b",
    lineHeight: "1.6",
    margin: "0",
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "2.5rem",
    maxWidth: "1400px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    border: "1px solid #f1f5f9",
  },
  cardImageContainer: {
    position: "relative",
    overflow: "hidden",
  },
  cardImg: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    transition: "transform 0.4s ease",
  },
  cardOverlay: {
    position: "absolute",
    top: "16px",
    right: "16px",
    background: "rgba(0,0,0,0.8)",
    backdropFilter: "blur(10px)",
    padding: "8px 16px",
    borderRadius: "20px",
  },
  cardPrice: {
    color: "#fff",
    fontWeight: "600",
    fontSize: "0.875rem",
  },
  cardContent: {
    padding: "2rem",
  },
  cardHeading: {
    fontSize: "1.5rem",
    fontWeight: "700",
    marginBottom: "1rem",
    color: "#1a1a1a",
  },
  cardParagraph: {
    color: "#64748b",
    fontSize: "1rem",
    lineHeight: "1.6",
    marginBottom: "1.5rem",
  },
  cardAction: {
    borderTop: "1px solid #f1f5f9",
    paddingTop: "1.5rem",
  },
  actionText: {
    color: "#f03328",
    fontWeight: "600",
    fontSize: "0.875rem",
    letterSpacing: "0.5px",
  },
};

// Effets hover améliorés
const addHoverEffects = () => {
  // Style pour le bouton CTA
  const style = document.createElement('style');
  style.textContent = `
    .cta-button:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 12px 35px rgba(240, 51, 40, 0.4);
    }
    
    .specialty-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 50px rgba(0,0,0,0.15);
    }
    
    .specialty-card:hover img {
      transform: scale(1.05);
    }
    
    @media (max-width: 768px) {
      .heroTitle { font-size: 3rem !important; }
      .whyTitle { font-size: 3rem !important; }
      .specialsTitle { font-size: 3rem !important; }
      .heroContent { padding: 4rem 2rem !important; }
      .whyContent { padding: 4rem 2rem !important; }
    }
  `;
  document.head.appendChild(style);
};

export default Home;