import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';

import LoginSYHa from './pages/SYha/Login/Login';
import MainSYHa from './pages/SYha/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/loginha" element={<LoginSYHa />} />
        <Route path="/mainha" element={<MainSYHa />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
