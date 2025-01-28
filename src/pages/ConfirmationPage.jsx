import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ConfirmationPage.module.css";

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderDetails = location.state?.orderDetails;

  if (!orderDetails) {
    return (
      <div className={styles.container}>
        <h1 className={styles.header}>Order Not Found!</h1>
        <button className={styles.button} onClick={() => navigate("/")}>
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Thank you for your purchase!</h1>
      <p>Your order has been placed successfully.</p>

      <h2>Order Summary:</h2>
      <ul className={styles.summary}>
        {orderDetails.items.map((item) => (
          <li key={item.id}>
            <span>
              {item.name} x {item.quantity}
            </span>
            <span>{item.price * item.quantity} :-</span>
          </li>
        ))}
      </ul>

      <h3 className={styles.total}>Total: {orderDetails.totalPrice} :-</h3>
      <div className={styles.details}>
        <p>
          <strong>Order ID:</strong> {orderDetails.orderId}
        </p>
        <p>
          <strong>Name:</strong> {orderDetails.customerInfo.name}
        </p>
        <p>
          <strong>Email:</strong> {orderDetails.customerInfo.email}
        </p>
        <p>
          <strong>Address:</strong> {orderDetails.customerInfo.address}
        </p>
      </div>

      <button className={styles.button} onClick={() => navigate("/")}>
        Continue Shopping
      </button>
    </div>
  );
};

export default ConfirmationPage;
