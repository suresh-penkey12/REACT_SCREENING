import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let loginData = JSON.parse(localStorage.getItem("users") || '{}');
    let username = loginDetails.username;

    if (!loginDetails.username || !loginDetails.password) {
      alert("Please enter a valid username and password");
      return;
    }

    if (!loginData[username] || loginDetails.password !== loginData[username].password) {
      alert("Invalid username or password");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(username));
    alert("Login successful");
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2">Username</label>
          <input
            type="text"
            value={loginDetails.username}
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, username: e.target.value })
            }
            placeholder="Enter Username"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm mb-2">Password</label>
          <input
            type="password"
            value={loginDetails.password}
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, password: e.target.value })
            }
            placeholder="Enter Password"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
