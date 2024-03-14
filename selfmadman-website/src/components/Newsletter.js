import "../components/Newsletter.css"

export default function Newsletter() {
    return (
        <>
            <div className="newsletter-container">
                <h2>Newsletter</h2>
                <p>text</p>
                <div className="newsletter-content">
                    <div className="newsletter-box">
                        <input placeholder="Enter your email" />
                        <button>Send</button>
                    </div>
                    <p>checkbox</p>
                    <p>I accept</p>
                </div>

            </div>
        </>
    )
}