import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Mey.css';
import { CartContext } from './CartContext';

const homeLivingProducts = [
    { id: 1, name: 'Abstract Wall Art', price: 35, image: '/home/h1.jpg', rating: 3 },
    { id: 2, name: 'Scented Candle Set', price: 20, image: '/home/h2.jpg', rating: 3.5 },
    { id: 3, name: 'Cozy Knit Blanket', price: 45, image: '/home/h3.jpg', rating: 4 },
    { id: 4, name: 'Premium Kitchen Tool Set', price: 60, image: '/home/h4.jpg', rating: 3 },
    { id: 5, name: 'Decorative Throw Pillows (Set of 2)', price: 25, image: '/home/h5.jpg', rating: 4.5 },
    { id: 6, name: 'Ceramic Plant Pot', price: 18, image: '/home/h6.jpg', rating: 2.5 },
    { id: 7, name: 'Modern Wall Clock', price: 28, image: '/home/h7.jpg', rating: 4 },
    { id: 8, name: 'Minimalist Table Lamp', price: 32, image: '/home/h8.jpg', rating: 3.5 },
];

const HomeLiving = () => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (product) => {
        addToCart(product);
        alert(`${product.name} added to cart!`);
    };

    return (
        <div id="birthday-page">
            <Link to="/" className="birthday-back-home-btn" title="Back to Home">
                <i className="fas fa-arrow-left"></i> Home
            </Link>

            <section id="birthday-products">
                <h2>Make a House a Home – Home & Living Gifts</h2>
                <div className="birthday-pro-container">
                    {homeLivingProducts.map(product => (
                        <div className="birthday-pro" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <div className="birthday-description">
                                <span>Home & Living</span>
                                <h5>{product.name}</h5>
                                <div className="star">
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <i
                                            key={index}
                                            className={index < Math.floor(product.rating) ? 'fas fa-star' : (index < product.rating ? 'fas fa-star-half-alt' : 'far fa-star')}
                                        ></i>
                                    ))}
                                </div>
                                <h4>${product.price}</h4>
                                <button
                                    className="birthday-add-to-cart"
                                    onClick={() => handleAddToCart(product)}
                                >
                                    <i className="fas fa-cart-plus"></i> Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomeLiving;
