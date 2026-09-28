import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const currentUser =
    JSON.parse(localStorage.getItem("user")) || {
      name: "User",
      email: "",
    };

  // New exchange/remittance request
  const [newRequest, setNewRequest] = useState({
    fromCurrency: "INR",
    toCurrency: "AED",
    amount: "",
    recipientName: "",
    recipientCountry: "",
  });

  // ==============================
  // FETCH ACTIVE OFFERS
  // ==============================
  const fetchOffers = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/offers"
      );

      const data = await response.json();

      if (response.ok) {
        setRequests(data);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error fetching offers:", error);
    } finally {
      setLoading(false);
    }
  };

  // ==============================
  // CHECK LOGIN
  // ==============================
  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");

    if (!loggedIn) {
      navigate("/login");
    } else {
      fetchOffers();
    }
  }, [navigate]);

  // ==============================
  // HANDLE FORM CHANGE
  // ==============================
  const handleChange = (e) => {
    setNewRequest({
      ...newRequest,
      [e.target.name]: e.target.value,
    });
  };

  // ==============================
  // CREATE NEW REQUEST
  // ==============================
  const handleCreateRequest = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login again.");
      navigate("/login");
      return;
    }

    // Prevent same currency
    if (
      newRequest.fromCurrency === newRequest.toCurrency
    ) {
      alert("From and To currency cannot be the same.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/offers",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            fromCurrency: newRequest.fromCurrency,
            toCurrency: newRequest.toCurrency,
            amount: Number(newRequest.amount),
            recipientName: newRequest.recipientName,
            recipientCountry: newRequest.recipientCountry,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("✅ Remittance request posted successfully!");

        // Clear form
        setNewRequest({
          fromCurrency: "INR",
          toCurrency: "AED",
          amount: "",
          recipientName: "",
          recipientCountry: "",
        });

        // Refresh active requests
        fetchOffers();
      } else {
        alert(data.message || "Failed to post request.");
      }
    } catch (error) {
      console.error("Error posting offer:", error);
      alert("❌ Server error. Check if backend is running.");
    }
  };

  // ==============================
  // ACCEPT AN OFFER
  // ==============================
  const handleAcceptMatch = async (id, userName) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login again.");
      navigate("/login");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/offers/${id}/accept`,
        {
          method: "PUT",

          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(
          `🎉 You accepted ${userName}'s exchange request!`
        );

        // Reload requests
        fetchOffers();
      } else {
        alert(
          data.message || "Failed to accept exchange request."
        );
      }
    } catch (error) {
      console.error("Error accepting offer:", error);

      alert(
        "❌ Server error while accepting the exchange request."
      );
    }
  };

  return (
    <div className="dashboard-container">

      {/* ==============================
          HEADER
      ============================== */}

      <h2>📊 Money Exchange Dashboard</h2>

      <p>
        Welcome back, <b>{currentUser.name}</b>!
        Create a remittance request or find another user
        for currency exchange.
      </p>


      <div className="dashboard-grid">

        {/* ==============================
            CREATE REQUEST
        ============================== */}

        <div className="dashboard-card create-card">

          <h3>➕ Post New Remittance Request</h3>

          <form onSubmit={handleCreateRequest}>

            {/* FROM CURRENCY */}

            <div className="form-group">

              <label>I Have (From)</label>

              <select
                name="fromCurrency"
                value={newRequest.fromCurrency}
                onChange={handleChange}
              >

                <option value="INR">
                  INR (₹)
                </option>

                <option value="AED">
                  AED (د.إ)
                </option>

                <option value="USD">
                  USD ($)
                </option>

                <option value="EUR">
                  EUR (€)
                </option>

                <option value="GBP">
                  GBP (£)
                </option>

              </select>

            </div>


            {/* TO CURRENCY */}

            <div className="form-group">

              <label>I Need (To)</label>

              <select
                name="toCurrency"
                value={newRequest.toCurrency}
                onChange={handleChange}
              >

                <option value="AED">
                  AED (د.إ)
                </option>

                <option value="INR">
                  INR (₹)
                </option>

                <option value="USD">
                  USD ($)
                </option>

                <option value="EUR">
                  EUR (€)
                </option>

                <option value="GBP">
                  GBP (£)
                </option>

              </select>

            </div>


            {/* AMOUNT */}

            <div className="form-group">

              <label>Amount</label>

              <input
                type="number"
                name="amount"
                placeholder="e.g. 200"
                value={newRequest.amount}
                onChange={handleChange}
                min="1"
                required
              />

            </div>


            {/* RECIPIENT NAME */}

            <div className="form-group">

              <label>Recipient Name</label>

              <input
                type="text"
                name="recipientName"
                placeholder="e.g. Ahmed"
                value={newRequest.recipientName}
                onChange={handleChange}
                required
              />

            </div>


            {/* RECIPIENT COUNTRY */}

            <div className="form-group">

              <label>Recipient Country</label>

              <input
                type="text"
                name="recipientCountry"
                placeholder="e.g. UAE"
                value={newRequest.recipientCountry}
                onChange={handleChange}
                required
              />

            </div>


            <button
              type="submit"
              className="auth-btn"
            >
              Post Remittance Request
            </button>

          </form>

        </div>


        {/* ==============================
            ACTIVE REQUESTS
        ============================== */}

        <div className="dashboard-card market-card">

          <h3>🌐 Active Remittance Requests</h3>

          {loading ? (

            <p>Loading requests...</p>

          ) : (

            <div className="request-list">

              {requests.length === 0 ? (

                <p>
                  No active requests found.
                  Be the first to post one!
                </p>

              ) : (

                requests.map((item) => (

                  <div
                    key={item._id}
                    className="request-item"
                  >

                    <div className="request-info">

                      <strong>
                        {item.user?.name || "Unknown User"}
                      </strong>

                      <p>
                        Sending:
                        <b>
                          {" "}
                          {item.amount} {item.fromCurrency}
                        </b>
                      </p>

                      <p>
                        Needs:
                        <b>
                          {" "}
                          {item.toCurrency}
                        </b>
                      </p>

                      <p>
                        Recipient:
                        <b>
                          {" "}
                          {item.recipientName}
                        </b>
                      </p>

                      <p>
                        Country:
                        <b>
                          {" "}
                          {item.recipientCountry}
                        </b>
                      </p>

                      <p>
                        Status:
                        <b>
                          {" "}
                          {item.status}
                        </b>
                      </p>

                    </div>


                    {/* ACCEPT BUTTON */}

                    <button
                      className="accept-btn"
                      onClick={() =>
                        handleAcceptMatch(
                          item._id,
                          item.user?.name || "User"
                        )
                      }
                      disabled={
                        item.status !== "pending"
                      }
                    >

                      {item.status === "pending"
                        ? "Accept Match"
                        : item.status}

                    </button>

                  </div>

                ))

              )}

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;