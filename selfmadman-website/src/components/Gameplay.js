import "../components/Gameplay.css"
import "./Root.css"
import { useLanguage } from '../languageContext'; // Adjust the import path as necessary

export default function Gameplay() {
    const gameplayTranslations = {
        EN: {
          steps: [
            {
              title: "Inspiration",
              text: "Encounter with Chad, a motivating coach, triggers a new beginning.",
            },
            {
              title: "Evolution",
              text: "Participation in various mini-games to improve skills and life.",
            },
            {
              title: "Success",
              text: "Achievement of wealth and ultimate personal fulfillment.",
            },
          ],
        },
        // Add to src/translations/gameplayTranslations.js
FR: {
    steps: [
      {
        title: "Inspiration",
        text: "Rencontre avec Chad, un coach motivant, déclenche un nouveau départ.",
      },
      {
        title: "Évolution",
        text: "Participation à divers mini-jeux pour améliorer compétences et vie.",
      },
      {
        title: "Succès",
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
             <div className="gameplay-section">
                  <img src='./images/gameplay-separation-blue.png' className="gameplay-separation" alt="Gameplay Separator"></img>
                  {/*<img src='./images/gameplay-screen.png'></img>*/}                
                  <div className="gameplay-content section">
                      {steps.map((step, index) => (
                          <div className="gameplay-box" key={index}>
                              <img src={`./images/gameplay-${index + 1}.png`} alt={`Gameplay ${index + 1}`}></img>
                              <p className="gameplay-step">{index + 1}</p>
                              <h3>{step.title}</h3>
                              <p className="gameplay-text">{step.text}</p>
                          </div>
                      ))}
                  </div>
                  <img src='./images/gameplay-separation-white.png' className="gameplay-separation" alt="Gameplay Separator"></img>
             </div>
          </>
      );
  }