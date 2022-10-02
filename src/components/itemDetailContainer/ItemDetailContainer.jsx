import ItemDetail from './itemDetail'
import React, {useState, useEffect} from 'react';
import {getSingleItem} from '../../Services/mockAPI'

function ItemDetailContainer() {

  let [items, setItems]= useState({});
    
  useEffect(()=>{
     getSingleItem().then((respuesta) => setItems(respuesta))
  },[items]);
    return(
        <div>
          {
             <ItemDetail id={items.id} title={items.title} img={items.img} detail={items.detail} price={items.price} />
             
            
          }
         
          
        </div> 
    )
    }   
    
   

  
//)

export default ItemDetailContainer;
