import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PeopleProvider } from './Context/PeopleContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PeopleProvider>
    <App />
    </PeopleProvider>
  </StrictMode>,
)
