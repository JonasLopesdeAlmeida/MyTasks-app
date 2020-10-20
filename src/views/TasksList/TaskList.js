import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { TasksToolbar, TasksTable } from './components';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const TaskList = () => {
  const classes = useStyles();

  const [tasks] = useState([]);

  return (
    <div className={classes.root}>
      <TasksToolbar />
      <div className={classes.content}>
        <TasksTable tasks={tasks} />
      </div>
    </div>
  );
};

export default TaskList;
