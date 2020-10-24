const { combineReducers } = require("redux");

//this is the reduce main file
// import {combineReducers} from 'redux'
import {tasksReducer} from './tasksReducer'
import { mesageReducer} from './mesageReducer'

const mainReducer = combineReducers({
 //just giving a name to make reference in the store
tasks: tasksReducer,
mesages: mesageReducer

})
export default mainReducer;