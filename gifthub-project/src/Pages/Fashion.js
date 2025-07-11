import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Mey.css';
import { CartContext } from '../components/CartContext';

const fashionProducts = [
    { id: 1, name: 'Gold Jewelry', price: 4, image: '/fashion/i1.jpg', rating: 5 },
    { id: 2, name: 'Neckless', price: 15, image: '/fashion/i2.jpg', rating: 4 },
    { id: 3, name: 'Tote Bag', price: 20, image: '/fashion/i5.jpg', rating: 3 },
    { id: 4, name: 'Cardigan', price: 8, image: '/fashion/i6.jpg', rating: 4 },
    { id: 5, name: 'Elegant Outfit', price: 30, image: '/fashion/i7.jpg', rating: 5 },
    { id: 6, name: 'Brown Scarf', price: 4, image: '/fashion/i8.jpg', rating: 4 },
    { id: 7, name: 'Heavy Sweater', price: 10, image: '/fashion/i9.jpg', rating: 2 },
    { id: 8, name: 'Summer Dress', price: 12, image: '/fashion/i10.jpg', rating: 4 },
    { id: 9, name: 'Quality Shirt', price: 11, image: '/fashion/i11.jpg', rating: 5 },
    { id: 10, name: 'Quality Hand bag', price: 6, image: '/fashion/i12.jpg', rating: 1 },
    { id: 11, name: 'Mommy bag', price: 7, image: '/fashion/i13.jpg', rating: 4 },
    { id: 12, name: 'Quality Watch', price: 7, image: '/fashion/i14.jpg', rating: 5 },
    { id: 13, name: 'Crop Tops', price: 3, image: '/fashion/i15.jpg', rating: 3 },
    { id: 14, name: 'Celine pyjamas', price: 8, image: '/fashion/i18.jpg', rating: 4 },
    { id: 15, name: 'Coach Wallet', price: 7, image: '/fashion/i16.jpg', rating: 5 },
    { id: 16, name: 'Quality Bracelet', price: 5, image: '/fashion/i17.jpg', rating: 4 },
];

const Fashion = () => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (product) => {
        addToCart(product);
        alert(`${product.name} added to cart!`);
    };

    return (
        <div id="fashion-page">
            <Link to="/" className="birthday-back-home-btn" title="Back to Home">
                <i className="fas fa-arrow-left"></i> Home
            </Link>

            <section id="fashion-products">
                <h2>Style your Loved Ones</h2>
                <div className="birthday-pro-container">
                    {fashionProducts.map(product => (
                        <div className="birthday-pro" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <div className="birthday-description">
                                <span>Fashion</span>
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

export default Fashion;
