import React from 'react';
import "./Item.css"
import {Link} from "react-router-dom"
<<<<<<< HEAD

/* function Card({price,title,category}){} */

function Item({items}) {
  //let {id, title, category, img, detail, price} = items
=======
/* function Card({price,title,category}){} */

function Item({items}) {
/*  let {id, title, img, detail, price} = {items}    */
>>>>>>> a85f36e0a8c33533e85c40c49e32eb607b2a990e
  return(
    
    <div className='grid'>
    <div className='card'>
      {/* <div>
        <img src="https://place-hold.it/800x600" className='cardImage' alt="card img"></img>
      </div> */}
      <div className='card-details'>
<<<<<<< HEAD
        <h2>{items.id}</h2> 
        <h3>{items.title}</h3>
        <p>{items.category}</p>
=======
        {/* <h2>{items.id}</h2> */}
        <p>{items.title}</p>
>>>>>>> a85f36e0a8c33533e85c40c49e32eb607b2a990e
        <img src={items.img} alt={items.img} />
        <p>{items.detail}</p>
        <p>{items.price}</p>
      </div>
      <div>
<<<<<<< HEAD
      <Link to={`/product/${items.id}`}>ver mas</Link>
=======
      <Link to={`/Mangas/${items.id}`}>
        <button>ver mas</button>
        </Link>
>>>>>>> a85f36e0a8c33533e85c40c49e32eb607b2a990e
    </div>
    </div>
    </div>
    
  )
}
export default Item;
