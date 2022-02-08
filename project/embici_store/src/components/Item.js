import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="m-2 flex flex-col items-center w-full bg-white rounded-lg border shadow-md md:flex-col md:w-2/5 hover:bg-gray-100 dark:border-gray-200 dark:bg-gray-100 dark:hover:bg-gray-200">
            <Link to={`/item/${item.id}`}>
                <img className="object-cover w-full h-96 rounded-t-lg md:h-96 md:w-full md:rounded-none md:rounded-t-lg" src={item.img} alt=""/>
                <div className="flex flex-col w-full p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">{item.name}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">USD ${item.price}</p>
                </div>
            </Link>
        </div>
    )
}

export default Item;