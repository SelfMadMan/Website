function EmailTemplate({ userName, websiteUrl }) {
  // Template literals (`) are used here to define the HTML string.
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
    <style>
        .button {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            color: #ffffff;
            background-color: #007bff;
            border-radius: 5px;
            text-decoration: none;
        }
        .button:hover {
            background-color: #0056b3;
        }
    </style>
    </head>
    <body>
    <div style="padding: 20px; font-family: Arial, sans-serif;">
        <h2>Hello, ${userName}!</h2>
        <p>Thank you for subscribing to our newsletter. We're excited to have you on board.</p>
        <p>To ensure you don't miss out on our next update, click the button below:</p>
        <a href="${websiteUrl}" class="button">Visit Our Website</a>
        <p>If you have any questions or feedback, don't hesitate to get in touch. Welcome to our community!</p>
        <footer>
            <p>Best wishes,<br>Your Team</p>
        </footer>
    </div>
    </body>
    </html>
  `;

  return htmlContent;
}

export default EmailTemplate;
