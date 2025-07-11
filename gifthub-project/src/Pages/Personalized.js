import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Mey.css';
import { CartContext } from '../components/CartContext';

const personalizedProducts = [
    { id: 1, name: 'Couple Picture', price: 16, image: '/Custom/e1.jpg', rating: 4 },
    { id: 2, name: 'Quality Wood written', price: 15, image: '/Custom/e2.jpg', rating: 2 },
    { id: 3, name: 'Money Box', price: 7, image: '/Custom/e3.jpg', rating: 4 },
    { id: 4, name: 'Congratulation Box', price: 18, image: '/Custom/e4.jpg', rating: 4 },
    { id: 5, name: 'Books and flowers', price: 6, image: '/Custom/e5.jpg', rating: 3 },
    { id: 6, name: 'Glass Picture', price: 15, image: '/Custom/e6.jpg', rating: 5 },
    { id: 7, name: 'Personalized keyholder', price: 4, image: '/Custom/e7.jpg', rating: 2 },
    { id: 8, name: 'Unique Water Bottle and cup', price: 15, image: '/Custom/e8.jpg', rating: 5 },
    { id: 9, name: 'Personalized Books', price: 4, image: '/Custom/e9.jpg', rating: 5 },
    { id: 10, name: 'Personalized Announcement', price: 13, image: '/Custom/e10.jpg', rating: 5 },
    { id: 11, name: 'Personalized Cup', price: 4, image: '/Custom/e11.jpg', rating: 2 },
    { id: 12, name: 'Name frame', price: 15, image: '/Custom/e18.jpg', rating: 4 },
    { id: 13, name: 'Personalized Bracelet', price: 7, image: '/Custom/e19.jpg', rating: 5 },
    { id: 14, name: 'Personalized Neckless', price: 9, image: '/Custom/e20.jpg', rating: 4 },
    { id: 15, name: 'Tote bags', price: 3.5, image: '/Custom/e21.jpg', rating: 2 },
    { id: 16, name: 'Personalized Hoddies', price: 8, image: '/Custom/e22.jpg', rating: 5 },
];

const Personalized = () => {
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
                <h2>Good Products for your Loved Ones</h2>
                <div className="birthday-pro-container">
                    {personalizedProducts.map(product => (
                        <div className="birthday-pro" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <div className="birthday-description">
                                <span>Customized</span>
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

export default Personalized;
