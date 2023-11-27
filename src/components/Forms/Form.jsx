import Logo from '../../imgs/logo.png';


import React, { useState } from 'react';
import './Form.css';

const SalesForm = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    clientAddress: '',
    description: '',
    network: '',
    compute: '',
    storage: '',
    license: '',
    database: '',
    backup: '',
    managedServices: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  
  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result); // Handle the response as needed
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  return (
    <div className="sales-box">
      <div className="logo">
        <img src={Logo} alt="Logo" width="300" />
      </div>
      <h2 className="title">Sales Form</h2>
      <div className="input-group">
        <label>Client Name:</label>
        <input
          type="text"
          name="clientName"
          value={formData.clientName}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Client Address:</label>
        <input
          type="text"
          name="clientAddress"
          value={formData.clientAddress}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Network:</label>
        <select
          name="network"
          value={formData.network}
          onChange={handleChange}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="input-group">
        <label>Compute:</label>
        <select
          name="compute"
          value={formData.compute}
          onChange={handleChange}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="input-group">
        <label>Storage:</label>
        <select
          name="storage"
          value={formData.storage}
          onChange={handleChange}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="input-group">
        <label>License:</label>
        <select
          name="license"
          value={formData.license}
          onChange={handleChange}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="input-group">
        <label>Database:</label>
        <select
          name="database"
          value={formData.database}
          onChange={handleChange}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="input-group">
        <label>Backup:</label>
        <select
          name="backup"
          value={formData.backup}
          onChange={handleChange}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="input-group">
        <label>Managed Services:</label>
        <select
          name="managedServices"
          value={formData.managedServices}
          onChange={handleChange}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="button-group">
        <button className='createButton'>Create</button>
        <button className='cancelButton'>Cancel</button>
        <button className='uploadDocsButton'>Upload Documents</button>
      </div>
    </div>
  );
}

export default SalesForm;
