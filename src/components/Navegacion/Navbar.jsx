import logito from '../img/logito.png';
import "./Navbar.css"
import Cart from "../CartWidget/cartwidget"
import {Link} from "react-router-dom"

function Navbar(){
    return(
            <div>
            <h1 className="titulo">Tienda Luffy</h1>
            <picture className="logito">
            <Link to="/"><img src={logito} alt="" /></Link>
            </picture>
            
            <nav className="navbar">
                <ul className="menu">
                <li className="menu-item">
                        <a href="##" className="menu-link">login</a>
                    </li>
                    <li className="menu-item">
                        <a href="/items" className="menu-link">inicio</a>
                    </li>
                    <li className="menu-item">
                        <Link to="/" className="menu-link">productos</Link>
                    </li>
                    <li className="menu-item">
                        <a href="##" className="menu-link">quienes somos?</a>
                    </li>
                    <li className="menu-item">
                        <a href="##" className="menu-link">carrito</a>
                    </li>
                    <li className='menu-item'>
                        <Cart/>
                    </li>
                </ul>
                

            </nav>
        </div>
    )
}

export default Navbar;