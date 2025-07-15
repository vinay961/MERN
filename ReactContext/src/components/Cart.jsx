import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function Cart() {
    const {cart, removeItem} = useContext(CartContext);
    return (
        <>
           {
            cart.length !== 0 ? (
                cart.map((p) => (
                    <div key={p.id} style={{display:'flex', alignItems:'center', gap:'20px' , margin:'10px'}}>
                        <span style={{fontSize:'18px'}}>{p.name}</span>
                        <button style={{padding:'5px 10px', width:'fit-content'}} onClick={()=>removeItem(p.id)}>Remove Item</button>
                    </div>
                ))
            ) : (
                <span>Cart is Empty!!</span>
            )
          }
        </>
    );
}

export default Cart;