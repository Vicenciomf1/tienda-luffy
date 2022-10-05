import React from "react";
import "./itemDetail.css"

function itemDetail({items}) {
    /*  let {id, title, img, detail, price} = props   */
 
  
   
    return(
        <div>
            
            <h2 className="">{items.title}</h2>
        <div className="card">
            <div className="container">
            <h3>{items.id}</h3>
            <img src={items.img} className="imgDetail" alt={items.img} />
            </div>
            </div>
            <div>
            <p className="cardDetails">{items.detail}</p>
            <p className="priceCard">${items.price}</p>
            </div>
           </div>
        
        
            
        
    )
}
    

export default itemDetail;