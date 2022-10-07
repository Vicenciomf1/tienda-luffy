import ItemDetail from './itemDetail';
import React, {useState, useEffect} from 'react';
import {getSingleItem} from '../../Services/mockAPI'
import {useParams} from "react-router-dom"

function ItemDetailContainer() {
let [items, setItems]= useState({});

const { id }= useParams()    
  
useEffect(()=>{
     getSingleItem(id).then((respuesta) => setItems(respuesta))
  },[id]);
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
    
   

import {getSingleItem} from '../../Services/mockAPI';
import {useParams} from "react-router-dom";

function ItemDetailContainer() {
    let [items, setItems] = useState({});
    const {id} = useParams();

    useEffect(() => {
        getSingleItem(id).then((respuesta) => setItems(respuesta));
    }, [id]); //Debes volver a montar el componente cada vez que cambie el id, o sólo te funcionará bien el fetch una vez


    return (
        <div>
            <ItemDetail items={items}/>
        </div>
    );
}

export default ItemDetailContainer;
