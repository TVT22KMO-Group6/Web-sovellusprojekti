import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const isAuthenticated = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            return false;
        }
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        return decodedToken.exp > Date.now() / 1000;
    };

    return isAuthenticated() ? children : <Navigate to="/" />;
}

export default ProtectedRoute;