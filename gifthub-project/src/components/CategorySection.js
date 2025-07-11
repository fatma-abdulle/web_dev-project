export default function CategorySection() {
    const categories = [
        { href: "/Birthday", icon: "ri-cake-2-line", name: "Birthday", class: "birthday" },
        { href: "/Baby", icon: "ri-home-smile-2-fill", name: "Baby Shower", class: "anniversary" },
        { href: "/HomeLiving", icon: "ri-home-heart-fill", name: "Home & Living", class: "home" },
        { href: "/Special", icon: "ri-candle-line", name: "Special Events", class: "special" },
        { href: "/Personalized", icon: "ri-user-heart-fill", name: "Personalized", class: "personalized" },
        { href: "/Fashion", icon: "ri-shirt-line", name: "Fashion", class: "fashion" },
    ];

    return (
        <section className="shop-category-section">
            <div className="container">
                <h2 className="section-title">Shop by Category</h2>
                <div className="categories-grid">
                    {categories.map((cat, index) => (
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
    );
}
