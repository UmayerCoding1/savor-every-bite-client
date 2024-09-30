import React from 'react';
import Navbar from '../components/shared/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/footer/Footer';
import AddToCartProvider from '../provider/add-to-cart-provider/AddToCartProvider';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto py-5 lg:px-5 font-Alegreya'>
           <AddToCartProvider>
           <Navbar/>
           <Outlet/>
           <Footer/>
           </AddToCartProvider>
           
        </div>
    );
};

export default Root;