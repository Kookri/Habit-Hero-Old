import React from 'react';
import { removeTokens,tokenTest } from './TokenHandler'; // Import the tokenHandler

const SignOutButton = () => {
  const handleSignOut = () => {
    // Clear the tokens from localStorage
    removeTokens();

    // Redirect the user to the sign-in page, or do other sign-out related tasks
    // For example:
    // window.location.href = '/signin';
    //Run tokenTest to check if tokens are saved to localStorage
    if (tokenTest()) {
        console.log('Tokens successfully saved to localStorage');
        }
    else {
        console.log('Tokens not found in localStorage');
        }

  };

  return (
    <button onClick={handleSignOut}>
      Sign Out
    </button>
  );
};

export default SignOutButton;
