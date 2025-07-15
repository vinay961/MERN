import { useState, createContext } from "react";

export const CartContext = new createContext();


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItems = (product) => {
        setCart((prev) => [...prev, product]);
    }
    const removeItem = (id) => {
        setCart((prev) => prev.filter(item => item.id !== id));
        console.log("Item added sucessfully!")
    }

    return (
        <CartContext.Provider value={{cart, addItems, removeItem}}>
            {children}
        </CartContext.Provider>
    );
}