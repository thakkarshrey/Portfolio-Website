import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import './assets/styles/reset-css.css'
import './assets/styles/variables.css'
import './assets/styles/utility-classes.css'
import './main.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

async function serviceWorker() {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/serviceWorker.js', {
        scope: '/'
      })
      if (registration.installing) {
        console.log('Service worker is installing')
      } else if (registration.waiting) {
        console.log('Service worker is installed')
      } else if (registration.active) {
        console.log('Service worker is active')
      }
    } catch (error) {
      console.log(`Registration failed with ${error}`)
    }
  }
}

serviceWorker()
