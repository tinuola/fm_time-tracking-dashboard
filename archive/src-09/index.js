import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/reset.css'
import './styles/a11y.css'
import './styles/themes.css'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
