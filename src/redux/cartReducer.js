import * as ActionTypes from './ActionTypes';

export const cartReducer = ( state, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:   // On product page
            let addedItem = state.accessories.find( item => item.sku === action.payload.sku );    // get the item object
            let existingItem = state.addedItems.find( item => item.sku === action.payload.sku );    // Check if the item exists in the cart already

            if (addedItem.availability === "In Stock") {
                if (existingItem) {
                    addedItem.quantity += 1;
                    let newPrice = state.totalPrice + addedItem.price;
                    return { 
                        ...state, 
                        totalPrice: newPrice
                    }
                }
                else {
                    addedItem.quantity = 1;
                    let newPrice = state.totalPrice + addedItem.price;
                    let newItems = [...state.addedItems, addedItem];
                    return { 
                        ...state, 
                        addedItems: newItems, 
                        totalPrice: newPrice
                    }
                }
            } else {
                return state;
            }
        
        case ActionTypes.SUBTRACT_FROM_CART:
            let subtractItem = state.accessories.find( item => item.sku === action.payload.sku );
            console.log(subtractItem.quantity);
            if (subtractItem.quantity === 1) {
                subtractItem.quantity -= 1;
                return {
                    ...state,
                    addedItems: state.addedItems.filter( item => item.sku !== action.payload.sku),
                    totalPrice: state.totalPrice - subtractItem.price
                }
            } else if (subtractItem.quantity > 1) {
                subtractItem.quantity -= 1;
                return {
                    ...state,
                    totalPrice: state.totalPrice - subtractItem.price
                }
            } else {
                return state;
            }
        
        case ActionTypes.REMOVE_ITEM:   // Delete the item from the cart all together
            let itemToRemove = state.addedItems.find( item => item.sku === action.payload.sku );
            return {
                ...state,
                addedItems: state.addedItems.filter( item => item.sku !== action.payload.sku),
                totalPrice: state.totalPrice - (itemToRemove.price * itemToRemove.quantity)
            }
        default:
            return state;
    }
}