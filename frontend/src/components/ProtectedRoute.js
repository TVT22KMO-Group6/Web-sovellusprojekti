import React from 'react';
import { Navigate } from 'react-router-dom';

// ProtectedRoute component responsible for protecting routes from unauthenticated access
function ProtectedRoute({ children }) {
    // Helper function to check if the user is authenticated based on their JWT token
    const isAuthenticated = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            return false;
        }
        // Decode the token and check if it's still valid
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        return decodedToken.exp > Date.now() / 1000;
    };
    // Render the children if the user is authenticated, otherwise navigate to the root path
    return isAuthenticated() ? children : <Navigate to="/" />;
}

export default ProtectedRoute;