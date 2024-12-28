import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateParcel = () => {
  // State for form fields
  const [senderName, setSenderName] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [weight, setWeight] = useState("");
  const [date, setDate] = useState(""); // New state for date
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  // Function to validate all form fields
  const validateFields = () => {
    const newErrors = {};
    if (!senderName.trim()) newErrors.senderName = "Sender name is required.";
    if (!recipientName.trim()) newErrors.recipientName = "Recipient name is required.";
    if (!senderEmail.trim() || !/\S+@\S+\.\S+/.test(senderEmail))
      newErrors.senderEmail = "Valid sender email is required.";
    if (!recipientEmail.trim() || !/\S+@\S+\.\S+/.test(recipientEmail))
      newErrors.recipientEmail = "Valid recipient email is required.";
    if (!fromLocation.trim()) newErrors.fromLocation = "From location is required.";
    if (!toLocation.trim()) newErrors.toLocation = "To location is required.";
    if (!weight || weight <= 0) newErrors.weight = "Weight must be a positive number.";
    if (!date.trim()) newErrors.date = "Date is required.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateFields();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;
    setLoading(true);

    try {
      await axios.post("https://backend-repo-wndn.onrender.com/api/v1/parcels", {
        sendername: senderName,       // Ensure field name is "sendername"
      recipientname: recipientName, // Ensure field name is "recipientname"
      senderemail: senderEmail,
      recipientemail: recipientEmail,
      from: fromLocation,
      to: toLocation,
        weight,
        date,
        createdBy: user.email,
      });

      alert("Parcel created successfully!");
      setLoading(false);
      navigate("/myparcels");
    } catch (error) {
      console.error("Error creating parcel:", error);
      alert("Failed to create parcel. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="h-[100vh] flex items-center justify-center text-gray-700">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-[#E9EB77] p-[30px] rounded-md w-[400px]"
        >
          <h2 className="text-2xl font-bold text-center mb-4">Create Parcel</h2>
          
          {/* Sender Name */}
          <input
            type="text"
            placeholder="Sender Name"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            className="p-[10px] outline-none rounded-md"
          />
          {errors.senderName && <span className="text-red-500">{errors.senderName}</span>}
          
          {/* Sender Email */}
          <input
            type="email"
            placeholder="Sender Email"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            className="p-[10px] outline-none rounded-md"
          />
          {errors.senderEmail && <span className="text-red-500">{errors.senderEmail}</span>}

          {/* Recipient Name */}
          <input
            type="text"
            placeholder="Recipient Name"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
            className="p-[10px] outline-none rounded-md"
          />
          {errors.recipientName && <span className="text-red-500">{errors.recipientName}</span>}
          
          {/* Recipient Email */}
          <input
            type="email"
            placeholder="Recipient Email"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
            className="p-[10px] outline-none rounded-md"
          />
          {errors.recipientEmail && <span className="text-red-500">{errors.recipientEmail}</span>}
          
          {/* From Location */}
          <input
            type="text"
            placeholder="From Location"
            value={fromLocation}
            onChange={(e) => setFromLocation(e.target.value)}
            className="p-[10px] outline-none rounded-md"
          />
          {errors.fromLocation && <span className="text-red-500">{errors.fromLocation}</span>}
          
          {/* To Location */}
          <input
            type="text"
            placeholder="To Location"
            value={toLocation}
            onChange={(e) => setToLocation(e.target.value)}
            className="p-[10px] outline-none rounded-md"
          />
          {errors.toLocation && <span className="text-red-500">{errors.toLocation}</span>}
          
          {/* Weight */}
          <input
            type="number"
            placeholder="Weight (in kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="p-[10px] outline-none rounded-md"
          />
          {errors.weight && <span className="text-red-500">{errors.weight}</span>}

           {/* Date */}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-[10px] outline-none rounded-md"
        />
        {errors.date && <span className="text-red-500">{errors.date}</span>}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#1E1E1E] text-white p-[10px] rounded-md font-semibold"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Parcel"}
          </button>

          {/* New Button: Know Your Carbon Footprint */}
          <button
            type="button"
            className="bg-[#1E1E1E] text-white p-[10px] rounded-md font-semibold"
            onClick={() => navigate("/carbon")}
          >
            Know Your Carbon Footprint
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateParcel;