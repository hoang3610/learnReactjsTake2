import status from './../reducers/status'
import sort from './../reducers/sort'
import { combineReducers } from 'redux';

const myReducer = combineReducers({
    status: status,
    sort: sort
})
export default myReducer;