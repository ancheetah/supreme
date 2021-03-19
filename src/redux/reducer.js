import { ACCESSORIES } from '../shared/accessories';
import { APPAREL } from '../shared/apparel';

export const initialState = {
    accessories: ACCESSORIES,
    apparel: APPAREL
};

export const Reducer = (state = initialState, action) => {
    return state;
}