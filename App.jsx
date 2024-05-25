// App.jsx
import React, { useState } from 'https://cdn.skypack.dev/react';
import { products } from './data.js';
import Product from './components/Product.jsx';
import './style.css';

const App = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const [cart, setCart] = useState([]);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = selectedSize
    ? products.filter(product => product.sizes.includes(selectedSize))
    : products;

  return (
    <div className="App">
      <h1>Clothing Store</h1>
      
      <div>
        <label htmlFor="sizeFilter">Filter by size: </label>
        <select id="sizeFilter" value={selectedSize} onChange={handleSizeChange}>
          <option value="">All</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>

      <div className="product-list">
        {filteredProducts.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      <div className="cart">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} (Size: {item.selectedSize}) - ${item.price}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;