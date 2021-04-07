// This is where we define action objects which must have a type
import * as ActionTypes from './ActionTypes';

export const addToCart = (sku) => ({
    type: ActionTypes.ADD_TO_CART,
    payload: {
        sku: sku
        // quantity: quantity
    }
})