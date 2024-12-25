const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const sendMail = async (messageOption) => {
  try {
    // Create the transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use TLS for port 587
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // Verify transporter configuration
    await transporter.verify();
    console.log("SMTP Configuration Verified: Ready to send emails");

    // Send the email
    const info = await transporter.sendMail(messageOption);

    console.log("Email sent successfully to:", messageOption.to);
    console.log("Email Response:", info.response);
  } catch (error) {
    console.error("Error sending email:", error.message);

    // Additional detailed error logging
    if (error.response) {
      console.error("SMTP Error Response:", error.response);
    }
  }
};

module.exports = sendMail;
