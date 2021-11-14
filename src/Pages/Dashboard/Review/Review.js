import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import './Review.css'



const Review = data => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        axios.post('https://immense-cove-30280.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-service my-5">
            <h2 className="text-center mt-5 mb-4 pt-5">Please Add a Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} value={user.displayName} />
                <textarea {...register("description")} placeholder="Description" />
                <input className="btn btn-success mb-5 " type="submit" />
            </form>
        </div>
    );
};

export default Review;