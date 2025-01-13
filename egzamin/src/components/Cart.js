import React from 'react';

const Cart = ({ cartItems, clearCart, removeFromCart }) => {
    const payment = () => {
        alert('Dziękujemy za zakupy! Twoje zamówienie zostało złożone.');
        clearCart(); 
    };

    return (
        <div>
            <h2>Koszyk</h2>
            {cartItems.length === 0 ? (
                <p>Koszyk jest pusty.</p>
            ) : (
                <div>
                    <ul className="list-group mb-4">
                        {cartItems.map((item, index) => (
                            <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                                {item.name} - {item.price} zł
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => removeFromCart(item)}
                                >
                                    Usuń
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-warning" onClick={clearCart}>
                            Wyczyść koszyk
                        </button>
                        <button className="btn btn-success" onClick={payment}>
                            Zapłać
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
