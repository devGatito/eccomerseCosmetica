import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../../hooks/useAPI";
import "./index.scss"; 
import FooterComponent from "../../components/footer";
import Navbar from "../../components/navbar";


const ProductList = () => {
    const { products, loading, error } = useProducts();
    const [sortOption, setSortOption] = useState("latest");
    const navigate = useNavigate();

   
   
    const sortedProducts = [...products].sort((a, b) => {
        switch (sortOption) {
            case "popular":
                return b.popularity - a.popularity; 
            case "price-high":
                return b.price - a.price;
            case "price-low":
                return a.price - b.price;
            case "stock":
                return b.stock - a.stock;
            default:
                return b.date - a.date; 
        }
    });

    return (
        <>
        <Navbar theme={"dark"} />
        <section className="product-list">
            <div className="product-header">
                <p>Mostrando {sortedProducts.length} de {products.length} resultados</p>
                <select 
                    value={sortOption} 
                    onChange={(e) => setSortOption(e.target.value)}
                    className="sort-select"
                >
                    <option value="latest">Ordenar por: Más reciente</option>
                    <option value="popular">Más popular</option>
                    <option value="price-high">Precio más alto</option>
                    <option value="price-low">Precio más bajo</option>
                    <option value="stock">Mayor cantidad disponible</option>
                </select>
            </div>

            {loading && <p>Cargando...</p>}
            {error && <p>Error: {error}</p>}

            <div className="product-grid">
                {sortedProducts.map((product) => (
                    <div key={product.id} className="product-card"   
                     onClick={() => navigate(`/product/${product.id}`)}

>
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p><strong>Precio:</strong> ${product.price}</p>
                    </div>
                ))}
            </div>
        </section>
        <FooterComponent/>
        </>

    );
};

export default ProductList;
