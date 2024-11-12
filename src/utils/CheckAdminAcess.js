// src/utils/CheckAdminAcess.js

import jwtDecode from 'jwt-decode';

const checkAdminAccess = () => {
    if (typeof window !== 'undefined') {
        // Safely access localStorage
        const token = localStorage.getItem('Token');
        
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                return decodedToken.isAdmin;
            } catch (error) {
                console.error('Invalid token:', error);
                return false;
            }
        }
    }

    // If it's server-side or token is not present, return false
    return false;
};

export default checkAdminAccess;
