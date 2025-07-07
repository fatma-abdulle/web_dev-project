import { Link } from 'react-router-dom';

const Home = () => (
  <div style={{ textAlign: 'center', marginTop: '100px' }}>
    <h1>Welcome to Gift Shop</h1>
    <Link to="/signin" style={{ margin: '20px', display: 'inline-block' }}>Sign In</Link>
    <Link to="/signup" style={{ margin: '20px', display: 'inline-block' }}>Sign Up</Link>
  </div>
);

export default Home;
