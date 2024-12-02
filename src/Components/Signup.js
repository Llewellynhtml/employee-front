import React, { useState } from "react";
import axios from "axios";
import "./signin.css";

const Signup = ({ onNavigate, onAuthenticate }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/SignUp", {
        firstName,
        lastName,
        email,
        password,
      });
      console.log(response.data);
      alert("User created successfully");
      onAuthenticate(); // Call the onAuthenticate function to update the authentication state
      onNavigate("homepage"); // Navigate to the homepage
    } catch (error) {
      setError(
        error.response?.data?.message ||
        "Something went wrong, please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h1>Create an Account</h1>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Creating Account..." : "Create Account"}
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <p>
        If you have an account,{" "}
        <span className="link" onClick={() => onNavigate("signin")}>
          Sign In here
        </span>
      </p>
    </div>
  );
};

export default Signup;
