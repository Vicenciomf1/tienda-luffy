import React from 'react';
import "./Item.css"

/* function Card({price,title,category}){} */

function Item({item}) {
  return(
    
    <div className='grid'>
    <div className='card'>
      <div>
        <img src="https://place-hold.it/800x600" className='cardImage' alt="card img"></img>
      </div>
      <div className='card-details'>
        <h2>{item.id}</h2>
        <p>{item.title}</p>
        <p>{item.detail}</p>
        <p>{item.price}</p>
      </div>
      <div>
      <a href="##">ver mas</a>
    </div>
    </div>
    </div>
  )
}
export default Item;
