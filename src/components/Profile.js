// src/Profile.js
import React, { useState, useEffect } from 'react';
import '../styles/style.css'
const Profile = ({ id }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  return (
    <div>
      {user ? (
        <div class="profile">
          <h2>Welcome, {user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          {/* Add other user information here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
