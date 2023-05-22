import React, { useContext } from 'react';
import { UserContext } from './UserContext'; // ensure that './UserContext' correctly points to the UserContext.js file
import SignupForm from './SignupForm';
import SigninForm from './SigninForm';

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="App">
      {/* If the user is signed in, display a welcome message with their username. */}
      {user ? <h1>Hello, {user.username}!</h1> : null}
      
      <h2>Sign up</h2>
      <SignupForm />

      <h2>Or Sign In</h2>
      <SigninForm />
    </div>
  );
};

export default App;