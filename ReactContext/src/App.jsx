// App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Product from './components/Products.jsx';
import Cart from './components/Cart.jsx';

function App() {
  return (
    <Router>
      <div style={{ textAlign: 'center' }}>
        <h1>React Context Tutorial</h1>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '10px', fontSize:'18px' }}>Products</Link>
          <Link to="/cart" style={{ fontSize:'18px' }}>Cart</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
