import { useCart } from "../context/CartContext";

function MenuItem({ name, description, price, image, id }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({ id, name, price });
  };

  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p style={styles.price}>${price.toFixed(2)}</p>
      <button onClick={handleAdd} style={styles.button}>Add to Cart</button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "1rem",
    width: "250px",
    textAlign: "center",
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  price: {
    color: "#f03328",
    fontWeight: "bold",
  },
  button: {
    marginTop: "0.5rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#f03328",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default MenuItem;
