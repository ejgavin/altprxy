// src/App.jsx
import React from 'react';

const App = () => {
  const params = new URLSearchParams(window.location.search);
  const url = params.get('destination') || 'https://example.com';

  return (
    <div
      className="w-screen h-screen flex items-center justify-center bg-black"
      style={{ overflow: 'hidden' }}
    >
      <iframe
        src={url}
        title="SimpleBrowser"
        style={{
          width: '100vw',
          height: '100vh',
          border: 'none',
          borderRadius: '0px',
        }}
      ></iframe>
    </div>
  );
};

export default App;

