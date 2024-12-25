import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Login = () => {
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const [error, setError] = useState(""); // State for error message
  const navigate = useNavigate(); // React Router hook for navigation

  // Hardcoded valid credentials
  const validCredentials = {
    email: "chinnipavani.sep25@gmail.com",
    password: "Z!a5oVJn",
  };

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    if (email === validCredentials.email && password === validCredentials.password) {
      setError(""); // Clear any error message
      navigate("/home"); // Navigate to the home page
    } else {
      setError("Invalid email or password. Please try again."); // Display error message
    }
  };

  return (
    <div>
      <div className="h-[80vh] flex items-center justify-between px-[50px] text-gray-300 bg-black">
        {/* Image and Title Container */}
        <div className="flex flex-col items-start justify-center mr-[30px]">
          <h2 className="text-[#E9EB77] font-semibold text-[35px] mb-[20px] italic">
            EcoLite Admin
          </h2>
          <div className="flex items-center justify-center h-[450px] w-[450px] ml-[200px]">
            <img
              src="/hero.png"
              alt="Admin Logo"
              className="object-contain h-auto max-h-[100%] w-auto max-w-[100%]"
            />
          </div>
        </div>

        {/* Login Form */}
        <div className="h-[450px] w-[450px] bg-[#E9EB77] rounded-md flex flex-col items-center justify-center mr-[100px]">
          <h3 className="text-[28px] text-[#1E1E1E] font-bold mb-[20px] italic">
            Admin Login
          </h3>
          <form onSubmit={handleLogin} className="w-full flex flex-col items-center">
            <input
              type="text"
              className="bg-[#fff] p-[20px] w-[350px] mb-[20px] outline-none rounded-md"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
            />
            <input
              type="password"
              className="bg-[#fff] p-[20px] w-[350px] mb-[20px] outline-none rounded-md"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
            />
            {error && <p className="text-red-600 mb-[10px]">{error}</p>} {/* Display error message */}
            <button
              type="submit"
              className="bg-[#1E1E1E] w-[350px] p-[15px] text-white font-semibold text-[18px] rounded-md"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;