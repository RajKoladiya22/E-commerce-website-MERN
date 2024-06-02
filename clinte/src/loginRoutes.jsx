import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Register } from './assets/pages/registerPage/register';
import { LoginPage } from './assets/pages/registerPage/loginPage';

export const LoginRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<LoginPage/>} />
            </Routes>
        </>
    );
}
