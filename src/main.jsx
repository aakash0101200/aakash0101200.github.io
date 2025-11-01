import React from 'react'
import { createRoot } from 'react-dom/client'
// This is your CSS file for Tailwind and global styles
import './index.css'
// This is your main App component
import App from './App.jsx'

// This is the file you provided
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
