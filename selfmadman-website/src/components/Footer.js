import "../components/Footer.css"
import "./Root.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useLanguage } from '../languageContext'; // Adjust the import path as necessary

export default function Footer() {
    const footerTranslations = {
        EN: {
          privacy: "Privacy Policy",
          terms: "Terms and Conditions",
        },
        FR: {
            privacy: "Politique de Confidentialité",
            terms: "Conditions Générales d'Utilisation",
          },
        // Add more languages and translations as needed
      };
      const { language } = useLanguage(); // Use the current language
      const { privacy, terms } = footerTranslations[language]; // Get translations
  
    return (
        <>
        <footer className="footer-section">

        <ul>
        <li><a href="/privacy" target="__blank">{privacy}</a></li>
                    <li><a href="/terms" target="__blank">{terms}</a></li>
        </ul>
        <div className="footer-icons">
            <a href="https://www.instagram.com/selfmadman_/" target="__blank"><i class="bi bi-instagram"></i></a>
            <a href="https://twitter.com/selfmadman_" target="__blank"><i class="bi bi-twitter-x"></i></a>
            <a href="https://www.tiktok.com/@selfmadman_" target="__blank"><i class="bi bi-tiktok"></i></a>
            <a href="https://youtube.com/@Selfmadman_?si=LvlL4kOfbUT8KbwQ" target="__blank"> <i class="bi bi-youtube"></i></a>
            <a href="https://www.linkedin.com/in/chad-motivation-1930ab2b7/" target="__blank"> <i class="bi bi-linkedin"></i></a>
        </div>

        </footer>
           
        </>
    )
}