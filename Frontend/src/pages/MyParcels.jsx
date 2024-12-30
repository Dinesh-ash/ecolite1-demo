import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { publicRequest } from "../requestMethods";
import { logOut } from "../redux/userRedux";

const MyParcels = () => {
  const [open, setOpen] = useState(false);
  const [parcels, setParcels] = useState([]);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const getParcels = async () => {
      try {
        const res = await publicRequest.post("/parcels/me", {
          email: user.currentUser.email,
        });
        setParcels(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getParcels();
  }, []);

  const Logout = () => {
    dispatch(logOut());
    navigate("/login");
  };

  return (
    <div style={{ backgroundColor: "#121212", minHeight: "100vh", color: "#D9D9D9" }}>
      <div className="relative flex items-end justify-end mr-[20%] mt-[3%]">
        <div>
          <span
            className="flex items-center text-white font-semibold cursor-pointer"
            onClick={handleOpen}>
            <FaUser className="mr-[10px]" />
            {user.currentUser.fullname}
          </span>
        </div>
        {open && (
          <div
            className="absolute top-[20px] right-0 h-[200px] w-[250px] bg-[#D9D9D9] z-[999] shadow-xl"
            style={{ color: "#555" }}
          >
            <ul className="flex flex-col items-center justify-center mt-[10px]">
              <Link to="/allparcels">
                <li className="hover:text-[#fff] my-[5px] cursor-pointer">All parcels</li>
              </Link>
              <li
                className="hover:text-[#fff] my-[5px] cursor-pointer"
                onClick={Logout}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="flex justify-evenly px-[5%]">
        <div className="h-[90vh] w-[60vw] rounded-md">
          <div className="flex justify-between items-center p-[20px]">
            <h2 className="text-[18px]">My Parcels</h2>
            {/* Create Parcel Button */}
            <Link to="/create-parcel">
              <button
                className="bg-[#cfb526] text-white px-[15px] py-[8px] rounded-md hover:bg-[#3bb43e]"
              >
                Create Parcel
              </button>
            </Link>
          </div>

          {parcels.map((parcel, index) => (
  <Link key={index} to={`/parcel/${parcel._id}`}>
    <div
      className="flex justify-between h-[150px] w-[60vw] m-[20px] p-[20px] cursor-pointer hover:scale-105 hover:shadow-lg"
      style={{
        backgroundColor: "#333", // Darker background
        borderRadius: "10px",
        color: "#D9D9D9",
        border: "1px solid #555",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
    >
      <div>
        <ul>
          <li>From: {parcel.from}</li>
          <li>Weight: {parcel.weight} kg</li>
          <li>Date: {parcel.date}</li>
          <li>Sender: {parcel.sendername}</li>
        </ul>
      </div>

      <div className="flex flex-col">
        <span>To: {parcel.to}</span>
        <button
          className={`w-[100px] cursor-pointer py-[5px] rounded-md ${
            parcel.status === 1
              ? "bg-[#cfb526] text-white"
              : "bg-[#45de52] text-white"
          }`}
        >
          {parcel.status === 1 ? "Pending" : "Delivered"}
        </button>
      </div>
    </div>
  </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyParcels;