import ItemDetail from './itemDetail';
import React, {useState, useEffect} from 'react';
import {getSingleItem} from '../../Services/mockAPI';
import {useParams} from "react-router-dom";

function ItemDetailContainer() {
    let [items, setItems] = useState({});
    

const { itemid }= useParams()    
  
useEffect(()=>{
     getSingleItem(itemid).then((respuesta) => setItems(respuesta))
  },[itemid]);
    return(
        <div>
            <ItemDetail items={items}/>
        </div>
    );
}

export default ItemDetailContainer; 