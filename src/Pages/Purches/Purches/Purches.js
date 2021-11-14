import React from 'react';
import { Button, Col, Container, Form, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Purches = () => {
    return (
        <Container>
            <Row>
                <Col md={6}> <Form>
                    <form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Email
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="name" placeholder="Enter Your Name" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Email
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="email" placeholder="Enter Your Email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Password
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Password
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="password2" placeholder="Re-Type Password" />
                            </Col>
                        </Form.Group>
                        <Button className="w-25">Register</Button>
                        <Nav.Link as={Link} to="/login">Have Account? Log In Now</Nav.Link>

                    </form>
                </Form></Col>
                <Col md={6}>sm=4</Col>
            </Row>
        </Container>
    );
};

export default Purches;