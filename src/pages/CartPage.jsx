import React from "react";
import { useCart } from "../contexts/CartContext";
import styles from "./CartPage.module.css";

function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return <h2>Your cart is empty!</h2>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.cartHeader}>Your Shopping Cart</h1>
      <ul className={styles.cartList}>
        {cart.map((item) => (
          <li key={item.id} className={styles.cartItem}>
            <div className={styles.itemDetails}>
              <h3>{item.name}</h3>
              <p>Price: {item.price}:-</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <div className={styles.actions}>
              <button
                className={styles.actions}
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        className={`${styles.button} ${styles.clearButton}`}
        onClick={clearCart}
      >
        Clear Cart
      </button>
    </div>
  );
}

export default CartPage;
