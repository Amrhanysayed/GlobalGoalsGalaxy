import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Level1 from './pages/Level1';

function App() {

  return (
    <div>
    <Routes>
      <Route index         element={<Home/>} />
      <Route path='/login'  element={<Login/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/level1' element={<Level1/>} />

    </Routes>
    </div>
  );
}

export default App;
