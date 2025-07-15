import { useState, createContext } from "react";

export const CartContext = new createContext();


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItems = (product) => {
        setCart((prev) => {
            const existing = prev.find(item => item.id === product.id);
            if(existing){
                return prev.map((item) => item.id === product.id ? {...item, quantity:item.quantity+1} : item);
            }
            else{
                return [...prev, {...product, quantity:1}];
            }
        })
    }
    const removeItem = (id) => {
        setCart((prev) => {
            const existing = prev.find(item => item.id === id);
            if(existing && existing.quantity > 1){
                return prev.map((item) => item.id === id ? {...item, quantity: item.quantity-1} : item);
            }
            else{
                return prev.filter(item => item.id != id)
            }
        });
    }

    return (
        <CartContext.Provider value={{cart, addItems, removeItem}}>
            {children}
        </CartContext.Provider>
    );
}