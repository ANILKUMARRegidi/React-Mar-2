 // src/App.js
import React, { useState } from 'react';
import Login from './components/Login'; 
import Profile from './components/Profile';

const App = () => {
  const [token, setToken] = useState('');
  const [id, setId] = useState('');

  const handleLogin = (username, password) => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Invalid username or password');
        }
      })
      .then((data) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('id', data.id);
        setToken(data.token);
        setId(data.id);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="App">
      {token ? (
        <Profile id={id} />
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
