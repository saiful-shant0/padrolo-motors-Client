import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from "react"
import { Button } from 'react-bootstrap';
import OrderModal from '../OrderModal/OrderModal';
import Alert from '@mui/material/Alert';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';



const Visits = () => {

    const [bookingSuccess, setBookingSuccess] = useState(false)

    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://immense-cove-30280.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))


    }, [id]);


    const { name, price, img, description } = product;


    const [openBooking, setopenBooking] = React.useState(false);
    const handleBookingOpen = () => setopenBooking(true);
    const handleBookingClose = () => setopenBooking(false);
    return (
        <div>
            <Header />
            <div className="text-center container shadow-lg p-3 my-5 bg-white rounded">
                {bookingSuccess && <Alert severity="success">Booking Successfully</Alert>}
                <img src={img} alt="" />
                <h2> {name} </h2>
                <h4>Price: {price}</h4>
                <h6>{description}</h6>
                <Button onClick={handleBookingOpen} >Place Order </Button>
                <OrderModal
                    product={product}
                    openBooking={openBooking}
                    handleBookingClose={handleBookingClose}
                    setBookingSuccess={setBookingSuccess}
                >

                </OrderModal>
            </div>
            <Footer />
        </div>
    );
};

export default Visits;