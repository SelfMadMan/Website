import "../components/Hero.css"
import "./Root.css"
import { useLanguage } from '../languageContext'; // Adjust the import path as necessary

export default function Hero({scrollToNewsletterRef }) {

    // src/translations/heroTranslations.js
const heroTranslations = {
    EN: {
      title: "It's time to become somebody",
      paragraphs: [
        `Self Mad Man is a free to play mobile game where you embody James, a man who lost his job, his wife, his car and his dignity in the same day. His life takes an unexpected turn when he discovers a motivation video on TikTok and finally understands he just have to own three Lamborghinis and invest in crypto to be successful.`,
        `Self Mad Man features mini-games symbolizing each step of James’ evolution. Start by fighting random people in the street to prove your masculinity and end by defending your car against ecologists.`,
      ],
      cta: "Get Notified",
    },
// Add to src/translations/heroTranslations.js
FR: {
    title: "Devenez Le Roi De Ce Monde",
    paragraphs: [
      `Self Mad Man</span> est un jeu mobile gratuit dans lequel vous incarnez James, un homme qui a perdu son travail, sa femme, sa voiture et sa dignité le même jour. Sa vie prend un tournant inattendu lorsqu'il découvre une vidéo de motivation sur TikTok et comprend enfin qu'il lui suffit de posséder trois Lamborghini et d'investir dans la crypto pour réussir.`,
      `"Self Mad Man propose des mini-jeux représentant chaque étape de l'évolution de James. Commencez par combattre des gens au hasard dans la rue pour affirmer votre masculinité et terminez en défendant votre lambo’ contre des écolos en grève.`,
    ],
    cta: "S'inscrire",
},
  
    // Add more languages as needed
  };
  
  const { language } = useLanguage(); // Use the current language
  const { title, paragraphs, cta } = heroTranslations[language]; // Get translations

  document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    document.querySelectorAll('.parallax-coin').forEach((coin, index) => {
        const depth = index % 2 === 0 ? 20 : -20; // Alternance de direction pour l'effet
        const movement = (scrollPosition * depth) / 500;
        coin.style.transform = `translateY(${movement}px)`;
    });
});


const scrollToNewsletter = (event) => {
    event.preventDefault();
    console.log(scrollToNewsletterRef.current); // This should log the DOM element
    scrollToNewsletterRef.current?.scrollIntoView({ behavior: 'smooth' });
};

return (
    <>
        <div className='hero-section section' id="presentation">
            <div className="hero-content">
                <h2>{title}</h2>
                <div className="hero-content-p">
                    {paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
                <a className='cta-btn'  onClick={scrollToNewsletter}>{cta}</a>
            </div>
            <div className="img-container">              
            <img src="./images/hero-section-img.png" className="phone-mockup" alt="Hero Section Mockup"></img>
          </div>
                <img src="./images/madcoin-face.png" className="hero-coin-1 parallax-coin"></img>
                <img src="./images/madcoin-3_4.png" className="hero-coin-2 parallax-coin"></img>
                <img src="./images/madcoin-face.png" className="hero-coin-3 parallax-coin"></img>
                <img src="./images/madcoin-3_4.png" className="hero-coin-4 parallax-coin"></img>
                <img src="./images/madcoin-face.png" className="hero-coin-5 parallax-coin"></img>
                <img src="./images/madcoin-3_4.png" className="hero-coin-6 parallax-coin"></img>

           </div>
        </>
    )
}