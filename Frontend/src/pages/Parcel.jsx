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
    <div className="flex flex-col items-center justify-center mt-[3%] mr-[5%] ml-[5%]">
      <div className="bg-[#D9D9D9] h-[80vh] w-[60vw] rounded-md">
        <Link to="/myparcels">
          <FaArrowLeft className="text-[18px] m-2 cursor-pointer" />
        </Link>
        <div className="flex justify-between">
          <div className="flex-1">
            <ul className="m-3">
              <li className="mt-3">From: {parcel?.from || "N/A"}</li>
              <li className="mt-3">Weight: {parcel?.weight || 0} kg</li>
              <li className="mt-3">Date: {parcel?.date || "N/A"}</li>
              <li className="mt-3">Sender: {parcel?.sendername || "N/A"}</li>
              <li className="mt-3">To: {parcel?.to || "N/A"}</li>
              {/* <li className="mt-3">Cost: ${parcel?.cost || 0}</li> */}
              <li className="mt-3"> Receiver: {parcel?.recipientname || "N/A"} </li>
              <li className="mt-3">Track ID: {parcel?._id || "N/A"}</li>
              <li className="mt-3">Note: {parcel?.note || "No notes"}</li>
            </ul>
            <button
              className={
                parcel?.status === 1
                  ? "bg-[#555] text-white w-[100px] cursor-pointer padding-[10px] m-[20px]"
                  : "bg-[#45de52] text-white w-[100px] cursor-pointer padding-[10px] m-[20px]"
              }
            >
              {parcel?.status === 1 ? "Pending" : "Delivered"}
            </button>
            {/* Track Button */}
            <Link to={`/track/${parcel?._id}`}>
              <button className="mt-2 bg-[#cfb526] text-white px-4 py-2 rounded-md">
                Track
              </button>
            </Link>
          </div>

          <div className="flex-1 mr-[20%]">
            <ul className="m-3">
              <li className="mt-3"> Sender Email: {parcel?.senderemail || "N/A"} </li>
              <li className="mt-3"> Recipient Email: {parcel?.recipientemail || "N/A"} </li>
            </ul>
            {/* <button className="bg-[#9fa322] w-[200px] p-[10px] text-white cursor-pointer">
              Track
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parcel;
