import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth()
    return (

        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <img logo
                    alt=""
                    src=""

                    className="d-inline-block logo align-top"
                />{' '}


                <Container >
                    <Navbar.Brand to="/home">  <h5 className="text-light align-middle pt-2">PADROLO MOTORS</h5>{' '}</Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/allbikes">All Bikes</Nav.Link>

                        </Nav>


                        {user?.email && <Nav.Link as={Link} to="/dashboard"> Dashboard</Nav.Link>}

                        {user?.email ? <Nav.Link as={Link} to="/login"><Button onClick={logOut} color="inherit">Logout</Button></Nav.Link>

                            :
                            <Nav.Link as={Link} to="/login">Log In</Nav.Link>}


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;