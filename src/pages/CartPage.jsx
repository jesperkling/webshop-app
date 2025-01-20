import React from "react";
import { useCart } from "../contexts/CartContext";

function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return <h2>Your cart is empty!</h2>;
  }

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <div>
              <h3>{item.name}</h3>
              <p>Price: {item.price}:-</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default CartPage;
