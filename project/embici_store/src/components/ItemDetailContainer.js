// 1. Ir a buscar con el getItems la lista de productos
// 2. Filtrar un producto (elegir cualquiera)
// 3. Guardar en un estado propio ese producto
// 4. Pasarle ese producto al componente ItemDetail.js

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../api/api";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    // useParams Hook react-router-dom --> obtiene parametros de la URL
    // productId viene del URL
    const {productId} = useParams();

    useEffect(() =>{ 
        getProducts().then(data => {
            const currentItem = data.find(i  => i.id === productId); 
            setItem(currentItem);
        });
    },[productId]);
    return(
        <div className="">
            {!item ? <p>Cargando producto...</p> : <ItemDetail product={item}/>}
        </div>
    )
}

export default ItemDetailContainer;