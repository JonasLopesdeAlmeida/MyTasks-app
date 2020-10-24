import React,{useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button,
TextField,
Grid,
Select,
MenuItem,
FormControl,
InputLabel

} from '@material-ui/core';

import { Category } from '@material-ui/icons';



const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const TasksToolbar = props => {
  const { className, ...rest } = props;

  const [descricao, setDescricao] = useState('')
  const [categoria, setCategoria] = useState('')


  const classes = useStyles();

  const submit =(e)=>{
   //just used for test to prevent that form be submited.
    e.preventDefault();
    const task = {

      descricao: descricao,
      categoria: categoria
    }
     props.save(task)
     //cleaning field after submit informations
     setDescricao('')
     setCategoria('')
  }


  return (
    
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.spacer} />
        
      </div>
      <div className={classes.row}>
    <Grid container>
      <Grid item md={4}>


        <TextField
           className={classes.textField}
          placeholder="Description of tasks"
          label="Description:"
          fullWidth
          value={descricao}
          variant="outlined"
          onChange={e => setDescricao(e.target.value)}/>
          
        </Grid>
        
        <Grid item md={2} >
      {/* <FormControl fullWidth
  
      className={classes.textField}
      variant="outlined"> */}
        {/* <InputLabel >Category:</InputLabel> */}
        <TextField
          fullWidth
          variant="outlined"
          label="Category:"
          select
          value={categoria}
          onChange={e => setCategoria(e.target.value)}>
          <MenuItem value="">Select...</MenuItem>
          <MenuItem value={"TRABALHO"}>Work</MenuItem>
          <MenuItem value={"ESTUDOS"}>Study</MenuItem>
          <MenuItem value={"OUTROS"}>Other</MenuItem>
        </TextField>
      {/* </FormControl> */}
         </Grid>
         </Grid>
         
         <Button onClick={submit} variant="contained"
         color="secondary">
           Save
           </Button>
           
         
      </div>
    </div>
  );
};

TasksToolbar.propTypes = {
  className: PropTypes.string
};

export default TasksToolbar;
