import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Private from './pages/private';
import AuthRoute from './components/authRoute';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoute>
              <Private />
            </AuthRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
