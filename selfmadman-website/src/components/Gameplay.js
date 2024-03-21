import "../components/Gameplay.css"
import "./Root.css"
import { useLanguage } from '../languageContext'; // Adjust the import path as necessary

export default function Gameplay() {
    const gameplayTranslations = {
        EN: {
          steps: [
            {
              title: "Free to Play",
              text: "You won't be able to stop laughing in Self Mad Man. ",
            },
            {
              title: "Made By Students",
              text: "Discover crazy and exciting  mini-games that will change James' life",
            },
            {
              title: "Pop References",
              text: "James is rich! He hates the poor and thinks global warming is an excuse to tax him more.",
            },
          ],
        },
        // Add to src/translations/gameplayTranslations.js
FR: {
    steps: [
      {
        title: "Jeu gratuit",
        text: "Rencontre avec Chad, un coach motivant, déclenche un nouveau départ.",
      },
      {
        title: "Réalisé par des étudiants",
        text: "Participation à divers mini-jeux pour améliorer compétences et vie.",
      },
      {
        title: "Références pop",
        text: "Réalisation de la richesse et accomplissement personnel ultime.",
      },
    ],
  },
  
        // Add more languages as needed
      };
      const { language } = useLanguage(); // Use the current language
      const { steps } = gameplayTranslations[language]; // Get translations
  
      return (
          <>
             <div className="gameplay-section" id="gameplay">
                  <img src='./images/gameplay-separation-blue.png' className="gameplay-separation" alt="Gameplay Separator"></img>
                  {/*<img src='./images/gameplay-screen.png'></img>*/}                
                  <div className="gameplay-content section">
                      {steps.map((step, index) => (
                          <div className="gameplay-box" key={index}>
                              <img src={`./images/gameplay-${index + 1}.png`} alt={`Gameplay ${index + 1}`}></img>
                              <p className="gameplay-step">{index + 1}</p>
                              <h3>{step.title}</h3>
                               {/*<p className="gameplay-text">{step.text}</p>*/}
                              
                          </div>
                      ))}
                  </div>
             </div>
           
        </>
    )
}
