
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
            <section className="true banner vh-100">
                <div className="true banner-img">
                    <img src="./public/img/bg-img.jpg" alt="" />
                    <div className='banner-box'>
                        <h1>Get your grocery in 25 minutes</h1>
                        <p>Order now and get 20% off on your first order</p>
                    </div>
                </div>
                {/* <div className="true container">
                    <div className="true row">
                        <div className="true col-xxl-8 col-xl-8 col-xs-12 col-sm-12">
                            <div className="true banner-item">
                                <div className="true banner-content w-50">
                                    <h6>Exclusive offer <span>30% Off</span> </h6>
                                    <h1>STAY HOME & DELIVERED YOUR <span>DAILY NEEDS</span></h1>
                                    <p className="true d-xs-none">Vegetables contain many vitamins and minerals that are good for your health.</p>
                                    <a href="#">
                                        <button>Shop Now <i className="true ri-arrow-right-fill" /></button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="true col-xxl-4 col-xl-4 col-xs-12 col-sm-12 col-md-12 d-flex flex-wrap align-content-between">
                            <div className="true col-xxl-12 col-xl-12 col-xs-12 col-sm-12 col-md-6">
                                <div className="true banner-2">
                                    <div className="true banner-2-content">
                                        <h6><span>45%</span>OFF</h6>
                                        <h2>Nut Collection</h2>
                                        <p>We deliver organic vegetables & fruits</p>
                                        <a href="#">
                                            <button className="true shop">Shop Now <i className="true ri-arrow-right-fill" /></button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="true col-xxl-12 col-xl-12 col-xs-12 col-sm-12 col-md-6">
                                <div className="true banner-3">
                                    <div className="true banner-3-content">
                                        <h2>Healthy Food</h2>
                                        <h3>Organic Market</h3>
                                        <p>We deliver organic vegetables & fruits</p>
                                        <a href="#">
                                            <button className="true shop">Shop Now <i className="true ri-arrow-right-fill" /></button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="true banner-bottom py-5">
                            <Slider {...settings} className="true col-xxl-12 col-xs-12 col-sm-12 d-flex justify-content-between">
                                <div className="true re">
                                    <div className="true banner-4">
                                        <div className="true banner-content-4">
                                            <span>5% OFF 1111111</span>
                                            <h5>Hot Deals on New Items</h5>
                                            <p>Daily Essentials Eggs & Dairy</p>
                                        </div>
                                        <div className="true banner-btn-">
                                            <a href="#">Shop Now <i className="true ri-arrow-right-line" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="true rs">
                                    <div className="true banner-5">
                                        <div className="true banner-content-4">
                                            <span>5% OFF</span>
                                            <h5>Hot Deals on New Items</h5>
                                            <p>Daily Essentials Eggs & Dairy</p>
                                        </div>
                                        <div className="true banner-btn-">
                                            <a href="#">Shop Now <i className="true ri-arrow-right-line" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="true rs">
                                    <div className="true banner-6">
                                        <div className="true banner-content-4">
                                            <span>5% OFF</span>
                                            <h5>Hot Deals on New Items</h5>
                                            <p>Daily Essentials Eggs & Dairy</p>
                                        </div>
                                        <div className="true banner-btn-">
                                            <a href="#">Shop Now <i className="true ri-arrow-right-line" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="true rs">
                                    <div className="true banner-7">
                                        <div className="true banner-content-4">
                                            <span>5% OFF</span>
                                            <h5>Hot Deals on New Items</h5>
                                            <p>Daily Essentials Eggs & Dairy</p>
                                        </div>
                                        <div className="true banner-btn-">
                                            <a href="#">Shop Now <i className="true ri-arrow-right-line" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="true rs">
                                    <div className="true banner-5">
                                        <div className="true banner-content-4">
                                            <span>5% OFF</span>
                                            <h5>Hot Deals on New Items</h5>
                                            <p>Daily Essentials Eggs & Dairy</p>
                                        </div>
                                        <div className="true banner-btn-">
                                            <a href="#">Shop Now <i className="true ri-arrow-right-line" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="true rs">
                                    <div className="true banner-6">
                                        <div className="true banner-content-4">
                                            <span>5% OFF</span>
                                            <h5>Hot Deals on New Items</h5>
                                            <p>Daily Essentials Eggs & Dairy</p>
                                        </div>
                                        <div className="true banner-btn-">
                                            <a href="#">Shop Now <i className="true ri-arrow-right-line" /></a>
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
