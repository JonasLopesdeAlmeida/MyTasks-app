import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { list, save, deleteTask, updatedTask} from '../../store/tasksReducer'


import { TasksToolbar, TasksTable } from './components';
import {
Dialog,
DialogActions,
DialogTitle,
DialogContent,
Button
} from '@material-ui/core';

import axios from 'axios'


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const URL_API = 'https://minhastarefas-api.herokuapp.com/tarefas'

const TaskList = (props) => {
  const classes = useStyles();

  // const [tasks, setTasks] = useState([]);
  const [opendialog, setOpenDialog] = useState(false);
  const [mesage, setMesage] = useState('');

  //method that going to listen and submit task to the server
//  const save = (task) =>{

//   axios.post(URL_API , task, {
//     headers : {'x-tenant-id' : localStorage.getItem('email_usuario_logado')}
// }).then(response => {
//     const newTasks = response.data
//     setTasks([...tasks, newTasks]) 
//     setMesage('This task was successfully add!')
//     setOpenDialog(true)
// }).catch(erro =>{
//   setMesage('Something get wrong!')
//   setOpenDialog(true)
// })
//  }

//  const deleteTask = (id) =>{
  
// axios.delete(`${URL_API}/${id}`, {
//   headers : {'x-tenant-id' : localStorage.getItem('email_usuario_logado')}
// } ).then(response => {
//     const lista = tasks.filter(task => task.id !== id)
//     setTasks(lista)
//     setMesage('This task was successfully deleted!')
//     setOpenDialog(true)
//   }).catch(error => {
//     setMesage('Something get wrong!')
//   setOpenDialog(true)
//   })
//  }

//  const ListTasks = () => {

//    axios.get(URL_API, {
//     headers : {'x-tenant-id' : localStorage.getItem('email_usuario_logado')}
//    }).then(response =>{
//     const listOftasks = response.data
//     console.log(listOftasks)
//     setTasks(listOftasks)
//    }).catch(error =>{
//     setMesage('Something get wrong!')
//     setOpenDialog(true)
//    })

//  }

// const changeState = (id) =>{
//   axios.patch(`${URL_API}/${id}`, null, {
//     headers : {'x-tenant-id' : localStorage.getItem('email_usuario_logado')}   
//   }).then(response =>{
//     const list = [...tasks]
//     list.forEach(task =>{
//       if(task.id == id)
//       task.done = true
//     })
//     setTasks(list)
//     setMesage('This task was successfully updated')
//     setOpenDialog(true)
//   }).catch(error =>{
//     setMesage('Something get wrong!')
//   setOpenDialog(true)
//   })
// }


  useEffect(()=>{
    props.list()
  },[])
       
 

  return (
    <div className={classes.root}>
      <TasksToolbar save={props.save}/>
      <div className={classes.content}>
        <TasksTable updatedTask={props.updatedTask} deleteTask={props.deleteTask} tasks={props.tasks} />
      </div>
      <Dialog open={opendialog} onClose={e => setOpenDialog(false)}> 
      <DialogTitle color="error">Attention</DialogTitle>
      <DialogContent>
        {props.mesage}
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={e => setOpenDialog(false)}>Close</Button>
      </DialogActions>
      </Dialog>
    </div>
   
  );
};

 const mapStateToProps = state => ({
 
    tasks: state.tasks.tasks

 })

 const mapDispatchToProps = dispatch => 
 bindActionCreators({list, save, deleteTask, updatedTask}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps )(TaskList);
