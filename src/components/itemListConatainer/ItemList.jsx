import Item from './Item'
import React, {useState, useEffect} from 'react';
import getItems from '../../Services/mockAPI'
//import itemListContainer from './itemListContainer';

function ItemList(item) {
    const [cosas, setCosas]= useState([]);
    useEffect(
      ()=>{
   getItems().then(
    (respuesta)=>{
    console.log("press");
      setCosas(respuesta)
    }
    )
    },
    []
  )
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
