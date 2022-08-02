import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/main/Main';
// import Nav from './pages/Nav/Nav';

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>
        {/* <Route path='/' element={<Login />} />; */}
        <Route path='/' element={<Login />} />;
        <Route path='/main' element={<Main />} />;
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
