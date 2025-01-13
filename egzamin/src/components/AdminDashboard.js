import React, { useState } from 'react';

const AdminDashboard = ({ loggedInUser, addProduct }) => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');

    if (!loggedInUser || loggedInUser.role !== 'admin') {
        return <p>Brak dostępu. Zaloguj się jako administrator.</p>;
    }

    const handleAddProduct = (e) => {
        e.preventDefault();
        if (!productName || !productPrice) {
            alert('Wypełnij wszystkie pola.');
            return;
        }

        const newProduct = {
            id: Date.now(), 
            name: productName,
            price: parseFloat(productPrice),
        };

        addProduct(newProduct); 
        setProductName('');
        setProductPrice('');
        alert('Produkt został dodany!');
    };

    return (
        <div>
            <h2>Panel Administratora</h2>
            <form onSubmit={handleAddProduct}>
                <div className="mb-3">
                    <label htmlFor="productName" className="form-label">Nazwa produktu</label>
                    <input
                        type="text"
                        className="form-control"
                        id="productName"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productPrice" className="form-label">Cena produktu</label>
                    <input
                        type="number"
                        className="form-control"
                        id="productPrice"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Dodaj produkt</button>
            </form>
        </div>
    );
};

export default AdminDashboard;
