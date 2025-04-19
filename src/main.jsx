import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './Context/Authprovider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* Wrap app within the AuthContext >> bcoz app take the data anywhere */}

    <AuthProvider>
      <App />
    </AuthProvider>


  </StrictMode>,
)
