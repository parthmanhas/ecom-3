import React, { useState } from "react";

const Cart = () => {
  const [product, setProducts] = useState([]);

  function addToCart(product) {
    setProducts(product);
  }

  function removeFromCart(productToRemove) {
      setProducts(product.filter(product => product !== productToRemove));
  }

  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
};

export default Cart;
