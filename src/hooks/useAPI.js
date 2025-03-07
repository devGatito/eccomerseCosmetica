import { useState, useEffect } from "react";

const API_URL = "http://localhost:5000/products";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error("Error al obtener los productos");
            const data = await response.json();
            setProducts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const addProduct = async (newProduct) => {
        setLoading(true);
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newProduct),
            });

            if (!response.ok) throw new Error("Error al agregar el producto");

            const savedProduct = await response.json();
            setProducts((prevProducts) => [...prevProducts, savedProduct]); 
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return { products, loading, error, fetchProducts, addProduct };
};

export default useProducts;
