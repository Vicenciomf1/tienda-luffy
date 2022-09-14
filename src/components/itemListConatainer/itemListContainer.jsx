import React from 'react';
import Card from './Card'

function itemListContainer(props) {
  return( 
    <div>
        <h1>{props.greeting}</h1>
        <div className='main-container'>
        <Card title= "Mangaca de devilMan" descripcion= "lorem lipsum" precio="1500"/>
        <Card title= "Naruto Gaiden"/>
        <Card title= "Dr Slump"/>

        </div>
      </div>
  )
}

export default itemListContainer;