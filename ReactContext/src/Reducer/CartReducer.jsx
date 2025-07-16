
function CartReducer(state, action){
    switch(action.type){
        case 'ADD_ITEM': {
            const itemExists = state.cart.find(item => item.id === action.payload.id);
            console.log(itemExists)
            if(itemExists){
                return{
                    ...state,
                    cart: state.cart.map((item) => item.id == action.payload.id ? {...item, quantity:item.quantity+1} : item)
                };
            }
            else{
                return{
                    ...state,
                    cart:[...state.cart, {...action.payload, quantity:1}]
                };
            }
        }

        case 'REMOVE_ITEM': {
            const target = state.cart.find(item => item.id === action.payload);
            console.log(target)
            if(target.quantity > 1){
                return {
                    ...state,
                    cart: state.cart.map(item => item.id == action.payload ? {...item, quantity: item.quantity-1} : item)
                };
            }
            else{
                return {
                    ...state,
                    cart: state.cart.filter((item) => item.id !== action.payload)
                }
            }
        }

        default:
            return state

    }
}

export default CartReducer;