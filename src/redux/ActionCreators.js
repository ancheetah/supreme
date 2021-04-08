// This is where we define action objects which must have a type
import * as ActionTypes from './ActionTypes';

export const addToCart = (sku) => ({
    type: ActionTypes.ADD_TO_CART,
    payload: {
        sku: sku
    }
})

export const subtractFromCart = (sku) => ({
    type: ActionTypes.SUBTRACT_FROM_CART,
    payload: {
        sku: sku
    }
})

export const removeItem = (sku) => ({
    type: ActionTypes.REMOVE_ITEM,
    payload: {
        sku: sku
    }
})