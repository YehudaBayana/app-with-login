import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import SignUp from '../../pages/login/SignUp';

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
}));

export default function ButtonAppBar({ toggleFunc, showSignUp }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Container maxWidth='lg'>
          <Toolbar>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
            >
              <MenuIcon onClick={toggleFunc} />
            </IconButton>
            <Typography variant='h6' className={classes.title}>
              News
            </Typography>
            <Button color='inherit' onClick={showSignUp}>
              Login
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
