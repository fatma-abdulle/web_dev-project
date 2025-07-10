import {useState, useEffect, useContext} from 'react';
import allProductsData from '../Data/Products';
import { CartContext } from './CartContext';
export default function Homepage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const { addToCart } = useContext(CartContext);

    const suggestions = [
        'Birthday gifts', 'Baby shower gifts', 'Anniversary gifts',
        'Birthday cards', 'Birthday cake', 'Baby items',
        'Baby clothes', 'Baby toys', 'Home decor',
        'Home accessories', 'Special occasions', 'Personalized gifts',
        'Fashion accessories', 'Fashion jewelry', 'Luxury chocolates',
        'Scented candles', 'Wellness products', 'Gift baskets',
        'Flowers', 'Wedding gifts', 'Christmas gifts',
        'Valentine gifts', "Mother's Day gifts", "Father's Day gifts"
    ];


    useEffect(() => {
        setAllProducts(allProductsData);

        const handleClickOutside = (e) => {
            const suggestionsBox = document.getElementById('searchSuggestions');
            if (suggestionsBox && !suggestionsBox.contains(e.target)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);



    const handleSearch = () => {
        const term = searchTerm.trim().toLowerCase();
        if (!term) {
            setFilteredProducts([]);
            return;
        }

        const matches = allProducts
            .filter(p =>
                (p.name?.toLowerCase().includes(term) || '') ||
                (p.description?.toLowerCase().includes(term) || '')
            )
            .map((p, i) => ({ ...p, id: i }));

        setFilteredProducts(matches);
        setShowSuggestions(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="App">
            {/* Header */}
            <header id="header">
                <div className="container">
                    <div className="logo-section">
                        <div className="logo-icon"><i className="fas fa-gift"></i></div>
                        <span className="logo-text">GIFTHUB</span>
                    </div>

                    <div className="search-container" style={{ position: 'relative' }}>
                        <i className="fas fa-search search-icon"></i>
                        <input
                            type="text"
                            className="search-bar"
                            placeholder="Search for the perfect gift"
                            value={searchTerm}
                            onChange={(e) => {
                                const query = e.target.value;
                                setSearchTerm(query);
                                if (query.trim().length > 0) {
                                    const filtered = suggestions.filter(s =>
                                        s.toLowerCase().includes(query.toLowerCase())
                                    );
                                    setFilteredSuggestions(filtered.slice(0, 5));
                                    setShowSuggestions(true);
                                } else {
                                    setShowSuggestions(false);
                                }
                            }}
                            onKeyDown={handleKeyDown}
                        />
                        {showSuggestions && filteredSuggestions.length > 0 && (
                            <div id="searchSuggestions" className="search-suggestions">
                                {filteredSuggestions.map((suggestion, index) => (
                                    <div
                                        key={index}
                                        className="suggestion-item"
                                        onClick={() => {
                                            setSearchTerm(suggestion);
                                            setShowSuggestions(false);
                                            handleSearch();
                                        }}
                                    >
                                        {suggestion}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="header-actions">
                        <a href="/Cart" className="cart-icon">
                            <i className="fas fa-shopping-cart"></i>
                        </a>
                        <div className="account-menu">
                            <button className="account-btn">
                                <i className="fas fa-user-circle"></i>
                                <span>MY ACCOUNT</span>
                            </button>
                            <div className="dropdown-menu">
                                <a href="/SignIn" className="account-link">Sign In</a>
                                <a href="/SignUp" className="account-link">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Search Results */}
            {filteredProducts.length > 0 && (
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
                                            <button className="add-to-cart"><i className="fas fa-gift"></i></button>
                                            <button className="favorite-btn"><i className="far fa-heart"></i></button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
            {/* Hero Section */}
            <section id="hero">
                <img
                    src="LandingGift/2ac03a431e8d3206b542db950e7224e5.jpg"
                    alt="Hero Background"
                    className="hero-background"
                />
                <div className="hero-content">
                    <h1>CHOOSE THE PERFECT GIFT</h1>
                    <p>Browse our curated selection of gifts for any occasion and have them delivered directly to your recipient.</p>
                    <a href="/Browse" className="browse-link">
                        <button className="browse-btn">BROWSE GIFTS</button>
                    </a>
                </div>
            </section>

            <section id="featured">
                <div className="container">
                    <h2 className="section-title">FEATURED GIFTS</h2>
                    <div className="products-grid">
                        {/* Product Card 1 */}
                        <div className="product-card">
                            <div className="product-image">
                                <img src="LandingGift/download (38).jpeg" alt="Wellness Gift Basket" />
                            </div>
                            <div className="product-info">
                                <div className="product-name">Wellness Gift Basket</div>
                                <div className="product-description">A curated collection of wellness products for relaxation and self-care.</div>
                                <div className="product-price">$49.99</div>
                                <div className="product-actions">
                                    <button
                                        className="add-to-cart"
                                        onClick={() =>{
                                            addToCart({
                                                id: 'wellness-1',
                                                name: 'Wellness Gift Basket',
                                                image: 'LandingGift/download (38).jpeg',
                                                price: 49.99,
                                            })
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

                        {/* Product Card 2 */}
                        <div className="product-card">
                            <div className="product-image">
                                <img src="LandingGift/fc39bcb6b75010e028f88555ee9a7588.jpg" alt="Luxury Chocolate Box" />
                            </div>
                            <div className="product-info">
                                <div className="product-name">Luxury Chocolate Box</div>
                                <div className="product-description">A luxurious assortment of premium chocolates, perfect for any occasion.</div>
                                <div className="product-price">$29.99</div>
                                <div className="product-actions">
                                    <button
                                        className="add-to-cart"
                                        onClick={() =>{
                                            addToCart({
                                                id: 'chocolate-1',
                                                name: 'Luxury Chocolate Box',
                                                image: 'LandingGift/fc39bcb6b75010e028f88555ee9a7588.jpg',
                                                price: 29.99,
                                            })
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

                        {/* Product Card 3 */}
                        <div className="product-card">
                            <div className="product-image">
                                <img src="LandingGift/93b6d4958b67b0a6dc9f1301733576f1.jpg" alt="Scented Candle Set" />
                            </div>
                            <div className="product-info">
                                <div className="product-name">Scented Candle Set</div>
                                <div className="product-description">A beautiful set of aromatic candles to create a relaxing atmosphere.</div>
                                <div className="product-price">$34.99</div>
                                <div className="product-actions">
                                    <button
                                        className="add-to-cart"
                                        onClick={() =>{
                                            addToCart({
                                                id: 'candle-1',
                                                name: 'Scented Candle Set',
                                                image: 'LandingGift/93b6d4958b67b0a6dc9f1301733576f1.jpg',
                                                price: 34.99,
                                            })
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
                    </div>
                </div>
            </section>
            <section className="shop-category-section">
                <div className="container">
                    <h2 className="section-title">Shop by Category</h2>
                    <div className="categories-grid">
                        {[
                            { href: "/Birthday", icon: "ri-cake-2-line", name: "Birthday", class: "birthday" },
                            { href: "/Baby", icon: "ri-home-smile-2-fill", name: "Baby Shower", class: "anniversary" },
                            { href: "/HomeLiving", icon: "ri-home-heart-fill", name: "Home & Living", class: "home" },
                            { href: "/Special", icon: "ri-candle-line", name: "Special Events", class: "special" },
                            { href: "/Personalized", icon: "ri-user-heart-fill", name: "Personalized", class: "personalized" },
                            { href: "/Fashion", icon: "ri-shirt-line", name: "Fashion", class: "fashion" },
                        ].map((cat, index) => (
                            <a href={cat.href} className="category-link" key={index}>
                                <div className="category-card">
                                    <div className={`category-icon ${cat.class}`}>
                                        <i className={cat.icon}></i>
                                    </div>
                                    <h3 className="category-name">{cat.name}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Special Section */}
            <section className="special-section">
                <div className="container">
                    <div className="special-content">
                        <h2 className="special-title">Need Something Special?</h2>
                        <p className="special-description">
                            Can't find the perfect gift? Our gift specialists can create custom, personalized gifts tailored to your needs.
                        </p>
                        <a href="/ChatWithUs" className="chat-link">
                            <button className="chat-specialist-btn">
                                <i className="fas fa-comments"></i> Chat with us and Q$A
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Banner Section */}
            <section id="banner" className="bestbanner">
                <div className="container">
                    <h1>Up to <span>70% off</span> ON All Flowers</h1>
                    <a href="/Flower" className="browse-link">
                        <button className="normal">Explore More</button>
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-section">
                            <div className="logo-icon"><i className="fas fa-gift"></i></div>
                            <h4>Contact</h4>
                            <p><strong>Address:</strong> Nairobi, Kenya</p>
                            <p><strong>Phone:</strong> +254 789001234</p>
                            <p><strong>Hours:</strong> 9:00am—7:00pm, Mon–Sat</p>
                            <div className="social-section">
                                <h4>Follow us</h4>
                                <div className="social-icons">
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fa-instagram"></i>
                                    <i className="fab fa-pinterest-p"></i>
                                    <i className="fab fa-youtube"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>© 2025 GIFTHUB Ecommerce Platform</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
