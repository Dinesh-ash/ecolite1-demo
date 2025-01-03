/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";

const Tracking = () => {
  const [trackingId, setTrackingId] = useState("");
  const [parcel, setParcel] = useState(null);
  const [error, setError] = useState("");

  const handleTrack = async () => {
    try {
      const response = await axios.get(`https://backend-repo-1-nuto.onrender.com/api/v1/parcels/track/${trackingId}`);
      setParcel(response.data);
      setError("");
    } catch (err) {
      console.error("Error:", err);
      setError("Parcel not found or server error");
      setParcel(null);
    }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/Tracking.png')" }}
    >
      {/* Increased overlay opacity for better readability */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
  
      {/* Updated container styling for better contrast */}
      <div
        className="relative z-10 p-8 rounded-lg shadow-lg max-w-lg w-full"
        style={{
          backgroundColor: "#333", // Darker background for better contrast
          color: "#D9D9D9", // Light text for readability
        }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: "#800080" }}>
  Track Your Parcel
</h2>
  
        {/* Input and Button Section */}
        <div className="flex items-center mb-6">
          <input
            type="text"
            placeholder="Enter Tracking ID"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            className="flex-1 px-4 py-2 border border-[#cfb526] rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#cfb526]"
          />
          <button
            onClick={handleTrack}
            className="bg-[#cfb526] text-white px-4 py-2 rounded-r-md hover:bg-[#3bb43e] transition duration-200"
          >
            Track
          </button>
        </div>
  
        {/* Error Message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
  
        {/* Parcel Details Section */}
        {parcel && (
          <div className="mt-6 space-y-4">
            <h3 className="text-2xl font-semibold text-center text-[#cfb526] mb-4">
              Parcel Details
            </h3>
            <div
              className="p-4 rounded-md shadow-inner"
              style={{
                backgroundColor: "#444", // Slightly lighter than the container for separation
                color: "#D9D9D9", // Consistent text color
              }}
            >
              <p>
                <strong className="text-[#cfb526]">From:</strong> {parcel.from}
              </p>
              <p>
                <strong className="text-[#cfb526]">To:</strong> {parcel.to}
              </p>
              <p>
                <strong className="text-[#cfb526]">Sender Name:</strong>{" "}
                {parcel.sendername}
              </p>
              <p>
                <strong className="text-[#cfb526]">Recipient Name:</strong>{" "}
                {parcel.recipientname}
              </p>
              <p>
                <strong className="text-[#cfb526]">Sender Email:</strong>{" "}
                {parcel.senderemail}
              </p>
              <p>
                <strong className="text-[#cfb526]">Recipient Email:</strong>{" "}
                {parcel.recipientemail}
              </p>
              <p>
                <strong className="text-[#cfb526]">Weight:</strong>{" "}
                {parcel.weight} kg
              </p>
              {/* Uncomment if cost is required */}
              {/* <p><strong className="text-[#cfb526]">Cost:</strong> ${parcel.cost}</p> */}
              <p>
                <strong className="text-[#cfb526]">Date:</strong> {parcel.date}
              </p>
              <p>
                <strong className="text-[#cfb526]">Note:</strong> {parcel.note}
              </p>
              <p>
                <strong className="text-[#cfb526]">Status:</strong>{" "}
                {getStatusLabel(parcel.status)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Helper function to convert status code to human-readable text
const getStatusLabel = (status) => {
  switch (status) {
    case 0:
      return "Pending";
    case 1:
      return "Shipped";
    case 2:
      return "In Transit";
    case 3:
      return "Delivered";
    default:
      return "Unknown Status";
  }
};

export default Tracking;
//frontend/pages/tracking.jsx
