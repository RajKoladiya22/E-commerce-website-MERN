import React from 'react';
import Container from 'react-bootstrap/esm/Container';

export const Footer = () => {
    return (
        <>
            <section className="foot">
                <div className="container">
                    <div className="row">
                        <div className="footer">
                            <div className="d-flex flex-wrap py-4 footer-start d-xs-none d-sm-none d-md-flex d-lg-flex d-xl-flex">
                                <div className="col-xxl-3 col-xl-3 col-md-6">
                                    <div className="footer-head b-r d-flex justify-content-md-start align-items-center">
                                        <img src="./public/img/product.svg" width={40} alt />
                                        <h2>Every Fresh Products</h2>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-3 col-md-6 ">
                                    <div className="footer-head b-r d-flex justify-content-xxl-center justify-content-md-start  align-items-center">
                                        <img src="./public/img/delivery.svg" width={40} alt />
                                        <h2>Free Delivery For Order Over $50</h2>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-3 col-md-6 ">
                                    <div className="footer-head b-r d-flex justify-content-xxl-center justify-content-md-start align-items-center">
                                        <img src="./public/img/discount.svg" width={40} alt />
                                        <h2>Daily Mega Discounts</h2>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-3 col-md-6 ">
                                    <div className="footer-head  d-flex justify-content-xxl-center justify-content-md-start  align-items-center">
                                        <img src="./public/img/market.svg" width={40} alt />
                                        <h2>Best Price On The Market</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-content d-flex flex-wrap py-5">
                                <div className="col-xxl-3 col-xl-3 col-xs-12 col-sm-6 col-lg-3">
                                    <div className="footer-content-1">
                                        <img src="./public/img/header.logo.png" width={160} alt />
                                        <p>We are a friendly bar serving a variety of cocktails, wines and beers. Our bar is a
                                            perfect place for a couple.</p>
                                        <a href="#">
                                            <h3><i className="ri-home-4-line" />1418 Riverwood Drive, CA 96052, US</h3>
                                        </a>
                                        <a href="#">
                                            <h3><i className="ri-mail-line" />support@fastkart.com</h3>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xxl-2 col-xl-2 col-xs-12 col-sm-6 col-lg-3">
                                    <div className="footer-content-2">
                                        <h3>Categories</h3>
                                        <ul>
                                            <li><a href="#">Vegetables &amp; Fruit</a></li>
                                            <li><a href="#">Beverages</a></li>
                                            <li><a href="#">Meats &amp; Seafood</a></li>
                                            <li><a href="#">Frozen Foods</a></li>
                                            <li><a href="#">Biscuits &amp; Snacks</a></li>
                                            <li><a href="#">Grocery &amp; Staples</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xxl-2 col-xl-2 col-xs-12 col-sm-3 col-lg-3">
                                    <div className="footer-content-3">
                                        <h3>Useful Links</h3>
                                        <ul>
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">Shop</a></li>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Blog</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xxl-2 col-xl-2 col-xs-12 col-sm-3 col-lg-3">
                                    <div className="footer-content-4">
                                        <h3>Help Center</h3>
                                        <ul>
                                            <li><a href="#">Your Order</a></li>
                                            <li><a href="#">Your Account</a></li>
                                            <li><a href="#">Track Order</a></li>
                                            <li><a href="#">Your Wishlist</a></li>
                                            <li><a href="#">Search</a></li>
                                            <li><a href="#">FAQ</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-3 col-xs-12 col-sm-6 col-lg-3">
                                    <div className="footer-content-5">
                                        <h3>Contact Us</h3>
                                        <div className="hotline d-flex align-items-center">
                                            <i className="fas fa-phone" />
                                            <div className="hotline-info ml-12">
                                                <p>Hotline 24/7 :</p>
                                                <span>+91 888 104 2340</span>
                                            </div>
                                        </div>
                                        <div className="hotline d-flex align-items-center">
                                            <i className="ri-mail-line" />
                                            <div className="hotline-info ml-12">
                                                <p>Email Address :</p>
                                                <span>fastkart@hotmail.com</span>
                                            </div>
                                        </div>
                                        <div className="app-download">
                                            <p>Download App :</p>
                                            <div className="app-img d-flex flex-wrap">
                                                <img src="./public/img/playstore.svg" className="img-fluid" alt />
                                                <img src="./public/img/appstore.svg" className="img-fluid" alt />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <footer className="d-flex flex-wrap text-center align-items-center py-4">
                                <div className="col-xxl-3 col-xl-3 col-xs-12 col-sm-12">
                                    <p>©2022 Fastkart All rights reserved</p>
                                </div>
                                <div className="col-xxl-2 col-xl-2 col-xs-12 col-sm-12" />
                                <div className="col-xxl-2 col-xl-2 col-xs-12 col-sm-12">
                                    <img src="./public/img/footer.png" className="img-fluid" alt />
                                </div>
                                <div className="col-xxl-2 col-xl-2 col-xs-12 col-sm-12" />
                                <div className="col-xxl-3 col-xl-3 col-xs-12 col-sm-12 d-flex flex-wrap align-items-center justify-content-center">
                                    <p>Stay connected : </p>
                                    <a href="#"><i className="ri-facebook-fill" /></a>
                                    <a href="#"><i className="ri-twitter-fill" /></a>
                                    <a href="#"><i className="ri-instagram-line" /></a>
                                    <a href="#"><i className="ri-pinterest-line" /></a>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===Rs-foot-fixed-start===  */}
            <section className="rs-foot d-sm-block d-xs-block d-md-none d-lg-none d-xl-none d-xxl-none">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="rs-box">
                        <a href="/index" className="d-flex flex-column align-items-center">
                            <i className="ri-home-4-line" />
                            <h6>Home</h6>
                        </a>
                    </div>
                    <div className="rs-box">
                        <a href="#" className="d-flex flex-column align-items-center">
                            <i className="ri-list-check-2" />
                            <h6>Category</h6>
                        </a>
                    </div>
                    <div className="rs-box">
                        <a href="#" className="d-flex flex-column align-items-center">
                            <i className="ri-search-line" />
                            <h6>Search</h6>
                        </a>
                    </div>
                    <div className="rs-box">
                        <a href="/CartPage" className="d-flex flex-column align-items-center">
                            <i className="ri-heart-line" />
                            <h6>My Wish</h6>
                        </a>
                    </div>
                    <div className="rs-box">
                        <a href="/CartPage" className="d-flex flex-column align-items-center">
                            <i className="ri-shopping-bag-line" />
                            <h6>Cart</h6>
                        </a>
                    </div>
                </div>
            </section>
            {/* ===Rs-foot-fixed-end=== */}
        </>

    );
}

