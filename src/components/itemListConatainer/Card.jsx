import React from 'react';
import "./card.css"

function Card(props) {
  return (
    <div className='grid'>
    <div className='card'>
      <div>
        <img src="https://place-hold.it/800x600" className='cardImage' alt="card img"></img>
      </div>
      <div className='card-details'>
        <h3>{props.title}</h3>
        <p>{props.descripcion}</p>
        <h4>{props.precio}</h4>
      </div>
      <div>
      <a href="##">ver mas</a>
    </div>
    </div>
    </div>
  )
}
export default Card;