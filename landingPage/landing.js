// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchSuggestions = document.getElementById('searchSuggestions');
    
    // Search suggestions data
    const suggestions = [
        'Birthday gifts',
        'Baby shower gifts',
        'Anniversary gifts',
        'Birthday cards',
        'Birthday cake',
        'Baby items',
        'Baby clothes',
        'Baby toys',
        'Home decor',
        'Home accessories',
        'Special occasions',
        'Personalized gifts',
        'Fashion accessories',
        'Fashion jewelry',
        'Luxury chocolates',
        'Scented candles',
        'Wellness products',
        'Gift baskets',
        'Flowers',
        'Wedding gifts',
        'Christmas gifts',
        'Valentine gifts',
        'Mother\'s Day gifts',
        'Father\'s Day gifts'
    ];

    // Product pages to search through
    const productPages = [
        '/Browse',
        '/Birthday',
        '/Baby',
        '/HomeLiving',
        '/Special',
        '/Personalized',
        '/Fashion'
    ];

    // Cache for storing loaded product data
    let productCache = {};
    let allProducts = [];

    // Load all products from all pages
    async function loadAllProducts() {
        try {
            for (const page of productPages) {
                if (!productCache[page]) {
                    const response = await fetch(page);
                    const html = await response.text();
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    
                    // Extract products from the page
                    const products = Array.from(doc.querySelectorAll('.product-card')).map(card => {
                        const name = card.querySelector('.product-name')?.textContent?.trim() || '';
                        const price = card.querySelector('.product-price')?.textContent?.trim() || '';
                        const img = card.querySelector('img')?.getAttribute('src') || '';
                        const description = card.querySelector('.product-description')?.textContent?.trim() || '';
                        
                        return {
                            name,
                            price,
                            img,
                            description,
                            page,
                            element: card.outerHTML
                        };
                    });
                    
                    productCache[page] = products;
                    allProducts = allProducts.concat(products);
                }
            }
        } catch (error) {
            console.error('Error loading products:', error);
        }
    }

    // Initialize product loading
    loadAllProducts();

    // Search products based on query
    function searchProducts(query) {
        if (!query || query.length < 2) return [];
        
        const searchTerm = query.toLowerCase();
        
        return allProducts.filter(product => {
            return product.name.toLowerCase().includes(searchTerm) ||
                   product.description.toLowerCase().includes(searchTerm);
        });
    }

    // Display search results
    function displaySearchResults(results, query) {
        // Create or get search results container
        let searchResultsContainer = document.getElementById('searchResults');
        
        if (!searchResultsContainer) {
            searchResultsContainer = document.createElement('div');
            searchResultsContainer.id = 'searchResults';
            searchResultsContainer.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.8);
                z-index: 1000;
                overflow-y: auto;
                padding: 20px;
                box-sizing: border-box;
            `;
            document.body.appendChild(searchResultsContainer);
        }

        // Clear previous results
        searchResultsContainer.innerHTML = '';

        // Create results content
        const resultsContent = document.createElement('div');
        resultsContent.style.cssText = `
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 10px;
            padding: 20px;
            position: relative;
        `;

        // Add close button
        const closeButton = document.createElement('button');
        closeButton.innerHTML = '&times;';
        closeButton.style.cssText = `
            position: absolute;
            top: 10px;
            right: 15px;
            background: none;
            border: none;
            font-size: 30px;
            cursor: pointer;
            color: #666;
        `;
        closeButton.addEventListener('click', () => {
            searchResultsContainer.remove();
        });

        // Add search header
        const searchHeader = document.createElement('div');
        searchHeader.innerHTML = `
            <h2 style="margin: 0 0 20px 0; color: #333;">
                Search Results for "${query}" (${results.length} ${results.length === 1 ? 'result' : 'results'})
            </h2>
        `;

        resultsContent.appendChild(closeButton);
        resultsContent.appendChild(searchHeader);

        if (results.length === 0) {
            // No results found
            const noResults = document.createElement('div');
            noResults.style.cssText = `
                text-align: center;
                padding: 50px;
                color: #666;
            `;
            noResults.innerHTML = `
                <h3>Sorry, no products found!</h3>
                <p>We couldn't find any products matching "${query}". Try searching with different keywords.</p>
                <button onclick="this.closest('#searchResults').remove()" style="
                    background-color: #e91e63;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    cursor: pointer;
                    margin-top: 20px;
                ">Continue Shopping</button>
            `;
            resultsContent.appendChild(noResults);
        } else {
            // Display results
            const resultsGrid = document.createElement('div');
            resultsGrid.style.cssText = `
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 20px;
                margin-top: 20px;
            `;

            results.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.innerHTML = product.element;
                productDiv.style.cssText = `
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    overflow: hidden;
                    transition: transform 0.3s;
                `;
                
                // Add hover effect
                productDiv.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                });
                productDiv.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });

                resultsGrid.appendChild(productDiv);
            });

            resultsContent.appendChild(resultsGrid);
        }

        searchResultsContainer.appendChild(resultsContent);

        // Close on background click
        searchResultsContainer.addEventListener('click', (e) => {
            if (e.target === searchResultsContainer) {
                searchResultsContainer.remove();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && searchResultsContainer) {
                searchResultsContainer.remove();
            }
        });
    }
    
    // Show suggestions with improved filtering
    function showSuggestions(query) {
        if (query.length === 0) {
            searchSuggestions.style.display = 'none';
            return;
        }
        
        const filteredSuggestions = suggestions.filter(suggestion =>
            suggestion.toLowerCase().includes(query.toLowerCase())
        );
        
        if (filteredSuggestions.length === 0) {
            searchSuggestions.style.display = 'none';
            return;
        }
        
        searchSuggestions.innerHTML = '';
        
        filteredSuggestions.slice(0, 6).forEach(suggestion => {
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'suggestion-item';
            suggestionItem.textContent = suggestion;
            suggestionItem.style.cssText = `
                padding: 10px 15px;
                cursor: pointer;
                border-bottom: 1px solid #eee;
                transition: background-color 0.2s;
            `;
            
            suggestionItem.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#f5f5f5';
            });
            
            suggestionItem.addEventListener('mouseleave', function() {
                this.style.backgroundColor = '';
            });
            
            suggestionItem.addEventListener('click', function() {
                searchInput.value = suggestion;
                searchSuggestions.style.display = 'none';
                performSearch(suggestion);
            });
            
            searchSuggestions.appendChild(suggestionItem);
        });
        
        // Style the suggestions container
        searchSuggestions.style.cssText = `
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            border: 1px solid #ddd;
            border-top: none;
            border-radius: 0 0 8px 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            z-index: 1000;
            max-height: 300px;
            overflow-y: auto;
            display: block;
        `;
    }
    
    // Search input event listener
    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        showSuggestions(query);
    });
    
    // Hide suggestions when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
            searchSuggestions.style.display = 'none';
        }
    });
    
    // Perform search function
    async function performSearch(query) {
        if (!query || query.length < 2) {
            showNotification('Please enter at least 2 characters to search');
            return;
        }

        // Show loading message
        showNotification('Searching...');

        // Ensure products are loaded
        if (allProducts.length === 0) {
            await loadAllProducts();
        }

        // Search for products
        const results = searchProducts(query);
        
        // Display results
        displaySearchResults(results, query);
        
        // Hide suggestions
        searchSuggestions.style.display = 'none';
    }
    
    // Handle search form submission
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const query = this.value.trim();
            if (query) {
                performSearch(query);
            }
        }
    });

    // Add search button functionality if exists
    const searchButton = document.querySelector('.search-btn, #searchButton');
    if (searchButton) {
        searchButton.addEventListener('click', function(e) {
            e.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                performSearch(query);
            }
        });
    }
    
    // Cart functionality
    function updateCartCount() {
        const cart = getCart();
        const count = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
        const cartCountElement = document.querySelector('.cart-count');
        if (cartCountElement) cartCountElement.textContent = count;
    }

    // Helper function to get cart (using memory instead of localStorage)
    let cartData = [];
    function getCart() {
        return cartData;
    }

    function setCart(cart) {
        cartData = cart;
    }

    updateCartCount();

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productCard = this.closest('.product-card');
            const name = productCard.querySelector('.product-name').textContent.trim();
            const price = productCard.querySelector('.product-price').textContent.replace('$', '').trim();
            const img = productCard.querySelector('img').getAttribute('src');

            let cart = getCart();
            // Check if item already exists in cart
            const existing = cart.find(item => item.name === name);
            if (existing) {
                existing.qty += 1;
            } else {
                cart.push({ name, price, img, qty: 1 });
            }
            setCart(cart);
            updateCartCount();

            // Show notification
            showNotification('Item added to cart!');
        });
    });
    
    // Favorite functionality
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const icon = this.querySelector('i');
            
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.style.color = '#e91e63';
                showNotification('Added to favorites!');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.style.color = '';
                showNotification('Removed from favorites!');
            }
        });
    });
    
    // Notification system
    function showNotification(message) {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background-color: #4CAF50;
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            z-index: 1002;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            animation: slideIn 0.3s ease-out;
        `;
        
        // Add CSS animation
        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOut {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.backgroundColor = 'rgba(248, 200, 212, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.backgroundColor = '#f8c8d4';
                header.style.backdropFilter = 'none';
            }
        }
    });
    
    // Product card hover effects
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Category card hover effects
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Mobile menu toggle (if needed)
    const mobileMenuButton = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Initialize lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    if (images.length > 0) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // Form validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Newsletter signup
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (validateEmail(email)) {
                showNotification('Thank you for subscribing!');
                this.reset();
            } else {
                showNotification('Please enter a valid email address.');
            }
        });
    }
    
    // Loading screen
    window.addEventListener('load', function() {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.display = 'none';
        }
    });
    
    // Back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #e91e63;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 20px;
        cursor: pointer;
        display: none;
        z-index: 1000;
        transition: all 0.3s;
    `;
    
    document.body.appendChild(backToTopBtn);
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    // Console log for debugging
    console.log('GiftHub website loaded successfully!');
});