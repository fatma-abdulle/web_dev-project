import '../auth.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignIn = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === form.email && u.password === form.password);

    if (user) {
      alert('Welcome back!');
      navigate('/');
    } else {
      alert('Invalid email or password');
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
        <h2>Welcome Back</h2>
        <p>Please sign in to your account</p>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" name="email" required placeholder="Enter your email" onChange={handleChange} />

          <label>Password</label>
          <input type="password" name="password" required placeholder="Enter your password" onChange={handleChange} />

          <div className="form-actions">
            <label><input type="checkbox" /> Remember me</label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit">Sign In</button>
        </form>
        <p className="switch">Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </section>
  );
};

export default SignIn;
