import { createContext, useReducer } from "react";
import CartReducer from "../Reducer/CartReducer.jsx";

export const CartContext = new createContext();

const initialState = {
  cart: []
};

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, initialState)

    const addItems = (product) => {
        dispatch({type:'ADD_ITEM', payload: product})
    }
    const removeItem = (id) => {
        dispatch({type:'REMOVE_ITEM', payload: id})
    }

    return (
        <CartContext.Provider value={{cart:state.cart, addItems, removeItem}}>
            {children}
        </CartContext.Provider>
    );
}