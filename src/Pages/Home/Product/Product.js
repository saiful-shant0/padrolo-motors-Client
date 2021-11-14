import React from 'react';

import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';




const Product = ({ bike }) => {
    const { _id, name, img, price, description } = bike;

    const history = useHistory();
    const handleclick = (id) => {
        const url = `/book/${_id}`;
        history.push(url)

    }
    return (

        <Col xs={6} md={4} className="shadow-lg p-3 g-2 mb-5 bg-white rounded">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Price: {price} T.K
                </Card.Text>
                <Card.Text>
                    Description: {description}
                </Card.Text>
                <Button onClick={() => handleclick(_id)} variant="warning"> Purches Now </Button>


            </Card.Body>
        </Col>

    );
};

export default Product;