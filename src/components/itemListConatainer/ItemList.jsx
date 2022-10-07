import Item from './Item'
import React, {useState, useEffect} from 'react';
<<<<<<< HEAD
import getItems, { getItemsByCategory } from '../../Services/mockAPI'
//import itemListContainer from './itemListContainer';
import {useParams} from "react-router-dom"
=======
import getItems from '../../Services/mockAPI'
//import itemListContainer from './itemListContainer';
>>>>>>> a85f36e0a8c33533e85c40c49e32eb607b2a990e

function ItemList(item) {
    const [cosas, setCosas]= useState([]);

    const {cat}= useParams()

    useEffect(()=>{
    if(cat === undefined){
      getItems().then((respuesta)=>setCosas(respuesta))
    }
    else{
      getItemsByCategory(cat).then((respuesta)=>setCosas(respuesta))
    }
  },[cat])
return(
    <>
        {
            cosas.map((items)=>{
              return<Item items={items}/>
                /*   return<Item key ={item.id} data={item}/> */
})
}
    </> 
)
}       

 
//)

export default ItemList;

