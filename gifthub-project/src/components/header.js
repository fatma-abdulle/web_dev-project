import { useState, useEffect } from 'react';

export default function Header({ searchTerm, setSearchTerm, handleSearch, suggestions }) {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            const suggestionsBox = document.getElementById('searchSuggestions');
            if (suggestionsBox && !suggestionsBox.contains(e.target)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSearch();
    };

    return (
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
                            if (query.trim()) {
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
    );
}
