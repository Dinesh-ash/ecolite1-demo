const ejs = require("ejs");
const dotenv = require("dotenv");
const sendMail = require("../helpers/sendmail");
const Parcel = require("../models/Parcel");

dotenv.config();

const sendParcelPendingEmail = async () => {
  try {
    const parcels = await Parcel.find({ status: 0 }); // Fetch parcels with status 0
    if (!parcels.length) {
      console.log("No pending parcels found for sending emails.");
      return;
    }

    for (let parcel of parcels) {
      console.log(`Processing parcel for sender: ${parcel.senderemail}, receiver: ${parcel.recipientemail}`);

      const templateData = {
        sendername: parcel.sendername,
        recipientname: parcel.recipientname,
        from: parcel.from,
        to: parcel.to,
        cost: parcel.cost,
        weight: parcel.weight,
        note: parcel.note,
      };

      try {
        // Email to sender
        const emailContentSender = await ejs.renderFile("./templates/pendingparcel.ejs", templateData);
        const senderMessageOption = {
          from: process.env.EMAIL,
          to: parcel.senderemail,
          subject: "You have a pending parcel",
          html: emailContentSender,
        };
        await sendMail(senderMessageOption);
        console.log(`Pending email sent to sender: ${parcel.senderemail}`);

        // Email to receiver
        const emailContentReceiver = await ejs.renderFile("./templates/pendingparcel.ejs", templateData);
        const receiverMessageOption = {
          from: process.env.EMAIL,
          to: parcel.recipientemail,
          subject: "You have a pending parcel",
          html: emailContentReceiver,
        };
        await sendMail(receiverMessageOption);
        console.log(`Pending email sent to receiver: ${parcel.recipientemail}`);

        // Update parcel status
        await Parcel.findByIdAndUpdate(parcel._id, { status: 1 });
        console.log(`Parcel status updated to 1 for parcel ID: ${parcel._id}`);
      } catch (error) {
        console.error(`Error processing parcel ${parcel._id}:`, error.message);
      }
    }
  } catch (error) {
    console.error("Error in sendParcelPendingEmail:", error.message);
  }
};

module.exports = { sendParcelPendingEmail };
