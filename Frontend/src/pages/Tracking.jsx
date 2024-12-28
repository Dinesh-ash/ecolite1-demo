/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";

const Tracking = () => {
  const [trackingId, setTrackingId] = useState("");
  const [parcel, setParcel] = useState(null);
  const [error, setError] = useState("");

  const handleTrack = async () => {
    try {
      const response = await axios.get(`https://backend-repo-wndn.onrender.com/api/v1/parcels/track/${trackingId}`);
      setParcel(response.data);
      setError("");
    } catch (err) {
      console.error("Error:", err);
      setError("Parcel not found or server error");
      setParcel(null);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/Tracking.png')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better readability */}

      <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Track Your Parcel</h2>

        <div className="flex items-center mb-6">
          <input
            type="text"
            placeholder="Enter Tracking ID"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#cfb526]"
          />
          <button
            onClick={handleTrack}
            className="bg-[#cfb526] text-white px-4 py-2 rounded-r-md hover:bg-[#cfb526] transition duration-200"
          >
            Track
          </button>
        </div>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {parcel && (
          <div className="mt-6 space-y-4">
            <h3 className="text-2xl font-semibold text-center text-gray-700 mb-4">Parcel Details</h3>
            <div className="bg-gray-100 p-4 rounded-md shadow-inner">
              <p><strong className="text-gray-600">From:</strong> {parcel.from}</p>
              <p><strong className="text-gray-600">To:</strong> {parcel.to}</p>
              <p><strong className="text-gray-600">Sender Name:</strong> {parcel.sendername}</p>
              <p><strong className="text-gray-600">Recipient Name:</strong> {parcel.recipientname}</p>
              <p><strong className="text-gray-600">Sender Email:</strong> {parcel.senderemail}</p>
              <p><strong className="text-gray-600">Recipient Email:</strong> {parcel.recipientemail}</p>
              <p><strong className="text-gray-600">Weight:</strong> {parcel.weight} kg</p>
              {/* <p><strong className="text-gray-600">Cost:</strong> ${parcel.cost}</p> */}
              <p><strong className="text-gray-600">Date:</strong> {parcel.date}</p>
              <p><strong className="text-gray-600">Note:</strong> {parcel.note}</p>
              <p><strong className="text-gray-600">Status:</strong> {getStatusLabel(parcel.status)}</p>
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