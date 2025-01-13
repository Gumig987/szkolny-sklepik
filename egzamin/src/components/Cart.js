import React from 'react';

const Cart = ({
    cartItems,
    clearCart,
    removeFromCart,
    placeOrder,
    orderHistory,
    loggedInUser,
}) => {
    return (
        <div>
            <h2>Koszyk</h2>
            {cartItems.length === 0 ? (
                <p>Koszyk jest pusty.</p>
            ) : (
                <ul className="list-group mb-4">
                    {cartItems.map((item, index) => (
                        <li
                            className="list-group-item d-flex justify-content-between align-items-center"
                            key={index}
                        >
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
            )}
            <div className="d-flex justify-content-between">
                <button className="btn btn-warning" onClick={clearCart}>
                    Wyczyść koszyk
                </button>
                <button
                    className="btn btn-success"
                    onClick={placeOrder}
                    disabled={!loggedInUser}
                >
                    Złóż zamówienie
                </button>
            </div>

            <hr />

            <h3>Historia zamówień</h3>
            {orderHistory.length === 0 ? (
                <p>Nie złożono jeszcze żadnych zamówień.</p>
            ) : (
                <ul className="list-group">
                    {orderHistory.map((order) => (
                        <li key={order.id} className="list-group-item">
                            <strong>Zamówienie z dnia:</strong> {order.date}
                            <ul>
                                {order.items.map((item, idx) => (
                                    <li key={idx}>
                                        {item.name} - {item.price} zł
                                    </li>
                                ))}
                            </ul>
                            <p>
                                <strong>Zamawiający:</strong> {order.user}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
