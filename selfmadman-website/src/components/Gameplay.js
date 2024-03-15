import "../components/Gameplay.css"
import "./Root.css"

export default function Gameplay() {
    return (
        <>
           <div className="gameplay-section">
                <img src='./images/gameplay-separation-blue.png' className="gameplay-separation"></img>
                {/*<img src='./images/gameplay-screen.png'></img>*/}                
                <div className="gameplay-content section">
                    <div className="gameplay-box">
                        <img src="./images/gameplay-1.png"></img>
                        <p className="gameplay-step">1</p>
                        <h3>Inspiration</h3>
                        <p className="gameplay-text">Encounter with Chad, a motivating coach, triggers a new beginning.</p>
                    </div>
                    <div className="gameplay-box">
                        <img src="./images/gameplay-2.png"></img>
                        <p className="gameplay-step">2</p>
                        <h3>Evolution</h3>
                        <p className="gameplay-text">Participation in various mini-games to improve skills and life.</p>
                    </div>
                    <div className="gameplay-box">
                        <img src="./images/gameplay-3.png"></img>
                        <p className="gameplay-step">3</p>
                        <h3>Success</h3>
                        <p className="gameplay-text">Achievement of wealth and ultimate personal fulfillment.</p>
                    </div>
                </div>
                <img src='./images/gameplay-separation-white.png' className="gameplay-separation"></img>

           </div>
        </>
    )
}