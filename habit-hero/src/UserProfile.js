import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? <h2>Welcome, {user.username}!</h2> : <p>Loading...</p>}
      {/* Add additional user profile information or components here */}
    </div>
  );
};

export default UserProfile;
