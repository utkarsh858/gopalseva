import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme } from '@material-ui/core/styles';

import imgUrl from './img/logo_nav.jpeg';




export default function ButtonAppBar() {
  
    const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
      color : {
        background : '#ffffff',
      },
      positionSticky : {
        bottom : 100% - 80 ,
      }
    }));

    const whitebg = {

        background : '#ffffff',
    };

    const theme = createMuiTheme({
      palette: {
        primary: {
          light: '#fffff',
          main: '#3f50b5',
          dark: '#002884',
          contrastText: '#000',
        },
        secondary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#ba000d',
          contrastText: '#000',
        },
      },
    });
  const classes = useStyles();

  return (
    <div className="classes.root classes.color classes.positionSticky" style = { { background : '#ffffff'}}>
      <AppBar position="sticky" >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}