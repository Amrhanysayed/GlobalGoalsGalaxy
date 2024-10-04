import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Level1 from './pages/Level1';
import SignUp from './pages/SignUp';
import Layout from './pages/Layout';

function App() {

  return (
    <div>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/login'  element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/layout' element={<Layout/>} />
      <Route path='/layout/level1' element={<Level1/>} />
       
    
      
    </Routes>
    </div>
  );
}

export default App;
