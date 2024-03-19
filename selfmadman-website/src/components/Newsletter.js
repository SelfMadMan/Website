import React, { useState } from 'react';
import { db } from '../firebaseconfig'; // Ensure this path is correct
import "../components/Newsletter.css";
import { collection, addDoc } from 'firebase/firestore';
import { useLanguage } from '../languageContext'; // Adjust the import path as necessary

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [isChecked, setIsChecked] = useState(false); // State for checkbox

    const handleSubmit = async (e) => {
        e.preventDefault();
    
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
            }
            else{
                console.log("Email Sent");
            }
    
            alert('Subscription successful! Check your email for confirmation.');
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
          title: "Zero to Hero in one email: the newsletter that changes everything!",
          description: "Sign up for early access to the game and exclusive information on the progress of Self Mad Man. We promise we won't sell you online training.",
          emailPlaceholder: "Enter your email",
          subscribeButton: "Subscribe",
          acceptPolicy: "I accept the ",
          policyLink:"Privacy Policy",
        },
        // Add to src/translations/newsletterTranslations.js
FR: {
    title: "De Zéro à Héros en un email : la newsletter qui change tout !",
    description: "Inscrivez-vous pour un accès anticipé au jeu et des informations exclusives sur l'avancement de Self Mad Man. Nous promettons de ne pas vous vendre de formation en ligne.",
    emailPlaceholder: "Entrez votre email",
    subscribeButton: "S'abonner",
    acceptPolicy: "J'accepte la ",
    policyLink:"Politique de Confidentialité",
  },
  
        // Add more languages as needed
      };    
      const { language } = useLanguage(); // Use the current language

      const { title, description, emailPlaceholder, subscribeButton, acceptPolicy, policyLink } = newsletterTranslations[language]; // Get translations

    return (
        <>
        <div className='newsletter-section'>
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
                            <button type="submit" className="cta-btn send-btn">{subscribeButton}</button>
                        </div>
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

        </>
    );
}
