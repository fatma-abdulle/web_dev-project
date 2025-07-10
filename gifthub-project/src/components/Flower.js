import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import '../assets/Mey.css';
import FlowerProducts from "../Data/FlowerProducts";
function Flower() {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (product) => {
        addToCart(product);
        alert(`${product.name} added to cart!`);
    };

    return (
        <div id="explore-flowers-page">
            <Link to="/" className="birthday-back-home-btn" title="Back to Home">
                <i className="fas fa-arrow-left"></i> Home
            </Link>

            <section className="birthday-section">
                <h2>Explore Flower Gifts</h2>
                <div className="birthday-pro-container">
                    {FlowerProducts.map((product) => (
                        <div className="birthday-pro" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <div className="birthday-description">
                                <span>Flowers</span>
                                <h5>{product.name}</h5>
                                <div className="star">
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <i
                                            key={index}
                                            className={index < product.rating ? 'fas fa-star' : 'far fa-star'}
                                        ></i>
                                    ))}
                                </div>
                                <h4>${product.price.toFixed(2)}</h4>
                                <button className="birthday-add-to-cart" onClick={() => handleAddToCart(product)}>
                                    <i className="fas fa-cart-plus"></i> Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Flower;
