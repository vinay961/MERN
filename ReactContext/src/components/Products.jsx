import { useContext } from "react";
import { CartContext } from "../Context/CartContext.jsx";
const products = [
    {id: 1, name:"Apple"},
    {id: 2, name:"Banana"},
    {id: 3, name:"Mango"},
    {id: 4, name:"Tomato"},
    {id: 5, name:"PineApple"}
];

function Product(){
    const {addItems} = useContext(CartContext)
    return(
        <>
            {products.map((p)=>(
                <div key={p.id} style={{display:'flex', alignItems:'center', gap:'20px' , margin:'10px'}}>
                    <span>{p.id}.</span>
                    <span style={{fontSize:'18px'}}>{p.name}</span>
                    <button style={{padding:'5px 10px', width:'fit-content'}} onClick={()=> addItems(p)}>Add to Cart</button>
                </div>
            ))}
        </>
    )
}

export default Product;