import "../components/Hero.css"
import "./Root.css"
import { useLanguage } from '../languageContext'; // Adjust the import path as necessary

export default function Hero() {

    // src/translations/heroTranslations.js
const heroTranslations = {
    EN: {
      title: "James the Self Mad Man",
      paragraphs: [
        `Dive into "Self Mad Man", a game where motivation and ambition transform a desperate man, James, into a resounding success. Inspired by a motivating TikTok video, embark on a quest for wealth and fulfillment.`,
        `"Self-Mad Man" features mini-games symbolizing each step of your evolution, from health to wealth. With engaging graphics and music, advance towards autonomy and success.`,
        `"Self-Mad Man" features mini-games symbolizing each step of your evolution, from health to wealth. With engaging graphics and music, advance towards autonomy and success.`,
      ],
      cta: "Get Notified",
    },
// Add to src/translations/heroTranslations.js
FR: {
    title: "James le Self Mad Man",
    paragraphs: [
      `Plongez dans "Self Mad Man", un jeu où motivation et ambition transforment un homme désespéré, James, en un succès retentissant. Inspiré par une vidéo motivante sur TikTok, embarquez dans une quête de richesse et d'accomplissement.`,
      `"Self-Mad Man" présente des mini-jeux symbolisant chaque étape de votre évolution, de la santé à la richesse. Avec des graphiques attrayants et de la musique, avancez vers l'autonomie et le succès.`,
      `"Self-Mad Man" présente des mini-jeux symbolisant chaque étape de votre évolution, de la santé à la richesse. Avec des graphiques attrayants et de la musique, avancez vers l'autonomie et le succès.`,
    ],
    cta: "S'inscrire",
},
  
    // Add more languages as needed
  };
  
  const { language } = useLanguage(); // Use the current language
  const { title, paragraphs, cta } = heroTranslations[language]; // Get translations

  return (
      <>
         <div className='hero-section section'>
          <div className="hero-content">
              <h2>{title}</h2>
              <div className="hero-content-p">
                  {paragraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                  ))}
              </div>
              <button className='cta-btn'>{cta}</button>
          </div>
          <div className="img-container">
              <img src="./images/hero-section-img.png" className="phone-mockup" alt="Hero Section Mockup"></img>
          </div>
                <img src="./images/coin-3.png" className="hero-coin-1"></img>
                <img src="./images/coin-4.png" className="hero-coin-2"></img>
                <img src="./images/coin-5.png" className="hero-coin-3"></img>
                <img src="./images/coin-1.png" className="hero-coin-4"></img>
                <img src="./images/coin-8.png" className="hero-coin-5"></img>
                <img src="./images/coin-10.png" className="hero-coin-6"></img>

           </div>
        </>
    )
}