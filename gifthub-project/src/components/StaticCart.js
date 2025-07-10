import React, { useState, useEffect } from 'react';
import "../assets/cart.css";

const StaticCart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Luxury Chocolate Box',
            price: 29.99,
            image: '/h2.jpg',
            quantity: 1,
        },
        {
            id: 2,
            name: 'Scented Candle Set',
            price: 34.99,
            quantity: 2,
        },
    ]);

    const handleQuantityChange = (id, newQty) => {
        const updatedCart = cartItems.map((item) =>
            item.id === id ? { ...item, quantity: newQty } : item
        );
        setCartItems(updatedCart);
    };

    const handleRemove = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
    };

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const total = subtotal + 4.99;

    return (
        <div className="cart-section">
            <h2>Your Cart</h2>
            <div id="cart-items" className="cart-container">
                {cartItems.map((item) => (
                    <div className="cart-card" key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <div className="cart-info">
                            <h3>{item.name}</h3>
                            <p>${item.price.toFixed(2)} each</p>
                            <div className="cart-actions">
                                <select
                                    value={item.quantity}
                                    onChange={(e) =>
                                        handleQuantityChange(item.id, Number(e.target.value))
                                    }
                                >
                                    {Array.from({ length: 10 }, (_, i) => i + 1).map((val) => (
                                        <option key={val} value={val}>
                                            {val}
                                        </option>
                                    ))}
                                </select>
                                <button
                                    className="remove-btn"
                                    onClick={() => handleRemove(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                        <p>${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                ))}
            </div>

            <div className="cart-summary">
                <p>
                    Subtotal: <span id="subtotal">${subtotal.toFixed(2)}</span>
                </p>
                <p>
                    Shipping: <span>$4.99</span>
                </p>
                <p>
                    <strong>
                        Total: <span id="total">${total.toFixed(2)}</span>
                    </strong>
                </p>
            </div>
        </div>
    );
};

export default StaticCart;
