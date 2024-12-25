const ejs = require("ejs");
const dotenv = require("dotenv");
const sendMail = require("../helpers/sendmail");
const User = require("../models/User");
const fs = require("fs");
const path = require("path");

dotenv.config();

const lastRunPath = path.join(__dirname, "lastRun.json");

const getLastRunTime = () => {
  if (fs.existsSync(lastRunPath)) {
    const data = fs.readFileSync(lastRunPath, "utf-8");
    return JSON.parse(data).lastRun;
  }
  return null; // Default to null if the file doesn't exist
};

const updateLastRunTime = () => {
  const now = new Date().toISOString();
  fs.writeFileSync(lastRunPath, JSON.stringify({ lastRun: now }));
};

const sendWelcomeEmail = async () => {
  try {
    const lastRun = getLastRunTime();
    console.log("Last run time:", lastRun);

    // Fetch users registered since the last run
    const query = lastRun ? { createdAt: { $gt: new Date(lastRun) } } : {};
    const users = await User.find(query);

    if (!users || users.length === 0) {
      console.log("No new users found for sending emails.");
      return updateLastRunTime(); // Update the timestamp even if no users are found
    }

    for (let user of users) {
      console.log(`Processing user: ${user.email}`);

      const templateData = {
        fullname: user.fullname,
        email: user.email,
        password: user.password, // Avoid exposing real password
      };

      try {
        const emailContent = await ejs.renderFile("templates/welcome.ejs", templateData);

        const messageOption = {
          from: process.env.EMAIL,
          to: user.email,
          subject: "Welcome to EcoLite",
          html: emailContent,
        };

        await sendMail(messageOption);
        console.log(`Welcome email sent to ${user.email}`);
      } catch (error) {
        console.error(`Error sending email to ${user.email}:`, error.message);
      }
    }

    // Update the last run timestamp after processing
    updateLastRunTime();
  } catch (error) {
    console.error("Error in sendWelcomeEmail:", error.message);
  }
};

module.exports = { sendWelcomeEmail };
