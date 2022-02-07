// 1. Recibir mediante props el producto (o item)
// 2. Mostrar el detalle del producto

import { useEffect, useState } from "react";

const ItemDetail = (props) => {
    const [product, setProduct] = useState({});

    useEffect(() =>{ 
        setProduct(props.product);
    },[props.product]);

    return(
        <section className="container mx-auto flex flex-row">
            <img alt={product.name} className="md:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={product.img}/>
            <div className="md:w-1/2 w-full">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name} </h1>
                <p>USD ${product.price} </p>
                <p>QTY {product.stock} </p>
            </div>
        </section>
    )
}

export default ItemDetail;