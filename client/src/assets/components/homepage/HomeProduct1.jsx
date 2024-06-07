import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GET_PRODUCT } from '../../redux/action/productAction';
import { useDispatch, useSelector } from 'react-redux';
import '../../utils/loader.css'

export const HomeProduct1 = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.product);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        dispatch(GET_PRODUCT());
    }, [dispatch]);

    useEffect(() => {
        if (products.length !== product.length) {
            setProduct(products.data.product);

        }
    }, [products]);




    return (
        <>
            <ToastContainer />
            <section className="true product-section">
                <div className="true container">
                    <div className="true row">
                        {/* ===side-section-start=== */}
                        <div className="true col-xxl-3 col-xl-3 side-section d-xs-none d-sm-none d-xl-block d-xxl-block">
                            <div className="true side-category">
                                <h3>Category</h3>
                                <ul className="true side-category-list  d-flex flex-wrap">

                                    <li>
                                        <img src="./public/img/leaves.png" width={25} />
                                        <a href="#">
                                            cat.cat_name
                                        </a>
                                    </li>

                                </ul>
                                <ul className="true value-list gap-3 d-flex flex-wrap">
                                    <li>
                                        <a href="#">Value of the Day</a>
                                    </li>
                                    <li>
                                        <a href="#">Top 50 Offers</a>
                                    </li>
                                    <li>
                                        <a href="#">New Arrivals</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* ===side-section-end=== */}
                        <div className="true col-xxl-9 col-xl-9">
                            {/* ===top-save-today-start=== */}
                            <div className="true save-today">
                                <div className="true save-today-content d-flex flex-wrap justify-content-between">
                                    <div className>
                                        <h2>Top Save Today</h2>
                                        <span className="true leave">
                                            <div className="true leave-img">
                                                <img src="./public/img/leaves.png" alt="leaves" />
                                            </div>
                                        </span>
                                        <p>Don't miss this opportunity at a special discount just for this week.</p>
                                    </div>
                                    <div className="true d-flex justify-content-end align-items-center">
                                        <div className="true timer d-flex align-items-center">
                                            <span><i className="true ri-timer-line" /> Expire In &nbsp;</span>
                                            <p id="demo" />
                                        </div>
                                    </div>
                                </div>
                                <div className="true save-today-products">
                                    <div className="true slick-wrapper">
                                        <div id="slick1">
                                            <div className="true slide-item flex-wrap">
                                                {

                                                    !product.length ? <div className='loader-load text-center'>
                                                        <div className="boxify d-flex justify-content-center ">
                                                            <div class="fancy-spinner">
                                                                <div class="ring"></div>
                                                                <div class="ring"></div>
                                                                <div class="dot"></div>
                                                            </div>
                                                        </div>
                                                        <h4>Loading Product Data..</h4>
                                                    </div> :
                                                    product.map((val) => {
                                                        return (
                                                <div className="true product-box">
                                                    <div className="true product-img text-center">
                                                        <img src={val.productImage} className="true img-fluid" style={{ height: 120, objectFit: 'contain' }} />
                                                        <div className="true img-option">
                                                            <ul className="true d-flex">
                                                                <li>
                                                                    <a href="#" data-bs-toggle="tooltip" data-bs-title="Default tooltip"><i className="true ri-eye-line" /></a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"><i className="true ri-loop-right-line repeat" /></a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"><i className="true ri-heart-line" /></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="true product-content">
                                                        <h6>
                                                            {val.productName}
                                                        </h6>
                                                        <p>
                                                            &#x20B9;{val.productOfferPrice} <span>
                                                                {val.productPrice}
                                                            </span>
                                                        </p>
                                                        <i className="true fa-solid fa-star" style={{ color: '#ffb321' }} />
                                                        <i className="true fa-solid fa-star" style={{ color: '#ffb321' }} />
                                                        <i className="true fa-solid fa-star" style={{ color: '#ffb321' }} />
                                                        <i className="true fa-solid fa-star" style={{ color: '#ffb321' }} />
                                                        <i className="true fa-regular fa-star" style={{ color: '#ffb321' }} />

                                                        {
                                                            val.productStatus === 1 ? (
                                                                <span>In Stock</span>
                                                            ) : (
                                                                <span style={{ color: 'red' }}>Out of Stock</span>
                                                            )
                                                        }
                                                        <a href="/addtocart?id">
                                                            <button className="true btn-add-cart addcart-button" tabIndex={0}>
                                                                Add
                                                                <span className="true add-icon">
                                                                    <i className="true ri-add-line" />
                                                                </span>
                                                            </button>
                                                        </a>
                                                    </div>
                                                </div>
                                                )
                                                    })
                                                }


                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ===top-save-today-end=== */}
                            {/* ===Bowse-By-Categories-start=== */}
                            <div className="true top-category py-5">
                                <div className="true col-xxl-12">
                                    <div className="true top-category-content">
                                        <h2>Bowse By Categories</h2>
                                        <span className="true leave">
                                            <div className="true leave-img">
                                                <img src="./public/img/leaves.png" alt="leaves" />
                                            </div>
                                        </span>
                                        <p className="true text-capitalize">Top Categories Of The Week</p>
                                    </div>
                                </div>
                                <div id="top-category" className="true col-xxl-12 d-flex justify-content-between gap-3">

                                    <div className="true bowse-category justify-content-center  flex-wrap" style={{ width: 172 }}>
                                        <img src="./public/img/leaves.png" width={45} height={45} />
                                        <h5>
                                            cat.cat_name
                                        </h5>
                                    </div>

                                </div>
                            </div>
                            {/* ===Bowse-By-Categories-end=== */}
                        </div>

                        <div className="true col-xxl-9 col-xl-9">
                            {/* ===offer-50%-start=== */}
                            <div className="true offer-50 py-5 d-flex flex-wrap">
                                <div className="true col-xxl-6 col-xl-6 col-xs-12 col-sm-12 col-md-6">
                                    <div className="true mushroom-content">
                                        <h3>50% offer</h3>
                                        <span>Fresh Meat</span>
                                        <button><a href="#">Shop Now <i className="true ri-arrow-right-fill" /></a></button>
                                    </div>
                                </div>
                                <div className="true col-xxl-6 col-xl-6 col-xs-12 col-sm-12 col-md-6">
                                    <div className="true meat-content mushroom-content">
                                        <h3>50% offer</h3>
                                        <span>Testy Mushrooms</span>
                                        <button><a href="#">Shop Now <i className="true ri-arrow-right-fill" /></a></button>
                                    </div>
                                </div>
                            </div>
                            {/* ===offer-50%-end=== */}
                            {/* ===Food-Cupboard-start=== */}

                            {/* ===Food-Cupboard-end=== */}
                            {/* ===cashback-start=== */}
                            <div className="true cashback my-5">
                                <h3>Get $3 Cashback! Min Order of $30</h3>
                                <p>Use Code : GROCERY1920</p>
                            </div>
                            {/* ===cashback-end=== */}

                            {/* ===Featured-Blog-start=== */}

                            {/* ===Featured-Blog-end=== */}
                        </div>
                        {/* ===side-section-start=== */}
                        <div className="true col-xxl-3 col-xl-3 side-section d-xs-none d-sm-none d-xl-block  d-xxl-block">

                            <div className="true sidebar-offer-2">
                                <span>Organic</span>
                                <h2 className="true text-uppercase"><span>FRESHES</span> Vegetables</h2>
                                <p>Super Offer to 50% Off</p>
                                <button className="true shop">Shop Now <i className="true ri-arrow-right-fill" /></button>
                            </div>
                            {/* ===trendindg-products-start=== */}
                            <div className="true trnding-products py-5">
                                <div className="true seller-box">
                                    <h2>Trending Products</h2>
                                    <div className="true seller-11 d-flex  justify-content-around align-items-center">
                                        <div className="true seller-img">
                                            <a href="#"><img src="./public/img/23 (1).png" width={80} alt="leaves" /></a>
                                        </div>
                                        <div className="true seller-detail">
                                            <a href="#">
                                                <h3>Tuff Whole Wheat Bread</h3>
                                                <p>500 G</p>
                                                <span>$ 10.00</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="true seller-11 d-flex justify-content-around align-items-center">
                                        <div className="true seller-img">
                                            <a href="#"><img src="./public/img/24 (1).png" width={80} alt="leaves" /></a>
                                        </div>
                                        <div className="true seller-detail">
                                            <a href="#">
                                                <h3>Tuff Whole Wheat Bread</h3>
                                                <p>500 G</p>
                                                <span>$ 10.00</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="true seller-11 d-flex justify-content-around align-items-center">
                                        <div className="true seller-img">
                                            <a href="#"><img src="./public/img/25 (1).png" width={80} alt="leaves" /></a>
                                        </div>
                                        <div className="true seller-detail">
                                            <a href="#">
                                                <h3>Tuff Whole Wheat Bread</h3>
                                                <p>500 G</p>
                                                <span>$ 10.00</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="true seller-1 d-flex justify-content-around align-items-center">
                                        <div className="true seller-img">
                                            <a href="#"><img src="./public/img/26 (1).png" width={80} alt="leaves" /></a>
                                        </div>
                                        <div className="true seller-detail">
                                            <a href="#">
                                                <h3>Tuff Whole Wheat Bread</h3>
                                                <p>500 G</p>
                                                <span>$ 10.00</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ===trendindg-products-end=== */}
                            {/* ===Customer-Comment-start=== */}
                            <div className="true customer-comment">
                                <h2>Customer Comment</h2>
                                <div className="true comment-box">
                                    <h3>We Care About Our Customer Experience</h3>
                                    <p>In publishing and graphic design, <span className="true d-xl-none">Lorem ipsum is a placeholder
                                        text commonly used to
                                        demonstrate the visual form of a document or a typeface</span> without relying on
                                        meaningful
                                        content.</p>
                                    <div className="true d-flex align-items-center cmt-box">
                                        <div className="true comment-img">
                                            <img src="./public/img/1(2).jpg" width={70} alt="leaves" />
                                        </div>
                                        <div className>
                                            <h4> Tina Mcdonnale</h4>
                                            <span>Sale Manager</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ===Customer-Comment-end=== */}
                        </div>
                        {/* ===side-section-end=== */}
                    </div>
                </div>
            </section>

        </>
    );
}

