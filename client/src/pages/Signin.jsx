import React, { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
function Signin() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    subject: '',
    schoolType: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here (e.g., form validation, API calls)
    if(formData.password.length < 8) {
      setError("Password must be at least 8 characters long!");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setError("");
    console.log("Form data submitted", formData);
  };

  return (
    <main>
      <div className="  min-h-screen flex items-center justify-center bg-cover bg-center " style={{ backgroundImage: 'url("https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg")' }}>
        <div className="bg-slate-500  p-8 rounded-lg  w-full max-w-md shadow-2xl shadow-yellow-300 z-10">
          <h1 className="text-center text-white font-bold text-4xl mb-6">Sign Up</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-gray-300">Username</label>
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
              <label htmlFor="password" className="block text-gray-300">Password</label>
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
              <label htmlFor="confirmPassword" className="block text-gray-300">Confirm Password</label>
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

            {/* Select Subject */}
            <div>
              <label htmlFor="subject" className="block text-gray-300">Select Your Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
                required
              >
                
                <option value="math">Math</option>
                <option value="science">Science</option>
                <option value="english">English</option>
                <option value="history">History</option>
              </select>
            </div>

            {/* Select School Type */}
            <div>
              <label htmlFor="schoolType" className="block text-gray-300">Select School Type</label>
              <select
                id="schoolType"
                name="schoolType"
                value={formData.schoolType}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
                required
              >
                
                <option value="primary">Primary School</option>
                <option value="secondary">Secondary School</option>
                <option value="high">High School</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-500 transition duration-200"
            >
              Sign Up
            </button>
            {error&&<p className='text-red-500 text-center'>{error}</p>}
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center my-4">
            <hr className="w-full border-gray-600" />
            <span className="mx-2 text-gray-400">or</span>
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
        </div>
      </div>
    </main>
  );
}

export default Signin;
