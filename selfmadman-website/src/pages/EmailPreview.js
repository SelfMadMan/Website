import React, { useState } from 'react';
import EmailTemplate from '../MailTemplates/MailTemplate';

function EmailPreview() {
  const [emailCount, setEmailCount] = useState(0); // State to track the number of emails going out

  const emailHtml = EmailTemplate({
    userName: "Vincent CHARLES", // Placeholder name
    websiteUrl: "http://selfmadman-49e4b.web.app" // Your website URL
  });

  const NewsletterTemplate = async () => {
    // Example of calling a backend endpoint to trigger email sending
    try {
      const response = await fetch('https://selfmadman-49e4b.web.app.cloudfunctions.net/NewsletterTemplate', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailContent: emailHtml }),
      });

      if (!response.ok) {
        throw new Error('Failed to send emails');
      }

      const data = await response.json(); // Extract data from the response
      setEmailCount(data.count); // Update the emailCount state with the number of emails sent
      alert('Emails sent successfully!');
    } catch (error) {
      console.error('Error sending emails:', error);
      alert('Error sending emails. Please try again later.');
    }
  };

  return (
    <div>
      <div className="email-preview" dangerouslySetInnerHTML={{ __html: emailHtml }}></div>
      <p>Number of emails going out: {emailCount}</p>
      <button onClick={NewsletterTemplate}>Send Emails to All Users</button>
    </div>
  );
  }

export default EmailPreview;
