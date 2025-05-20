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

    users[username] = { password, liked: [], disliked: [] };
    currentUser = username;
    saveToLocalStorage();
    alert('Registration successful');
    navigate('/login');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="w-full max-w-sm bg-white/30 backdrop-blur-lg shadow-2xl rounded-2xl p-8 border border-white/20">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Create Account</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2">Username</label>
            <input
              type="text"
              value={registerDetails.username}
              onChange={(e) =>
                setRegisterDetails({ ...registerDetails, username: e.target.value })
              }
              placeholder="Enter Username"
              className="w-full px-4 py-2 bg-white/70 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/60 placeholder-gray-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-white text-sm mb-2">Password</label>
            <input
              type="password"
              value={registerDetails.password}
              onChange={(e) =>
                setRegisterDetails({ ...registerDetails, password: e.target.value })
              }
              placeholder="Enter Password"
              className="w-full px-4 py-2 bg-white/70 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/60 placeholder-gray-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-indigo-600 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-100 transition-all duration-200"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center text-white text-sm">
          Already have an account?{' '}
          <button
            onClick={handleLogin}
            className="text-white underline hover:text-indigo-100 transition"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
