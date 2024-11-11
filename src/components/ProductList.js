import React from 'react';

const ProductList = ({ products }) => {
  if (!products.length) {
    return <p>No se encontraron productos.</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.thumbnail} alt={product.title} />
          <h2>{product.title}</h2>
          <p><strong>Precio: ${product.price}</strong></p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
