import React, { useState } from "react";
import { storeTokens, tokenTest } from './TokenHandler'; // Import the tokenHandler

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Make a POST request to your backend API
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Successful sign-in, handle the response as needed
        const data = await response.json();
        console.log(data); // For testing purposes, you can log the response

        // Store the tokens
        const { accessToken, refreshToken } = data; // Replace with actual property names
        storeTokens(accessToken, refreshToken);
      } else {
          // Check if tokens are saved to localStorage
  if (tokenTest()) {
    console.log('Tokens successfully saved to localStorage');
  } else {
    console.log('Tokens not found in localStorage');
  }
        // Handle sign-in error
        const errorData = await response.json();
        console.log(errorData); // Log the error response
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };



  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for email and password */}
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
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SigninForm;
