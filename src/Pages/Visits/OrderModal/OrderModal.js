import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useAuth from '../../../hooks/useAuth';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const OrderModal = ({ openBooking, handleBookingClose, product, setBookingSuccess }) => {
    const { name, price } = product;
    const { user } = useAuth();
    const initialbookingInfo = { userName: user.displayName, email: user.email, phone: '' }

    const [bookingInfo, setBokkingInfo] = useState(initialbookingInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo }
        newInfo[field] = value;

        setBokkingInfo(newInfo)
    }
    const handleBookingSubmit = e => {
        const appointment = {
            ...bookingInfo,
            price,
            BikeName: name,

        }
        fetch('https://immense-cove-30280.herokuapp.com/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleBookingClose();
                }
            })



        e.preventDefault();

    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            disabled
                            sx={{ width: '95%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={price}
                            size="small"
                        />
                        <TextField

                            sx={{ width: '95%', m: 1 }}
                            id="outlined-size-small"
                            name="UserName"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                        />

                        <TextField

                            sx={{ width: '95%', m: 1 }}
                            id="outlined-size-small"
                            name="phone"
                            onBlur={handleOnBlur}
                            defaultValue="Phone Number"
                            size="small"
                        />
                        <TextField

                            sx={{ width: '95%', m: 1 }}
                            name="email"
                            onBlur={handleOnBlur}
                            id="outlined-size-small"
                            defaultValue={user.email}
                            size="small"
                        />

                        <Button type="submit" variant="contained">Submit</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default OrderModal;