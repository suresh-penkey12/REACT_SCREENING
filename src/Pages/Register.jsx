import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [registerDetails, setRegisterDetails] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  let users = JSON.parse(localStorage.getItem('users') || '{}');
  let currentUser = null;

  const saveToLocalStorage = () => {
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = registerDetails;

    if (!username || !password) {
      alert('Please provide username and password');
      return;
    }

    if (users[username]) {
      alert('Username already exists');
      return;
    }

    users[username] = { password, liked: [] };
    currentUser = username;
    saveToLocalStorage();
    alert('Registration successful');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2">Username</label>
          <input
            type="text"
            value={registerDetails.username}
            onChange={(e) =>
              setRegisterDetails({ ...registerDetails, username: e.target.value })
            }
            placeholder="Enter Username"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm mb-2">Password</label>
          <input
            type="password"
            value={registerDetails.password}
            onChange={(e) =>
              setRegisterDetails({ ...registerDetails, password: e.target.value })
            }
            placeholder="Enter Password"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
