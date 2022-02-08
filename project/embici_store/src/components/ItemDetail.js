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
            {
                detailProduct.map(productItem => { 
                    return (
                        (<div key={productItem.id} className="container mx-auto flex flex-wrap">
                            <img alt={productItem.name} className="md:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={productItem.img} />
                            <div className="md:w-1/2 w-full px-5">
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{productItem.name} </h1>
                                <p>USD ${productItem.price} </p>
                                <p>QTY {productItem.stock} </p>
                            </div>
                        </div>)
                    )
                })
                
            // product.length > 0 ? (<><img alt={product.name} className="md:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={product.img} /><div className="md:w-1/2 w-full">
            //     <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name} </h1>
            //     <p>USD ${product.price} </p>
            //     <p>QTY {product.stock} </p>
            // </div></>) : <p>Cargando ...</p>}
            }           
        </section>
    )
}

export default ItemDetail;