// src/pages/NewAsset.js
import React, { useState } from 'react';
import { API } from 'aws-amplify';

function NewAsset() {
  const [asset, setAsset] = useState({
    name: '',
    picture: '',
    supplier: '',
    purchaseDate: '',
    amount: 0,
  });

  const handleSave = async () => {
    await API.post('assetsApi', '/assets', { body: asset });
    alert('Asset registered successfully!');
  };

  return (
    <div>
      <h2>Register New Asset</h2>
      <input
        type="text"
        value={asset.name}
        onChange={(e) => setAsset({ ...asset, name: e.target.value })}
        placeholder="Name"
      />
      <input
        type="text"
        value={asset.picture}
        onChange={(e) => setAsset({ ...asset, picture: e.target.value })}
        placeholder="Picture URL"
      />
      <input
        type="text"
        value={asset.supplier}
        onChange={(e) => setAsset({ ...asset, supplier: e.target.value })}
        placeholder="Supplier"
      />
      <input
        type="date"
        value={asset.purchaseDate}
        onChange={(e) => setAsset({ ...asset, purchaseDate: e.target.value })}
      />
      <input
        type="number"
        value={asset.amount}
        onChange={(e) => setAsset({ ...asset, amount: e.target.value })}
        placeholder="Amount"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default NewAsset;
