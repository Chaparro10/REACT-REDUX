import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContadorProvider } from './context/contadorContext.jsx'

createRoot(document.getElementById('root')).render(
 <StrictMode>
   <ContadorProvider>

  
      <App />
      </ContadorProvider>
 
   </StrictMode>,
)
