// components/Product.jsx
import React, { useState } from 'https://cdn.skypack.dev/react';

const Product = ({ product, addToCart }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <div>
        <label htmlFor={`size-${product.id}`}>Size: </label>
        <select
          id={`size-${product.id}`}
          value={selectedSize}
          onChange={handleSizeChange}
        >
          {product.sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      <button onClick={() => addToCart({ ...product, selectedSize })}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;