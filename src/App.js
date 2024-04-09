import logo from './logo.svg';
import './App.css';
import Introduction from "./components/introduction"
import Profile from './components/profile'

function AppExample() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const base = false;
function App() {
  if (base) {
    return (
      <AppExample />
    )
  } else {
    return (
      <>
        <Profile />
        <Introduction name="Ahla" kelahiran="2005-07-1" />
        <Introduction name="Hani" kelahiran="2010-07-2" />
        <Introduction name="Tata" kelahiran="2007-07-13" />
        <Introduction name="Fairt" kelahiran="2008-07-16" />

      </>
    )
  }
}

export default App;
