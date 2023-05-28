import React, { useState } from "react";
import { storeTokens, tokenTest } from './TokenHandler'; // Import the tokenHandler

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Make a POST request to your backend API
    try {
      const response = await fetch("http://127.0.0.1:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        // Successful user creation, handle the response as needed
        const data = await response.json();
        console.log(data); // For testing purposes, you can log the response

        // Store the tokens
        const { accessToken, refreshToken } = data;
        storeTokens(accessToken, refreshToken);

        // Check if tokens are saved to localStorage
        if (tokenTest()) {
          console.log('Tokens successfully saved to localStorage');
        } else {
          console.log('Tokens not found in localStorage');
        }
      } else {
        // Handle user creation error
        const errorData = await response.json();
        console.log(errorData); // Log the error response
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for username, email, and password */}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
