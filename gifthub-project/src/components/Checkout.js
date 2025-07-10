import React, { useEffect, useState } from 'react';
import "../assets/cart.css";
import "../assets/StaticCart.css";
import { useNavigate, Link } from 'react-router-dom';

const Checkout = () => {
    const [cart, setCart] = useState([]);
    const [orderHtml, setOrderHtml] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(cartData);
    }, []);

    useEffect(() => {
        if (cart.length === 0) return;

        let subtotal = 0;
        let html = '<h3>Your Order</h3>';
        cart.forEach(item => {
            const itemTotal = item.quantity * parseFloat(item.price);
            subtotal += itemTotal;
            html += `<p><span>${item.quantity} x ${item.name}</span> <span>$${itemTotal.toFixed(2)}</span></p>`;
        });
        const shipping = subtotal > 0 ? 10 : 0;
        const total = subtotal + shipping;
        html += `<p><span>Subtotal:</span> <span>$${subtotal.toFixed(2)}</span></p>`;
        html += `<p><span>Shipping:</span> <span>$${shipping.toFixed(2)}</span></p>`;
        html += `<div class="order-total">Total: $${total.toFixed(2)}</div>`;
        setOrderHtml(html);
    }, [cart]);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your order!');
        localStorage.removeItem('cart');
        navigate('/'); // Redirect to homepage (update route if needed)
    };

    return (
        <div>
            <Link to="/Cart" className="back-home-btn">
                <i className="fas fa-arrow-left"></i> Back to Cart
            </Link>

            <section className="checkout-section">
                <h2 style={{ color: '#ED3A6A', textAlign: 'center', marginBottom: '28px' }}>Checkout</h2>

                <form id="checkout-form" onSubmit={handleSubmit}>
                    <label style={{ display: 'block', marginBottom: '16px' }}>
                        <span style={{ display: 'block', marginBottom: '6px' }}>Full Name:</span>
                        <input type="text" name="name" required />
                    </label>
                    <label style={{ display: 'block', marginBottom: '16px' }}>
                        <span style={{ display: 'block', marginBottom: '6px' }}>Address:</span>
                        <input type="text" name="address" required />
                    </label>
                    <label style={{ display: 'block', marginBottom: '20px' }}>
                        <span style={{ display: 'block', marginBottom: '6px' }}>Email:</span>
                        <input type="email" name="email" required />
                    </label>
                    <button type="submit" className="checkout-btn">Place Order</button>
                </form>

                <div id="order-summary" className="order-summary" dangerouslySetInnerHTML={{ __html: orderHtml }}></div>
            </section>
        </div>
    );
};

export default Checkout;
