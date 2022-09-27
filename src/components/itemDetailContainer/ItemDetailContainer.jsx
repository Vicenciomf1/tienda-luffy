import React, {useState, useEffect} from 'react';
import ItemDetail from './itemDetail'
import {getSingleItem} from '../../Services/mockAPI'


function ItemDetailContainer(item) {
        let [items, setItems]= useState({});
    
    useEffect(()=>{
       getSingleItem().then((respuesta) => setItems(respuesta))
    },[]);
    
    return(
        <div>
          {
             items.find((items)=>{
                return<ItemDetail 
                id={items.id} 
                detail={items.detail} 
                price={items.price}/>
             })
            
          }
         
          
        </div> 
    )
    }   
    
   

  
//)

export default ItemDetailContainer;
