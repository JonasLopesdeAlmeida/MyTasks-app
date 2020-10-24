import axios from 'axios'

const http = axios.create({
    baseURL : 'https://minhastarefas-api.herokuapp.com'
})

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

export function list(){

    return dispatch =>{
        http.get('/tarefas', {
            headers : {'x-tenant-id' : localStorage.getItem('email_usuario_logado')}
           }).then(response =>{
               dispatch({
                 type: ACTIONS.LIST,
                 tasks: response.data
               })
         
           })

    }

    

}