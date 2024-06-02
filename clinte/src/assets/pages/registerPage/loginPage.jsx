import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { LOGIN_USER } from '../../redux/action/loginAction';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handdalSubmit =(e)=> {
        e.preventDefault();
        let obj ={
            email, password
        }
        dispatch(LOGIN_USER(obj, navigate));
        
    }
    return (
        <>
            <section className="login-head">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex align-items-center justify-content-between">
                                <h2>Log In</h2>
                                <div className="d-flex align-items-center">
                                    {/* <a href="/index"><i class="fas fa-home"></i></a> */}
                                    <span>Log In</span>
                                    <i className="ri-arrow-right-s-line" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="login-page">
                <div className="container">
                    <div className="row">
                        <div className="login-contain">
                            <div className="col-xxl-12 d-flex  align-items-center py-5">
                                <div className="col-xxl-6 col-lg-6 d-flex justify-content-end d-xs-none d-sm-none d-md-none d-lg-flex">
                                    <img src="./public/img/log-in.png" className="img-fluid" alt />
                                </div>
                                <div className="col-xxl-6 col-xs-12 col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center">
                                    <div className=" col-xxl-8 d-flex justify-content-end">
                                        <div className="login-container d-flex ">
                                            <div className>
                                                <h2>Welcome To Fastkart</h2>
                                                <span>Log In Your Account</span>
                                            </div>
                                            <form onSubmit={handdalSubmit}>
                                                <div className="form-group">
                                                    <input type="email" id="email" onChange={(e)=> setEmail(e.target.value)} value={email} placeholder="Email address" required />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" id="password" onChange={(e)=> setPassword(e.target.value)} value={password} placeholder="Password" required />
                                                </div>
                                                <div className="form-group d-flex align-items-center justify-content-between">
                                                    <div className="d-flex">
                                                        <input type="checkbox" id="remember" name="remember" />
                                                        <label htmlFor="remember">Remember me</label>
                                                    </div>
                                                    <a href="/forgotpassword">Forgot Password?</a>
                                                </div>
                                                <a href="#">
                                                    <button type="submit" className="login-btn" >Login</button>
                                                </a>
                                            </form>
                                            <h6><span>OR</span></h6>
                                            <div className="options ">
                                                <a href="#"><button className="login-facebook"><i className="ri-facebook-fill fb" />Login
                                                    with Facebook</button></a>
                                                <a href="#"><button className="login-google"><i className="ri-google-fill gl" />Login with
                                                    Google</button></a>
                                            </div>
                                            <h6 />
                                            <div className="sign-up text-center d-flex justify-content-center">
                                                <p>Don't have an account?</p> <a href="/signup">Sign up</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    );
}
