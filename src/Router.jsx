import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Issues from './pages/Issues';
import PullRequests from './pages/PullRequests';
import Repositories from './pages/Repositories';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/repositories" />} />
      <Route path="/repositories" element={<Repositories />} />
      <Route path="/pull-requests" element={<PullRequests />} />
      <Route path="/issues" element={<Issues />} />
    </Routes>
  );
}

export default Router;
