import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Mey.css';
import { CartContext } from './CartContext';

const categories = {
    teddy: [
        { id: 'teddy-1', name: 'Classic Brown Bear', image: 'Images/Classic brown teddy bear.jpg', price: 15.99, rating: 4 },
        { id: 'teddy-2', name: 'Fluffy Pink Bear', image: 'Images/Fluffy pink bear.jpg', price: 17.99, rating: 5 },
        { id: 'teddy-3', name: 'White Teddy', image: 'Images/white teddy-bears.jpg', price: 14.50, rating: 3 },
        { id: 'teddy-4', name: 'Purple Teddy', image: 'Images/purple teddy.jpg', price: 16.25, rating: 4 },
    ],
    flowers: [
        { id: 'flowers-1', name: 'Elegant Roses', image: 'Images/flower one.jpg', price: 29.99, rating: 5 },
        { id: 'flowers-2', name: 'Fresh Lilies', image: 'Images/flower two.jpg', price: 24.99, rating: 4 },
        { id: 'flowers-3', name: 'Sunflower Bouquet', image: 'Images/flower three.jpg', price: 27.50, rating: 4 },
        { id: 'flowers-4', name: 'Mixed Flowers', image: 'Images/flower four.jpg', price: 22.75, rating: 3 },
    ],
    perfumes: [
        { id: 'perfumes-1', name: 'Citrus Perfume', image: 'Images/Perfume 1.jpg', price: 45.00, rating: 4 },
        { id: 'perfumes-2', name: 'Floral Fragrance', image: 'Images/perfume 2.jpg', price: 39.99, rating: 3 },
        { id: 'perfumes-3', name: 'Woody Perfume', image: 'Images/perfume 3.jpg', price: 55.00, rating: 5 },
        { id: 'perfumes-4', name: 'Musk Perfume', image: 'Images/perfume 4.jpg', price: 49.50, rating: 4 },
    ],
    chocolates: [
        { id: 'chocolates-1', name: 'Dark Chocolate Box', image: 'Images/Option 1.jpg', price: 12.99, rating: 4 },
        { id: 'chocolates-2', name: 'Milk Chocolate Assortment', image: 'Images/option 2.jpg', price: 15.50, rating: 5 },
        { id: 'chocolates-3', name: 'White Chocolate', image: 'Images/Option 3.jpg', price: 18.00, rating: 4 },
        { id: 'chocolates-4', name: 'Nutty Chocolate', image: 'Images/Option 4.jpg', price: 20.25, rating: 3 },
    ],
    mugs: [
        { id: 'mugs-1', name: 'Floral Mug', image: 'Images/mug 2.jpg', price: 9.99, rating: 4 },
        { id: 'mugs-2', name: 'Motivational Mug', image: 'Images/mug 3.jpg', price: 11.50, rating: 5 },
        { id: 'mugs-3', name: 'Cute Cat Mug', image: 'Images/mug 4.jpg', price: 10.25, rating: 3 },
        { id: 'mugs-4', name: 'Personalized Mug', image: 'Images/mug 5.jpg', price: 12.00, rating: 4 },
    ],
    jewelry: [
        { id: 'jewelry-1', name: 'Gold Necklace', image: 'Images/set 1.jpg', price: 35.00, rating: 5 },
        { id: 'jewelry-2', name: 'Silver Earrings', image: 'Images/set 2.jpg', price: 42.50, rating: 4 },
        { id: 'jewelry-3', name: 'Pearl Bracelet', image: 'Images/set 3.jpg', price: 39.99, rating: 4 },
        { id: 'jewelry-4', name: 'Diamond Ring', image: 'Images/set 4.jpg', price: 45.00, rating: 5 },
    ],
};

const mainCategories = [
    { id: 'teddy', name: 'Cute Teddy', image: 'Images/Mini Travel bear.jpg' },
    { id: 'flowers', name: 'Flower', image: 'Images/main flower.jpg' },
    { id: 'perfumes', name: 'Perfumes', image: 'Images/Perfumes.jpg' },
    { id: 'chocolates', name: 'Chocolates', image: 'Images/chocolates.jpg' },
    { id: 'mugs', name: 'Mugs', image: 'Images/Custom Mugs.jpg' },
    { id: 'jewelry', name: 'Jewelry ', image: 'Images/Jewelery Set.jpg' },
];

function Browse() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const {addToCart} = useContext(CartContext);

    const handleShowOptions = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    const handleGoBack = () => {
        setSelectedCategory(null);
    };

    const handleAddToCart = (product) => {
        addToCart(product);
        alert(`${product.name} added to cart!`);
    };

    return (
        <div id="browse-page">
            <Link to="/" className="birthday-back-home-btn" title="Back to Home">
                <i className="fas fa-arrow-left"></i> Home
            </Link>

            {!selectedCategory && (
                <section className="birthday-section">
                    <h2>Browse Our Gifts</h2>
                    <div className="birthday-pro-container">
                        {mainCategories.map((cat) => (
                            <div className="birthday-pro" key={cat.id} onClick={() => handleShowOptions(cat.id)}>
                                <img src={cat.image} alt={cat.name}/>
                                <div className="birthday-description">
                                    <span>Category</span>
                                    <h5>{cat.name}</h5>
                                    <button className="birthday-add-to-cart">
                                        View Options
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {selectedCategory && (
                <section className="birthday-section">
                    <h2>Choose Your {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</h2>
                    <div className="birthday-pro-container">
                        {categories[selectedCategory].map((product) => (
                            <div className="birthday-pro" key={product.id}>
                                <img src={product.image} alt={product.name}/>
                                <div className="birthday-description">
                                    <span>{selectedCategory}</span>
                                    <h5>{product.name}</h5>
                                    <div className="star">
                                        {Array.from({length: 5}, (_, index) => (
                                            <i
                                                key={index}
                                                className={index < product.rating ? 'fas fa-star' : 'far fa-star'}
                                            ></i>
                                        ))}
                                    </div>
                                    <h4>${product.price ? product.price.toFixed(2) : '0.00'}</h4>
                                    <button className="birthday-add-to-cart"
                                            onClick={() => handleAddToCart(product)}>
                                        <i className="fas fa-cart-plus"></i> Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="birthday-back-home-btn" onClick={handleGoBack}>
                        <i className="fas fa-arrow-left"></i> Back
                    </button>
                </section>
            )}
        </div>
    );
}

export default Browse;


