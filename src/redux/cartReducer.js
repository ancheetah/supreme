import * as ActionTypes from './ActionTypes';

export const cartReducer = ( state, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            let addedItem = state.accessories.find( item => item.sku === action.payload.sku );    // get the item object
            let existingItem = state.addedItems.find( item => item.sku === action.payload.sku );    // Check if the item exists in the cart already

            if (existingItem) {
                addedItem.quantity += 1;
                return { ...state, totalPrice: state.totalPrice + addedItem.price }
            }
            else {
                addedItem.quantity = 1;
                let newTotal = state.totalPrice + addedItem.price;
                return { 
                    ...state, 
                    addedItems: [...state.addedItems, addedItem], 
                    totalPrice: newTotal 
                }
            }

        default:
            return state;
    }
}