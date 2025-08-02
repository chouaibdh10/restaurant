import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Your cart is empty 🛒</h2>;
  }

  return (
    <div style={styles.container}>
      <h2>Your Cart</h2>
      <ul style={styles.list}>
        {cartItems.map((item) => (
          <li key={item.id} style={styles.item}>
            <span>{item.name} × {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <h3 style={styles.total}>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "600px",
    margin: "auto",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
    borderBottom: "1px solid #eee",
    paddingBottom: "0.5rem",
  },
  total: {
    marginTop: "1.5rem",
    color: "#f03328",
  },
};

export default Cart;
