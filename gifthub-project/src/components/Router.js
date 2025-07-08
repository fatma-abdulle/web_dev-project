import { Link } from 'react-router-dom';

const home= () => (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1>Welcome to Gift Shop</h1>
        <Link to="/signIn" style={{ margin: '20px', display: 'inline-block' }}>Sign In</Link>
        <Link to="/signUp" style={{ margin: '20px', display: 'inline-block' }}>Sign Up</Link>
    </div>
);

export default home;
