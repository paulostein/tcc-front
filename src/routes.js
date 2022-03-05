import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import Private from './pages/private';
import PrivateRoutes from './components/privateRoutes';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route
          path="/private"
          element={
            <PrivateRoutes>
              <Private />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
