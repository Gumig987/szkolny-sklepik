import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import Login from './components/Login';
import Register from './components/Register';
import AdminDashboard from './components/AdminDashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const removeFromCart = (productToRemove) => {
        setCartItems(cartItems.filter((item) => item !== productToRemove));
    };

    return (
        <Router>
            <div>
                <Header cartItems={cartItems} />
                <main className="container my-4" style={{ minHeight: '79vh' }}>
                    <Routes>
                        <Route path="/" element={<ProductList addToCart={addToCart} />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/admin" element={<AdminDashboard />} />
                        <Route
                            path="/cart"
                            element={
                                <Cart
                                    cartItems={cartItems}
                                    clearCart={clearCart}
                                    removeFromCart={removeFromCart}
                                />
                            }
                        />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
