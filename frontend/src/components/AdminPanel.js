/*import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function AdminPanel() {
  const navigate = useNavigate();

useEffect(() => {
  const isAdmin = localStorage.getItem("adminLoggedIn");
  if (!isAdmin) {
    navigate("/login");
  }
}, []);


  // ✅ DELETE FUNCTION
  const deleteFeedback = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/feedback/${id}`);
      fetchFeedbacks(); // refresh list
    } catch (error) {
      alert("Delete failed");
    }
  };

  return (
    <div className="admin-container">
      <h2>All Feedbacks</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Action</th> {}
          </tr>
        </thead>

        <tbody>
          {feedbacks.map((fb) => (
            <tr key={fb._id}>
              <td>{fb.name}</td>
              <td>{fb.email}</td>
              <td>{fb.message}</td>
              <td>
                <button
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "6px 10px",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                  onClick={() => deleteFeedback(fb._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPanel;
*/
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminPanel() {
  const navigate = useNavigate();

  const [feedbacks, setFeedbacks] = useState([]);

  // 🔐 protect admin page
  useEffect(() => {
    const isAdmin = localStorage.getItem("adminLoggedIn");
    if (!isAdmin) {
      navigate("/login");
    }
    fetchFeedbacks();
  }, []);

  // fetch feedbacks
  const fetchFeedbacks = async () => {
    const res = await axios.get("http://localhost:5000/api/feedback");
    setFeedbacks(res.data);
  };

  // delete feedback
  const deleteFeedback = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/feedback/${id}`);
      fetchFeedbacks();
    } catch (error) {
      alert("Delete failed");
    }
  };

  return (
    <div className="admin-container">
      <h2>All Feedbacks</h2>

      {/* ✅ LOGOUT BUTTON — PUT HERE */}
      <button
        style={{
          background: "black",
          color: "white",
          padding: "8px 15px",
          marginBottom: "15px",
          cursor: "pointer",
          borderRadius: "5px",
        }}
        onClick={() => {
          localStorage.removeItem("adminLoggedIn");
          navigate("/login");
        }}
      >
        Logout
      </button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {feedbacks.map((fb) => (
            <tr key={fb._id}>
              <td>{fb.name}</td>
              <td>{fb.email}</td>
              <td>{fb.message}</td>
              <td>
                <button
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "6px 10px",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                  onClick={() => deleteFeedback(fb._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPanel;
