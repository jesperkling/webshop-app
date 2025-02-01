import React from "react";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import styles from "./CartPage.module.css";

function CartPage() {
  const {
    cart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    calculateTotalPrice,
  } = useCart();

  const totalPrice = calculateTotalPrice();

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
              <img src={item.image} alt={item.name} className={styles.image} />
              <h3>{item.title}</h3>
              <p>Price: {item.price}:-</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <div className={styles.actions}>
              <button
                className={styles.button}
                onClick={() => increaseQuantity(item.id)}
              >
                +
              </button>
              <span>{item.quantity}</span>
              <button
                className={styles.button}
                onClick={() => decreaseQuantity(item.id)}
              >
                -
              </button>
              <button
                className={styles.button}
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h3 className={styles.totalPrice}>Total: {totalPrice}:-</h3>
      <button
        className={`${styles.button} ${styles.clearButton}`}
        onClick={clearCart}
      >
        Clear Cart
      </button>

      <Link to="/checkout" state={{ cart }}>
        <button className={styles.checkoutButton}>Proceed to checkout</button>
      </Link>
    </div>
  );
}

export default CartPage;
