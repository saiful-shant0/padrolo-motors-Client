import React from 'react';

import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import ReviewGet from '../ReviewGet/ReviewGet';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <ReviewGet></ReviewGet>
            <AboutUs></AboutUs>
            <Footer></Footer>

        </div>
    );
};

export default Home;