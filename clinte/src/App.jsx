import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Home } from './assets/pages/home/home'
import { Register } from './assets/pages/registerPage/register'
import { LoginPage } from './assets/pages/registerPage/loginPage'
import { ProtectedRoute } from './assets/utils/ProtectedRoute'
import { useEffect } from 'react'
import { LOGOUT_USER } from './assets/redux/action/loginAction';


export const App = () => {
  const dispatch = useDispatch();


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/' element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

