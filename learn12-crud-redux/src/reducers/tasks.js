import * as types from './../constansts/ActionTypes'

var findIndex = (tasks, id) => {
    var result = -1;
    tasks.forEach((task, index) => {
        if(task.id === id){
            result = index;
        }
    });
    return result;
}

var s4 = () => {
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
}
var generateId = () => {
    return s4() + '-' +s4() + s4() + '-' + s4()
}

var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.SAVE_TASK:
            var task = {
                id : action.task.id,
                name: action.task.name,
                status: (action.task.status === 'true' || action.task.status === true) ? true : false
            }
            if(!task.id){
                task.id = generateId();
                state.push(task);
            }else {
                var index = findIndex(state, task.id)
                state[index] = task;
            }
            // sau do luu len localStorage
            localStorage.setItem('tasks', JSON.stringify(state));
            // [...] su dung dau ... de tranh truong hop tham chieu vung nho
            return [...state]
        case types.UPDATE_STATUS_TASK:
            var id = action.id;
            var index = findIndex(state, id)
            // ... la copy ra 1 cai moi
            state[index] = {
                ...state[index],
                status : !state[index].status
            }
            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state]
        case types.DELETE_TASK:
            var id = action.id;
            var index = findIndex(state, id)
            state.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state]
        default:
            return state;
    }
}

export default myReducer;