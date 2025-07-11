import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/CartContext';
import '../assets/Mey.css';

    const babyProducts = [
        { id: 1, name: 'Soft Cotton Dress', price: 25, image: '/baby/i1.jpg', category: 'Newborn', rating: 3 },
        { id: 2, name: 'Comfy Onesie', price: 18, image: '/baby/i2.jpg', category: 'Essentials', rating: 4 },
        { id: 3, name: 'Warm Baby Jacket', price: 35, image: '/baby/i3.jpg', category: 'Winter Wear', rating: 3 },
        { id: 4, name: 'Cute Baby Hat', price: 12, image: '/baby/i4.jpg', category: 'Accessories', rating: 5 },
        { id: 5, name: 'Striped Baby Socks', price: 6, image: '/baby/i5.jpg', category: 'Essentials', rating: 3 },
        { id: 6, name: 'Soft Baby Mittens', price: 5, image: '/baby/i6.jpg', category: 'Accessories', rating: 2 },
        { id: 7, name: 'Comfort Romper', price: 22, image: '/baby/i7.jpg', category: 'Newborn', rating: 3 },
        { id: 8, name: 'Cozy Baby Blanket', price: 30, image: '/baby/i8.jpg', category: 'Essentials', rating: 5 },
        { id: 9, name: 'Funny Baby T-shirt', price: 15, image: '/baby/i9.jpg', category: 'Essentials', rating: 2 },
        { id: 10, name: 'Soft Baby Pants', price: 18, image: '/baby/i10.jpg', category: 'Essentials', rating: 3 },
        { id: 11, name: 'Little Baby Shoes', price: 20, image: '/baby/i11.jpg', category: 'Accessories', rating: 3 },
        { id: 12, name: 'Baby Hoodie', price: 28, image: '/baby/i12.jpg', category: 'Winter Wear', rating: 2 },
    ];
const Baby = () => {
    const { addToCart } = useContext(CartContext);
    const handleAddToCart = (product) => {
        addToCart(product);
        alert(`${product.name} added to cart!`);
    };

    return (
        <div className="birthday-section">
            <Link to="/" className="birthday-back-home-btn"><i className="fas fa-arrow-left"></i> Home</Link>
            <h2>Dress Your Little Ones</h2>
            <div className="birthday-pro-container">
                {babyProducts.map(product => (
                    <div className="birthday-pro" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <div className="birthday-description">
                            <span>{product.category}</span>
                            <h5>{product.name}</h5>
                            <div className="star">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <i key={i} className={i < product.rating ? 'fas fa-star' : 'far fa-star'}></i>
                                ))}
                            </div>
                            <h4>${product.price}</h4>
                        </div>
                        <button
                            className="birthday-add-to-cart"
                            onClick={() => handleAddToCart(product)}
                        >
                            <i className="fas fa-cart-plus"></i> Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Baby;
