import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthRoute from './components/authRoute';
import Home from './pages/home';
import Profile from './pages/profile';
import Users from './pages/users';
import Utils from './pages/utils';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoute>
              <Home />
            </AuthRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <AuthRoute>
              <Profile />
            </AuthRoute>
          }
        />
        <Route
          path="/users"
          element={
            <AuthRoute>
              <Users />
            </AuthRoute>
          }
        />
        <Route
          path="/utils"
          element={
            <AuthRoute>
              <Utils />
            </AuthRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
