// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AssetDetails from './pages/AssetDetails';
import NewAsset from './pages/NewAsset';
import awsExports from "./aws-exports";
import { Amplify } from "aws-amplify";

Amplify.configure(awsExports);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/asset/:id" element={<AssetDetails />} />
        <Route path="/new-asset" element={<NewAsset />} />
      </Routes>
    </Router>
  );
}

export default App;
