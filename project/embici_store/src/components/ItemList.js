import { useEffect } from "react";
import Item from "./Item";


const ItemList = ({products}) => {
    useEffect(()=>{                                                                                                                                                             
        console.log(products)
    },[products]);
    return (
        <div className="flex flex-col space-y-3 md:space-x-3 md:flex-row">
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