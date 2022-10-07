//import logo from './logo.svg';import './App.css';
import Nav from"./components/Navegacion/Navbar";
import Header from"./components/header/header"
import ItemListContainer from "./components/itemListConatainer/itemListContainer"
//import ItemCount from "./components/itemCount/ItemCount"
<<<<<<< HEAD
=======
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import "./Services/mockAPI" 
import {BrowserRouter, Routes, Route}from 'react-router-dom'

function App() {
  return (
    
      <BrowserRouter>
      <Nav/>
      <Header/>
     <Routes>
      <Route path="/" element={
         <ItemListContainer greeting="Tienda Luffy - Mangas"/>
      }/>
      <Route path="/Mangas/:itemid"element={
        <ItemDetailContainer/>
      }/>
    
     </Routes>
     </BrowserRouter>
    
  );

import Nav from "./components/Navegacion/Navbar";
import Header from "./components/header/header"
//import ItemListConatainer from "./components/itemListConatainer/itemListContainer"
import ItemCount from "./components/itemCount/ItemCount"
>>>>>>> a85f36e0a8c33533e85c40c49e32eb607b2a990e
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import "./Services/mockAPI"

import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
<<<<<<< HEAD
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={
         <ItemListContainer greeting="Tienda Luffy - Mangas"/>
      }/>
      <Route path="/Mangas/:itemid"element={
        <ItemDetailContainer/>
      }/>
      <Route path="/category/:cat" element={
        <ItemListContainer/>
      }></Route>
    
     </Routes>
     </BrowserRouter>

    
    </div>
  );
=======
    return (
        <div className="App">
            <Nav/>
            <Header/>
            {/*  <ItemListConatainer greeting="Tienda Luffy - Mangas"/> */}
            <ItemDetailContainer/>
            <ItemCount intial={1} stock={4}/>
        </div>
    );

>>>>>>> a85f36e0a8c33533e85c40c49e32eb607b2a990e
}

export default App;
