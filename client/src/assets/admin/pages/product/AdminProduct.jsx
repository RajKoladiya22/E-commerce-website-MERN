import React, { useEffect, useState } from 'react';
import { AdminNav } from '../../components/adminNav';
import { Header } from '../../../components/header/header';
import Container from 'react-bootstrap/esm/Container';
import { Footer } from '../../../components/footer/footer';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_PRODUCT, EDIT_PRODUCT, GET_PRODUCT, POST_PRODUCT } from '../../../redux/action/productAction';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../../../../public/css/style.css';
import { GET_CATEGORY } from '../../../redux/action/categoryAction';
import '../../../utils/loader.css'
import { MdOutlineDelete } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function MyVerticallyCenteredModal(props) {
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.product.isLoading);
    const products = useSelector((state) => state.product.product);
    const categories = useSelector((state) => state.category.category);
    const [productName, setProductName] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [productOfferPrice, setProductOfferPrice] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productStatus, setProductStatus] = useState("");
    const [productImage, setProductImage] = useState("");
    const [productDiscription, setProductDescription] = useState("");
    const [editId, setEditId] = useState('');
    const [category, setCategory] = useState([]);
    const [product, setProduct] = useState([]);
    if (isLoading) {
        props.onShow()
    }
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
        };

        if (editId) {
            dispatch(EDIT_PRODUCT(editId, ProductData)).then(() => {
            });
            props.onHide();
            setEditId("")
            navigate('/adminProduct')
        } else {

            dispatch(POST_PRODUCT(ProductData)).then(() => {
                props.onHide();
            });
        }

        setProductName("");
        setCategoryId("");
        setProductOfferPrice("");
        setProductPrice("");
        setProductStatus("");
        setProductImage("");
        setProductDescription("");
    };

    const ClearUp = () => {
        setEditId("")
        setProductName("");
        setCategoryId("");
        setProductOfferPrice("");
        setProductPrice("");
        setProductStatus("");
        setProductImage("");
        setProductDescription("");
        props.onHide();
        navigate('/adminproduct')
    }

    useEffect(() => {
        if (products.length !== product.length) {
            setProduct(products.data.product);
        }
    }, [products]);

    useEffect(() => {
        setCategory(categories);
    }, [categories]);

    useEffect(() => {
        if (id) {
            props.onShow();
            setEditId(id);

            const editProduct = product.find((item) => item._id === id);
            if (editProduct) {
                setProductName(editProduct.productName);
                setCategoryId(editProduct.categoryId._id);
                setProductOfferPrice(editProduct.productOfferPrice);
                setProductPrice(editProduct.productPrice);
                setProductStatus(editProduct.productStatus);
                setProductImage(editProduct.productImage);
                setProductDescription(editProduct.productDiscription);
            }
        }
    }, [id, product, props]);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {isLoading ? (
                <center>
                    <div className="boxify d-flex justify-content-center position-absolute top-50" style={{ left: "25%" }}>
                        <div>
                            <div className="fancy-spinner">
                                <div className="ring"></div>
                                <div className="ring"></div>
                                <div className="dot"></div>
                            </div>
                            <h2 style={{ color: "#095850" }}>Please Wait Product is Uploading....</h2>
                        </div>
                    </div>
                </center>
            ) : (
                <>
                    <Modal.Header closeButton={!editId}>
                        <Modal.Title id="contained-modal-title-vcenter">
                            <h2>{editId ? "Edit Product" : "Add Product"}</h2>
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
                                                    <input
                                                        type="text"
                                                        id="text"
                                                        onChange={(e) => setProductName(e.target.value)}
                                                        value={productName}
                                                        placeholder="Product Name"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <select
                                                        className='w-100 border-0 py-3'
                                                        onChange={(e) => setCategoryId(e.target.value)}
                                                        value={categoryId}
                                                        required
                                                    >
                                                        <option className='t text-black-50' value="" disabled>
                                                            Select Category
                                                        </option>
                                                        {categories.map((cat) => (
                                                            <option
                                                                key={cat._id}
                                                                value={cat._id}
                                                            >
                                                                {cat.category}
                                                            </option>
                                                        ))}
                                                    </select>



                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        id="email"
                                                        onChange={(e) => setProductOfferPrice(e.target.value)}
                                                        value={productOfferPrice}
                                                        placeholder="Sell Price"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        id="password"
                                                        onChange={(e) => setProductPrice(e.target.value)}
                                                        value={productPrice}
                                                        placeholder="Original Price"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <select
                                                        name=""
                                                        className='w-100 border-0 py-3'
                                                        onChange={(e) => setProductStatus(e.target.value)}
                                                        value={productStatus}
                                                        required
                                                    >
                                                        <option value="" disabled>Status</option>
                                                        <option value="1">In Stock</option>
                                                        <option value="0">Out of Stock</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        onChange={(e) => setProductDescription(e.target.value)}
                                                        value={productDiscription}
                                                        placeholder="Product Description"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="file"
                                                        onChange={(e) => setProductImage(e.target.files[0])}
                                                        required={!editId}
                                                    />
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="login-btn"
                                                    value="submit"
                                                >
                                                    {editId ? "Update Product" : "Add Product"}
                                                </button>
                                                {
                                                    editId ? (
                                                        <Link
                                                            type="submit"
                                                            className="login-btn my-1 text-center"
                                                            value="submit"
                                                            to={'/adminproduct'}
                                                            onClick={() => ClearUp()}
                                                        >
                                                            Cancle Update
                                                        </Link>
                                                    ) : (
                                                        ""
                                                    )
                                                }
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Modal.Body>
                </>
            )
            }
        </Modal >
    );
}

