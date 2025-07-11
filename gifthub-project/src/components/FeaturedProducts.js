import { useContext } from 'react';
import { CartContext } from './CartContext';

const products = [
    {
        id: 'wellness-1',
        name: 'Wellness Gift Basket',
        description: 'A curated collection of wellness products for relaxation and self-care.',
        price: 49.99,
        image: 'LandingGift/download (38).jpeg',
    },
    {
        id: 'chocolate-1',
        name: 'Luxury Chocolate Box',
        description: 'A luxurious assortment of premium chocolates, perfect for any occasion.',
        price: 29.99,
        image: 'LandingGift/fc39bcb6b75010e028f88555ee9a7588.jpg',
    },
    {
        id: 'candle-1',
        name: 'Scented Candle Set',
        description: 'A beautiful set of aromatic candles to create a relaxing atmosphere.',
        price: 34.99,
        image: 'LandingGift/93b6d4958b67b0a6dc9f1301733576f1.jpg',
    }
];

export default function FeaturedProducts() {
    const { addToCart } = useContext(CartContext);

    return (
        <section id="featured">
            <div className="container">
                <h2 className="section-title">FEATURED GIFTS</h2>
                <div className="products-grid">
                    {products.map(product => (
                        <div className="product-card" key={product.id}>
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="product-info">
                                <div className="product-name">{product.name}</div>
                                <div className="product-description">{product.description}</div>
                                <div className="product-price">${product.price}</div>
                                <div className="product-actions">
                                    <button
                                        className="add-to-cart"
                                        onClick={() => {
                                            addToCart(product);
                                            alert('Added to cart!');
                                        }}
                                    >
                                        <i className="fas fa-gift"></i>
                                    </button>
                                    <button className="favorite-btn">
                                        <i className="far fa-heart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
