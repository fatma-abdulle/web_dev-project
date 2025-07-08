export default function Homepage() {
    return (
        <>
            <div className="App">
                {/* Header */}
                <header id="header">
                    <div className="container">
                        <div className="logo-section">
                            <div className="logo-icon">
                                <i className="fas fa-gift"></i>
                            </div>
                            <span className="logo-text">GIFTHUB</span>
                        </div>

                        <div className="search-container">
                            <i className="fas fa-search search-icon"></i>
                            <input
                                type="text"
                                className="search-bar"
                                placeholder="Search for the perfect gift"
                                id="searchInput"
                            />
                            <div className="search-suggestions" id="searchSuggestions"></div>
                        </div>

                        <div className="header-actions">
                            <a href="../cart.html" className="cart-icon">
                                <i className="fas fa-shopping-cart"></i>
                                <span className="cart-count">0</span>
                            </a>
                            <div className="account-menu">
                                <button className="account-btn">
                                    <i className="fas fa-user-circle"></i>
                                    <span>MY ACCOUNT</span>
                                </button>
                                <div className="dropdown-menu">
                                    <a href="signin.html" className="account-link">Sign In</a>
                                    <a href="signup.html" className="account-link">Sign Up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

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
                        <a href="Browse.html" className="browse-link">
                            <button className="browse-btn">BROWSE GIFTS</button>
                        </a>
                    </div>
                </section>

                {/* Featured Section */}
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
                                        <button className="add-to-cart"><i className="fas fa-gift"></i></button>
                                        <button className="favorite-btn"><i className="far fa-heart"></i></button>
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
                                        <button className="add-to-cart"><i className="fas fa-gift"></i></button>
                                        <button className="favorite-btn"><i className="far fa-heart"></i></button>
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
                                        <button className="add-to-cart"><i className="fas fa-gift"></i></button>
                                        <button className="favorite-btn"><i className="far fa-heart"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Shop by Category Section */}
                <section className="shop-category-section">
                    <div className="container">
                        <h2 className="section-title">Shop by Category</h2>
                        <div className="categories-grid">
                            {[
                                { href: "birthday.html", icon: "ri-cake-2-line", name: "Birthday" },
                                { href: "baby.html", icon: "ri-home-smile-2-fill", name: "Baby Shower" },
                                { href: "home&living.html", icon: "ri-home-heart-fill", name: "Home & Living" },
                                { href: "special.html", icon: "ri-candle-line", name: "Special Occasions" },
                                { href: "personalized.html", icon: "ri-user-heart-fill", name: "Personalized" },
                                { href: "fashion.html", icon: "ri-shirt-line", name: "Fashion" },
                            ].map((cat, index) => (
                                <a href={cat.href} className="category-link" key={index}>
                                    <div className="category-card">
                                        <div className={`category-icon ${cat.name.toLowerCase().replace(/ & /, '-').replace(/\s+/g, '-')}`}>
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
                            <a href="ChatWithUs.html" className="chat-link">
                                <button className="chat-specialist-btn">
                                    <i className="fas fa-comments"></i> Chat with a Gift Specialist
                                </button>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Banner Section */}
                <section id="banner" className="bestbanner">
                    <div className="container">
                        <h1>Up to <span>70% off</span> ON All Flowers</h1>
                        <a href="Browse.html" className="browse-link">
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
        </>
    );
}
