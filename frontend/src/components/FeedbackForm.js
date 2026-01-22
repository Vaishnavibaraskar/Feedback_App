import React, { useState } from "react";
import axios from "axios";

function FeedbackForm() {
  const [successMsg, setSuccessMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await axios.post(
    "http://localhost:5000/api/feedback",
    formData
  );

  if (res.data.success) {
    setSuccessMsg("✅ " + res.data.message);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } else {
    setSuccessMsg("⚠️ " + res.data.message);
  }
};

  return (
    <div className="container">
      <h2>Feedback Form</h2>

      {successMsg && (
        <p style={{ color: "green", textAlign: "center" }}>
          {successMsg}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Enter feedback"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
