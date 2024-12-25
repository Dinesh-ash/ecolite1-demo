import React, { useRef, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GoalsPage from "./goals";
import Registration from "./register";

const Home = () => {
  const registrationRef = useRef(null);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

  const scrollToRegistration = () => {
    if (registrationRef.current) {
      registrationRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Hide the welcome message after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeMessage(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Navbar onRegisterClick={scrollToRegistration} />

      {/* Animated Welcome Message */}
      {showWelcomeMessage && (
        <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#6EE7B7] to-[#3B82F6] text-white px-8 py-4 rounded-lg shadow-lg z-50 animate-bounce">
          <h3 className="text-2xl font-bold">
            🌟 Great to see you here! Let’s make your EcoLite experience unforgettable
          </h3>
        </div>
      )}

      {/* Hero Section */}
      <div className="h-[80vh] flex items-center justify-between px-[50px] text-gray-300">
        {/* Left section for the text */}
        <h2 className="text-4xl font-bold max-w-lg italic">
          DELIVERING THE FUTURE, ECO-FRIENDLY PACKAGE AT A TIME.
        </h2>

        {/* Right section for the image */}
        <img
          src="/hero.png"
          alt="Delivery illustration"
          className="h-[500px] object-contain mr-[150px]"
        />
      </div>

      {/* Goals and Registration Section */}
      <GoalsPage />
      <div ref={registrationRef}>
        <Registration />
      </div>

      <Footer />
    </div>
  );
};

export default Home;