import React from "react";

const ItemListContainer = ({greeting='Lorem Ipsum'}) => {
    return(
        <div>
            <h2 class="text-4xl font-medium leading-tight mt-0 mb-2 text-blue-600">{greeting}</h2>
            <div class="bg-white rounded-lg shadow lg:w-1/3">
                <ul class="divide-y divide-gray-100">
                    <li class="p-3 hover:bg-blue-600 hover:text-blue-200">
                        List Item 1
                    </li>
                    <li class="p-3 hover:bg-blue-600 hover:text-blue-200">
                        List Item 2
                    </li>
                    <li class="p-3 hover:bg-blue-600 hover:text-blue-200">
                        List Item 3
                    </li>
                    <li class="p-3 hover:bg-blue-600 hover:text-blue-200">
                        List Item 4
                    </li>
                </ul>
            </div> 
        </div>
    );
}

export default ItemListContainer;