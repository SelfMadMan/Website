import React, { useState, forwardRef } from 'react';
import { db } from '../firebaseconfig'; // Ensure this path is correct
import "../components/Newsletter.css";
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'; // Import additional functions
import { useLanguage } from '../languageContext'; // Adjust the import path as necessary
import './Root.css'

const Newsletter = forwardRef((props, ref) => {
    const [email, setEmail] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const { language } = useLanguage(); // Use the current language

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if email is already registered
        const q = query(collection(db, 'subscriptions'), where('email', '==', email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            alert('Email is already registered.');
            return; // Exit the function early if the email is already registered
        }

        try {
            // Save to Firestore with the isChecked value
            const docRef = await addDoc(collection(db, 'subscriptions'), {
                email,
                subscribedAt: new Date(),
                acceptsPrivacyPolicy: isChecked // Include isChecked state
            });
            console.log("Document written with ID: ", docRef.id);

            // Construct the URL for your sendEmail Cloud Function
            const sendEmailResponse = await fetch('https://us-central1-selfmadman-49e4b.cloudfunctions.net/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email }) // Ensure this matches the expected format of your Cloud Function
            });

            if (!sendEmailResponse.ok) {
                throw new Error('Failed to send email');
            } else {
                console.log("Email Sent");
            }

            alert('Subscription successful! Check your email for confirmation.');
            setIsSubmitted(true);
        } catch (error) {
            console.error("Error during subscription process", error);
            alert('There was an issue with your subscription. Please try again.');
        }

        setEmail(''); // Resetting the state
        setIsChecked(false);
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked); // Toggle checkbox state
    };
    const newsletterTranslations = {
        EN: {
            title: "Stay Up to Date",
            description: "Sign up for early access to the game and exclusive information on the progress of Self Mad Man. We promise we won't sell you online training. ",
            emailPlaceholder: "Enter your email",
            subscribeButton: "Send",
            acceptPolicy: "I accept the ",
            policyLink: "Privacy Policy",
        },
        // Add to src/translations/newsletterTranslations.js
        FR: {
            title: "Restez A jour !",
            description: "Inscrivez-vous pour bénéficier d'un accès anticipé au jeu et d'informations exclusives sur la progression de Self Mad Man. Nous vous promettons de ne pas vous vendre de formation en ligne. ",
            emailPlaceholder: "Entrez votre email",
            subscribeButton: "Envoyer",
            acceptPolicy: "J'accepte la ",
            policyLink: "Politique de Confidentialité",
        },

        // Add more languages as needed
    };
    const { title, description, emailPlaceholder, subscribeButton, acceptPolicy, policyLink } = newsletterTranslations[language]; // Get translations

    // Simple email validation function
    const isValidEmail = (email) => {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
    };

    return (

            <div ref={ref} className='newsletter-section'>
                <form className="newsletter-container" onSubmit={handleSubmit}>
                    <h2 className='newsletter-title'>{title}</h2>
                    <p className='newsletter-text'>{description}</p>
                    <div className="newsletter-content">
                        <div className="newsletter-box">
                            <input
                                type="email"
                                placeholder={emailPlaceholder}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button
                                type="submit"
                                className={`cta-btn send-btn ${isValidEmail(email) && !isSubmitted ? '' : 'disabled'}`} // Update className logic as needed
                                disabled={!isValidEmail(email) || isSubmitted} // Button should be disabled if email is invalid or form is already submitted
                            >
                                {isSubmitted ? <i class="bi bi-send-check"></i> : subscribeButton}
                            </button>                    </div>
                        <div className="checkbox-container">
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            <p>{acceptPolicy} <a href='/privacy' target='__blank'>{policyLink}</a> <span className="checkbox-link">*</span></p>
                        </div>
                    </div>
                </form>
            </div>

    );
});

export default Newsletter;