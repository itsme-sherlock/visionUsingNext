'use client'
import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

function ContactForm() {
  const [submitForm, setSetsubmitForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    
    gender: "male", // Default value for gender
    phone: "", // Default value for phone
    other: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name);


    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.phone && formData.phone.length !== 10) {
      alert("Please enter a valid mobile number");
      return;
    }
  
    try {
      console.log("Submitting form data:", formData);
  
      // Add this line to log formData just before sending the request
      console.log("FormData before sending:", formData);
  
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      console.log("Response from server:", response);
  
      if (!response.ok) {
        throw new Error('Error submitting form.');
      }
  
      setSetsubmitForm(true);
      console.log("Form submitted successfully");
  
      // Optionally, reset the form fields after successful submission
      setFormData({
        name: "",
        email: "",
       
        gender: "male",
        phone: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  

  
  

  const inputStyle =
    "font-inter border-2 border-black bg-white text-black placeholder:text-black focus:outline-none focus:border-4 focus:border-black focus:placeholder-none focus:bg-visionGold rounded-lg h-10 p-2";

  return (
    <form onSubmit={handleSubmit} className="bg-visionBlue p-5">
      <div className="text-2xl text-visionGold font-bold text-center">
        Contact Us
      </div>
      <div className="flex justify-start items-center flex-col gap-4 p-5">
        {/* name */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className={inputStyle}
           
          
          // className=
        />
        {/* email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={inputStyle}
           
        />
        {/* gender */}
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          <label htmlFor="male" className="text-white">
            Male
          </label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          <label htmlFor="female" className="text-white">
            Female
          </label>
        </div>
        {/* age */}
        <input
          type="number"
          name="age"
          id="age"
          placeholder="Age"
          value={formData.age}
          className={inputStyle}
           
        />
        {/* area */}
        <input
          type="text"
          name="area"
          id="area"
          placeholder="Area in Chennai"
          value={formData.area}
          className={inputStyle}
           
        />
        {/* phone */}
        <input
          type="number"
          name="phone"
          id="phone"
          placeholder="Mobile Number"
          value={formData.phone}
          onChange={handleChange}
          className={inputStyle}
           
        />
        {/* Dropdown for occupation */}
        <select
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          className={inputStyle}
          
        >
          <option value="">Select Occupation</option>
          <option value="Retired Person">Retired Person</option>
          <option value="Employee">Employee</option>
          <option value="Business">Business</option>
          <option value="Looking for a Job">Looking for a Job</option>
          <option value="Insurance agent or advisor">
            Insurance agent or advisor
          </option>
          <option value="Real estate agent">Real estate agent</option>
          <option value="Other">Other</option>
        </select>
        {/* conditional rendering for other */}
        {formData.occupation === "Other" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <AnimatePresence>
              <div>
                <input
                  type="text"
                  name="other"
                  id="other"
                  placeholder="please enter your occupation"
                  value={formData.other}
                  className={inputStyle}
                />
              </div>
            </AnimatePresence>
          </motion.div>
        )}
        {submitForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-white font-playfair font-bold"
          >
            Form submitted successfully
          </motion.div>
        )}
        <button
          type="submit"
          className="bg-visionGold font-bold text-black px-5"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
