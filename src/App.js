//import logo from './logo.svg';
import './App.css';
import Nav from"./components/Navegacion/Navbar";
import Header from"./components/header/header"
import ItemListConatainer from "./components/itemListConatainer/itemListContainer"


function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <ItemListConatainer greeting="Tienda Luffy - Mangas"/>
     {/*  <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
