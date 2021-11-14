import React from 'react';
import { Card, Col } from 'react-bootstrap';


const ShowReview = ({ review }) => {
    const { name, description } = review;
    return (
        <Col xs={6} md={4} className="shadow-lg p-3 g-2 mb-5 bg-white rounded">

            <Card.Body>
                <Card.Title> <h3>{name}</h3> </Card.Title>
                <Card.Text>
                    Description: {description}
                </Card.Text>



            </Card.Body>
        </Col>

    );
};

export default ShowReview;