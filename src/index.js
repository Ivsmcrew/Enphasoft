import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TokenProvider from './components/Provider/TokenProvider';
import AuthProvider from './components/Provider/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TokenProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </TokenProvider>
);

