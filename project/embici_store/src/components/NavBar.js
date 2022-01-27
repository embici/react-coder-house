import React from "react";
import {ReactComponent as Logo} from '../bike-logo.svg'
import CartWidget from './CartWidget';

export default function Menu({children}) {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-sky-900 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Logo className="fill-current h-8 w-8 mr-2" width="54" height="54"/>
                <span className="font-semibold text-xl tracking-tight">Embici Store</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Bikes
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Accesories
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                    Insurance Plan
                </a>
                </div>
                <CartWidget itemsAmount={5}/>
            </div>
</nav>);
}