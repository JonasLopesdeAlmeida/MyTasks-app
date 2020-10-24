
const ACTIONS = {

    LIST: 'TASKS_LIST',
    ADD: 'TASKS_ADD',
    REMOVE: 'TASKS_REMOVE'

}

const INITIAL_STATE = {
    tasks: []
}

export const tasksReducer = (state = INITIAL_STATE, action) =>{
     
    switch(action.type){
        case ACTIONS.LIST:
            return {...state, tasks: action.tasks }
        default:
            return state;
    }

}