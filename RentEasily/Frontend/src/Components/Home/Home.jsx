import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', keyword, 'in', location);
  };

  return (
    <div className='home-container'>
      <h1 className='text-center text-white'>Let's Make Your Life Easy</h1>
      <p className="subtext">Find the best places and services near you!</p>

      <div className="search-box">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Enter keywords..." 
          value={keyword} 
          onChange={(e) => setKeyword(e.target.value)} 
        />
        <select 
          className="form-select" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Select Location</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Chicago">Chicago</option>
          <option value="Houston">Houston</option>
          <option value="Miami">Miami</option>
        </select>
        <button className="btn btn-primary" onClick={handleSearch}>Search</button>
      </div>

      <div className="button-container">
        <p className="info-text">Discover new places, connect with people, and enjoy the best services.</p>
        <div className="btn-group">
          <button className="btn-explore">Explore</button>
          <button className="btn-get-started">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
