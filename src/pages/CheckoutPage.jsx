import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useLocation } from "react-router-dom";
import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
  const location = useLocation();
  const { cart } = location.state || {};
  const { calculateTotalPrice } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return <h2>Thank you for your order!</h2>;
  }

  return (
    <div className={styles.container}>
      <h1>Checkout</h1>

      <h2>Your Cart:</h2>
      <ul className={styles.cartList}>
        {cart?.map((item) => (
          <li key={item.id} className={styles.cartItem}>
            <h3>{item.name}</h3>
            <p>Price: {item.price}:-</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: {item.price * item.quantity}:-</p>
          </li>
        ))}
      </ul>
      <h3>
        Total Price:
        {calculateTotalPrice()}:-
      </h3>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address">Address</label>
          <input
            type="address"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Place Order
        </button>
      </form>
    </div>
  );
}

export default CheckoutPage;
