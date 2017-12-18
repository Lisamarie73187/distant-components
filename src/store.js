import { createStore } from 'redux';

const reducer = state => state;

const initialState = {
    loggedInAs: '',
    isCreditCardHolder: false,
};

const store = createStore(reducer, initialState);

export default store;