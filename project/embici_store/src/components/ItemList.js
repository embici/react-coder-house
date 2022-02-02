import { useEffect } from "react";
import Item from "./Item";


const ItemList = ({products}) => {
    useEffect(()=>{                                                                                                                                                             
        console.log(products)
    },[products]);
    return (
        <div>
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