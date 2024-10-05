import React, { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Login.css'; // Import the CSS file where the glass effect styles are defined

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    UserType: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(''); // Clear error when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (formData.username.trim() === '') {
      setError('Username is required!');
      return;
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long!');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    if (formData.subject === '') {
      setError('Please select a subject!');
      return;
    }
    if (formData.schoolType === '') {
      setError('Please select a school type!');
      return;
    }

    // Clear error and proceed with form submission
    setError('');
    console.log('Form data submitted', formData);
    // Reset form after submission
    setFormData({
      username: '',
      password: '',
      confirmPassword: '',
      UserType: ''
    });
  };

  return (
    <main className="bg-slate-100 h-screen ">
      <div className="h-screen flex items-center justify-center bg-cover bg-center">
        <div className="glass-effect m-2 p-4 rounded-lg w-full max-w-md shadow-2xl shadow-yellow-300 z-10">
          <h1 className="text-center text-white font-bold text-4xl mb-6 pt-3 ">SignUp</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-slate-100  mb-1">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
                placeholder="Enter your username"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-slate-100  mb-1">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-slate-100  mb-1">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
                placeholder="Confirm your password"
                required
              />
            </div>

      

            {/* Select User Type */}
            <div>
              <label htmlFor="schoolType" className="block text-slate-100  mb-1">Select User Type</label>
              <select
                id="schoolType"
                name="schoolType"
                value={formData.schoolType}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
                required
              >
                <option value="" disabled>Select User type</option>
                <option value="Teacher">Teacher</option>
                <option value="Parent">Parent</option>
                <option value="Volunteer">Volunteer</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-500 transition duration-200"
            >
              Sign Up
            </button>
            {error && <p className="text-red-500 text-center mt-2">{error}</p>}
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center my-4">
            <hr className="w-full border-gray-600" />
            <span className="mx-2 text-gray-400">or</span>
            <hr className="w-full border-gray-600" />
          </div>

          {/* Social Sign Up Buttons */}
          <div className="flex gap-4 flex-col">
            <button className="flex items-center justify-center w-full bg-red-600 text-white p-2 rounded hover:bg-red-500 transition duration-200">
              <FaGoogle className="mr-2" />
              Sign Up with Google
            </button>
            <button className="flex items-center justify-center w-full bg-blue-800 text-white p-2 rounded hover:bg-blue-700 transition duration-200">
              <FaFacebook className="mr-2" />
              Sign Up with Facebook
            </button>
          </div>

          <p className="text-center  mt-4">
            Already have an account?
            <NavLink to="../login">
              <span className="mx-2 text-slate-600 hover:underline">Login</span>
            </NavLink>
          </p>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
