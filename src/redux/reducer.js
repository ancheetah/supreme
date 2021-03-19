import { ACCESSORIES } from '../shared/accessories';
import { APPAREL } from '../shared/apparel';
import * as ActionTypes from './ActionTypes';

export const initialState = {
    accessories: ACCESSORIES,
    apparel: APPAREL
};

function sortAsc(arr, field) {
    return arr.sort((a,b) => (a[field] > b[field]) ? 1 : -1);
}

function sortDesc(arr, field) {
    return arr.sort((a,b) => (a[field] < b[field]) ? 1 : -1);
}

// Update the state depending on the sort option
export const updateStore = (state = ACCESSORIES, action) => {
    switch (action.type) {
        case ActionTypes.SORT_BY_PRICE:
            let arrP = action.payload.arr;
            let sortedArrP = action.payload.direction === "ascending" ?
                sortAsc(arrP, 'price') : 
                sortDesc(arrP, 'price');
            return {...state, accessories: sortedArrP};
        case ActionTypes.SORT_BY_RATING:
            let arrR = action.payload.arr;
            let sortedArrR = action.payload.direction === "ascending" ?
                sortAsc(arrR, 'rating') : 
                sortDesc(arrR, 'rating');
            return {...state, accessories: sortedArrR};
        default:
            return state;
    }
}