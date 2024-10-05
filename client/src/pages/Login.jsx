import React from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css'; // Import the CSS file where the glass effect styles are defined
import FloatingBackground from '../components/FloatingBackgroundFolder/FloatingBackground';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (username.length < 2 || password.length < 8) {
      setError('Invalid username or password');
      setUsername('');
      setPassword('');
      return;
    } else {
      // Handle valid form submission
    }
    console.log(username, password);
    setUsername('');
    setPassword('');
    setError('');
  }

  return (
    <FloatingBackground>
    <main>
      <div className="min-h-screen flex items-center justify-center bg-cover bg-center">
        <div className="glass-effect p-8 rounded-lg w-full max-w-sm">
          <h1 className="text-center text-white font-bold text-4xl mb-6">Login</h1>
          <NavLink to="../layout" className="block text-center text-slate-100 hover:underline">ToApp <span>beta version</span></NavLink>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-slate-100 mb-1">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
                placeholder="Enter your username"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-slate-100  mb-1">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-500 transition duration-200"
            >
              Login
            </button>

            {error && <p className="text-red-500 text-center">{error}</p>}
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center my-4">
            <hr className="w-full border-gray-600" />
            <span className="mx-2 text-slate-600">or</span>
            <hr className="w-full border-gray-600" />
          </div>

          {/* Social Login Buttons */}
          <div className="flex gap-4 flex-col">
            <button className="flex items-center justify-center w-full bg-red-600 text-white p-2 rounded hover:bg-red-500 transition duration-200">
              <FaGoogle className="mr-2" />
              Login with Google
            </button>
            <button className="flex items-center justify-center w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-500 transition duration-200">
              <FaFacebook className="mr-2" />
              Login with Facebook
            </button>
          </div>

          <p className="text-center  mt-4 text-slate-100">
            Don't have an account?
            <NavLink to="../signup">
              <span className="mx-2 text-slate-600 hover:underline">Sign Up</span>
            </NavLink>
          </p>
        </div>
      </div>
      </main>
    </FloatingBackground>
  );
}

export default Login;
