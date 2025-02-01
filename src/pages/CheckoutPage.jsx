import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
  const navigate = useNavigate();
  const { cart, calculateTotalPrice } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderDetails = {
      items: cart,
      totalPrice: calculateTotalPrice(),
      customerInfo: formData,
      orderId: `ORDER-${Math.floor(Math.random() * 1000000)}`,
    };

    navigate("/confirmation", { state: { orderDetails } });
  };

  return (
    <div className={styles.container}>
      <h1>Checkout</h1>

      <h2>Your Cart:</h2>
      <ul className={styles.cartList}>
        {cart?.map((item) => (
          <li key={item.id} className={styles.cartItem}>
            <img src={item.image} alt={item.name} className={styles.image} />
            <h3>{item.title}</h3>
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
