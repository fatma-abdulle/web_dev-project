export default function Hero() {
    return (
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
    );
}
