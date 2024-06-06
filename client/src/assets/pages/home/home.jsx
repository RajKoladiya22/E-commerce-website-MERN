import React from 'react';
import { Banner } from '../../components/homepage/banner';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { HomeProduct1 } from '../../components/homepage/HomeProduct1';



export const Home = () => {
    return (
        <>  
       
        <Header/>
           <Banner/>
           <HomeProduct1/>
        <Footer/>
        </>
    );
}

