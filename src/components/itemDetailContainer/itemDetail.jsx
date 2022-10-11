import React from "react";
import "./itemDetail.css"
function itemDetail(props) {
    let {id, title, img, detail, price} = props
   
    return(
        <div>
            
            <h2 className="">{title}</h2>
        <div className="card">
            <div className="container">
            <h3>{id}</h3>
            <img src={img} className="imgDetail" alt={img} />
            </div>
            </div>
            <div>
            <p className="cardDetails">{detail}</p>
            <p className="priceCard">${price}</p>
            </div>
           </div>
        
        
            
        
    )
}
    

export default itemDetail;