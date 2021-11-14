import React from 'react';
import { Container, Row, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';


const Products = () => {

    const [products] = useProducts();
    const sliceProducts = products.slice(0, 6)


    return (
        <>
            <Container>
                <h2 className="mt-4">Feature Bikes</h2>
                <Row >
                    {
                        sliceProducts.map(bike => <Product
                            key={bike._id}
                            bike={bike}
                        ></Product>)
                    }

                </Row>
                <Nav.Link as={Link} to="/allbikes">See More</Nav.Link>
            </Container>

        </>
    );
};

export default Products;