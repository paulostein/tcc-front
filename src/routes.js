import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Private from './pages/private';
import PrivateRoutes from './components/privateRoutes';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
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
