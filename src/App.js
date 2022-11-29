import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Carusel from './components/Carusel/Carusel';

function App() {

  let styles = {
    color: "white",
    backgroundColor: "blue"
  }


  return (
    <div>
      <NavBar/>
      <Carusel/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> 
        <h1 style={styles}Mi nombre es></h1>
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

export default App;
