import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './assets/pages/home/home';
import Cart from './assets/pages/cart/cart';
import { Register } from './assets/pages/registerPage/register';
import { LoginPage } from './assets/pages/registerPage/loginPage';

export const Pages = () => {
    return (
        <>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<LoginPage/>} />
            </Routes>
        </>
    );
}

