import React from "react";
import {ReactComponent as Logo} from '../bike-logo.svg'
import CartWidget from './CartWidget';

export default function Menu({children}) {
    return (
        <nav class="flex items-center justify-between flex-wrap bg-sky-900 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <Logo class="fill-current h-8 w-8 mr-2" width="54" height="54"/>
                <span class="font-semibold text-xl tracking-tight">Embici Store</span>
            </div>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Bikes
                </a>
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Accesories
                </a>
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                    Insurance Plan
                </a>
                </div>
                <CartWidget itemsAmount={5}/>
            </div>
</nav>);
}