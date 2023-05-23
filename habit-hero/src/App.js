import React, { useContext } from 'react';
import { UserContext } from './UserContext'; // ensure that './UserContext' correctly points to the UserContext.js file
import SignupForm from './SignupForm';
import SigninForm from './SigninForm';
import UserProfile from './UserProfile';
import './App.css'; // importing the App.css file

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="App">
      <h2>Sign up</h2>
      <SignupForm />

      <h2>Or Sign In</h2>
      <SigninForm />

      <h2>User Profile</h2>
      <UserProfile />
    </div>
  );
};

export default App;