import CookiePopup from "../components/CookiePopup";
import Eras from "../components/Eras";
import Footer from "../components/Footer";
import Gameplay from "../components/Gameplay";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import LanguageSelector from "../components/languageselector"; 

export default function Home() {
    return (
        <div style={{ backgroundColor: "var(--dark-blue)" }}> 
            <Navbar />
            <Header />
            <Hero />
            <Gameplay />
            <Eras />
            <Newsletter />
            <Footer />
            <CookiePopup />
        </div>
    );
}
