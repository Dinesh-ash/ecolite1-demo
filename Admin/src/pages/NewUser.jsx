import { useState } from "react";
import { publicRequest } from "../requestMethods";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const NewUser = () => {
  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const generatePassword = (length) => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
  
    for (let i = 0; i < length; i++) {
      password += chars[Math.floor(Math.random() * chars.length)];
    }
  
    return password;
  };
  
  const handleAddUser = async () => {
    try {
      const password = generatePassword(8);
      await publicRequest.post("/auth/register", { ...inputs, password });
      toast.success("User has been successfully Registered");
    } catch (error) {
      toast.danger(error.message);
    }
  };
  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <h2 className="font-semibold">New User</h2>
      <div className="flex flex-col my-[20px]">
        <label htmlFor="">Full Name</label>
        <input
          type="text"
          name="fullname"
          onChange={handleChange}
          placeholder="Enter Full Name"
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
      </div>
      <div className="flex flex-col my-[20px]">
        <label htmlFor="">Email</label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="Enter email"
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
      </div>

      <div className="flex flex-col my-[20px]">
        <label htmlFor="">Age</label>
        <input
          type="Number"
          name="age"
          onChange={handleChange}
          placeholder="Enter Age"
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
      </div>

      <div className="flex flex-col my-[20px]">
        <label htmlFor="">Country</label>
        <input
          type="text"
          name="country"
          onChange={handleChange}
          placeholder="Enter Country"
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
      </div>

      <div className="flex flex-col my-[20px]">
        <label htmlFor="">Address</label>
        <input
          type="text"
          name="address"
          onChange={handleChange}
          placeholder="Enter Address"
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
      </div>

      <button
        className="bg-[#1e1e1e] cursor-pointer text-white p-[10px] w-[300px]" onClick={handleAddUser} >
        Create
      </button>
      <ToastContainer />
    </div>
  );
};

export default NewUser;
