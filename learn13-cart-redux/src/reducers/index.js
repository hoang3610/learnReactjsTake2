import {combineReducers} from 'redux';
import products from './../reducers/products';
import carts from './../reducers/carts';
import message from './../reducers/message';

const appReducers = combineReducers({
    products,
    carts,
    message
})

export default appReducers;