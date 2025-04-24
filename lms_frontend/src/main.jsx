import './index.css'

import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Toaster />
  </BrowserRouter>,
)

// BrowserRouter is a component that enables routing in a React application. It uses the HTML5 history API to keep your UI in sync with the URL. It is part of the React Router library, which is a popular routing solution for React applications. By wrapping your application with BrowserRouter, you can use various routing components like Route, Link, and Switch to manage navigation and rendering of different components based on the current URL.
