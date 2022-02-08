// 1. Recibir mediante props el producto (o item)
// 2. Mostrar el detalle del producto

import { useEffect, useState } from "react";

const ItemDetail = ({product}) => {
    const [detailProduct, setDetailProduct] = useState([]);

    useEffect(() =>{ 
        setDetailProduct(product);
        console.log('Product Detailed ----->>>> ', product);
    }, [product]);

    return(
        <section className="">
            <div key={detailProduct.id} className="container mx-auto flex flex-wrap">
                            <img alt={detailProduct.name} className="md:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={detailProduct.img} />
                            <div className="md:w-1/2 w-full px-5">
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{detailProduct.name} </h1>
                                <p>USD ${detailProduct.price} </p>
                                <p>QTY {detailProduct.stock} </p>
                            </div>
                        </div>
        </section>
    )
}

export default ItemDetail;