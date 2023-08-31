import { createRoot } from 'react-dom';
import React from 'react';
import App from './App';
import './index.css';
import ThemeContextProvider from './hooks/useTheme';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
