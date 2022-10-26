import React from "react";
import "./itemDetail.css"
import ItemCount from "../itemCount/ItemCount"
//import FlexWrapper from "../"

function itemDetail(props) {

    /*  let {id, title, img, detail, price} = props   */
 
  
let {id, title, img, detail, price} = props; // Pusiste props, pero en realidad tendrías que poner props.items si quisieras hacerlo de tal manera, te llegaban las props, así que lo único que había que arreglar era esta desestructuración. El resto es estilizarlo con CSS, espero te ayude

function handleToCart(count){
    alert(`agregar carrito ${count}`)
}

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
                <ItemCount stock={5} onAddToCart={handleToCart}></ItemCount>

            </div>
        </div>
    );
}

export default itemDetail;
