import React from "react";
import products from "../services/products";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to my webshop</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}:-</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
      <p>Browse our amazing products</p>
    </div>
  );
}

export default Home;
