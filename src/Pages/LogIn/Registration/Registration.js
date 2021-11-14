import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NavLink, useHistory } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import useAuth from '../../../hooks/useAuth';
const Registration = () => {
    const [logInData, setLogInData] = useState({});
    const history = useHistory();
    const { registerUser, isLoading, user, authError } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...logInData };
        newLoginData[field] = value;
        setLogInData(newLoginData);


    }


    const handleLogInSubmit = e => {

        if (logInData.password !== logInData.password2) {
            alert('Pass is Not match')
            return;
        }
        registerUser(logInData.email, logInData.password, logInData.name, history)

        e.preventDefault()
    }
    return (
        <Container sx={{ mt: 10 }}>
            <Typography sx={{ my: 5 }} variant="h3" gutterBottom>
                Please Registration to Padrolo Motors
            </Typography>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>

                    {!isLoading && <form onSubmit={handleLogInSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic" label="Your Name"
                            name="name"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic" label="Your Email"
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            variant="standard" />

                        <TextField id="standard-basic"
                            sx={{ width: '75%', m: 1 }}
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField id="standard-basic"
                            sx={{ width: '75%', m: 1 }}
                            label="Re-Type Password"
                            type="password"
                            name="password2"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button
                            sx={{ width: '75%', m: 1 }}
                            type="submit"

                            variant="contained">Sin up</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to='/login'>
                            <Button variant="text">Already Register? Please LogIn </Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Created Successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src="https://www.nicepng.com/png/full/830-8305620_racing-motorbike-png-vector-for-a-motorcycle.png" alt="" />
                </Grid>

            </Grid>
        </Container>

    );
};

export default Registration;