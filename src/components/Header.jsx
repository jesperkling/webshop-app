import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import styles from "./Header.module.css";

function Header() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();
  const [showDropdown, setShowDropdown] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navLinks}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </div>
        <div
          className={styles.cartContainer}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/cart" className={styles.link}>
            Cart ({cart.length})
          </Link>
          {showDropdown && (
            <div
              className={styles.cartDropdown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div key={item.id} className={styles.cartItem}>
                    <Link to={`/product/${item.id}`}>
                      <img src={item.image} alt={item.title} />
                    </Link>
                    <div>
                      <Link to={`/product/${item.id}`}>
                        <p>{item.title}</p>
                      </Link>
                      <p>
                        {item.quantity} x {item.price}:- ={" "}
                        {item.quantity * item.price} :-
                      </p>
                      <div className={styles.cartItemActions}>
                        <button
                          className={styles.actionButton}
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          -
                        </button>
                        <p>{item.quantity}</p>
                        <button
                          className={styles.actionButton}
                          onClick={() => increaseQuantity(item.id)}
                        >
                          +
                        </button>
                        <button
                          className={`${styles.actionButton} ${styles.removeButton}`}
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className={styles.emptyCart}>Your cart is empty</p>
              )}
              <Link to="/cart" className={styles.viewCartButton}>
                View Cart
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
