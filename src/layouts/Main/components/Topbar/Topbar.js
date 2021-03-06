import React, { useState } from 'react';
import { Link as RouterLink , withRouter} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import DoneAllIcon from '@material-ui/icons/DoneAll';

import { compose } from 'redux'
import { connect } from 'react-redux'

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  const [notifications] = useState([]);

  const logout =()=>{
    localStorage.removeItem('email_usuario_logado')
      props.history.push('/login')
  }

  const task =()=>{
    // localStorage.getItem('email_usuario_logado')
      props.history.push('/tasks')
  }

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>

      {/* <div className={classes.flexGrow} > */}
        {/* <RouterLink to="/"> */}
      
          <IconButton
          className={classes.signOutButton}
          color="inherit"
          >
            <DoneAllIcon />
            MyTasks
          </IconButton>
{/*       
        </RouterLink> */}
       
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton 
           onClick={task}
          color="inherit">
            <Badge
              badgeContent={props.notifications}
              color="error"
              // variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            onClick={logout}
            className={classes.signOutButton}
            color="inherit"
          >
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

const mapStateToProps = state => ({
 
  notifications: state.tasks.quantity
})


export default compose(
  
  connect(mapStateToProps),
  
  withRouter)(Topbar);
