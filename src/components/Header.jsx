import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/product/1">Product 1</Link>
        <Link to="/product/2">Product 2</Link>
      </nav>
    </header>
  );
}

export default Header;
