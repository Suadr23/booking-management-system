import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchRooms = async () => {
      const res = await fetch("http://localhost:5000/rooms", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = await res.json();
      setRooms(data);
    };

    fetchRooms();
  }, []);

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

        {/* Rooms List */}
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
          <h2>Available Rooms</h2>

          {rooms.length === 0 ? (
            <p>No rooms found.</p>
          ) : (
            rooms.map((room) => (
              <div key={room._id} style={{ marginBottom: "20px" }}>
                <h3>{room.name}</h3>
                <p>Capacity: {room.capacity}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
