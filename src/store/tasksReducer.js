import axios from 'axios'

const http = axios.create({
    baseURL : 'https://minhastarefas-api.herokuapp.com'
})

const ACTIONS = {

    LIST: 'TASKS_LIST',
    ADD: 'TASKS_ADD',
    REMOVE: 'TASKS_REMOVE',
    UPDATE: 'TASKS_UPDATE'

}

const INITIAL_STATE = {
    tasks: [],
    opendialog: false,
    mesage: ''
}

export const tasksReducer = (state = INITIAL_STATE, action) =>{
     
    switch(action.type){
        case ACTIONS.LIST:
            return {...state, tasks: action.tasks }
        
        case ACTIONS.ADD:
            return {...state, tasks: [...state.tasks, action.task]
            , mesage: 'This task was successfully add!'
            , opendialog: true
            // //     setOpenDialog(true)
            
            }

        case ACTIONS.REMOVE:
            const id = action.id
            const tasks = state.tasks.filter(task => task.id !== id)
            return {...state, tasks: tasks}
        
        case ACTIONS.UPDATE:
            const list = [...state.tasks]
             list.forEach(task =>{
                if(task.id === action.id){
                task.done = true;
                }
              })
            return {...state, tasks: list}   

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


export function save(task){
   return dispatch =>{
    http.post('/tarefas', task,{
        headers : {'x-tenant-id' : localStorage.getItem('email_usuario_logado')}
       }).then(response =>{
           dispatch({
             type: ACTIONS.ADD,
             task: response.data
             
     
           })
     
       })

   }

}

export function deleteTask(id){
    return dispatch =>{

     http.delete(`/tarefas/${id}`,{
         headers : {'x-tenant-id' : localStorage.getItem('email_usuario_logado')}
        }).then(response =>{
          
            dispatch({
              type: ACTIONS.REMOVE,
              id: id
      
            })
      
        })


    }

}

export function updatedTask(id){
    return dispatch =>{

     http.patch(`/tarefas/${id}`, null, {
         headers : {'x-tenant-id' : localStorage.getItem('email_usuario_logado')}
        }).then(response =>{
          
            dispatch({
              type: ACTIONS.UPDATE,
              id: id
      
            })
      
        })


    }
}