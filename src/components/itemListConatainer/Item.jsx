import React from 'react';
import "./Item.css"
import {Link} from "react-router-dom"

/* function Card({price,title,category}){} */

function Item({items}) {
  //let {id, title, category, img, detail, price} = items
  return(
    
    <div className='grid'>
    <div className='card'>
      {/* <div>
        <img src="https://place-hold.it/800x600" className='cardImage' alt="card img"></img>
      </div> */}
      <div className='card-details'>
        <h2>{items.id}</h2> 
        <h3>{items.title}</h3>
        <p>{items.category}</p>
        <img src={items.img} alt={items.img} />
        <p>{items.detail}</p>
        <p>{items.price}</p>
      </div>
      <div>
      <Link to={`/product/${items.id}`}>ver mas</Link>
    </div>
    </div>
    </div>
    
  )
}
export default Item;
