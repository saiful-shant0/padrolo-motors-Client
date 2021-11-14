import React, { useEffect, useState } from 'react';
import userEvent from '@testing-library/user-event';

const ManageProduct = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://immense-cove-30280.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setServices(data))
    })
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://immense-cove-30280.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = services.filter(user => user._id !== id);
                        setServices(remainingUsers);
                    }
                });
        }
    }


    return (
        <div className=" my-5">
            <h2 className="my-4">Please Delete StockOut Bikes</h2>
            <h4 className="my-4">Available Bikes: {services.length}</h4>
            <ul>
                {
                    services.map(service => <div className="m-4"
                        key={userEvent._id}
                    ><img className='w-25' src={service.img} alt="" />  {service.name} <button className="btn btn-warning" onClick={() => handleDeleteUser(service._id)}>Delete</button> </div>)
                }
            </ul>
        </div>
    );
};

export default ManageProduct;