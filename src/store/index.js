const { combineReducers } = require("redux");

//this is the reduce main file
// import {combineReducers} from 'redux'
import {tasksReducer} from './tasksReducer'

const mainReducer = combineReducers({
 //just giving a name to make reference in the store
tasks: tasksReducer
})
export default mainReducer;