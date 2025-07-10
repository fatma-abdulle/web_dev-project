import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Mey.css';
import { CartContext } from './CartContext';

const birthdayProducts = [
    { id: 1, name: 'Chocolate Birthday Cake', price: 25, image: '/birthday/b1.jpg', rating: 4 },
    { id: 2, name: 'Birthday Balloon Set', price: 10, image: '/birthday/b2.jpg', rating: 3 },
    { id: 3, name: 'Luxury Gift Box', price: 40, image: '/birthday/b3.jpg', rating: 5 },
    { id: 4, name: 'Scented Birthday Candle', price: 5, image: '/birthday/b4.jpg', rating: 3 },
    { id: 5, name: 'Custom Birthday Mug', price: 12, image: '/birthday/b5.jpg', rating: 4 },
    { id: 6, name: 'Cute Teddy Bear', price: 15, image: '/birthday/b6.jpg', rating: 3 },
    { id: 7, name: 'Personalized Greeting Card', price: 4, image: '/birthday/b7.jpg', rating: 3 },
    { id: 8, name: 'Birthday Party Pack', price: 30, image: '/birthday/b8.jpg', rating: 5 },
];

const Birthday = () => {
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
                <h2>Celebrate with Birthday Gifts</h2>
                <div className="birthday-pro-container">
                    {birthdayProducts.map(product => (
                        <div className="birthday-pro" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <div className="birthday-description">
                                <span>Birthday</span>
                                <h5>{product.name}</h5>
                                <div className="star">
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <i
                                            key={index}
                                            className={index < product.rating ? 'fas fa-star' : 'far fa-star'}
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

export default Birthday;
