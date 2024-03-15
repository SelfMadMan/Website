import React, { useState } from 'react';
import { db } from '../firebaseconfig'; // Ensure this path is correct
import "../components/Newsletter.css";
import { collection, addDoc } from 'firebase/firestore';

export default function Newsletter() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Save to Firestore
            await addDoc(collection(db, 'subscriptions'), {
                email,
                subscribedAt: new Date()
            });
            
            alert('Subscription successful! Check your email for confirmation.');
        } catch (error) {
            console.error("Error during subscription process", error);
            alert('There was an issue with your subscription. Please try again.');
        }

        setEmail(''); // Reset the email field after submission
    };
    // Créer un état pour gérer si la checkbox est cochée ou non, initialisé à false
    const [isChecked, setIsChecked] = useState(false);

    // Fonction pour changer l'état lorsqu'on clique sur la checkbox
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked); // Inverse l'état précédent
    };


    return (
        <>
            <form className="newsletter-container" onSubmit={handleSubmit}>
            <h2 className='newsletter-title'>Zero to Hero in one email: the newsletter that changes everything!</h2>
                <p className='newsletter-text'>Notre newsletter est votre première étape vers le succès. Soyez informés du lancement et démarrez votre transformation de zéro à héros.</p>
                <div className="newsletter-content">
                    <div className="newsletter-box">
                        <input 
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)} 
                          required
                        />
                        <button type="submit" className="cta-btn send-btn">Subscribe</button>
                    </div>
                    <div className="checkbox-container">
                        {/* Ajoutez l'état isChecked et le gestionnaire onChange à la checkbox */}
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        <p>I accept <span><a className="checkbox-link" href="">Privacy Policy</a></span> <span className="checkbox-link">*</span></p>
                </div>
                </div>
            </form>
        </>
    );
}
