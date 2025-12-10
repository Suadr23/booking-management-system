import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Bookings() {
  const [bookings, setBookings] = useState([
    {
      _id: "1",
      roomId: "room1",
      startTime: "2025-12-11T10:00:00.000Z",
      endTime: "2025-12-11T11:00:00.000Z",
      status: "active",
    },
    {
      _id: "2",
      roomId: "room2",
      startTime: "2025-12-12T14:00:00.000Z",
      endTime: "2025-12-12T15:30:00.000Z",
      status: "active",
    },
  ]);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#242424", color: "rgba(255, 255, 255, 0.87)" }}>
      {/* Navbar */}
      <div>
        <nav
          style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          padding: "20px",
          backgroundColor: "#f5f5f5",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/bookings">My Bookings</Link>
      </nav>

        {/* Bookings List */}
        <div
          style={{
            minHeight: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: "40px",
            background: "linear-gradient(to right, #667eea, #764ba2)",
            color: "#fff",
            padding: "40px",
          }}
        >
          <h2>My Bookings</h2>

          {bookings.length === 0 ? (
            <p>You have no bookings.</p>
          ) : (
            bookings.map((b) => (
              <div key={b._id} style={{ marginBottom: "20px" }}>
                <h3>Room: {b.roomId}</h3>
                <p>Start: {new Date(b.startTime).toLocaleString()}</p>
                <p>End: {new Date(b.endTime).toLocaleString()}</p>
                <p>Status: {b.status}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
