import { combineReducers } from "redux";
import tasks from './../reducers/tasks'
import isDisplayForm from './../reducers/isDisplayForm'
import itemEditing from './../reducers/itemEditing'
import filterTable from './../reducers/filterTable'
import search from './../reducers/search'
import sort from './../reducers/sort'

const myReducer = combineReducers({
    tasks,
    isDisplayForm,
    itemEditing,
    filterTable,
    search,
    sort
})

export default myReducer;