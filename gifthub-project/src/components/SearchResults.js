import { CartContext } from "./CartContext";
import { useContext } from "react";

export default function SearchResults({ filteredProducts }) {
    const { addToCart } = useContext(CartContext);

    return (
        filteredProducts.length > 0 && (
            <section className="search-results">
                <div className="container">
                    <h2 className="section-title">Search Results</h2>
                    <div className="products-grid">
                        {filteredProducts.map(product => (
                            <div className="product-card" key={product.id}>
                                <div className="product-image">
                                    <img src={product.image || '/LandingGift/default-product.jpg'} alt={product.name} />
                                </div>
                                <div className="product-info">
                                    <div className="product-name">{product.name}</div>
                                    <div className="product-description">{product.description}</div>
                                    <div className="product-price">{product.price || '$0.00'}</div>
                                    <div className="product-actions">
                                        <button
                                            className="add-to-cart"
                                            onClick={() => {
                                                addToCart({
                                                    id: product.id,
                                                    name: product.name,
                                                    image: product.image,
                                                    price: product.price,
                                                });
                                                alert(`${product.name} added to cart!`);
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
        )
    );
}
