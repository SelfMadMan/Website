import "../components/Eras.css"
import { useLanguage } from '../languageContext'; // Adjust the import path as necessary

export default function Eras() {


    const erasTranslations = {
        EN: {
          eras: [
            {
              title: "Started from the bottom...",
              text: "James lost everything but now he has an unwavering determination. He's ready to fight daily for a better future.",
            },
            {
              title: "Everyday normal guy",
              text: "Through constant improvement and skill acquisition, you draw closer to success, but you're just an average loser now.",
            },
            {
              title: "Self Mad Man",
              text: "James has finally succeeded, he has a Lamborghini, dozens of bitcoin, and an addiction to cocaine, that's a real success!",
            },
          ],
        },
        FR: {
          eras: [
            {
              title: "Parti de rien...",
              text: "James a tout perdu mais il a maintenant une détermination inébranlable. Il est prêt à se battre quotidiennement pour un avenir meilleur.",
            },
            {
              title: "Un gars normal de tous les jours",
              text: "À travers une amélioration constante et l'acquisition de compétences, vous vous rapprochez du succès, mais pour l'instant, vous n'êtes qu'un perdant moyen.",
            },
            {
              title: "L'Homme Auto-Made",
              text: "James a finalement réussi, il possède une Lamborghini, des douzaines de bitcoins, et une addiction à la cocaïne, ça c'est un vrai succès !",
            },
          ],
        },
        // Add more languages as needed
      };
      const { language } = useLanguage(); // Use the current language
      const { eras } = erasTranslations[language]; // Get translations
  
      return (
          <>
             <div className="eras-container">
                  <img src='./images/gameplay-separation-white.png' className="eras-separation" alt="Eras Separator"></img>
                  <div className="eras-content">
                      <div className="eras-chad-container">
                          <img src='./images/eras-chad.png' className="eras-chad" alt="Eras Chad"></img>
                      </div>
                      <div className="eras-listing">
                          {eras.map((era, index) => (
                              <div className="eras-listing-box" key={index}>
                                  <img src={`./images/era-${index + 1}.png`} className="eras-icon" alt={`Era ${index + 1}`}></img>
                                  <div className="eras-listing-text">
                                      <h3>{era.title}</h3>
                                      <p>{era.text}</p>
                                  </div>
                              </div>  
                          ))}
                      </div>
                  </div>
             </div>
          </>
      );
  }
