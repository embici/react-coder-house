// 1. Ir a buscar con el getItems la lista de productos
// 2. Filtrar un producto (elegir cualquiera)
// 3. Guardar en un estado propio ese producto
// 4. Pasarle ese producto al componente ItemDetail.js

import { useEffect, useState } from "react";
import { getProducts } from "../api/api";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() =>{ 
        getProducts().then(data => setItems(data));
    },[]);
    return(
        <div className="">
            {items.length > 0 ? <ItemDetail product={items.filter(product => product.name === "Remera verde")}/>: <p>Cargando ...</p>}
        </div>
    )
}

export default ItemDetailContainer;