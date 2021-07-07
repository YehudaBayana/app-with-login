import './App.css';
import Drawer from './components/features/navigation/Drawer';
import HomePage from './components/pages/homePage/HomePage';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { useState, useEffect } from 'react';
import SignUp from './components/pages/login/SignUp';
import SignIn from './components/pages/login/SignIn';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import MoviesCard from './components/features/card/MovieCard';

function Copyright() {
  return (
    <Typography
      style={{ padding: '20px' }}
      variant='body2'
      color='textSecondary'
      align='center'
    >
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        yuda Bayana
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const App = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  function showSignUp() {
    setIsSignUp(isSignUp ? !isSignUp : true);
  }

  useEffect(() => {
    fetch('http://localhost:3001/foods')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            {isSignUp ? null : <Drawer showSignUp={showSignUp} />}
            {isSignUp ? (
              <SignUp showSignUp={showSignUp} />
            ) : isLogin ? (
              <MoviesCard />
            ) : (
              <HomePage showSignUp={showSignUp} />
            )}
            {isSignUp ? null : <Copyright />}
          </Route>
          <Route path='/signin'>
            <SignIn showSignUp={showSignUp} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
