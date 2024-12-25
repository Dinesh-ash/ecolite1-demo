const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cron = require("node-cron");
const mongoose = require("mongoose");
const { sendWelcomeEmail } = require("./EmailService/WelcomeEmail");
const { sendParcelPendingEmail } = require("./EmailService/PendingParcel");
const { sendParcelDeliveredEmail } = require("./EmailService/DeliveredParcel");

dotenv.config();

// DB CONNECTION
const DB = process.env.DB;
mongoose
  .connect(DB)
  .then(() => {
    console.log("DB connection is successful");
  })
  .catch((e) => {
    console.error("Error connecting to DB:", e.message);
  });

// TASK SCHEDULER
const run = () => {
  cron.schedule("* * * * *", () => {
    console.log("Cron job started at:", new Date());

    sendWelcomeEmail()
      .then(() => console.log("Welcome email task completed."))
      .catch((err) => console.error("Error in Welcome email task:", err.message));

    sendParcelPendingEmail()
      .then(() => console.log("Pending parcel email task completed."))
      .catch((err) => console.error("Error in Pending parcel email task:", err.message));

    sendParcelDeliveredEmail()
      .then(() => console.log("Delivered parcel email task completed."))
      .catch((err) => console.error("Error in Delivered parcel email task:", err.message));
  });
};

run();

// SERVER
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`BackgroundServices is running on port ${PORT}`);
});
