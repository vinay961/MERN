import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function Cart() {
  const { cart, removeItem } = useContext(CartContext);

  return (
    <>
      {cart.length !== 0 ? (
        <table style={{ width: '80%', margin: '20px auto', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Quantity</th>
              <th style={thStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((p) => (
              <tr key={p.id} style={{ textAlign: 'center' }}>
                <td style={tdStyle}>{p.name}</td>
                <td style={tdStyle}>{p.quantity}</td>
                <td style={tdStyle}>
                  <button
                    onClick={() => removeItem(p.id)}
                    style={{
                      padding: '6px 12px',
                      backgroundColor: 'red',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    Remove Item
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ textAlign: 'center', marginTop: '20px' }}>🛒 Cart is Empty!</p>
      )}
    </>
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

export default Cart;
