// src/layouts/account/Login/Login.js

import React from 'react';
import LoginFrom from './LoginFrom/LoginFrom.js'; // Đảm bảo import đúng component

const Login = () => {
    const handleSubmit = (data) => {
        console.log('Form data:', data);
    };

    const handleCancel = () => {
        console.log('Form cancelled');
    };

    return (
        <div>
            <LoginFrom onSubmit={handleSubmit} onCancel={handleCancel} />
        </div>
    );
};

export default Login;
