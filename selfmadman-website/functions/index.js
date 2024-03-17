const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true}); // Import CORS and configure it to allow all origins
const axios = require('axios');

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


exports.sendEmail = functions.https.onRequest((req, res) => {
    cors(req, res, async () => { // Make this function async
        if (req.method !== 'POST') {
          return res.status(405).send('Method Not Allowed');
        }
        // Assuming you're sending data as JSON in a POST request
        const subscription = req.body;
        const email = subscription.email;
      
        const mailTransport = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'j.selfmadman@gmail.com',
            pass: 'jam321MAD*',
          },
        });
      
        const mailOptions = {
          from: '"Your Name or Company" <j.selfmadman@gmail.com>',
          to: email,
          subject: 'Thank you for subscribing to our newsletter!',
          text: 'You have successfully subscribed to our newsletter.',
        };
      
        try {
          await mailTransport.sendMail(mailOptions);
          console.log('Mail sent to: ', email);
          return res.status(200).send('Email sent');
        } catch(error) {
          console.error('There was an error while sending the email:', error);
          return res.status(500).send(error);
        }
      });
      });
