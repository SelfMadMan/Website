// EmailPreview.js
import React, { useState, useEffect } from 'react';
import { storage } from '../firebaseconfig';
import { ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage';

import EmailTemplate from '../MailTemplates/MailTemplate';


// Assuming Firebase is already initialized elsewhere in your application
// If not, you'll need to initialize Firebase here using firebase.initializeApp(firebaseConfig);

function EmailPreview() {
  const [emailCount, setEmailCount] = useState(0);
  const [imageUrls, setImageUrls] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      // Use the storage instance directly
      const imagesRef = ref(storage, 'images'); // Updated to use ref from 'firebase/storage'
      
      try {
        const result = await listAll(imagesRef); // Correctly calling listAll with imagesRef
        const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef)); // Correct usage of getDownloadURL
        const urls = await Promise.all(urlPromises);
        setImageUrls(urls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  // Replace these URLs with the ones you get after uploading to Firebase Storage
  const logoUrl = "https://firebasestorage.googleapis.com/v0/b/selfmadman-49e4b.appspot.com/o/images%2Fheader-logo.png?alt=media&token=31991914-b7ec-441a-a376-e1b6c6240ce8";
  const contentImageUrl = "https://firebasestorage.googleapis.com/v0/b/selfmadman-49e4b.appspot.com/o/images%2Fimg.png?alt=media&token=2f4479df-ab44-46fb-9d18-955018b622ba";
  const uploadImage = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Use the storage instance directly
    const fileRef = ref(storage, `images/${file.name}`); // Updated to use ref from 'firebase/storage'
    try {
      await uploadBytes(fileRef, file); // Correctly calling uploadBytes
      const newUrl = await getDownloadURL(fileRef); // Correctly calling getDownloadURL
      setImageUrls((prevUrls) => [...prevUrls, newUrl]);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const sendNewsletter = async () => {
    const emailHtml = EmailTemplate({
      userName: "Vincent CHARLES",
      websiteUrl: "http://selfmadman-49e4b.web.app",
      logoUrl: logoUrl,
      contentImageUrl: contentImageUrl
    });

    try {
      const response = await fetch('https://us-central1-selfmadman-49e4b.cloudfunctions.net/NewsletterTemplate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailContent: emailHtml }),
      });

      if (!response.ok) {
        throw new Error('Failed to send emails');
      }

      const data = await response.json();
      setEmailCount(data.count);
      alert('Emails sent successfully!');
    } catch (error) {
      console.error('Error sending emails:', error);
      alert('Error sending emails. Please try again later.');
    }
  };

  return (
    <div>
      <div className="email-preview" dangerouslySetInnerHTML={{ __html: EmailTemplate({ userName: "Preview User", websiteUrl: "http://example.com", logoUrl: imageUrls[0] || "", contentImageUrl: imageUrls[1] || "" }) }}></div>
      {imageUrls.map((url, index) => (
        <img key={index} src={url} alt="Preview" style={{ maxWidth: '100px', margin: '10px' }} />
      ))}
      <input type="file" onChange={uploadImage} />
      <p>Number of emails prepared to send: {emailCount}</p>
      <button onClick={sendNewsletter}>Send Emails to All Users</button>
    </div>
  );
}

export default EmailPreview;