import React from 'react';

const TestApp = () => {
  return (
    <div style={{ 
      width: '100%', 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: '#f0f0f0'
    }}>
      <h1 style={{ color: '#333', fontSize: '2rem', marginBottom: '1rem' }}>
        Test Application
      </h1>
      <p style={{ color: '#666', fontSize: '1.2rem' }}>
        Si vous voyez ce message, l'application React fonctionne correctement.
      </p>
    </div>
  );
};

export default TestApp;
