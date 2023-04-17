import React, { useEffect } from 'react';

function Logout() {
    useEffect(() => {
        localStorage.removeItem('token');
        window.location.href = '/';
    }, []);
}

export default Logout;