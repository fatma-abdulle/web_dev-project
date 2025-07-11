import { Routes, Route } from "react-router-dom";
import { CartProvider } from './components/CartContext';
import "./assets/landingPage.css";
import "./assets/auth.css";
import "./assets/cart.css";
import "./assets/StaticCart.css";
import "./assets/Mey.css";
import "./assets/Browse.css"
import Homepage from "./Pages/homepage";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import StaticCart from "./components/StaticCart";
import Birthday from "./Pages/Birthday";
import Special from "./Pages/Special";
import Baby from "./Pages/Baby";
import Personalized from "./Pages/Personalized";
import HomeLiving from "./Pages/HomeLiving";
import Fashion from "./Pages/Fashion";
import ChatWithUs from "./Pages/ChatWithUs";
import Browse from "./Pages/Browse";
import Flower from './Pages/Flower';
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
