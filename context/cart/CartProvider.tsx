import { ReactNode, useReducer } from 'react';
import { ICartProduct } from '../../interfaces';
import { CartContext, cartReducer } from './';


export interface CartState {
    cart: ICartProduct[];
}

const Cart_INITIAL_STATE: CartState = {
    cart: []
}

export const CartProvider = ({ children }: {children: ReactNode}) => {

    const [state, dispatch] = useReducer(cartReducer , Cart_INITIAL_STATE);

    return (
        <CartContext.Provider value={{
            ...state
        }}>
            { children }
        </CartContext.Provider>
    )
}