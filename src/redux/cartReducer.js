import * as ActionTypes from './ActionTypes';

export const cartReducer = ( state, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:   // On product page
            let addedItem = state.accessories.find( item => item.sku === action.payload.sku );    // get a ref to the item object
            let existingItem = state.addedItems.find( id => id === action.payload.sku );    // Check if the item exists in the cart already

            if (addedItem.availability === "In Stock") {
                if (existingItem) {
                    addedItem.quantity += 1;
                    return { 
                        ...state, 
                        numItems: state.numItems + 1,
                        totalPrice: state.totalPrice + addedItem.price
                    }
                }
                else {
                    addedItem.quantity = 1;
                    return { 
                        ...state, 
                        addedItems: [...state.addedItems, addedItem.sku], 
                        numItems: state.numItems + 1,
                        totalPrice: state.totalPrice + addedItem.price
                    }
                }
            } else {
                return state;
            }
        
        case ActionTypes.SUBTRACT_FROM_CART:
            let subtractItem = state.accessories.find( item => item.sku === action.payload.sku );

            if (subtractItem.quantity === 1) {  // remove from cart
                subtractItem.quantity -= 1;
                return {
                    ...state,
                    addedItems: state.addedItems.filter( id => id !== action.payload.sku),
                    numItems: state.numItems - 1,
                    totalPrice: state.totalPrice - subtractItem.price
                }
            } else if (subtractItem.quantity > 1) {
                subtractItem.quantity -= 1;
                return {
                    ...state,
                    numItems: state.numItems - 1,
                    totalPrice: state.totalPrice - subtractItem.price
                }
            } else {
                return state;
            }
        
        case ActionTypes.REMOVE_ITEM:   // Delete the item from the cart all together
            let itemToRemove = state.accessories.find( item => item.sku === action.payload.sku );
            return {
                ...state,
                addedItems: state.addedItems.filter( id => id !== action.payload.sku),
                numItems: state.numItems - itemToRemove.quantity,
                totalPrice: state.totalPrice - (itemToRemove.price * itemToRemove.quantity)
            }
        default:
            return state;
    }
}