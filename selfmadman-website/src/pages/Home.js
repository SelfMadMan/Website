import Eras from "../components/Eras";
import Footer from "../components/Footer";
import Gameplay from "../components/Gameplay";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";


export default function Home() {
    return (
        <>
            <Navbar />
            <h2>Homepage</h2>
            <Header />
            <Hero />
            <Gameplay />
            <Eras />
            
            <Footer />
        </>
    )
}