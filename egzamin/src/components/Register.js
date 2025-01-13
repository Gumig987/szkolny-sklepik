import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({ registerUser, loggedInUser }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        role: 'user', 
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.username || !formData.password || !formData.confirmPassword) {
            alert('Wypełnij wszystkie pola.');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert('Hasła muszą się zgadzać.');
            return;
        }

        const newUser = {
            username: formData.username,
            password: formData.password,
            role: loggedInUser && loggedInUser.role === 'admin' ? formData.role : 'user',
        };

        const success = registerUser(newUser);
        if (success) {
            navigate('/login'); 
        }
    };

    return (
        <div>
            <h2>Rejestracja</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Nazwa użytkownika</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Hasło</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Potwierdź hasło</label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                {loggedInUser && loggedInUser.role === 'admin' && (
                    <div className="mb-3">
                        <label htmlFor="role" className="form-label">Rola</label>
                        <select
                            id="role"
                            name="role"
                            className="form-control"
                            value={formData.role}
                            onChange={handleChange}
                        >
                            <option value="user">Użytkownik</option>
                            <option value="admin">Administrator</option>
                        </select>
                    </div>
                )}
                <button type="submit" className="btn btn-primary">Zarejestruj się</button>
            </form>
        </div>
    );
};

export default Register;
