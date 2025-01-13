import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">Cena: {product.price} zł</p>
        <button className="btn btn-primary" disabled={!product.availability}>
          {product.availability ? 'Dodaj do koszyka' : 'Niedostępny'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;