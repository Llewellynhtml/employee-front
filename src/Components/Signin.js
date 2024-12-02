import React, { useState } from "react";
import axios from "axios";
import "./signin.css";

const Signin = ({ onNavigate, onAuthenticate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignIn = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/Signin", {
        email,
        password,
      });
      console.log(response.data);
      alert("Login successful");
      onAuthenticate(); 
      onNavigate("homepage"); 
    } catch (error) {
      setError(
        error.response?.data?.message || "Something went wrong, please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h1>Welcome Back!</h1>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Signing In..." : "Sign In"}
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>

      <div className="auth-links">
        <p className="forgot-password">
          <button onClick={() => onNavigate("forgot-password")}>Forgot password?</button>
        </p>
        <p className="signup-link">
          Don't have an account? <button onClick={() => onNavigate("signup")}>Sign up</button>
        </p>
      </div>
    </div>
  );
};

export default Signin;
