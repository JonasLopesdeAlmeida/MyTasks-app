import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const TasksTable = props => {
  const { className, tasks, ...rest } = props;

  const classes = useStyles();



  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
           <Table>
             <TableHead>
               <TableRow>
                 <TableCell>Id</TableCell>
                 <TableCell>Description</TableCell>
                 <TableCell>Category</TableCell>
                 <TableCell>State</TableCell>
               </TableRow>
             </TableHead>

             <TableBody>
               
               </TableBody>
           </Table>

          </div>
        </PerfectScrollbar>
      </CardContent>
     
    </Card>
  );
};

TasksTable.propTypes = {
  className: PropTypes.string,
  tasks: PropTypes.array.isRequired
};

export default TasksTable;
