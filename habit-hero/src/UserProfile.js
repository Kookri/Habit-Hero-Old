import React from 'react';

const UserProfile = ({ username }) => {
  return (
    <div>
      <h2>Welcome, {username}!</h2>
      {/* Add additional user profile information or components here */}
    </div>
  );
};

export default UserProfile;