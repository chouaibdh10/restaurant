import { useState } from "react";
import menuItems from "../data/menuData";
import MenuItem from "../components/MenuItem";

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Récupérer toutes les catégories uniques
  const categories = ["All", ...new Set(menuItems.map((item) => item.category))];

  // Filtrer selon la catégorie choisie
  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div style={styles.container}>
      <h1>Our Menu</h1>

      {/* Boutons de catégorie */}
      <div style={styles.buttons}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              ...styles.button,
              backgroundColor: selectedCategory === cat ? "#f03328" : "#fff",
              color: selectedCategory === cat ? "#fff" : "#000",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Affichage des plats */}
      <div style={styles.grid}>
        {filteredItems.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  buttons: {
    margin: "1rem 0",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "1rem",
  },
  button: {
    padding: "0.5rem 1rem",
    border: "1px solid #f03328",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  },
  grid: {
    display: "flex",
    gap: "2rem",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "2rem",
  },
};

export default Menu;
