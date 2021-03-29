import './App.css';
import SayHello from './components/SayHello';

const App = () => {
  return (
    <div className='App'>
      <h1>my first react</h1>
      <SayHello name='moshe' />
    </div>
  );
};

export default App;
