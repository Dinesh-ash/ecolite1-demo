import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";

const Parcel = () => {
  const location = useLocation();
  const parcelId = location.pathname.split("/")[2];
  const [parcel, setParcel] = useState(null); // Initialize as null
  const [error, setError] = useState(false); // Error state to track API failure

  useEffect(() => {
    const getParcel = async () => {
      try {
        console.log("Fetching parcel details for ID:", parcelId); // Debugging log
        const res = await publicRequest.get("/parcels/find/" + parcelId);
        console.log("Parcel Data:", res.data); // Log API response
        setParcel(res.data);
      } catch (error) {
        console.error("API error:", error); // Log any errors
        setError(true); // Set error state if API fails
      }
    };
    getParcel();
  }, [parcelId]);

  if (!parcel) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading parcel details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Failed to load parcel details. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen" style={{ backgroundColor: "#121212", color: "#D9D9D9" }}>
      <div
        className="h-auto w-[60vw] rounded-md p-5"
        style={{
          backgroundColor: "#333", // Darker background
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
          borderRadius: "10px",
        }}
      >
        <Link to="/myparcels">
          <FaArrowLeft className="text-[#cfb526] text-[18px] cursor-pointer mb-4" />
        </Link>
  
        <h2 className="text-center text-[20px] font-semibold mb-4">Parcel Details</h2>
  
        <div className="flex justify-between">
          {/* Left Section */}
          <div className="flex-1">
            <ul className="space-y-3">
              <li><strong>From:</strong> {parcel?.from || "N/A"}</li>
              <li><strong>Weight:</strong> {parcel?.weight || 0} kg</li>
              <li><strong>Date:</strong> {parcel?.date || "N/A"}</li>
              <li><strong>Sender:</strong> {parcel?.sendername || "N/A"}</li>
              <li><strong>To:</strong> {parcel?.to || "N/A"}</li>
              <li><strong>Receiver:</strong> {parcel?.recipientname || "N/A"}</li>
              <li><strong>Track ID:</strong> {parcel?._id || "N/A"}</li>
              <li><strong>Note:</strong> {parcel?.note || "No notes"}</li>
            </ul>
            <div className="mt-4 space-x-4">
              <button
                className={`w-[120px] py-2 rounded-md text-white ${
                  parcel?.status === 1 ? "bg-[#cfb526]" : "bg-[#45de52]"
                }`}
              >
                {parcel?.status === 1 ? "Pending" : "Delivered"}
              </button>
              <Link to={`/track/${parcel?._id}`}>
                <button className="bg-[#cfb526] text-white px-4 py-2 rounded-md hover:bg-[#3bb43e]">
                  Track
                </button>
              </Link>
            </div>
          </div>
  
          {/* Right Section */}
          <div className="flex-1">
            <ul className="space-y-3">
              <li><strong>Sender Email:</strong> {parcel?.senderemail || "N/A"}</li>
              <li><strong>Recipient Email:</strong> {parcel?.recipientemail || "N/A"}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parcel;
