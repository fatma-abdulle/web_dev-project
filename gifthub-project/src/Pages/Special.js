import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/CartContext';
import '../assets/Mey.css';


const specialProducts = [
    { id: 1, name: 'Cups and Parfum', image: '/Special/s1.jpg', price: 25, rating: 4, occasion: 'Bride Occasion' },
    { id: 2, name: 'Chocolates', image: '/Special/s2.jpg', price: 8, rating: 5, occasion: 'Valentine Occasion' },
    { id: 3, name: 'Champagne Decorated', image: '/Special/s3.jpg', price: 20, rating: 3, occasion: 'Celebration' },
    { id: 4, name: 'Champagne Chocolate Fragrance', image: '/Special/s4.jpg', price: 45, rating: 5, occasion: 'Men Occasion' },
    { id: 5, name: 'Champagne Fruit and Flower', image: '/Special/s5.jpg', price: 30, rating: 4, occasion: 'Valentine Occasion' },
    { id: 6, name: 'Red Roses', image: '/Special/s14.jpg', price: 15, rating: 5, occasion: 'Love Occasion' },
    { id: 7, name: 'Key Holder', image: '/Special/s7.jpg', price: 3, rating: 2, occasion: "Mother's Occasion" },
    { id: 8, name: 'Stanley Cups and Flowers', image: '/Special/s8.jpg', price: 30, rating: 5, occasion: 'Stanley Cup Lovers' },
    { id: 9, name: 'Marriage Box', image: '/Special/s15.jpg', price: 35, rating: 1, occasion: 'Marriage Occasion' },
    { id: 10, name: 'Christmas Box', image: '/Special/s16.jpg', price: 20, rating: 2, occasion: 'Merry Christmas' },
    { id: 11, name: 'Kinder Buenos Lovers', image: '/Special/s17.jpg', price: 35, rating: 4, occasion: 'Valentine Occasion' },
    { id: 12, name: 'For Your Bridesmaid', image: '/Special/s19.jpg', price: 23, rating: 3, occasion: 'Bride Occasion' },
    { id: 13, name: 'Christmas Box', image: '/Special/s20.jpg', price: 28, rating: 3, occasion: 'Merry Christmas' },
    { id: 14, name: 'Santa Claus Slippers', image: '/Special/s21.jpg', price: 10, rating: 5, occasion: 'Christmas Occasion' },
    { id: 15, name: 'Kids Sweets', image: '/Special/s22.jpg', price: 8, rating: 2, occasion: 'Kids Occasion' },

];

const Special = () => {
    const { addToCart } = useContext(CartContext);
    const handleAddToCart = (product) => {
        addToCart(product);
        alert(`${product.name} added to cart!`);
    };

    return (
        <div className="birthday-section">
            <Link to="/" className="birthday-back-home-btn"><i className="fas fa-arrow-left"></i> Home</Link>
            <h2>Good Products for Your Loved Ones</h2>
            <div className="birthday-pro-container">
                {specialProducts.map(product => (
                    <div className="birthday-pro" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <div className="birthday-description">
                            <span>{product.occasion}</span>
                            <h5>{product.name}</h5>
                            <div className="star">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <i key={i} className={i < product.rating ? 'fas fa-star' : 'far fa-star'}></i>
                                ))}
                            </div>
                            <h4>${product.price}</h4>
                        </div>
                        <button className="birthday-add-to-cart" onClick={() => handleAddToCart(product)}>
                            <i className="fas fa-cart-plus"></i> Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Special;
