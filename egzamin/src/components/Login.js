import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoggedInUser, users }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = users.find(
            (u) => u.username === formData.username && u.password === formData.password
        );

        if (user) {
            setLoggedInUser(user);
            navigate('/'); 
        } else {
            alert('Nieprawidłowe dane logowania.');
        }
    };

    return (
        <div>
            <h2>Logowanie</h2>
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
                <button type="submit" className="btn btn-primary">Zaloguj się</button>
            </form>
        </div>
    );
};

export default Login;
