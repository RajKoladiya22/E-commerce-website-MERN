import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { REGISTER_USER } from '../../redux/action/loginAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== cpassword) {
            toast("Password and Confirm Password are not the same");
        } else {
            let data = {
                name,
                email,
                role,
                password
            };

            dispatch(REGISTER_USER(data, navigate));
            setName('');
            setEmail('');
            setRole('');
            setPassword('');
            setCPassword('')
        }

        setCPassword("");
    };

    return (
        <>
            {/* <section className="login-head p-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="d-flex align-items-center justify-content-between">
                                <h2>Sign In</h2>
                                <div className="d-flex align-items-center">
                                    <Link to={'/home'}><i className="fas fa-home" /></Link>
                                    <i className="ri-arrow-right-s-line" />
                                    <span>Sign In</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="register-page">
                <div className="container">
                    <div className="row">
                        <div className="login-contain">
                            <div className="col-xxl-12 col-xl-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 d-flex align-items-center py-5 ">
                                <div className="col-xxl-6 col-xl-6 col-lg-6 d-xs-none d-sm-none d-flex justify-content-end  d-sm-none d-md-none d-lg-flex">
                                    <img src="./public/img/sign-up.png" className="img-fluid d-xs-none" alt='sign-up' />
                                </div>
                                <div className="col-xxl-6 col-xs-12 col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center">
                                    <div className="col-xxl-8 w-md-80 w-xs-100">
                                        <div className="login-container">
                                            <div>
                                                <h2>Welcome To Fastkart</h2>
                                                <span>Create New Account</span>
                                            </div>
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <input type="text" id="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Full Name" required />
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email address" required />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" id="email" onChange={(e) => setRole(e.target.value)} value={role} placeholder="Admin or User" required />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" required />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" id="cpassword" onChange={(e) => setCPassword(e.target.value)} value={cpassword} placeholder="Confirm Password" required />
                                                </div>
                                                <div className="form-group d-flex align-items-center justify-content-between">
                                                    <div className="d-flex">
                                                        <input type="checkbox" id="remember" name="remember" />
                                                        <label htmlFor="remember">I agree with <a href="#">terms</a> and <a href="#">Privacy</a></label>
                                                    </div>
                                                </div>
                                                <button type="submit" className="login-btn" value="submit">Sign Up</button>
                                            </form>
                                            <h6><span>OR</span></h6>
                                            <div className="options">
                                                <a href="#"><button className="login-facebook"><i className="ri-facebook-fill fb" />Sign Up with Facebook</button></a>
                                                <a href="#"><button className="login-google"><i className="ri-google-fill gl" />Sign Up with Google</button></a>
                                            </div>
                                            <h6 />
                                            <div className="sign-up text-center">
                                                <p>Already have an account?</p> <a href="/">Log In</a>
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
