// This is where we define action objects which must have a type
import * as ActionTypes from './ActionTypes';

export const sortByPrice = (arr, direction) => ({
    type: ActionTypes.SORT_BY_PRICE,
    payload: {
        arr: arr,
        direction: direction
    }
})

export const sortByRating = (arr, direction) => ({
    type: ActionTypes.SORT_BY_RATING,
    payload: {
        arr: arr,
        direction: direction
    }
})