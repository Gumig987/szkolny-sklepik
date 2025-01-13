import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartItems }) => {
    return (
        <header className="bg-secondary text-white py-3" style={{ minHeight: '8vh' }}>
            <div className="container d-flex justify-content-between align-items-center">
                {}
                <div>
                    <Link to="/" className="btn btn-light me-2">
                        Strona główna
                    </Link>
                    <Link to="/login" className="btn btn-light me-2">
                        Logowanie
                    </Link>
                    <Link to="/register" className="btn btn-light">
                        Rejestracja
                    </Link>
                </div>

                {}
                <div>
                    <Link to="/cart" className="btn btn-light">
                        Koszyk ({cartItems.length})
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
