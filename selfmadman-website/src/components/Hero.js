import "../components/Hero.css"
import "./Root.css"

export default function Hero() {
    return (
        <>
           <div className='hero-section section'>
            <div className="hero-content">
                <h2>James the Self Mad Man</h2>
                <div className="hero-content-p">
                    <p>Dive into "Self Mad Man", a game where motivation and ambition transform a desperate man, James, into a resounding success. Inspired by a motivating TikTok video, embark on a quest for wealth and fulfillment.</p>
                    <p>"Self-Mad Man" features mini-games symbolizing each step of your evolution, from health to wealth. With engaging graphics and music, advance towards autonomy and success.</p>
                    <p>"Self-Mad Man" features mini-games symbolizing each step of your evolution, from health to wealth. With engaging graphics and music, advance towards autonomy and success.</p>
                </div>
                <button href="" className='cta-btn'>Get Notified</button>
            </div>
            <div className="img-container">
                <img src="./images/hero-section-img.png" className="phone-mockup"></img>
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