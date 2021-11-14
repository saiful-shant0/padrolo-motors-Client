import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ShowReview from './ShowReview';

const ReviewGet = () => {
    const [productReview, setReviews] = useState({});

    useEffect(() => {
        fetch('https://immense-cove-30280.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))



    }, [productReview])


    return (
        <>
            <Container>
                <h2 className="mt-4">Shop Reviews</h2>
                <Row >
                    {productReview && productReview.length > 0 &&
                        productReview.map(review => <ShowReview

                            key={review._id}
                            review={review}

                        ></ShowReview>)
                    }

                </Row>

            </Container>

        </>
    );
};

export default ReviewGet;