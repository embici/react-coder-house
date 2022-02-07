import { useEffect } from "react";
import Item from "./Item";


const ItemList = ({products}) => {
    useEffect(()=>{                                                                                                                                                             
        console.log(products)
    },[products]);
    return (
        <div className="-m-2 flex flex-wrap w-11/12 container mx-auto flex-col md:flex-row">
            {
                products.map(product => { 
                    return (
                        <Item key={product.id} item={product}/>
                    )
                })
            }
        </div>
    )
}

export default ItemList;