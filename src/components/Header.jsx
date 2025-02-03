import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import styles from "./Header.module.css";

function Header() {
  const { cart } = useCart();

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navLinks}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </div>
        <div className={styles.cartContainer}>
          <Link to="/cart" className={styles.link}>
            Cart
          </Link>
          {totalQuantity > 0 && (
            <span className={styles.cartBadge}>{totalQuantity}</span>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
