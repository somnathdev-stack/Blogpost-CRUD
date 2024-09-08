
import React from 'react';
import { Link } from 'react-router-dom';

function Pagenotfound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default Pagenotfound;
