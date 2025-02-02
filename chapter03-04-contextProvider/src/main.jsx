import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ThemedApp from './context/ThemedApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemedApp />
  </StrictMode>,
)
