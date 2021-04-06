import { createStore } from 'redux';
import { initialState, updateStore } from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
        updateStore,
        initialState
    );

    return store;
};