import { Routes, Route } from "react-router-dom";
import { CartProvider } from './components/CartContext';
import "./assets/landingPage.css";
import "./assets/auth.css";
import "./assets/cart.css";
import "./assets/StaticCart.css";
import "./assets/Mey.css";
import "./assets/Browse.css"
import Homepage from "./components/homepage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import StaticCart from "./components/StaticCart";
import Birthday from "./components/Birthday";
import Special from "./components/Special";
import Baby from "./components/Baby";
import Personalized from "./components/Personalized";
import HomeLiving from "./components/HomeLiving";
import Fashion from "./components/Fashion";
import ChatWithUs from "./components/ChatWithUs";
import Browse from "./components/Browse";
import Flower from './components/Flower';
function App() {
    return (
        <CartProvider>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Checkout" element={<Checkout />} />
                <Route path="/StaticCart" element={<StaticCart />} />
                <Route path="/Birthday" element={<Birthday />} />
                <Route path="/Special" element={<Special />} />
                <Route path="/Baby" element={<Baby />} />
                <Route path="/Personalized" element={<Personalized />} />
                <Route path="/HomeLiving" element={<HomeLiving />} />
                <Route path="/Fashion" element={<Fashion />} />
                <Route path="/ChatWithUs" element={<ChatWithUs />} />
                <Route path="/Browse" element={<Browse />} />
                <Route path="/Flower" element={<Flower />} />

            </Routes>
        </CartProvider>
    );
}

export default App;
