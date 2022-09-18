import React, {useState} from 'react'

function ItemCount(props) {
const [count, setCount]= useState(1)
console.log("stock:", props.stock);
function handleAdd(){
    if (count < props.stock) {
        setCount(count+1);
        
    }
   
}  
function handleSubstract(){
    if (count > 0) {
        setCount(count-1);    
    }
    
}

return (
    <div>
        <div>
        <button onClick={handleAdd}>+</button>
        <span>{count}</span>
        <button onClick={handleSubstract}>-</button>
    </div>
    <button>Agregar al carrito</button>
    </div>
  );
}


export default ItemCount;