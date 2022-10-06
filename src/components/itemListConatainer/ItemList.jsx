import Item from './Item'
import React, {useState, useEffect} from 'react';
import getItems, { getItemsByCategory } from '../../Services/mockAPI'
//import itemListContainer from './itemListContainer';
import {useParams} from "react-router-dom"

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
            cosas.map((item)=>{
                return<Item item={item}/>
                /*   return<Item key ={item.id} data={item}/> */
})
}
    </> 
)
}       

 
//)

export default ItemList;

