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

  const handleRegister = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-4">
      <div className="w-full max-w-sm bg-white/30 backdrop-blur-lg shadow-2xl rounded-2xl p-8 border border-white/20">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2">Username</label>
            <input
              type="text"
              value={loginDetails.username}
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, username: e.target.value })
              }
              placeholder="Enter Username"
              className="w-full px-4 py-2 bg-white/70 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/60 placeholder-gray-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-white text-sm mb-2">Password</label>
            <input
              type="password"
              value={loginDetails.password}
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, password: e.target.value })
              }
              placeholder="Enter Password"
              className="w-full px-4 py-2 bg-white/70 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/60 placeholder-gray-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-indigo-600 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-100 transition-all duration-200"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-white text-sm">
          Don&apos;t have an account?{' '}
          <button
            onClick={handleRegister}
            className="text-white underline hover:text-indigo-100 transition"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
