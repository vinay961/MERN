import { createRoot } from 'react-dom/client'
import { CartProvider } from './Context/CartContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <App />
  </CartProvider>,
)