export const AdmiProduct = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.product);
    const categorys = useSelector((state) => state.category.category);
    const [category, setCategory] = useState([]);
    const [product, setProduct] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        dispatch(GET_PRODUCT());
        dispatch(GET_CATEGORY());
    }, [dispatch]);

    useEffect(() => {
        if (products.length !== product.length) {
            setProduct(products.data.product);
        }
    }, [products]);

    useEffect(() => {
        setCategory(categorys);
    }, [categorys]);

    return (
        <>
            <Header />
            <Container>
                <center><h2>Product</h2></center>
                <div className="col-lg-12 d-flex flex-wrap py-5">
                    <div className="col-lg-2 col-xs-12 col-sm-12">
                        <AdminNav />
                    </div>
                    <div className="col-lg-10 col-xs-12 col-sm-12">
                        <Button variant="primary" onClick={() => setModalShow(true)}>
                            Add Product
                        </Button>

                        <MyVerticallyCenteredModal
                            categories={category}
                            // products={product}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            onShow={() => setModalShow(true)}
                        />
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Sr No.</th>
                                    <th>Product Image</th>
                                    <th>Product Name</th>
                                    <th>Product Category</th>
                                    <th>Original Price</th>
                                    <th>Sell Price</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    !product.length ?
                                        <tr>
                                            <td colSpan={8}>
                                                <center>
                                                    <div className='loader-load text-center'>
                                                        <div className="boxify d-flex justify-content-center ">
                                                            <div className="fancy-spinner">
                                                                <div className="ring"></div>
                                                                <div className="ring"></div>
                                                                <div className="dot"></div>
                                                            </div>
                                                        </div>
                                                        <h4>Loading Product Data...</h4>
                                                    </div>
                                                </center>
                                            </td>
                                        </tr>
                                        :
                                        product.map((val, i) => {
                                            return (
                                                <tr key={val._id}>
                                                    <td>{i + 1}</td>
                                                    <td><img src={val.productImage} alt="" width={75} /></td>
                                                    <td>{val.productName}</td>
                                                    <td>{val.categoryId.category}</td> {/* Assuming categoryId is populated */}
                                                    <td>{val.productPrice}</td>
                                                    <td>{val.productOfferPrice}</td>
                                                    <td>
                                                        {
                                                            val.productStatus === 1 ? (
                                                                <span>In Stock</span>
                                                            ) : (
                                                                <span style={{ color: 'red' }}>Out of Stock</span>
                                                            )
                                                        }
                                                    </td>
                                                    <td>
                                                        <div className="d-flex justify-content-around">
                                                            <Link
                                                                className='btn btn-success d-flex align-items-center px-4'
                                                                to={`/editProduct/${val._id}`}
                                                            >
                                                                <MdOutlineDelete />Edit
                                                            </Link>

                                                            <button className='btn btn-danger d-flex align-items-center' onClick={() => dispatch(DELETE_PRODUCT(val._id))}><MdOutlineDelete />Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
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
