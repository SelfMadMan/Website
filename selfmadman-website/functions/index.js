const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true}); // Enables CORS for all origins
const axios = require('axios');




exports.sendEmail = functions.https.onRequest((req, res) => {
  cors(req, res, async () => { // Correctly apply CORS middleware
      if (req.method !== 'POST') {
          return res.status(405).end(); // Method Not Allowed
      }

      // Your existing logic to send an email
      const { email } = req.body; // Destructuring for clarity

      const mailTransport = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              user: 'j.selfmadman@gmail.com',
              pass: 'cxnj yamf friu bibi', // Consider using environment variables or Firebase config for this
          },
      });

      const mailOptions = {
          from: '"James From SelfMadMan" <j.selfmadman@gmail.com>',
          to: email,
          subject: 'Newsletter Subscription!',
          text: 'You have successfully subscribed to our newsletter.',
      };

      try {
          await mailTransport.sendMail(mailOptions);
          console.log('Mail sent to: ', email);
          res.status(200).send('Email sent');
      } catch (error) {
          console.error('There was an error while sending the email:', error);
          res.status(500).send('Error sending email');
      }
  });
});


exports.translateText = functions.https.onCall(async (data, context) => {
  const text = data.text;
  const targetLang = data.targetLang;
  const apiKey = 'a52dcf93-8f1c-4442-bf10-2c949af36965:fx'; // Set this using Firebase CLI

  try {
    const response = await axios({
      method: 'post',
      url: 'https://api.deepl.com/v2/translate',
      params: {
        auth_key: apiKey,
        text: text,
        target_lang: targetLang,
      },
    });

    return { translatedText: response.data.translations[0].text };
  } catch (error) {
    throw new functions.https.HttpsError('internal', error.message);
  }
});
