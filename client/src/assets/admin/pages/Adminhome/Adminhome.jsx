import React from 'react';
import { Header } from '../../../components/header/header';
import { Footer } from '../../../components/footer/footer';
import { AdminNav } from '../../components/adminNav';
import Container from 'react-bootstrap/esm/Container';


export const AdminHome = () => {
    return (
        <>
            <Header />
            <Container className='py-5'>
                <div className="col-lg-12 d-flex flex-wrap">

                    <div className="col-lg-3 col-xs-12 col-sm-12">
                        <AdminNav />
                    </div>
                    <div className="col-lg-9 col-xs-12 col-sm-12">
                        <center>
                            <h2>Wel Come Admin</h2>
                        </center>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    );
}

