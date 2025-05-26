import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import { UserProvider } from './providers/UserProvider';
import { ThemeProvider } from './providers/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

export default root;
