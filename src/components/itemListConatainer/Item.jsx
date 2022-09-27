import React from 'react';
import "./Item.css"

/* function Card({price,title,category}){} */

function Item({items}) {
  return(
    
    <div className='grid'>
    <div className='card'>
      <div>
        <img src="https://place-hold.it/800x600" className='cardImage' alt="card img"></img>
      </div>
      <div className='card-details'>
        <h2>{items.id}</h2>
        <p>{items.title}</p>
        <p>{items.detail}</p>
        <p>{items.price}</p>
      </div>
      <div>
      <a href="##">ver mas</a>
    </div>
    </div>
    </div>
  )
}
export default Item;
