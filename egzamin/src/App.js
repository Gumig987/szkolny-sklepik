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
    const [products, setProducts] = useState([
        { id: 1, name: 'Kanapka', price: 5 },
        { id: 2, name: 'Sok', price: 3 },
    ]);
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [orderHistory, setOrderHistory] = useState([]);
    const [users, setUsers] = useState([
        { username: 'admin', password: 'admin123', role: 'admin' }, 
    ]); 

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const removeFromCart = (productToRemove) => {
        setCartItems(cartItems.filter((item) => item !== productToRemove));
    };

    const addProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    const removeProduct = (productId) => {
        setProducts(products.filter((product) => product.id !== productId));
    };

    const placeOrder = () => {
        if (!loggedInUser) {
            alert('Musisz być zalogowany, aby złożyć zamówienie!');
            return;
        }

        if (cartItems.length === 0) {
            alert('Koszyk jest pusty!');
            return;
        }

        const newOrder = {
            id: Date.now(),
            items: [...cartItems],
            user: loggedInUser.username,
            date: new Date().toLocaleString(),
        };

        setOrderHistory([newOrder, ...orderHistory]);
        clearCart(); 
        alert('Zamówienie zostało złożone!');
    };

    const registerUser = (newUser) => {

        if (users.some((user) => user.username === newUser.username)) {
            alert('Użytkownik o tej nazwie już istnieje!');
            return false;
        }

        setUsers([...users, newUser]);
        alert('Użytkownik został zarejestrowany!');
        return true;
    };

    return (
        <Router>
            <div>
                <Header
                    cartItems={cartItems}
                    loggedInUser={loggedInUser}
                    handleLogout={() => setLoggedInUser(null)}
                />
                <main className="container my-4" style={{ minHeight: '79vh' }}>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <ProductList
                                    products={products}
                                    addToCart={addToCart}
                                    removeProduct={removeProduct}
                                    loggedInUser={loggedInUser}
                                />
                            }
                        />
                        <Route
                            path="/login"
                            element={<Login setLoggedInUser={setLoggedInUser} users={users} />}
                        />
                        <Route
                            path="/register"
                            element={<Register registerUser={registerUser} loggedInUser={loggedInUser} />}
                        />
                        <Route
                            path="/admin"
                            element={
                                <AdminDashboard
                                    loggedInUser={loggedInUser}
                                    addProduct={addProduct}
                                    removeProduct={removeProduct}
                                    products={products}
                                />
                            }
                        />
                        <Route
                            path="/cart"
                            element={
                                <Cart
                                    cartItems={cartItems}
                                    clearCart={clearCart}
                                    removeFromCart={removeFromCart}
                                    placeOrder={placeOrder}
                                    orderHistory={orderHistory}
                                    loggedInUser={loggedInUser}
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
