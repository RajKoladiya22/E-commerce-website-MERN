import React, { useEffect, useState } from 'react';
import { AdminNav } from '../../components/adminNav';
import { Header } from '../../../components/header/header';
import Container from 'react-bootstrap/esm/Container';
import { Footer } from '../../../components/footer/footer';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import '../../../utils/loader.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router';
import '../../../../../public/css/style.css'
import { DELETE_CATEGORY, GET_CATEGORY, POST_CATEGORY } from '../../../redux/action/categoryAction';
import { MdOutlineDelete } from "react-icons/md";

function MyVerticallyCenteredModal(props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.category.isLoading);
    const [category, setCategoryName] = useState("");
    const [status, setStatus] = useState("");
    const [icon, setCategoryIcon] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        let CategoryData = {
            category,
            status,
            icon
        }
        console.log(CategoryData);

        if (CategoryData) {
            dispatch(POST_CATEGORY(CategoryData)).then(() => {
                props.onHide();
            });
            setCategoryName("");
            setStatus("");
            setCategoryIcon("");
        }
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {
                isLoading ? (
                    <center>
                        <div className="boxify d-flex justify-content-center position-absolute top-50" style={{ "left": "25%" }}>
                            <div className="">
                                <div class="fancy-spinner">
                                    <div class="ring"></div>
                                    <div class="ring"></div>
                                    <div class="dot"></div>
                                </div>
                                <h2 style={{ color: "#095850" }}>Please Wait Category is Uploading....</h2>
                            </div>
                        </div>
                    </center>
                ) :
                    (
                        <>
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                    <h2>Create Category</h2>
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
                                                                onChange={(e) => setCategoryName(e.target.value)}
                                                                value={category}
                                                                placeholder="Category Name"
                                                                required />
                                                        </div>
                                                        <div className="form-group">

                                                            <select name="" className='w-100 border-0 py-3'
                                                                onChange={(e) => setStatus(e.target.value)}
                                                                value={status}
                                                                placeholder="Status"
                                                                required
                                                            >
                                                                <option value="" disabled>Status</option>
                                                                <option value="1">Active</option>
                                                                <option value="0">Deactive</option>
                                                            </select>
                                                        </div>

                                                        <div className="form-group">
                                                            <input type="file"
                                                                onChange={(e) => setCategoryIcon(e.target.files[0])} required />
                                                        </div>

                                                        <button type="submit" className="login-btn" value="submit" >
                                                            Create Category
                                                        </button>
                                                        {/* <button type="submit" className="login-btn" value="submit"
                                            OnClick={props.onHide}>
                                            Sign Up
                                        </button> */}
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

                                                        <td>
                                                            <button className='btn btn-danger d-flex align-items-center' onClick={() => dispatch(DELETE_CATEGORY(val._id))}><MdOutlineDelete />Delete</button>
                                                        </td>
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






