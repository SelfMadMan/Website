import "../components/Footer.css"
import "./Root.css"
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
    return (
        <>
        <footer className="footer-section">

        <ul>
            <li><a href="/privacy" target="__blank">Privacy Policy</a></li>
            <li><a href="/terms" target="__blank">Terms and Conditions</a></li>
        </ul>
        <div className="footer-icons">
            <a href="https://www.instagram.com/selfmadman_/" target="__blank"><i class="bi bi-instagram"></i></a>
            <a href="https://twitter.com/selfmadman_" target="__blank"><i class="bi bi-twitter-x"></i></a>
            <a href="https://www.tiktok.com/@selfmadman_" target="__blank"><i class="bi bi-tiktok"></i></a>
            <a href="" target="__blank"> <i class="bi bi-youtube"></i></a>
            <a href="https://www.linkedin.com/in/chad-motivation-1930ab2b7/" target="__blank"> <i class="bi bi-linkedin"></i></a>
        </div>

        </footer>
           
        </>
    )
}