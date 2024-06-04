
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export const Banner = () => {


    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: false,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    autoplay: true,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: false,
                },
            },
            {
                breakpoint: 574,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                },
            },
        ],
    };

    return (
        <>
            {/* ===banner-start=== */}
            <section className="banner py-5 vh-100">
                <div className="banner-img"></div>
                {/* <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-xl-8 col-xs-12 col-sm-12">
                            <div className="banner-item">
                                <div className="banner-content w-50">
                                    <h6>Exclusive offer <span>30% Off</span> </h6>
                                    <h1>STAY HOME & DELIVERED YOUR <span>DAILY NEEDS</span></h1>
                                    <p className="d-xs-none">Vegetables contain many vitamins and minerals that are good for your health.</p>
                                    <a href="#">
                                        <button>Shop Now <i className="ri-arrow-right-fill" /></button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-xs-12 col-sm-12 col-md-12 d-flex flex-wrap align-content-between">
                            <div className="col-xxl-12 col-xl-12 col-xs-12 col-sm-12 col-md-6">
                                <div className="banner-2">
                                    <div className="banner-2-content">
                                        <h6><span>45%</span>OFF</h6>
                                        <h2>Nut Collection</h2>
                                        <p>We deliver organic vegetables & fruits</p>
                                        <a href="#">
                                            <button className="shop">Shop Now <i className="ri-arrow-right-fill" /></button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-12 col-xl-12 col-xs-12 col-sm-12 col-md-6">
                                <div className="banner-3">
                                    <div className="banner-3-content">
                                        <h2>Healthy Food</h2>
                                        <h3>Organic Market</h3>
                                        <p>We deliver organic vegetables & fruits</p>
                                        <a href="#">
                                            <button className="shop">Shop Now <i className="ri-arrow-right-fill" /></button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="banner-bottom py-5">
                            <Slider {...settings} className="col-xxl-12 col-xs-12 col-sm-12 d-flex justify-content-between">
                                <div className="re">
                                    <div className="banner-4">
                                        <div className="banner-content-4">
                                            <span>5% OFF 1111111</span>
                                            <h5>Hot Deals on New Items</h5>
                                            <p>Daily Essentials Eggs & Dairy</p>
                                        </div>
                                        <div className="banner-btn-">
                                            <a href="#">Shop Now <i className="ri-arrow-right-line" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="rs">
                                    <div className="banner-5">
                                        <div className="banner-content-4">
                                            <span>5% OFF</span>
                                            <h5>Hot Deals on New Items</h5>
                                            <p>Daily Essentials Eggs & Dairy</p>
                                        </div>
                                        <div className="banner-btn-">
                                            <a href="#">Shop Now <i className="ri-arrow-right-line" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="rs">
                                    <div className="banner-6">
                                        <div className="banner-content-4">
                                            <span>5% OFF</span>
                                            <h5>Hot Deals on New Items</h5>
                                            <p>Daily Essentials Eggs & Dairy</p>
                                        </div>
                                        <div className="banner-btn-">
                                            <a href="#">Shop Now <i className="ri-arrow-right-line" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="rs">
                                    <div className="banner-7">
                                        <div className="banner-content-4">
                                            <span>5% OFF</span>
                                            <h5>Hot Deals on New Items</h5>
                                            <p>Daily Essentials Eggs & Dairy</p>
                                        </div>
                                        <div className="banner-btn-">
                                            <a href="#">Shop Now <i className="ri-arrow-right-line" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="rs">
                                    <div className="banner-5">
                                        <div className="banner-content-4">
                                            <span>5% OFF</span>
                                            <h5>Hot Deals on New Items</h5>
                                            <p>Daily Essentials Eggs & Dairy</p>
                                        </div>
                                        <div className="banner-btn-">
                                            <a href="#">Shop Now <i className="ri-arrow-right-line" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="rs">
                                    <div className="banner-6">
                                        <div className="banner-content-4">
                                            <span>5% OFF</span>
                                            <h5>Hot Deals on New Items</h5>
                                            <p>Daily Essentials Eggs & Dairy</p>
                                        </div>
                                        <div className="banner-btn-">
                                            <a href="#">Shop Now <i className="ri-arrow-right-line" /></a>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div> */}
            </section>
            {/* ===banner-end=== */}
        </>
    );
};
