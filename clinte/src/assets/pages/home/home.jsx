import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { Banner } from '../../components/homepage/banner';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

export const Home = () => {
    return (
        <>  
        <Header/>
           <Banner/>
        <Footer/>
        </>
    );
}

