
import React, { useEffect, useState } from 'react';
import { AdminNav } from '../../components/adminNav';
import { Header } from '../../../components/header/header';
import Container from 'react-bootstrap/esm/Container';
import { Footer } from '../../../components/footer/footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import '../../../utils/loader.css'
import { POST_PRODUCT } from '../../../redux/action/productAction';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router';
import '../../../../../public/css/style.css'
import { GET_CATEGORY } from '../../../redux/action/categoryAction';

function MyVerticallyCenteredModal(props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [productName, setProductName] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [productOfferPrice, setProductOfferPrice] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productStatus, setProductStatus] = useState("");
    const [productImage, setProductImage] = useState("");
    const [productDiscription, setProductDiscription] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        let ProductData = {
            productName,
            categoryId,
            productOfferPrice,
            productPrice,
            productStatus,
            productImage,
            productDiscription
        }
        console.log(ProductData);
        // const formData = new FormData();
        // formData.append('productName', productName);
        // formData.append('categoryId', categoryId);
        // formData.append('productOfferPrice', productOfferPrice);
        // formData.append('productPrice', productPrice);
        // formData.append('productStatus', productStatus);
        // formData.append('productDiscription', productDiscription);
        // formData.append('productImage', productImage);

        if (ProductData) {
            dispatch(POST_PRODUCT(ProductData));
        }
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h2>Add Product</h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <section className="register-page">
                    <div className="login-contain">
                        <div className="col-xxl-12 col-xl-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 d-flex align-items-center ">
                            <div className='w-100'>
                                <div className="login-container">

                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <input type="text" id="text"
                                                onChange={(e) => setProductName(e.target.value)}
                                                value={productName}
                                                placeholder="Product Name"
                                                required />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" id="email"
                                                onChange={(e) => setCategoryId(e.target.value)}
                                                value={categoryId}
                                                placeholder="Product Category"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" id="email"
                                                onChange={(e) => setProductOfferPrice(e.target.value)}
                                                value={productOfferPrice}
                                                placeholder="Sell Price "
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" id="password"
                                                onChange={(e) => setProductPrice(e.target.value)}
                                                value={productPrice}
                                                placeholder="Original Price"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" id="cpassword"
                                                onChange={(e) => setProductStatus(e.target.value)}
                                                value={productStatus}
                                                placeholder="Status"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="text"
                                                onChange={(e) => setProductDiscription(e.target.value)}
                                                value={productDiscription}
                                                placeholder="Product Discription"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            {/* <input type="file" id="cpassword"
                                                onChange={(e)=>handleFileChange(e)}
                                                value={productImage}
                                                required
                                            /> */}
                                            <input type="file" 
                                            onChange={(e)=>setProductImage(e.target.files[0])} required />
                                        </div>

                                        <button type="submit" className="login-btn" value="submit" >
                                            Sign Up
                                        </button>
                                        <button type="submit" className="login-btn" value="submit"
                                            OnClick={props.onHide}>
                                            Sign Up
                                        </button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button >Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
}



export const Category = () => {
    const dispatch = useDispatch();
    const categorys = useSelector((state) => state.category.category);
    
    const [category, setCategory] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);

    useEffect(() => {
        dispatch(GET_CATEGORY());
    }, [dispatch]);

    useEffect(() => {
        // if (categorys.length !== category.length) {
            setCategory(categorys);
         
        // }
    }, [categorys]);
    return (
        <>
            <Header />
            <Container>
                <center><h2>Category </h2></center>
                <div className="col-lg-12 d-flex flex-wrap py-5">

                    <div className="col-lg-2 col-xs-12 col-sm-12">
                        <AdminNav />
                    </div>
                    <div className="col-lg-10 col-xs-12 col-sm-12">
                        <Button variant="primary" onClick={() => setModalShow(true)}>
                            Launch vertically centered modal
                        </Button>

                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Sr No.</th>
                                    <th>Category Image</th>
                                    <th>Category Name</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    !category.length ?

                                        <tr>
                                            <td colSpan={8}>
                                                <center>
                                                    <div className='loader-load text-center'>
                                                        <div className="boxify d-flex justify-content-center ">
                                                            <div class="fancy-spinner">
                                                                <div class="ring"></div>
                                                                <div class="ring"></div>
                                                                <div class="dot"></div>
                                                            </div>
                                                        </div>
                                                        <h4>Loading Category Data..</h4>
                                                    </div>
                                                </center>
                                            </td>

                                        </tr>
                                        :
                                        category.map((val, i) => {
                                            i++
                                            return (
                                                <>

                                                    <tr>
                                                        <td>{i}</td>
                                                        <td><img src={val.icon} alt="" width={75} /></td>
                                                        <td>{val.category}</td>
                                                        <td>
                                                        {
                                                            val.status === 1 ? (
                                                                <span>Active</span>
                                                            ) : (
                                                                <span style={{ color: 'red' }}>Deactive</span>
                                                            )
                                                        }
                                                        </td>

                                                        <td>@mdo</td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    );
}






