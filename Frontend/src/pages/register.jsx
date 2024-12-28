/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    age: "",
    country: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    try {
      const res = await axios.post("https://backend-repo-wndn.onrender.com/api/v1/users", formData);
      alert("Registration Successful!");
      setFormData({
        fullname: "",
        email: "",
        age: "",
        country: "",
        address: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Error during registration:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Registration Failed!");
    }
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.imageSection}>
        <img src="goods.jpg" alt="Registration Illustration" style={styles.image} />
        <p style={styles.quote}>
          “Empowering the future of delivery with speed, sustainability, and precision—Ecolite ensures your packages reach their destination with minimal impact on the planet.”
        </p>
      </div>
      <form style={styles.formBox} onSubmit={handleSubmit}>
        <h2 style={styles.heading}>User Registration</h2>
        <div style={styles.formGroup}>
          <label style={styles.label}>Full Name</label>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button} onClick={() => console.log("Button clicked")}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    minHeight: "100vh",
    padding: "20px",
    backgroundColor: "#000",
    color: "#ffd700",
    boxSizing: "border-box",
  },
  imageSection: {
    flex: 1,
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
    margin: "0 auto",
  },
  image: {
    width: "100%",
    maxWidth: "400px",
    height: "auto",
    borderRadius: "10px",
  },
  quote: {
    color: "#e9eb77",
    fontStyle: "italic",
    marginTop: "15px",
    textAlign: "center",
    maxWidth: "400px",
  },
  formBox: {
    flex: 1,
    maxWidth: "500px",
    width: "100%",
    backgroundColor: "#111",
    border: "2px solid #ffd700",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(255, 215, 0, 0.7)",
    margin: "20px auto",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ffd700",
    borderRadius: "5px",
    backgroundColor: "#222",
    color: "#e9eb77",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ffd700",
    borderRadius: "5px",
    backgroundColor: "#222",
    color: "#e9eb77",
    resize: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#e9eb77",
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
  },
};


export default Registration;
