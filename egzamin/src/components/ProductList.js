import React from 'react';

const ProductList = ({ products, addToCart, removeProduct, loggedInUser }) => {
    return (
        <div className="row">
            {products.map((product) => (
                <div className="col-md-4" key={product.id}>
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">Cena: {product.price} zł</p>
                            <button
                                className="btn btn-primary me-2"
                                onClick={() => addToCart(product)}
                            >
                                Dodaj do koszyka
                            </button>
                            {loggedInUser && loggedInUser.role === 'admin' && (
                                <button
                                    className="btn btn-danger"
                                    onClick={() => removeProduct(product.id)}
                                >
                                    Usuń produkt
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
