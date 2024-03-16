import "../components/Header.css"
import Navbar from "../components/Navbar";


export default function Header() {
    return (
        <>
        <div className="header-container">
            <Navbar />
            <div className="header-content">
                <img src="./images/header-logo.png"/>
                <p>From Zero to Hero: Transform your life with Inspiration and Success, one mini-game at a time.</p>
                <button className="cta-btn">Get Notified</button>
            </div>
            <div className="header-socials">
                <a href="https://www.instagram.com/selfmadman_/" target="__blank"><i class="bi bi-instagram"></i></a>
                <a href="https://twitter.com/selfmadman_" target="__blank"><i class="bi bi-twitter-x"></i></a>
                <a href="https://www.tiktok.com/@selfmadman_" target="__blank"><i class="bi bi-tiktok"></i></a>
                <a href="https://youtube.com/@Selfmadman_?si=LvlL4kOfbUT8KbwQ" target="__blank"> <i class="bi bi-youtube"></i></a>
                <a href="https://www.linkedin.com/in/chad-motivation-1930ab2b7/" target="__blank"> <i class="bi bi-linkedin"></i></a>
            </div>
            <div className="header-james">
                <img src="./images/header-james-1.png"/>
                <img src="./images/header-james-2.png"/>
            </div>

        </div>
           
           
        </>
    )
}