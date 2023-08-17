import './App.scss';
import { SomeTest } from 'components/SomeTest';
import Component from 'components/Component';
import logo from './logo.svg';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Component />
        <img src={logo} className='App-logo' alt='logo' />
        <p>God is less</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
      <SomeTest />
    </div>
  );
}

export default App;
