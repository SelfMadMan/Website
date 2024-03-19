const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true}); // Enables CORS for all origins
const axios = require('axios');
const nodemailerConfig = functions.config().nodemailer;
const deepl = functions.config().deepl;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: nodemailerConfig.user,
    pass: nodemailerConfig.pass,
  },
});

exports.sendEmail = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    if (req.method !== 'POST') {
      return res.status(405).end();
    }

    const { email } = req.body;

    const mailOptions = {
      from: '"James From SelfMadMan" <j.selfmadman@gmail.com>',
      to: email,
      subject: 'Newsletter Subscription!',
      text: 'You have successfully subscribed to our newsletter.',
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Mail sent to: ', email);
      res.status(200).send('Email sent');
    } catch (error) {
      console.error('Failed to send email:', error);
      res.status(500).send('Error sending email: ' + error.toString());
    }
    
  });
});
exports.NewsletterTemplate = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {

    try {
      // Ensure that the request is authenticated
      // Example: You can use Firebase Authentication to verify the request's authorization token

      if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
      }

      // Fetch subscriptions data from Firestore
      const snapshot = await admin.firestore().collection('subscriptions').get();
      const users = snapshot.docs.map(doc => doc.data());

      // Create transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail',


        
        auth: {
          user: nodemailerConfig.user,
          pass: nodemailerConfig.pass,
              },
      });

      // Send emails
      const emailPromises = users.map(user => {
        return transporter.sendMail({
          from: 'j.selfmadman@gmail.com',
          to: user.email,
          subject: 'Email Campaign',
          html: req.body.emailContent, // Using the HTML content passed from the frontend
        });
      });

      await Promise.all(emailPromises);

      // Return the count of emails sent
      res.json({ count: users.length });
    } catch (error) {
      console.error('Error sending emails:', error);
      res.status(500).send('Error sending emails');
    }
  });
});

exports.translateText = functions.https.onCall(async (data, context) => {
  const text = data.text;
  const targetLang = data.targetLang;
  const apiKey = deepl.key; // Set this using Firebase CLI

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
