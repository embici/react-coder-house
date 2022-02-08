import React, { useEffect, useState } from "react";
import './ItemCount.css';

const ItemCount = (props) => {
    const [count, setCount] = useState(0);
    const disabledReduce = count === 0 ? true : false;
    const disabledAdd = count >= props.stock ? true : false;


    useEffect(()=>{
        (count < 0) ? setCount(0) : setCount(count);
    }, [count]);

    const reduceQty = () =>{
        setCount(count - 1);
    }

    const addQty = () =>{
        setCount(count + 1);
    }
    return(
        <div className="custom-number-input flex flex-col w-1/6 container">
            <label className="w-full text-gray-700 text-sm font-semibold">Item Name
            </label>
            <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button onClick={reduceQty} disabled={disabledReduce} className={`${disabledReduce?'disabled:opacity-50':''} bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none`}>
                    <span className="m-auto text-2xl font-thin">−</span>
                </button>
                <input type="number" className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number"  value={count} onChange={()=>{}}></input>
                <button onClick={addQty} disabled={disabledAdd} className={`${disabledAdd?'disabled:opacity-50':''} bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer`}>
                    <span className="m-auto text-2xl font-thin">+</span>
                </button>
            </div>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full mt-1">
            Add to Cart
            </button>
        </div>
    );
}

export default ItemCount;