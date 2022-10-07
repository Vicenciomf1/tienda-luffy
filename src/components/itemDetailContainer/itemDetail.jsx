import React from "react";
import "./itemDetail.css"

function itemDetail({items}) {

    /*  let {id, title, img, detail, price} = props   */
 
  
let {id, title, img, detail, price} = items; // Pusiste props, pero en realidad tendrías que poner props.items si quisieras hacerlo de tal manera, te llegaban las props, así que lo único que había que arreglar era esta desestructuración. El resto es estilizarlo con CSS, espero te ayude
    return (
        <div>
            <h2 className="">{title}</h2>
            <div className="card">
                <div className="container">
                    <h3>{id}</h3>
                    <img src={img} className="imgDetail" alt={img}/>
                </div>
            </div>
            <div>
                <p className="cardDetails">{detail}</p>
                <p className="priceCard">${price}</p>

            </div>
        </div>
    );
}

export default itemDetail;
