import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';

import Product from '../../Home/Product/Product';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';



const Bikes = () => {

    const [products] = useProducts()
    return (
        <div>
            <Header></Header>
            <Container>
                <h2 className="mt-4">Available All Bikes</h2>
                <Row >
                    {
                        products.map(bike => <Product
                            key={bike._id}
                            bike={bike}
                        ></Product>)
                    }

                </Row>


            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Bikes;