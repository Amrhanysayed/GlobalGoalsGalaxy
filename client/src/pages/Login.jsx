import React from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa'; // Importing icons from react-icons
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
function Login() {

const [username, setUsername] =useState('');
const [password, setPassword] =useState('');
const [error, setError] =useState('');



function handleSubmit  (e)  {

  e.preventDefault();
  if(username.length<2 || password.length<8) {
    setError('Invalid username or password');
    setUsername('');
    setPassword('');
    return;
  }
  else{

  }
  console.log(username, password);
  setUsername('');
  setPassword('');
  setError("");
}

  return (
    <main>
      <div className=" min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg")' }}
      >
        <div className="bg-slate-500 p-8 rounded-lg  w-full max-w-sm shadow-2xl shadow-green-400 z-10">
          {/* <img src="./src/images/light_total.jpg" alt="Logo" className="mb-4 w-[250px] mx-auto" /> */}
          <h1 className="text-center text-white font-bold text-4xl mb-6">Login</h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-gray-300">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                className="w-full p-2 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
                placeholder="Enter your username"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-300">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="w-full p-2 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-500 transition duration-200"
              onClick={(e)=>handleSubmit(e)}
            >
              Login
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

          <p className="text-center text-gray-300 mt-4"> Don't have an account? <NavLink to="../signin"><span className='mx-2 text-lime-300'>Sign Up</span></NavLink>   </p>
        </div>
      </div>
    </main>
  );
}

export default Login;
