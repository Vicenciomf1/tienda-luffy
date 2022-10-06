//import logo from './logo.svg';import './App.css';
import Nav from"./components/Navegacion/Navbar";
import Header from"./components/header/header"
import ItemListContainer from "./components/itemListConatainer/itemListContainer"
//import ItemCount from "./components/itemCount/ItemCount"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import "./Services/mockAPI" 

import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
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
}

export default App;
