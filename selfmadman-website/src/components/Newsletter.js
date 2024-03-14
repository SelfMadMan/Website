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

    return (
        <>
            <form className="newsletter-container" onSubmit={handleSubmit}>
                <h2>Newsletter</h2>
                <p>Sign up for our newsletter!</p>
                <div className="newsletter-content">
                    <div className="newsletter-box">
                        <input 
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)} 
                          required
                        />
                        <button type="submit">Subscribe</button>
                    </div>
                </div>
            </form>
        </>
    );
}
