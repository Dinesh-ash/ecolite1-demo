const ejs = require("ejs");
const dotenv = require("dotenv");
const sendMail = require("../helpers/sendmail");
const Parcel = require("../models/Parcel");

dotenv.config();

const sendParcelDeliveredEmail = async () => {
  try {
    const parcels = await Parcel.find({ status: 2 }); // Fetch parcels marked as delivered

    if (!parcels.length) {
      console.log("No parcels found with status 2.");
      return;
    }

    for (let parcel of parcels) {
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
        const senderEmailContent = await ejs.renderFile("./templates/deliveredparcel.ejs", templateData);
        const senderMessageOption = {
          from: process.env.EMAIL,
          to: parcel.senderemail,
          subject: "Your parcel has been delivered",
          html: senderEmailContent,
        };
        await sendMail(senderMessageOption);
        console.log(`Delivered email sent to sender: ${parcel.senderemail}`);

        // Email to recipient
        const recipientEmailContent = await ejs.renderFile("./templates/deliveredparcel.ejs", templateData);
        const recipientMessageOption = {
          from: process.env.EMAIL,
          to: parcel.recipientemail,
          subject: "You have received a parcel",
          html: recipientEmailContent,
        };
        await sendMail(recipientMessageOption);
        console.log(`Delivered email sent to recipient: ${parcel.recipientemail}`);

        // Update parcel status
        await Parcel.findByIdAndUpdate(parcel._id, { status: 3 });
        console.log(`Parcel status updated to 3 for parcel ID: ${parcel._id}`);
      } catch (error) {
        console.error(`Error processing parcel ${parcel._id}:`, error.message);
      }
    }
  } catch (error) {
    console.error("Error in sendParcelDeliveredEmail:", error.message);
  }
};

module.exports = { sendParcelDeliveredEmail };
