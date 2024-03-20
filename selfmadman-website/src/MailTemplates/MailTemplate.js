// EmailTemplate.js
function EmailTemplate({ userName, websiteUrl, logoUrl, contentImageUrl }) {
    const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Newsletter</title>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    }
    .newsletter {
      width: 100%;
      max-width: 600px;
      margin: auto;
      background-color: #ffffff;
      border: 20px solid #FDCF07;
    }
    .header, .footer {
      background-color: #FDCF07;
      padding: 20px;
      text-align: center;
    }
    .content {
      padding: 20px;
    }
    .content-image {
      width: 100%;
      height: auto;
      background-color: #f0f0f0;
      text-align: center;
      padding: 50px 0;
      margin: 20px 0;
      border-bottom: 1px solid #cccccc;
    }
    .button {
      background-color: #0044cc;
      color: white;
      padding: 10px 20px;
      text-decoration: none;
      display: inline-block;
      margin: 20px 0;
    }
    .footer-text {
      font-size: 12px;
      color: #333333;
    }
    .footer-link {
      color: #0044cc;
      text-decoration: none;
      margin: 0 5px;
    }
  </style>
  </head>
  <body>
    <div class="newsletter">
      <div class="header">
        <img src="${logoUrl}" alt="Your Logo Here" style="max-width: 100px;">
      </div>
      <div class="content">
        <h2>Welcome, ${userName}!</h2>
        <h1>Discover Our Latest Updates!</h1>
        <p>Check out our website for more information: <a href="${websiteUrl}" style="color: #0000ff;">Visit Site</a></p>
        <div class="content-image">
          <img src="${contentImageUrl}" alt="Content Image" style="max-width: 100%;">
        </div>
        <button href="${websiteUrl}" class="button">Learn More</button>
      </div>
      <div class="footer">
        <p class="footer-text">
          You're receiving this email because you've signed up for updates. If you wish to unsubscribe, please follow this link.<br>
          © 2024 Company Name
        </p>
      </div>
    </div>
  </body>
  </html>
  `;
  
    return htmlContent;
  }
  
  export default EmailTemplate;
  