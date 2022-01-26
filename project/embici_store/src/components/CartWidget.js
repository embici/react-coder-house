import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CartWidget = ({itemsAmount=0}) => {
    return (
    <div>
        <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
            <span className="pr-1">{itemsAmount}</span>
            <FontAwesomeIcon icon={faShoppingCart} className="pr-1"/>Cart
        </a>
    </div>
    )
}

export default CartWidget;