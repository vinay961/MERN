import { useContext } from "react";
import { CartContext } from "../Context/CartContext.jsx";

import './Product.css'

const products = [
  { id: 1, name: "Apple", price: 120 },
  { id: 2, name: "Banana", price: 50 },
  { id: 3, name: "Mango", price: 30 },
  { id: 4, name: "Tomato", price: 40 },
  { id: 5, name: "PineApple", price: 150 }
];

function Product() {
  const { addItems } = useContext(CartContext);

  return (
    <div style={{ width: '80%', margin: '20px auto' }}>
      <h2 style={{ textAlign: 'center' }}>Products</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} style={{ textAlign: 'center' }}>
              <td style={tdStyle}>{p.id}</td>
              <td style={tdStyle}>{p.name}</td>
              <td style={tdStyle}>₹{p.price}</td>
              <td style={tdStyle}>
                <button
                onClick={() => addItems(p)}
                className="add-btn"
                >
                Add to Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  padding: '12px',
  borderBottom: '2px solid #ccc',
  fontSize: '16px'
};

const tdStyle = {
  padding: '10px',
  borderBottom: '1px solid #eee',
};

export default Product;
