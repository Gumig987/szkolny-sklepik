import React from 'react';

const products = [
  { id: 1, name: 'Kanapka', price: 5, description: 'Pyszna kanapka', availability: true },
  { id: 2, name: 'Sok', price: 3, description: 'Świeży sok owocowy', availability: true },
  { id: 3, name: 'Długopis', price: 1.5, description: 'Czarny długopis', availability: true },
  { id: 4, name: 'Zeszyt', price: 4, description: 'Zeszyt 60 kartek w kratke', availability: true },
  { id: 5, name: 'Woda', price: 1, description: 'Woda niegazowana 1,5L', availability: true },
  { id: 6, name: 'Guma do żucia', price: 2, description: 'małe gumy do żucia', availability: true },
];

const ProductList = ({ addToCart }) => {
  return (
      <div className="row">
          {products.map((product) => (
              <div className="col-md-4" key={product.id}>
                  <div className="card mb-4">
                      <div className="card-body">
                          <h5 className="card-title">{product.name}</h5>
                          <p className="card-text">Cena: {product.price} zł</p>
                          <button
                              className="btn btn-primary"
                              onClick={() => addToCart(product)}
                          >
                              Dodaj do koszyka
                          </button>
                      </div>
                  </div>
              </div>
          ))}
      </div>
  );
};

export default ProductList;