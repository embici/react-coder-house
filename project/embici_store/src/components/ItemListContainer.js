import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../api/api";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ({greeting='Lorem Ipsum'}) => {
    const [products, setProducts] = useState([]);
    const {categoryName} = useParams();
    //cuando se monte este componente, buscar los productos
    useEffect(()=>{
        //obtener los productos
        console.log('se ejecuta cuando se monta el componente, solo una vez');
        //Ir al backend y obtener un backend
        getProducts().then(data => {
            if(!categoryName){
                setProducts(data);
            }else{
                const itemsByCat = data.filter(item => item.category === categoryName);
                setProducts(itemsByCat);
            }
        });
    }, [categoryName]);

    return(
        <div>
            <h2 className="text-4xl font-medium leading-tight mt-0 mb-2 text-sky-900">{greeting}</h2>
            {products.length > 0 ? <ItemList products={products}/> : <p>Cargando ...</p>}
            <div className="bg-white rounded-lg shadow lg:w-1/3">
                <ul className="divide-y divide-gray-100">
                    <li className="p-3 hover:bg-blue-600 hover:text-blue-200">
                        List Item 1
                    </li>
                    <li className="p-3 hover:bg-blue-600 hover:text-blue-200">
                        List Item 2
                    </li>
                    <li className="p-3 hover:bg-blue-600 hover:text-blue-200">
                        List Item 3
                    </li>
                    <li className="p-3 hover:bg-blue-600 hover:text-blue-200">
                        List Item 4
                    </li>
                </ul>
            </div> 
            <div className="container flex flex-row">
                <ItemCount stock="4"></ItemCount>
            </div>
        </div>
    );
}

export default ItemListContainer;