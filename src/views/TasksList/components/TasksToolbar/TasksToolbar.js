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

  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')


  const classes = useStyles();

  const submit =(e)=>{
   //just used for test to prevent that form be submited.
    e.preventDefault();
    console.log(`Description: ${description}, Category: ${category}`)

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
          className={classes.searchInput}
          placeholder="Description of tasks"
          label="Description:"
          fullWidth
          value={description}
          onChange={e => setDescription(e.target.value)}
          
        />
        </Grid>
        <Grid item md={4}>
      <FormControl fullWidth>
        <InputLabel>Category: </InputLabel>
        <Select
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <MenuItem value="">Select...</MenuItem>
          <MenuItem value={"WORK"}>Work</MenuItem>
          <MenuItem value={"STUDY"}>Study</MenuItem>
          <MenuItem value={"OTHER"}>Other</MenuItem>
          
        </Select>
      </FormControl>
         </Grid>
        
         <Grid item md={4}>
         <Button onClick={submit} variant="contained"
         color="secondary">
           Save
           </Button>
         </Grid>
     </Grid>
      </div>
    </div>
  );
};

TasksToolbar.propTypes = {
  className: PropTypes.string
};

export default TasksToolbar;
