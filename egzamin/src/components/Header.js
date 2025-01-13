import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartItems, loggedInUser, handleLogout }) => {
    return (
        <header className="bg-secondary text-white py-3">
            <div className="container d-flex justify-content-between align-items-center">
                <div>
                    <Link to="/" className="btn btn-light me-2">Strona główna</Link>
                    {loggedInUser ? (
                        <>
                            <span>Witaj, {loggedInUser.username}!</span>
                            {loggedInUser.role === 'admin' && (
                                <Link to="/admin" className="btn btn-light ms-3">
                                    Panel Admina
                                </Link>
                            )}
                            <button
                                onClick={handleLogout}
                                className="btn btn-light ms-3"
                            >
                                Wyloguj się
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="btn btn-light me-2">Logowanie</Link>
                            <Link to="/register" className="btn btn-light">Rejestracja</Link>
                        </>
                    )}
                </div>
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
