import ItemDetail from './itemDetail';
import React, {useState, useEffect} from 'react';
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
