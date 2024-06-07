import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { AdminNav } from '../../components/adminNav';
import { Header } from '../../../components/header/header';
import { Footer } from '../../../components/footer/footer';


export const Category = () => {
    return (
        <>
            <Header/>
            <Container>
                <div className="col-lg-12 d-flex flex-wrap py-5">
                   
                <div className="col-lg-3 col-xs-12 col-sm-12">
                <AdminNav />
                </div>
                <div className="col-lg-9 col-xs-12 col-sm-12">
                    <center><h2>Category</h2></center>
                </div>
                </div>
            </Container>
            <Footer/>
        </>
    );
}


