import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

import { publicRequest } from "../requestMethods";

const NewParcel = () => {
  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleAddParcel = async () => {
    try {
      await publicRequest.post("/parcels", inputs);
      toast.success("Parcel has been successfully saved to the dataabse");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <h2 className="font-semibold">New Parcel</h2>
      <div className="flex">
        <div className="m-[20px]">
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">From</label>
            <input
              type="text"
              name="from"
              onChange={handleChange}
              placeholder="Enter From Address"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">To</label>
            <input
              type="text"
              name="to"
              onChange={handleChange}
              placeholder="Enter To Address"
              className="border-2 border-[#555]  border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Sender Name</label>
            <input
              type="text"
              name="sendername"
              onChange={handleChange}
              placeholder="Enter Name"
              className="border-2 border-[#555]  border-solid p-[10px] w-[300px]"
            />
          </div>

          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Recipient Name</label>
            <input
              type="text"
              name="recipientname"
              onChange={handleChange}
              placeholder="Enter Recipient Name"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>

          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Sender Email</label>
            <input
              type="text"
              name="senderemail"
              onChange={handleChange}
              placeholder="Enter Sender Email"
              className="border-2 border-[#555]  border-solid p-[10px] w-[300px]"
            />
          </div>

          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Recipient Email</label>
            <input
              type="text"
              name="recipientemail"
              onChange={handleChange}
              placeholder="Enter Recipient Email"
              className="border-2 border-[#555]  border-solid p-[10px] w-[300px]"
            />
          </div>
        </div>
        <div className="m-[20px]">
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Weight</label>
            <input
              type="text"
              name="weight"
              onChange={handleChange}
              placeholder="Enter weight"
              className="border-2 border-[#555]  border-solid p-[10px] w-[300px]"
            />
          </div>
          {/* <div className="flex flex-col my-[20px]">
            <label htmlFor="">Cost</label>
            <input
              type="text"
              name="cost"
              onChange={handleChange}
              placeholder="Enter Cost"
              className="border-2 border-[#555]  border-solid p-[10px] w-[300px]"
            />
          </div> */}
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Date</label>
            <input
              type="date"
              name="date"
              onChange={handleChange}
              placeholder="Enter Date"
              className="border-2 border-[#555]  border-solid p-[10px] w-[300px]"
            />
          </div>

          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Note</label>
            <textarea
              type="text"
              name="note"
              onChange={handleChange}
              placeholder="Note"
              className="border-2 border-[#555]  border-solid p-[10px] w-[300px]"
            />
          </div>
          <button
            className="bg-[#1e1e1e] cursor-pointer text-white p-[10px] w-[300px]" onClick={handleAddParcel} >
            Create
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default NewParcel;
