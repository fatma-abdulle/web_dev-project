
import React, { useContext } from 'react';
import '../assets/cart.css';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/StaticCart.css';
import { CartContext } from './CartContext';

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate();


    const validCartItems = cartItems.filter(item => typeof item.price === 'number' && item.price >= 0);

    const subtotal = validCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 0 ? 10 : 0;
    const total = subtotal + shipping;

    const handleCheckout = () => {
        navigate('/Checkout');
    };

    return (
        <div>
            <Link to="/" className="back-home-btn">
                <i className="fas fa-arrow-left"></i> Continue Shopping
            </Link>

            <section className="cart-section">
                <h2>Your Shopping Cart</h2>
                <div className="cart-container">
                    {validCartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        validCartItems.map(item => (
                            <div className="cart-item" key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <div className="item-details">
                                    <h3>{item.name}</h3>
                                    <p>${item.price.toFixed(2)}</p>
                                    <div className="quantity">
                                        <select
                                            value={item.quantity}
                                            onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                                        >
                                            {Array.from({ length: 10 }, (_, i) => i + 1).map(val => (
                                                <option key={val} value={val}>{val}</option>
                                            ))}
                                        </select>
                                        <button
                                            className="remove-btn"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="item-total">
                                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {validCartItems.length > 0 && (
                    <div className="cart-summary">
                        <h3>Cart Summary</h3>
                        <p>Subtotal: <span>${subtotal.toFixed(2)}</span></p>
                        <p>Shipping: <span>${shipping.toFixed(2)}</span></p>
                        <p><strong>Total: <span>${total.toFixed(2)}</span></strong></p>
                        <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Cart;
