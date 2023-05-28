import React from 'react';
import { removeTokens } from './TokenHandler'; // Import the tokenHandler

const SignOutButton = () => {
  const handleSignOut = () => {
    // Clear the tokens from localStorage
    removeTokens();

    // Redirect the user to the sign-in page, or do other sign-out related tasks
    // For example:
    // window.location.href = '/signin';
  };

  return (
    <button onClick={handleSignOut}>
      Sign Out
    </button>
  );
};

export default SignOutButton;
