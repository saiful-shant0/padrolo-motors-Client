import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddProduct.css'
const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {


        axios.post('https://immense-cove-30280.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div>
            <div className="add-service my-5">
                <h2 className="text-center mt-5 mb-4 pt-5">Please Add a Bike</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                    <textarea {...register("description")} placeholder="Description" />
                    <input type="number" {...register("price")} placeholder="price" />
                    <input {...register("img")} placeholder="image url" />
                    <input className="btn btn-success mb-5 " type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;