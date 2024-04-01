import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './QrCode.css'
import {QrC}  from './QrCode.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QrC></QrC>
  </React.StrictMode>,
)
