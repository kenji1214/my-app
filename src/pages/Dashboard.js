// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API } from 'aws-amplify';

function Dashboard() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const fetchAssets = async () => {
      const result = await API.get('assetsApi', '/assets');
      setAssets(result);
    };
    fetchAssets();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="/new-asset">Register New Asset</Link>
      <div className="assets-container">
        {assets.map((asset) => (
          <div key={asset.id} className="asset-card">
            <h3>{asset.name}</h3>
            <img src={asset.picture} alt={asset.name} />
            <p>Supplier: {asset.supplier}</p>
            <Link to={`/asset/${asset.id}`}>Edit Asset</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
