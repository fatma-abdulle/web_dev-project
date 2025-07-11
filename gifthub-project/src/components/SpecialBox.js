export default function SpecialBox() {
    return (
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
    );
}
