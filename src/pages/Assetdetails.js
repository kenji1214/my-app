// src/pages/AssetDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API } from 'aws-amplify';

function AssetDetails() {
  const { id } = useParams();
  const [asset, setAsset] = useState({});

  useEffect(() => {
    const fetchAsset = async () => {
      const result = await API.get('assetsApi', `/assets/${id}`);
      setAsset(result);
    };
    fetchAsset();
  }, [id]);

  const handleSave = async () => {
    await API.put('assetsApi', `/assets/${id}`, { body: asset });
    alert('Asset updated successfully!');
  };

  return (
    <div>
      <h2>Edit Asset</h2>
      <input
        type="text"
        value={asset.name || ''}
        onChange={(e) => setAsset({ ...asset, name: e.target.value })}
        placeholder="Name"
      />
      <input
        type="text"
        value={asset.picture || ''}
        onChange={(e) => setAsset({ ...asset, picture: e.target.value })}
        placeholder="Picture URL"
      />
      <input
        type="text"
        value={asset.supplier || ''}
        onChange={(e) => setAsset({ ...asset, supplier: e.target.value })}
        placeholder="Supplier"
      />
      <input
        type="date"
        value={asset.purchaseDate || ''}
        onChange={(e) => setAsset({ ...asset, purchaseDate: e.target.value })}
      />
      <input
        type="number"
        value={asset.amount || ''}
        onChange={(e) => setAsset({ ...asset, amount: e.target.value })}
        placeholder="Amount"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default AssetDetails;
