import "../assets/auth.css";

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignUp = () => {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.find(user => user.email === form.email)) {
            alert('User already exists!');
        } else {
            users.push(form);
            localStorage.setItem('users', JSON.stringify(users));
            alert('Account created successfully!');
            navigate('/signin');
        }
    };

    return (
        <section
            className="auth-section"
            style={{
                backgroundImage: "url('/background2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh"
            }}
        >
            <div className="auth-box">
                <Link to="/" className="back-home">← Back to Home</Link>
                <h2>Create Your Account</h2>
                <p>Join the Gift Shop family</p>
                <form onSubmit={handleSubmit}>
                    <label>Full Name</label>
                    <input type="text" name="name" required placeholder="Your full name" onChange={handleChange} />

                    <label>Email</label>
                    <input type="email" name="email" required placeholder="Your email address" onChange={handleChange} />

                    <label>Password</label>
                    <input type="password" name="password" required placeholder="Create a password" onChange={handleChange} />

                    <div className="form-terms">
                        <label><input type="checkbox" required /> I agree to the <a href="#">terms & conditions</a></label>
                    </div>

                    <button type="submit">Sign Up</button>
                </form>
                <p className="switch">Already have an account? <Link to="/signin">Sign In</Link></p>
            </div>
        </section>
    );
};

export default SignUp;
