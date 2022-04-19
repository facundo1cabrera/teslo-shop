
import { CartState } from './';
import { ICartProduct } from '../../interfaces';

type CardActionType = 
    | { type: '[Cart] - LoadCart from cookies | storage', payload: ICartProduct[]}
    | { type: '[Cart] - Add Product', payload: ICartProduct }

export const cartReducer = ( state: CartState, action: CardActionType ): CartState => {

    switch (action.type) {
        case '[Cart] - LoadCart from cookies | storage':
            return {
                ...state,
            }
            
    
        default:
            return state;
    }
}