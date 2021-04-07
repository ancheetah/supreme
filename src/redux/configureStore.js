import { createStore } from 'redux';

import { ACCESSORIES } from '../shared/accessories';
import { APPAREL } from '../shared/apparel';
import { cartReducer } from './cartReducer';

const initialState = {
    accessories: ACCESSORIES,
    apparel: APPAREL,
    addedItems: [],
    totalPrice: 0
};

export const ConfigureStore = () => {
    const store = createStore(
        cartReducer,
        initialState
    );
    return store;
};