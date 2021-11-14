import React, { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const Myorders = () => {
    const { user, token } = useAuth();
    const [orders, setAppointments] = useState([]);
    useEffect(() => {
        const url = `https://immense-cove-30280.herokuapp.com/orders?email=${user.email}`;

        fetch(url,
            {
                headers: {
                    'authorization': `Bearer ${token}`
                }
            }
        )
            .then(res => res.json())
            .then(data => setAppointments(data))

    }, [user.email, token])
    return (
        <div>
            <h2>Total Orders: {orders.length}</h2>
            <TableContainer component={Paper}>
                <Table aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Bike Name</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.BikeName}
                                </TableCell>
                                <TableCell align="center">{row.price}</TableCell>
                                <TableCell align="right">
                                    <Button>Cancle</Button>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Myorders;