import logito from '../img/logito.png';
import "./Navbar.css"
import Cart from "../CartWidget/cartwidget"

function Navbar(){
    return(
            <div>
            <h1 className="titulo">Tienda Luffy</h1>
            <picture className="logito">
            <a href="index.html"><img src={logito} alt="" /></a>
            </picture>
            
            <nav className="navbar">
                <ul className="menu">
                <li className="menu-item">
                        <a href="##" className="menu-link">login</a>
                    </li>
                    <li className="menu-item">
                        <a href="l#" className="menu-link">inicio</a>
                    </li>
                    <li className="menu-item">
                        <a href="##" className="menu-link">productos</a>
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