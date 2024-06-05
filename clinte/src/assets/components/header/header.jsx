import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ProtectedRoute } from '../../utils/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT_USER } from '../../redux/action/loginAction';




export const Header = () => {
    
        const dispatch = useDispatch();


        const    userdata = JSON.parse(localStorage.getItem('user')) || ""


    return (
        <>
            {/* ===top-bar-start=== */}
           
            {/* ===top-bar-end=== */}
            {/* ===header-start=== */}
            <section>
                <header>
                    <div className="true container">
                        <div className="true row">
                            <div className="true top-header">
                                <div className="true col-xxl-12 col-xs-12 col-sm-12 col-md-12 col-sm-12 d-flex justify-content-between  align-items-center">
                                    <div className="true col-xs-4 d-xs-flex d-sm-flex d-xl-none">
                                        <div className="true rs-side-bar">
                                            <div data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i className="true ri-bar-chart-horizontal-fill" /></div>
                                            <div className="true offcanvas offcanvas-start" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                                                <div className="true offcanvas-header">
                                                    <h5 id="offcanvasWithBothOptionsLabel">Menu</h5>
                                                    <button type="button" className="true btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                                                </div>
                                                <div className="true offcanvas-body">
                                                    <nav className>
                                                        <ul className>
                                                            <li> <Link to={'/'}>
                                                                <h3>Home</h3>
                                                            </Link></li>
                                                            <li><a href="#" className="true d-flex justify-content-between">
                                                                <h3>Shop</h3> <i className="true ri-arrow-down-s-line" />
                                                            </a>
                                                                <div className="true page-drop">
                                                                    <ul>
                                                                        <li><a href="#">Shop Category Slider</a></li>
                                                                        <li><a href="#">Shop Top Filter</a></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li><a href="#" className="true d-flex justify-content-between">
                                                                <h3>Product</h3> <i className="true ri-arrow-down-s-line" />
                                                            </a>
                                                                <div className="true page-drop">
                                                                    <ul>
                                                                        <li><a href="/Product4ImgPage">Product 4 Image</a>
                                                                        </li>
                                                                        <li><a href="#">Product Thumnail</a></li>
                                                                        <li><a href="#">Product Bundle</a></li>
                                                                        <li><a href="#">Product Slider</a></li>
                                                                        <li><a href="#">Product Sticky</a></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li><a href="#" className="true d-flex justify-content-between">
                                                                <h3>Mega Menu</h3> <i className="true ri-arrow-down-s-line" />
                                                            </a>
                                                                <div className="true mega-menu flex-wrap">
                                                                    <div className="true col-12">
                                                                        <h3>Daily Vegetables</h3>
                                                                        <ul>
                                                                            <li><a href="#">Beans &amp; Brinjals</a></li>
                                                                            <li><a href="#">Broccoli &amp; Cauliflower</a></li>
                                                                            <li><a href="#">Chilies, Garlic</a></li>
                                                                            <li><a href="#">Vegetables &amp; Salads</a></li>
                                                                            <li><a href="#">Gourd &amp; Cucumber</a></li>
                                                                            <li><a href="#">Herbs &amp; Sprouts</a></li>
                                                                            <li><a href="#">Lettuce &amp; Leafy</a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="true col-12">
                                                                        <h3>Baby Tender</h3>
                                                                        <ul>
                                                                            <li><a href="#">Beans &amp; Brinjals</a></li>
                                                                            <li><a href="#">Broccoli &amp; Cauliflower</a></li>
                                                                            <li><a href="#">Chilies, Garlic</a></li>
                                                                            <li><a href="#">Vegetables &amp; Salads</a></li>
                                                                            <li><a href="#">Gourd &amp; Cucumber</a></li>
                                                                            <li><a href="#">Potatoes &amp; Tomatoes</a></li>
                                                                            <li><a href="#">Peas &amp; Corn</a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="true col-12">
                                                                        <h3>Daily Vegetables</h3>
                                                                        <ul>
                                                                            <li><a href="#">Asparagus &amp; Artichokes</a></li>
                                                                            <li><a href="#">Avocados &amp; Peppers</a></li>
                                                                            <li><a href="#">Broccoli &amp; Zucchini</a></li>
                                                                            <li><a href="#">Celey, Fennel &amp; Leeks</a></li>
                                                                            <li><a href="#">Chilies &amp; Lime</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li><a href="#" className="true d-flex justify-content-between">
                                                                <h3>Blog</h3> <i className="true ri-arrow-down-s-line" />
                                                            </a>
                                                                <div className="true page-drop">
                                                                    <ul>
                                                                        <li><a href="/BlogDetailsPage">Blog Details</a></li>
                                                                        <li><a href="/BlogGridPage">Blog Grid</a></li>
                                                                        <li><a href="/BlogListPage">Blog list</a></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li><a href="#" className="true d-flex justify-content-between">
                                                                <h3>Pages</h3> <i className="true ri-arrow-down-s-line" />
                                                            </a>
                                                                <div className="true page-drop">
                                                                    <ul>
                                                                        <li><a href="/CartPage">Cart</a></li>
                                                                        <li><a href="/ChekoutPage">Chekout</a></li>
                                                                        <li><a href="/OrderSuccessPage">Oreder Success</a>
                                                                        </li>
                                                                        <li><a href="/AboutUsPage">About Us</a></li>
                                                                        <li><a href="/otp">OTP</a></li>
                                                                        <li><a href="/FaqPage">FAQ</a></li>
                                                                        <li><a href="/ContactPage">Contact</a></li>
                                                                        <li><a href="/404">404</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="true label">New</div>
                                                            </li>
                                                            <li><Link to={'/admin'} className="true d-flex justify-content-between">
                                                                <h3>Seller</h3> <i className="true ri-arrow-down-s-line" />
                                                            </Link>
                                                                <div className="true page-drop">
                                                                    <ul>
                                                                        <li><a href="#">Become a Seller</a></li>
                                                                        <li><a href="#">Seller Deshboard</a></li>
                                                                        <li><a href="#">Seller Detail</a></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="true col-xxl-2 col-xs-6  d-flex align-items-center">
                                        <div className="true header-logo">
                                            <a href="/index"><img src="./public/img/header.logo.png" className="true img-fluid" alt /></a>
                                        </div>
                                    </div>
                                    <div className="true col-xxl-6  d-flex align-items-center justify-content-between  d-xs-none d-sm-none d-md-flex d-xl-flex">
                                        <div className="true col-xxl-3">
                                            <div className="true location">
                                                {/* Button trigger modal */}
                                                <button type="button" className="true btn d-flex justify-content-between align-items-center w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <div className="true loc-i"><i className="true ri-map-pin-line" /></div>
                                                    <h3 className="true d-md-none d-xl-flex">Your Location</h3> <i className="true ri-arrow-down-s-line d-md-none d-xl-flex" />
                                                </button>
                                                {/* Modal */}
                                                <div className="true modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div className="true modal-dialog">
                                                        <div className="true modal-content">
                                                            <div className="true modal-header flex-wrap">
                                                                <span className>Choose your Delivery Location</span>
                                                                <h4 className="true modal-title" id="exampleModalLabel">Enter your
                                                                    address and we will specify the offer for your area.
                                                                </h4>
                                                                <button type="button" className="true btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                            </div>
                                                            <div className="true modal-body">
                                                                <div className="true loacation-search">
                                                                    <i className="true ri-search-line" />
                                                                    <input type="text" placeholder="Search Your Area" />
                                                                </div>
                                                                <h4>Select a Location</h4>
                                                                <div className="true location-model">
                                                                    <ul>
                                                                        <li className>
                                                                            <a href="/index" className="true text-dark d-flex align-items-center justify-content-between">
                                                                                <h5>Alabama</h5><span>Min:$130</span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" className="true text-dark d-flex align-items-center justify-content-between">
                                                                                <h5>California</h5><span>Min:$130</span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" className="true text-dark d-flex align-items-center justify-content-between">
                                                                                <h5>Florida</h5><span>Min:$130</span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" className="true text-dark d-flex align-items-center justify-content-between">
                                                                                <h5>Georgia</h5><span>Min:$130</span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" className="true text-dark d-flex align-items-center justify-content-between">
                                                                                <h5>Kansas</h5><span>Min:$130</span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" className="true text-dark d-flex align-items-center justify-content-between">
                                                                                <h5>Minnesota</h5><span>Min:$130</span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" className="true text-dark d-flex align-items-center justify-content-between">
                                                                                <h5>New Yor</h5><span>Min:$130</span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" className="true text-dark d-flex align-items-center justify-content-between">
                                                                                <h5>Washington</h5><span>Min:$130</span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="true col-xxl-8 d-md-none d-xl-flex">
                                            <div className="true search-bar d-flex align-items-center w-100">
                                                <input type="text" placeholder="I'm Searching for..." />
                                                <div className="true search-bar-i"><a href="#"><i className="true ri-search-line" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="true col-xxl-4 col-xs-4  d-flex justify-content-end">
                                        <div className="true header-right d-flex align-items-center">
                                            <div className="true md-search d-xs-none d-sm-none d-md-flex d-xl-none">
                                                <i className="true ri-search-line" />
                                                <input type="text" placeholder="Search..." />
                                            </div>
                                            <span className="true header-desh d-xs-none d-sm-none d-md-flex d-xl-none">|</span>
                                            <div className="true header-call d-flex align-items-center d-xs-none d-sm-none d-md-flex ">
                                                <i className="true ri-phone-line" />
                                                <div className="true d-md-none d-xl-flex">
                                                    <div className>
                                                        <span>24/7 Delivery</span>
                                                        <h5>+91 888 104 2340</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="true header-desh d-xs-none d-sm-none d-md-flex">|</span>
                                            <div className="true like-i d-xs-none d-sm-none d-md-flex">
                                                <a href="#">
                                                    <i className="true ri-heart-line" />
                                                </a>
                                            </div>
                                            <span className="true header-desh d-xs-none d-sm-none d-md-flex">|</span>
                                            <div className="true cart-i d-xs-none d-sm-none d-md-flex">
                                                <a href="#">
                                                    <i className="true ri-shopping-cart-line" />
                                                </a>
                                                <div className="true cart-notification">
                                                    <a href="#">2</a>
                                                </div>
                                                <div className="true cart-preview">

                                                    <div className="true cart-item d-flex">
                                                        <a href="#" className="true cart-close"><i className="true ri-close-line" /></a>
                                                        <div className="true product-img">
                                                            <img src='./public/img/favicon.png' width={85} alt />
                                                        </div>
                                                        <div className="true product detail">
                                                            <div className="true product-name">
                                                                <h4><a href="#">
                                                                    xyz
                                                                </a></h4>
                                                            </div>
                                                            <div className="true product-price">
                                                                <h4><a href="#"><span>1 x</span>
                                                                    100
                                                                </a></h4>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="true cart-preview-bottom">
                                                        <div className="true total-price d-flex justify-content-between align-items-center">
                                                            <h5>Total :</h5>
                                                            <h6><a href="#">10000</a></h6>
                                                        </div>
                                                        <div className="true cart-botton d-flex justify-content-between align-items-center">
                                                            <div className="true cart-view">
                                                                <a href="/#">View Cart</a>
                                                            </div>
                                                            <div className="true cart-chekout">
                                                                <a href="/#">Chekout</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="true header-desh d-xs-none d-sm-none d-md-flex">|</span>
                                            <div className="true header-user d-flex align-items-center">
                                                <i className="true ri-user-3-line" />
                                                <div className="true d-xs-none d-sm-none d-xl-flex">
                                                    <div className>
                                                        <span>Hello,</span>
                                                        <h5>{userdata.name  && userdata.name ? userdata.name :  'Guest'}</h5>

                                                    </div>
                                                </div>
                                                
                                                {
                                                    userdata && userdata.name ? (
                                                        <div className="true user-box">
                                                    <ul>
                                                        <li><a href="Forgot-Password.html">
                                                            <h3>Forgot Password</h3>
                                                        </a></li>
                                                        <li><a onClick={()=>dispatch(LOGOUT_USER())}>
                                                            <h3>Log Outt</h3>
                                                        </a></li>
                                                    </ul>
                                                </div>
                                                    ) : (
                                                        <div className="true user-box">
                                                    <ul>
                                                        <li><Link to={'/login'}>
                                                            <h3>Log in</h3>
                                                        </Link></li>
                                                        <li><Link to={'/register'}>
                                                            <h3>Register</h3>
                                                        </Link></li>
                                                        {/* <li><a href="Forgot-Password.html">
                                                            <h3>Forgot Password</h3>
                                                        </a></li> */}
                                                       
                                                    </ul>
                                                </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </section>
            {/* ===header-end=== */}
            {/* ===nevigetion-start=== */}
            <section className="true nav-bg d-xs-none d-sm-none d-xl-flex">
                <div className="true container">
                    <div className="true row">
                        <div className="true col-xxl-12 col-xl-12  ">
                            {/* <div className="true "> */}
                            <div className="true nevigetion d-flex align-items-center">
                                <div className="true col-xxl-2 col-xl-2">
                                    <div className="true categories">
                                        <button>
                                            <a href="#">
                                                <i className="true ri-bar-chart-horizontal-line" /> All
                                                Categories
                                            </a>
                                        </button>
                                        <div className="true categories-list">
                                            <ul>
                                                <li>
                                                    <a href="#" className="true d-flex align-items-center justify-content-between">
                                                        <div className="true d-flex align-items-center">
                                                            <img src="<%= cat.cat_icon %>" width={23} alt />
                                                            <h3>
                                                                cat.cat_name
                                                            </h3>
                                                        </div>
                                                        <i className="true ri-arrow-right-s-line" />
                                                    </a>
                                                    <div className="true categories-list-2 d-flex" style={{ top: '0% !important' }}>

                                                        <div className="true col-xxl-6">
                                                            <h3>Original</h3>
                                                            <ul>

                                                                <li><a href="#">
                                                                    subcategory.subcat_name
                                                                </a></li>

                                                            </ul>
                                                        </div>

                                                    </div>
                                                </li>



                                                <li>
                                                    <a href="#" className="true d-flex align-items-center justify-content-between">
                                                        <div className="true d-flex align-items-center"><img src="./public/img/meat.png" width={23} alt />
                                                            <h3>Meats &amp; Seafood</h3>
                                                        </div><i className="true ri-arrow-right-s-line" />
                                                    </a>
                                                    <div className="true categories-list-3 d-flex">
                                                        <div className="true col-xxl-6">
                                                            <h3>Origanal Vegetables</h3>
                                                            <ul>
                                                                <li><a href="#">Potato &amp; Tomato</a></li>
                                                                <li><a href="#">Cucumber &amp; Capsicums</a></li>
                                                                <li><a href="#">Leafy Vegetables</a></li>
                                                                <li><a href="#">Root Vegetables</a></li>
                                                                <li><a href="#">Beeans &amp; Okra</a></li>
                                                                <li><a href="#">Cabbage &amp; Cauliflower</a></li>
                                                                <li><a href="#">Gourd &amp; Drumstick</a></li>
                                                                <li><a href="#">Specialty</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="true col-xxl-6">
                                                            <h3>Fresh Fruit</h3>
                                                            <ul>
                                                                <li><a href="#">Banana &amp; Papaya</a></li>
                                                                <li><a href="#">Kiwi, Citrus Fruit</a></li>
                                                                <li><a href="#">Apples &amp; Pomegranate</a></li>
                                                                <li><a href="#">Seasonal Fruits</a></li>
                                                                <li><a href="#">Mangoes</a></li>
                                                                <li><a href="#">Fruit Baskets</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="#" className="true d-flex align-items-center justify-content-between">
                                                        <div className="true d-flex align-items-center"><img src="./public/img/croissant.png" width={23} alt />
                                                            <h3>Breakfast &amp; Dairy</h3>
                                                        </div><i className="true ri-arrow-right-s-line" />
                                                    </a>
                                                    <div className="true categories-list-4 d-flex">
                                                        <div className="true col-xxl-6">
                                                            <h3>Origanal Vegetables</h3>
                                                            <ul>
                                                                <li><a href="#">Potato &amp; Tomato</a></li>
                                                                <li><a href="#">Cucumber &amp; Capsicums</a></li>
                                                                <li><a href="#">Leafy Vegetables</a></li><a href="#">
                                                                </a><li><a href="#" /><a href="#">Root Vegetables</a></li>
                                                                <li><a href="#">Beeans &amp; Okra</a></li>
                                                                <li><a href="#">Cabbage &amp; Cauliflower</a></li>
                                                                <li><a href="#">Gourd &amp; Drumstick</a></li>
                                                                <li><a href="#">Specialty</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="true col-xxl-6">
                                                            <h3>Fresh Fruit</h3>
                                                            <ul>
                                                                <li><a href="#">Banana &amp; Papaya</a></li>
                                                                <li><a href="#">Kiwi, Citrus Fruit</a></li>
                                                                <li><a href="#">Apples &amp; Pomegranate</a></li>
                                                                <li><a href="#">Seasonal Fruits</a></li>
                                                                <li><a href="#">Mangoes</a></li>
                                                                <li><a href="#">Fruit Baskets</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="#" className="true d-flex align-items-center justify-content-between">
                                                        <div className="true d-flex align-items-center"><img src="./public/img/cookies.png" width={23} alt />
                                                            <h3>Biscuis &amp; Snacks</h3>
                                                        </div><i className="true ri-arrow-right-s-line" />
                                                    </a>
                                                    <div className="true categories-list-5 d-flex">
                                                        <div className="true col-xxl-6">
                                                            <h3>Origanal Vegetables</h3>
                                                            <ul>
                                                                <li><a href="#">Potato &amp; Tomato</a></li>
                                                                <li><a href="#">Cucumber &amp; Capsicums</a></li>
                                                                <li><a href="#">Leafy Vegetables</a></li><a href="#">
                                                                </a><li><a href="#" /><a href="#">Root Vegetables</a></li>
                                                                <li><a href="#">Beeans &amp; Okra</a></li>
                                                                <li><a href="#">Cabbage &amp; Cauliflower</a></li>
                                                                <li><a href="#">Gourd &amp; Drumstick</a></li>
                                                                <li><a href="#">Specialty</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="true col-xxl-6">
                                                            <h3>Fresh Fruit</h3>
                                                            <ul>
                                                                <li><a href="#">Banana &amp; Papaya</a></li>
                                                                <li><a href="#">Kiwi, Citrus Fruit</a></li>
                                                                <li><a href="#">Apples &amp; Pomegranate</a></li>
                                                                <li><a href="#">Seasonal Fruits</a></li>
                                                                <li><a href="#">Mangoes</a></li>
                                                                <li><a href="#">Fruit Baskets</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="#" className="true d-flex align-items-center justify-content-between">
                                                        <div className="true d-flex align-items-center"><img src="./public/img/grocery.svg" width={23} alt />
                                                            <h3>Grocery &amp; Steples</h3>
                                                        </div><i className="true ri-arrow-right-s-line" />
                                                    </a>
                                                    <div className="true categories-list-6 d-flex">
                                                        <div className="true col-xxl-6">
                                                            <h3>Origanal Vegetables</h3>
                                                            <ul>
                                                                <li><a href="#">Potato &amp; Tomato</a></li>
                                                                <li><a href="#">Cucumber &amp; Capsicums</a></li>
                                                                <li><a href="#">Leafy Vegetables</a></li><a href="#">
                                                                </a><li><a href="#" /><a href="#">Root Vegetables</a></li>
                                                                <li><a href="#">Beeans &amp; Okra</a></li>
                                                                <li><a href="#">Cabbage &amp; Cauliflower</a></li>
                                                                <li><a href="#">Gourd &amp; Drumstick</a></li>
                                                                <li><a href="#">Specialty</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="true col-xxl-6">
                                                            <h3>Fresh Fruit</h3>
                                                            <ul>
                                                                <li><a href="#">Banana &amp; Papaya</a></li>
                                                                <li><a href="#">Kiwi, Citrus Fruit</a></li>
                                                                <li><a href="#">Apples &amp; Pomegranate</a></li>
                                                                <li><a href="#">Seasonal Fruits</a></li>
                                                                <li><a href="#">Mangoes</a></li>
                                                                <li><a href="#">Fruit Baskets</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>


                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="true col-xxl-8 col-xl-8 d-flex justify-content-center">
                                    <nav className="true col-xxl-8 col-xl-10">
                                        <ul className="true d-flex justify-content-between">
                                            <li>
                                                <Link to={'/'}><h3>Home</h3></Link>
                                            </li>
                                            <li><Link to={'/cart'} className="true d-flex align-items-center">
                                                <h3>Shop</h3> <i className="true ri-arrow-down-s-line" />
                                            </Link>
                                                <div className="true page-drop">
                                                    <ul>
                                                        <li><Link to={'/home'}>Shop Category Slider</Link></li>
                                                        <li><Link to={'/home'}>Shop Top Filter</Link></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li><Link href="#" className="true d-flex align-items-center">
                                                <h3>Product</h3> <i className="true ri-arrow-down-s-line" />
                                            </Link>
                                                <div className="true page-drop">
                                                    <ul>
                                                        <li><Link to={'/home'}>Product 4 Image</Link></li>
                                                        <li><Link to={'/home'}>Product Thumnail</Link></li>
                                                        <li><Link to={'/home'}>Product Bundle</Link></li>
                                                        <li><Link to={'/home'}>Product Slider</Link></li>
                                                        <li><Link to={'/home'}>Product Sticky</Link></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li><a href="#" className="true d-flex align-items-center">
                                                <h3>Mega Menu</h3> <i className="true ri-arrow-down-s-line" />
                                            </a>
                                                <div className="true mega-menu d-flex">
                                                    <div className="true col-3">
                                                        <h3>Daily Vegetables</h3>
                                                        <ul>
                                                            <li><a href="#">Beans &amp; Brinjals</a></li>
                                                            <li><a href="#">Broccoli &amp; Cauliflower</a></li>
                                                            <li><a href="#">Chilies, Garlic</a></li>
                                                            <li><a href="#">Vegetables &amp; Salads</a></li>
                                                            <li><a href="#">Gourd &amp; Cucumber</a></li>
                                                            <li><a href="#">Herbs &amp; Sprouts</a></li>
                                                            <li><a href="#">Lettuce &amp; Leafy</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="true col-3">
                                                        <h3>Baby Tender</h3>
                                                        <ul>
                                                            <li><a href="#">Beans &amp; Brinjals</a></li>
                                                            <li><a href="#">Broccoli &amp; Cauliflower</a></li>
                                                            <li><a href="#">Chilies, Garlic</a></li>
                                                            <li><a href="#">Vegetables &amp; Salads</a></li>
                                                            <li><a href="#">Gourd &amp; Cucumber</a></li>
                                                            <li><a href="#">Potatoes &amp; Tomatoes</a></li>
                                                            <li><a href="#">Peas &amp; Corn</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="true col-3">
                                                        <h3>Daily Vegetables</h3>
                                                        <ul>
                                                            <li><a href="#">Asparagus &amp; Artichokes</a></li>
                                                            <li><a href="#">Avocados &amp; Peppers</a></li>
                                                            <li><a href="#">Broccoli &amp; Zucchini</a></li>
                                                            <li><a href="#">Celey, Fennel &amp; Leeks</a></li>
                                                            <li><a href="#">Chilies &amp; Lime</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li><a href="#" className="true d-flex align-items-center">
                                                <h3>Blog</h3> <i className="true ri-arrow-down-s-line" />
                                            </a>
                                                <div className="true page-drop">
                                                    <ul>
                                                        <li><a href="/BlogDetailsPage">Blog Details</a></li>
                                                        <li><a href="/BlogGridPage">Blog Grid</a></li>
                                                        <li><a href="/BlogListPage">Blog list</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li><a href="#" className="true d-flex align-items-center">
                                                <h3>Pages</h3> <i className="true ri-arrow-down-s-line" />
                                            </a>
                                                <div className="true page-drop">
                                                    <ul>
                                                        <li><a href="/CartPage">Cart</a></li>
                                                        <li><a href="/ChekoutPage">Chekout</a></li>
                                                        <li><a href="/OrderSuccessPage">Oreder Success</a></li>
                                                        <li><a href="/AboutUsPage">About Us</a></li>
                                                        <li><a href="/OtpPage">OTP</a></li>
                                                        <li><a href="/FaqPage">FAQ</a></li>
                                                        <li><a href="/ContactPage">Contact</a></li>
                                                        <li><a href="/404">404</a></li>
                                                    </ul>
                                                </div>
                                                <div className="true label">New</div>
                                            </li>
                                            <li><Link to={'/admin'} className="true d-flex align-items-center">
                                                
                                                {userdata.role === 'admin' ? <h3>Admin</h3> : ''}
                                                
                                            </Link>
                                                
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="true col-xxl-2 col-xl-2">
                                    <div className="true deal d-flex justify-content-center">
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                            <h3><i className="true fas fa-bolt" /> Deal Today</h3>
                                        </a>
                                        {/* Modal */}
                                        <div className="true modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div className="true modal-dialog">
                                                <div className="true modal-content">
                                                    <div className="true modal-head">
                                                        <h2>Deal Today</h2>
                                                        <h3>Recommended deals for you.</h3>
                                                        <button type="button" className="true btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                    </div>
                                                    <div className="true modal-body">
                                                        <div className="true deal-list">
                                                            <a href="#">
                                                            </a><div className="true deal-box-1 d-flex align-items-center"><a href="#">
                                                                <div className="true product-img">
                                                                    <img src="./public/img/coffe.png" width={80} alt />
                                                                </div>
                                                            </a><div className="true product-detail"><a href="#">
                                                            </a><div className="true product-name"><a href="#">
                                                            </a><h4><a href="#">
                                                            </a><a href="#">Blended Instant Coffe 50 g
                                                                Buy 1
                                                                Get 1 Free</a>
                                                                        </h4>
                                                                    </div>
                                                                    <div className="true product-price">
                                                                        <h4>
                                                                            <a href="#">$52.57 <span>57.62</span>
                                                                                <h4>500 G</h4>
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="true deal-box-2 d-flex align-items-center">
                                                                <div className="true product-img">
                                                                    <img src="/public/assets/img/bread.png" width={80} alt />
                                                                </div>
                                                                <div className="true product-detail">
                                                                    <div className="true product-name">
                                                                        <h4>
                                                                            <a href="#">Blended Instant Coffee 50 g
                                                                                Buy
                                                                                1 Get 1 Free</a>
                                                                        </h4>
                                                                    </div>
                                                                    <div className="true product-price">
                                                                        <h4>
                                                                            <a href="#">$52.57 <span>57.62</span>
                                                                                <h4>500 G</h4>
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="true deal-box-3 d-flex align-items-center">
                                                                <div className="true product-img">
                                                                    <img src="/public/assets/img/potato.png" width={80} alt />
                                                                </div>
                                                                <div className="true product-detail">
                                                                    <div className="true product-name">
                                                                        <h4>
                                                                            <a href="#">Blended Instant Coffe 50 g
                                                                                Buy 1
                                                                                Get 1 Free</a>
                                                                        </h4>
                                                                    </div>
                                                                    <div className="true product-price">
                                                                        <h4>
                                                                            <a href="#">$52.57 <span>57.62</span>
                                                                                <h4>500 G</h4>
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="true deal-box-4 d-flex align-items-center">
                                                                <div className="true product-img">
                                                                    <img src="/public/assets/img/mirch.png" width={80} alt />
                                                                </div>
                                                                <div className="true product-detail">
                                                                    <div className="true product-name">
                                                                        <h4>
                                                                            <a href="#">Blended Instant Coffe 50 g
                                                                                Buy 1
                                                                                Get 1 Free</a>
                                                                        </h4>
                                                                    </div>
                                                                    <div className="true product-price">
                                                                        <h4>
                                                                            <a href="#">$52.57 <span>57.62</span>
                                                                                <h4>500 G</h4>
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* ===nevigetion-end=== */}


        </>
    );
}

