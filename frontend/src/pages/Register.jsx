import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();
    console.log("Register response:", data);
  };

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

        {/* Register Form */}
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
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Register</h2>
          <form
            onSubmit={handleRegister}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              width: "300px",
            }}
          >
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
            />
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
            />
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "10px",
                borderRadius: "8px",
                backgroundColor: "#1a1a1a",
                color: "rgba(255, 255, 255, 0.87)",
                border: "1px solid transparent",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
