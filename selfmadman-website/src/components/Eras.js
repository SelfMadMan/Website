import "../components/Eras.css"
import { useLanguage } from '../languageContext'; // Adjust the import path as necessary

export default function Eras() {


  const erasTranslations = {
    EN: {
      eras: [
        {
          title: "Basic loser",
          text: "After losing everything, James regains hope after discovering an influencer who will make him understand that he just sucks.",
        },
        {
          title: "Everyday normal guy",
          text: "After months of hard work, James has a new job, a new wife and a new car. Honestly, he should have stopped there...",
        },
        {
          title: "Self Mad Man",
          text: "James has finally succeeded! He has a Lamborghini, thousands of bitcoins and an addiction to cocaine, that’s success!",
        },
      ],
      images: [{
        src: "./images/eras-chad.png",
      }
      ]
    },
    FR: {
      eras: [
        {
          title: "Le gros nullos",
          text: "Après avoir tout perdu, James reprend espoir en découvrant un influenceur qui lui fera comprendre qu'il est tout simplement nul.",
        },
        {
          title: "Everyday normal guy ",
          text: "Après des mois de travail acharné, James a un nouveau travail, une nouvelle femme et une nouvelle voiture. Honnêtement, il aurait dû s'arrêter là... ",
        },
        {
          title: "Self Mad Man",
          text: "James a enfin réussi ! Il a une Lamborghini, des milliers de bitcoins et une addiction à la cocaïne, c'est ça le succès !",
        },
      ],
      images: [{
        src: "./images/era-chad-fr.png",
      }
      ]
    },
    // Add more languages as needed
  };
  const { language } = useLanguage(); // Use the current language
  const { eras, images } = erasTranslations[language]; // Get translations and images for current language
  const mainImageSrc = images[0].src; // Assume there is at least one image

  return (
    <>
      <div className="eras-container">
        <img src='./images/gameplay-separation-white.png' className="eras-separation" alt="Eras Separator"></img>
        <div className="eras-content">
          <div className="eras-chad-container">
          <img src={mainImageSrc} className="eras-chad" alt="Eras Chad"></img>
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
        <img src="./images/madcoin-face.png" className="eras-coin-1 parallax-coin"></img>
        <img src="./images/madcoin-face.png" className="eras-coin-3 parallax-coin"></img>
        <img src="./images/madcoin-3_4.png" className="eras-coin-4 parallax-coin"></img>
        <img src="./images/madcoin-face.png" className="eras-coin-5 parallax-coin"></img>
        <img src="./images/madcoin-3_4.png" className="eras-coin-6 parallax-coin"></img>
        <img src="./images/madcoin-3_4.png" className="eras-coin-7 parallax-coin"></img>
        <img src="./images/madcoin-3_4.png" className="eras-coin-8 parallax-coin"></img>

      </div>
    </>
  );
}
