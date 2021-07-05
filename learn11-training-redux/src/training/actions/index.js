//import * la tat ca, as la chuyen tat ca thanh types
import * as types from './../constants/ActionTypes'
export const status = () => {
    return {
        type : types.TOGGLE_STATUS
    }
}

export const sort = (sort) => {
    return {
        type : types.SORT,
        sort 
    }
}