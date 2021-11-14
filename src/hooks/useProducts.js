import { useEffect } from "react";
import { useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://immense-cove-30280.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);
    return [products, setProducts];
}

export default useProducts;