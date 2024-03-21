import "../components/Header.css"
import { useLanguage } from '../languageContext'; // Adjust the import path as necessary


const headerTranslations = {
    EN: {
      slogan: "When motivation videos go too far...",
      cta: "Get Notified",
    },
    FR: { // Example of German translations
      slogan: "Quand les vidéos de motivation vont trop loin...",
      cta: "S'inscrire",
    },
    // Add more languages as needed
  };

  export default function Header({scrollToNewsletterRef}) {
    const { language } = useLanguage(); // Use the current language
    const { slogan, cta } = headerTranslations[language]; // Get translations based on current language
    const scrollToNewsletter = (event) => {
      event.preventDefault();
      console.log(scrollToNewsletterRef.current); // This should log the DOM element
      scrollToNewsletterRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
    return (
        <>
            <div className="header-container">
                <div className="header-content">
                    <img src="./images/header-logo.png" alt="Header Logo" className="header-logo" />
                    <p>{slogan}</p>
                    <a className='cta-btn'  onClick={scrollToNewsletter}>{cta}</a>
                </div>
                
                <div className="header-socials">
                <a href="https://www.instagram.com/selfmadman_/" target="__blank"><i class="bi bi-instagram"></i></a>
                <a href="https://twitter.com/selfmadman_" target="__blank"><i class="bi bi-twitter-x"></i></a>
                <a href="https://www.tiktok.com/@selfmadman_" target="__blank"><i class="bi bi-tiktok"></i></a>
                <a href="https://youtube.com/@Selfmadman_?si=LvlL4kOfbUT8KbwQ" target="__blank"><i class="bi bi-youtube"></i></a>
                <a href="https://www.linkedin.com/in/chad-motivation-1930ab2b7/" target="__blank"><i class="bi bi-linkedin"></i></a>
            </div>
            <div className="header-james">
                <img src="./images/header-james-1.png"/>
                <img src="./images/header-james-2.png"/>
            </div>

            <img src="./images/madcoin-face.png" className="header-coin-1 parallax-coin"></img>
                <img src="./images/madcoin-3_4.png" className="header-coin-2 parallax-coin"></img>
                <img src="./images/madcoin-face.png" className="header-coin-3 parallax-coin"></img>
                <img src="./images/madcoin-3_4.png" className="header-coin-4 parallax-coin"></img>
                <img src="./images/madcoin-face.png" className="header-coin-5 parallax-coin"></img>
                <img src="./images/madcoin-3_4.png" className="header-coin-6 parallax-coin"></img>
                <img src="./images/madcoin-3_4.png" className="header-coin-7 parallax-coin"></img>
                <img src="./images/madcoin-3_4.png" className="header-coin-8 parallax-coin"></img>


        </div>
           
           
        </>
    )
}