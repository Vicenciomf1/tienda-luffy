import ItemDetail from './itemDetail'
import React, {useState, useEffect} from 'react';
import {getSingleItem} from '../../Services/mockAPI'
import {useParams} from "react-router-dom"

function ItemDetailContainer() {
let [items, setItems]= useState({});

const { itemid }= useParams()    
  
useEffect(()=>{
     getSingleItem(itemid).then((respuesta) => setItems(respuesta))
  },[itemid]);
    return(
        <div>
           
          
          <ItemDetail items={items} /> 
          
            
            
            {/* <div className='card'>
            <h1>{items.id}</h1>
             <h2>{items.title}</h2>
              <img src="{items.img}" alt="{items.img}" />
               <p>{items.detail}</p>
                <p>{items.price}</p>
                </div> */}
          </div> 
    )
    }   
    
   

  
//)

export default ItemDetailContainer;
