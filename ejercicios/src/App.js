import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent/ClassComponent';
import FunctionComponent from './components/FunctionalComponent/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClassComponent />
        <FunctionComponent />
      </header>
    </div>
  );
}

export default App;
