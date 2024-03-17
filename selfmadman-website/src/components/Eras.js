import "../components/Eras.css"

export default function Eras() {
    return (
        <>
           <div className="eras-container">
                <img src='./images/gameplay-separation-white.png' className="eras-separation"></img>
                <div className="eras-content">
                    <div className="eras-chad-container">
                            <img src='./images/eras-chad.png' className="eras-separation"></img>

                    </div>
                    <div className="eras-listing">
                        <div className="eras-listing-box">
                            <img src='./images/era-1.png' className="eras-separation"></img>
                            <div className="eras-listing-text">
                                <h3>Started from the bottom... </h3>
                                <p>James lost everything but now he has an unwavering <b>determination</b>. He's ready to fight daily for a better future.</p>

                            </div>
                        </div>  
                        <div className="eras-listing-box">
                            <img src='./images/era-2.png' className="eras-separation"></img>
                            <div className="eras-listing-text">
                                <h3>Everyday normal guy</h3>
                                <p>Through constant improvement and skill acquisition, you draw <b>closer to sucess</b>, but you're just an average looser now. </p>

                            </div>
                        </div>  
                        <div className="eras-listing-box">
                            <img src='./images/era-3.png' className="eras-separation"></img>
                            <div className="eras-listing-text">
                                <h3>Self Mad Man</h3>
                                <p>James has finally succeeded, he has a Lamborghini, dozens of bitcoin and an addiction to cocaine, that's a real success !</p>

                            </div>
                        </div>  

                    </div>

                </div>

           </div>
        </>
    )
}