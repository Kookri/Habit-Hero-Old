
//Importing modules from React base module. createContext is a function that allows us to create a new context (which we'll use for state management). 
//useState is a hook that allows us to add state to a function component.
import React, { createContext, useState, useEffect } from 'react'; 
import jwt_decode from 'jwt-decode';

// Creating a new context and exporting it. This context will share state (user data) across components. 
export const UserContext = createContext(null);

// Defining and exporting UserProvider component. Provides user state and setUser function to update user state to all components it's wrapped around. 
//children is a prop that includes any child elements passed to the component. For example, in <UserProvider><App /></UserProvider>, App is a child of UserProvider.
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get the token from local storage
    const token = localStorage.getItem('accessToken');
  
    if (token) {
      // Decode the token to get the user id
      const decoded = jwt_decode(token);
      const userId = decoded.userId;
  
      // Fetch the user data
      fetch(`/api/user/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error:', error));
    }
  }, [localStorage.getItem('accessToken')]); // Add the access token as a dependency
  
  // Returning userContext.Provider component. Wraps around 'children', providing them access to the user state and setUser function. 
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
