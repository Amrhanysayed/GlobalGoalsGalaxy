import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signin from './pages/Signin';
function App() {

  return (
    <div>
    <Routes>
      <Route index         element={<Home/>} />
      <Route path='login'  element={<Login/>} />
      <Route path='signin' element={<Signin/>} />

    </Routes>
    </div>
  );
}

export default App;
