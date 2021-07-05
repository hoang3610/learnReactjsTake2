import { createStore} from 'redux';
import { status, sort } from './actions/index';
import myReducer from './reducers/index';

const store = createStore(myReducer);

console.log('Default ',store.getState())
var action = {
    type: 'TOGGLE_STATUS'
}
store.dispatch(status());
console.log('togger_status  ',store.getState())
store.dispatch(sort({
    by: 'name',
    value: -1
}));
console.log('togger_sort  ',store.getState())

