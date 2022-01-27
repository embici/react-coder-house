import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting='Lorem Ipsum'}) => {
    return(
        <div>
            <h2 className="text-4xl font-medium leading-tight mt-0 mb-2 text-blue-600">{greeting}</h2>
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
            <ItemCount></ItemCount>
        </div>
    );
}

export default ItemListContainer;