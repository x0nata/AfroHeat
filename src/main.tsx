import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Add AfroHeat design fonts dynamically
const fonts = [
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Industry:wght@900&display=swap',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+Ethiopic:wght@400;700&display=swap'
]

fonts.forEach(fontUrl => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = fontUrl
  document.head.appendChild(link)
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)