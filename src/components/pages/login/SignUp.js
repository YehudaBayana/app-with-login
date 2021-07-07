import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import HomeIcon from '../../features/icons/HomeIcon';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class User {
  constructor(fName, lName, email, password) {
    this.fName = fName;
    this.lName = lName;
    this.email = email;
    this.password = password;
  }
  getUserDetails() {
    return `first name: ${this.fName}, last name: ${this.lName}, email: ${this.email}, password: ${this.password}`;
  }
}

export default function SignUp({ showSignUp }) {
  const classes = useStyles();
  const [values, setValues] = useState([
    {
      fName: '',
      lName: '',
      email: '',
      password: '',
    },
  ]);

  // let newUser = new User(values.fName, values.lName, values.email, values.password);
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form className={classes.form} validate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='fname'
                name='firstName'
                variant='outlined'
                required
                fullWidth
                id='firstName'
                label='First Name'
                autoFocus
                onChange={(e) =>
                  setValues((oldValues) => {
                    return { ...oldValues, fName: e.target.value };
                  })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                autoComplete='lname'
                onChange={(e) =>
                  setValues((oldValues) => {
                    return { ...oldValues, lName: e.target.value };
                  })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                onChange={(e) =>
                  setValues((oldValues) => {
                    return { ...oldValues, email: e.target.value };
                  })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                onChange={(e) =>
                  setValues((oldValues) => {
                    return { ...oldValues, password: e.target.value };
                  })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value='allowExtraEmails' color='primary' />}
                label='I want to receive inspiration, marketing promotions and updates via email.'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={(e) => {
              for (let i = 0; i < values.length; i++) {
                if (values[i]) {
                  e.preventDefault();
                }
              }
            }}
          >
            Sign Up
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <RouterLink to='/signin'>
                Already have an account? Sign in
              </RouterLink>
            </Grid>
          </Grid>
        </form>
        <RouterLink to='/' onClick={showSignUp}>
          <HomeIcon />
        </RouterLink>
      </div>
    </Container>
  );
}
