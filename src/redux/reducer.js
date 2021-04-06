import { ACCESSORIES } from '../shared/accessories';
import { APPAREL } from '../shared/apparel';
// import * as ActionTypes from './ActionTypes';

export const initialState = {
    accessories: ACCESSORIES,
    apparel: APPAREL
};

// We don't want to update the store in redux because it will update the
// product order everywhere in the app. Sort in component instead.
export const updateStore = (sortedArr = ACCESSORIES) => {
    return {...initialState, accessories: sortedArr};
}


// Update the state depending on the sort option
// export const updateStore = (state = ACCESSORIES, action) => {
//     switch (action.type) {
//         case ActionTypes.SORT_BY_PRICE:
//             let arrP = action.payload.arr;
//             let sortedArrP = action.payload.direction === "ascending" ?
//                 sortAsc(arrP, 'price') : 
//                 sortDesc(arrP, 'price');
//             return {...state, accessories: sortedArrP};
//         case ActionTypes.SORT_BY_RATING:
//             let arrR = action.payload.arr;
//             let sortedArrR = action.payload.direction === "ascending" ?
//                 sortAsc(arrR, 'rating') : 
//                 sortDesc(arrR, 'rating');
//             return {...state, accessories: sortedArrR};
//         default:
//             return state;
//     }
// }