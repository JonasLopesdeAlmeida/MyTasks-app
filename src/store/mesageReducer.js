


const INITIAL_STATE = {
    openMesage: false,
    mesage: ''
}

const ACTIONS = {
   OPENMASAGE: 'MESAGENS_OPEN',
   CLOSEMESAGE: 'MESAGEN_CLOSE'

}

export const mesageReducer = (state = INITIAL_STATE, action) =>{
       switch(action.type){
        case ACTIONS.OPENMASAGE:
            return {...state, mesage: action.mesage, openMesage: true } 
         
        case ACTIONS.CLOSEMESAGE:
            return {...state, mesage: '', openMesage: false } 

        default:
            return state;
    }
}

export function openMesage(mesage){
    return dispatch =>{
               dispatch({
                 type: ACTIONS.OPENMASAGE,
                 mesage: mesage             
         
               })
         
        
    
       }
   
}

export function closeMesage(){
    return {
            
                 type: ACTIONS.CLOSEMESAGE
    
       }
    }