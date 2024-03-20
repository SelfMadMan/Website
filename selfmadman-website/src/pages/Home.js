import React from 'react'; // Make sure to import React
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
    const newsletterRef = React.useRef(null); // Create a ref for the Newsletter component

    return (
        <div style={{ backgroundColor: "var(--dark-blue)" }}> 
            <Navbar  scrollToNewsletterRef={newsletterRef}/>
            <Header  scrollToNewsletterRef={newsletterRef} />
            <Hero scrollToNewsletterRef={newsletterRef} /> {/* Pass the ref as a prop */}
            <Gameplay />
            <Eras />
            <Newsletter ref={newsletterRef} /> {/* Attach the ref to the Newsletter component */}
            <Footer />
            <CookiePopup />
        </div>
    );
}
