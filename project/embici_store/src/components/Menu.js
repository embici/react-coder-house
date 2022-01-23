import React from "react";
import './Menu.css';

// const customStyles = {
//     backgroundColor: 'red'
// }
export default function Menu() {
    return (
        <div>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <ul className="second-menu">
                <li style={{backgroundColor: 'red'}}>Item A</li>
                <li id='my-special-item'>Item B</li>
            </ul>
        </div>);
}