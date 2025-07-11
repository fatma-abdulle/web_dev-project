import {useState, useEffect} from 'react';
import allProductsData from '../Data/Products';
import Header from '../components/header';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import CategorySection from '../components/CategorySection';
import SpecialBox from '../components/SpecialBox';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import SearchResults from '../components/SearchResults';


export default function Homepage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);


    const suggestions = [
        'Birthday gifts', 'Baby shower gifts', 'Anniversary gifts',
        'Birthday cards', 'Birthday cake', 'Baby items',
        'Baby clothes', 'Baby toys', 'Home decor',
        'Home accessories', 'Special occasions', 'Personalized gifts',
        'Fashion accessories', 'Fashion jewelry', 'Luxury chocolates',
        'Scented candles', 'Wellness products', 'Gift baskets',
        'Flowers', 'Wedding gifts', 'Christmas gifts',
        'Valentine gifts', "Mother's Day gifts", "Father's Day gifts"
    ];

    useEffect(() => {
        setAllProducts(allProductsData);
    }, []);

    const handleSearch = () => {
        const term = searchTerm.trim().toLowerCase();
        if (!term) {
            setFilteredProducts([]);
            return;
        }

        const matches = allProducts.filter(p =>
            (p.name?.toLowerCase().includes(term) || '') ||
            (p.description?.toLowerCase().includes(term) || '')
        ).map((p, i) => ({ ...p, id: i }));

        setFilteredProducts(matches);
    };

    return (
        <div className="App">
            <Header
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleSearch={handleSearch}
                suggestions={suggestions}
            />
            <SearchResults filteredProducts={filteredProducts} />
            <Hero />
            <FeaturedProducts />
            <CategorySection />
            <SpecialBox />
            <Banner />
            <Footer />
        </div>
    );
}
