import { Link } from "react-router-dom";

export default function Home() {
  return (
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
          padding: "0 40px",
        }}
      >
        <h1 style={{ fontSize: "3rem", margin: 0 }}>Welcome to Booking App</h1>
        <p style={{ fontSize: "1.2rem" }}>
          Use the menu to login, register, or view rooms.
        </p>
      </div>
    </div>
  );
}
