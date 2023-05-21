import React from 'react';
import SignupForm from './SignupForm';
import SigninForm from './SigninForm';

function App() {
  return (
    <div className="App">
      <h2>Sign up</h2>
      <SignupForm />

      <h2>Or Sign In</h2>
      <SigninForm />
    </div>
  );
}

export default App;