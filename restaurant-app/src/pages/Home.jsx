import { Link } from "react-router-dom";

// Images testées qui s'affichent correctement (Unsplash) - Tailles agrandies
const heroImg = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80";
const experienceImg = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80";
const pizzaImg = "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&q=80";
const burgerImg = "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80";
const dessertImg = "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80";

const Home = () => {
  return (
    <div style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>
            Bienvenue chez <span style={{ color: "#f03328" }}>Foodie</span>
          </h1>
          <p style={styles.heroParagraph}>
            Découvrez des plats délicieux préparés avec passion et des ingrédients frais.
          </p>
          <Link to="/menu" style={styles.button}>Voir le menu</Link>
        </div>
        <img src={heroImg} alt="Restaurant Foodie" style={styles.heroImage} />
      </section>

      {/* POURQUOI NOUS CHOISIR */}
      <section style={styles.whyUs}>
        <img src={experienceImg} alt="Chef en cuisine" style={styles.whyImage} />
        <div style={styles.whyText}>
          <h2 style={styles.whyTitle}>L'expérience Foodie</h2>
          <p style={styles.whyParagraph}>
            Chez <span style={{ color: "#f03328", fontWeight: "bold" }}>Foodie</span>, on ne fait pas que cuisiner :<br />
            on crée des <strong>moments inoubliables</strong>.<br />
            Goûtez à la différence d'un restaurant où qualité, saveur et passion se rencontrent.
          </p>
          <ul style={styles.benefitsList}>
            <li>🍽️ Produits 100% frais et locaux</li>
            <li>👨‍🍳 Chefs passionnés et créatifs</li>
            <li>⚡ Service rapide et attentionné</li>
            <li>🏅 Hygiène et qualité irréprochables</li>
          </ul>
        </div>
      </section>

      {/* NOS SPÉCIALITÉS */}
      <section style={styles.specials}>
        <h2 style={styles.specialsTitle}>Nos spécialités</h2>
        <div style={styles.cards}>
          <div style={styles.card}>
            <img src={pizzaImg} alt="Pizza au feu de bois" style={styles.cardImg} />
            <h3 style={styles.cardHeading}>Pizza au feu de bois</h3>
            <p style={styles.cardParagraph}>Cuite dans un four traditionnel avec des ingrédients bio.</p>
          </div>
          <div style={styles.card}>
            <img src={burgerImg} alt="Burger gourmet" style={styles.cardImg} />
            <h3 style={styles.cardHeading}>Burger gourmet</h3>
            <p style={styles.cardParagraph}>Steak frais, cheddar fondant et pain maison.</p>
          </div>
          <div style={styles.card}>
            <img src={dessertImg} alt="Dessert maison" style={styles.cardImg} />
            <h3 style={styles.cardHeading}>Desserts faits maison</h3>
            <p style={styles.cardParagraph}>Crèmes, tartes, et douceurs sucrées pour finir en beauté.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: "#fffaf5",
    minHeight: "100vh",
  },
  hero: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "6rem 3rem",
    gap: "3rem",
    flexWrap: "wrap",
    maxWidth: "1400px",
    margin: "0 auto",
  },
  heroText: {
    textAlign: "center",
    maxWidth: "600px",
  },
  heroTitle: {
    fontSize: "4rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
    color: "#1f2937",
  },
  heroParagraph: {
    fontSize: "1.375rem",
    color: "#4b5563",
    marginBottom: "2rem",
    lineHeight: "1.8",
  },
  heroImage: {
    width: "100%",
    maxWidth: "500px",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
  },
  button: {
    display: "inline-block",
    marginTop: "1.5rem",
    padding: "1rem 2rem",
    backgroundColor: "#f03328",
    color: "#fff",
    border: "none",
    borderRadius: "9999px",
    cursor: "pointer",
    fontSize: "1.125rem",
    fontWeight: "600",
    boxShadow: "0 6px 12px rgba(240, 51, 40, 0.3)",
    textDecoration: "none",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  whyUs: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "4rem 3rem",
    gap: "3rem",
    flexWrap: "wrap-reverse",
    backgroundColor: "#fffaf5",
    maxWidth: "1400px",
    margin: "4rem auto",
    borderRadius: "12px",
  },
  whyImage: {
    width: "100%",
    maxWidth: "450px",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
  },
  whyText: {
    textAlign: "center",
    maxWidth: "600px",
  },
  whyTitle: {
    fontSize: "3.5rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
    color: "#f03328",
  },
  whyParagraph: {
    fontSize: "1.25rem",
    color: "#374151",
    marginBottom: "1.5rem",
    lineHeight: "1.8",
  },
  benefitsList: {
    listStyleType: "none",
    padding: 0,
    marginTop: "1.5rem",
    lineHeight: "2.5",
    color: "#4b5563",
    fontSize: "1.125rem",
  },
  specials: {
    padding: "5rem 3rem",
    textAlign: "center",
    maxWidth: "1400px",
    margin: "0 auto",
  },
  specialsTitle: {
    marginBottom: "4rem",
    fontSize: "3.5rem",
    fontWeight: "bold",
    color: "#f03328",
  },
  cards: {
    display: "flex",
    gap: "3rem",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  card: {
    width: "100%",
    maxWidth: "350px",
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  cardImg: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "1.5rem",
  },
  cardHeading: {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "1rem",
    color: "#1f2937",
  },
  cardParagraph: {
    color: "#6b7280",
    fontSize: "1.125rem",
    lineHeight: "1.6",
  },
};

// Ajouter des effets hover avec JavaScript si nécessaire
const addHoverEffects = () => {
  const button = document.querySelector('a[href="/menu"]');
  const cards = document.querySelectorAll('.card');

  if (button) {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-2px)';
      button.style.boxShadow = '0 6px 12px rgba(240, 51, 40, 0.4)';
    });

    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0)';
      button.style.boxShadow = '0 4px 6px rgba(240, 51, 40, 0.3)';
    });
  }

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
      card.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
    });
  });
};

export default Home;