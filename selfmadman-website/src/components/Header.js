import "../components/Header.css"
import { useLanguage } from '../languageContext'; // Adjust the import path as necessary


const headerTranslations = {
    EN: {
      slogan: "From Zero to Hero: Transform your life with Inspiration and Success, one mini-game at a time.",
      cta: "Get Notified",
    },
    FR: { // Example of German translations
      slogan: "De Zéro à Idiot : Transformez votre vie grâce à la motivation et à l’ambition, un mini-jeu à la fois.",
      cta: "S'inscrire",
    },
    // Add more languages as needed
  };

  export default function Header() {
    const { language } = useLanguage(); // Use the current language
    const { slogan, cta } = headerTranslations[language]; // Get translations based on current language

    return (
        <>
            <div className="header-container">
                <div className="header-content">
                    <img src="./images/header-logo.png" alt="Header Logo" />
                    <p>{slogan}</p>
                    <button className="cta-btn">{cta}</button>
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