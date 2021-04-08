import { createStore } from 'redux';

import { ACCESSORIES } from '../shared/accessories';
import { APPAREL } from '../shared/apparel';
import { BRANDS } from '../shared/brands';
import { cartReducer } from './cartReducer';

const initialState = {
    accessories: ACCESSORIES,
    apparel: APPAREL,
    brands: BRANDS,
    addedItems: [], // array of SKUs
    numItems: 0,    // total number of items in cart
    totalPrice: 0
};

export const ConfigureStore = () => {
    const store = createStore(
        cartReducer,
        initialState
    );
    return store;
};