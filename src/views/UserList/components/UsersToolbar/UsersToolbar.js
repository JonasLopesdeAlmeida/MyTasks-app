import React from 'react';
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

const UsersToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

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
          
        />
        </Grid>
        <Grid item md={4}>
      <FormControl fullWidth>
        <InputLabel>Category: </InputLabel>
        <Select>
          <MenuItem value="">Select...</MenuItem>
          <MenuItem value={"WORK"}>Work</MenuItem>
          <MenuItem value={"STUDY"}>Study</MenuItem>
          <MenuItem value={"OTHER"}>Other</MenuItem>
        </Select>
      </FormControl>
         </Grid>
        
         <Grid item md={4}>
         <Button variant="contained"
         color="secondary">
           Save
           </Button>
         </Grid>
     </Grid>
      </div>
    </div>
  );
};

UsersToolbar.propTypes = {
  className: PropTypes.string
};

export default UsersToolbar;
